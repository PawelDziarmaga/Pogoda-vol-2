function Info({ choosenCity }) {
	const infoList = [
		["Ciśnienie", "hPa", choosenCity.cisnienie],
		["Suma opadów", "mm", choosenCity.suma_opadu],
		["Temperatura", "°C", choosenCity.temperatura],
		["Wilgotnosc", "%", choosenCity.wilgotnosc_wzgledna],
		["Data pomiaru", "", choosenCity.data_pomiaru],
		["Godzina pomiaru", "", `${choosenCity.godzina_pomiaru}:00`],
	];
	const infoListElements = infoList.map((element) => (
		<li>
			<span className='info-list__name'>{element[0]} - </span>
			<span className='info-list__info'>
				{element[2]} {element[1]}
			</span>
		</li>
	));
	return (
		<div className='info-list'>
			<h2>
				Wybrane miasto: <span>{choosenCity.stacja}</span>
			</h2>
			<ul>{infoListElements}</ul>
		</div>
	);
}

export default Info;
