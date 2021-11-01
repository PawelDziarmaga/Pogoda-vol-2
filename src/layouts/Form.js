import React, { useEffect, useState } from "react";
import Input from "./Input";
import Info from "./Info";

const API = "https://danepubliczne.imgw.pl/api/data/synop";

function Form() {
	const [city, setCity] = useState("");
	const [dataAPI, setDataAPI] = useState([]);
	const [selectedCity, setSelectedCity] = useState("");

	const chandleChange = (e) => {
		const cityInput = e.target.value;
		setCity(cityInput);
	};
	const chandleClick = (e) => {
		e.preventDefault();
		let x = dataAPI.filter((item) => item.stacja === city);
		x = x[0];
		setSelectedCity(x);

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
