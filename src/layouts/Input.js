function Input({ data, change, click }) {
	const dataCitys = data.map((item) => item.stacja);
	const option = dataCitys.map((city) => <option value={city} key={city} />);

	return (
		<div className='input'>
			<label htmlFor='city-input'>Wymierz miasto: </label>
			<input
				onChange={change}
				list='city-list'
				id='city-input'
				name='city-input'
			/>

			<datalist id='city-list'>{option}</datalist>
			<button onClick={click}>Wyszukaj</button>
		</div>
	);
}

export default Input;
