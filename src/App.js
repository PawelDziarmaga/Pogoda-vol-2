import Form from "./layouts/Form";

/*link do API https://danepubliczne.imgw.pl/api/data/synop */
/*https://danepubliczne.imgw.pl/apiinfo*/
const APIInfo =
	"Źródłem pochodzenia danych jest Instytut Meteorologii i Gospodarki Wodnej – Państwowy Instytut Badawczy";

function App() {
	return (
		<div className='app'>
			<div className='app__bg'></div>
			<div className='app__content'>
				<h1 className='app__header'>Sprawdz pogodę</h1>
				<Form />
				<h4 className='app__info'>{APIInfo}</h4>
			</div>
		</div>
	);
}

export default App;
