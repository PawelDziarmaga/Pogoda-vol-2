import React, { useEffect, useState } from "react";
import Input from "./Input";
import Info from "./Info";

const API = "https://danepubliczne.imgw.pl/api/data/synop";

function Form() {
	const [city, setCity] = useState("");
	const [dataAPI, setDataAPI] = useState([]);
	const [selectedCity, setSelectedCity] = useState("");

	//The function assigns the selected city from the input to the variable "city"
	const chandleChange = (e) => {
		const cityInput = e.target.value;
		setCity(cityInput);
	};

	const chandleClick = (e) => {
		e.preventDefault();

		//Finds a given record in the API on the name assigned to the "city" variable.
		let x = dataAPI.filter((item) => item.stacja === city);

		//Assigns all information to the "selectedCity" variable
		setSelectedCity(x[0]);

		//Clearing the input window
		const inputElement = document.getElementById("city-input");
		inputElement.value = "";
	};

	useEffect(() => {
		fetch(API)
			.then((res) => {
				if (res.ok) {
					return res;
				}
				throw Error(res.status);
			})
			.then((res) => res.json())
			.then((data) => {
				setDataAPI(data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<form className='form'>
			<Input click={chandleClick} change={chandleChange} data={dataAPI} />

			{selectedCity ? <Info choosenCity={selectedCity} /> : null}
		</form>
	);
}

export default Form;
