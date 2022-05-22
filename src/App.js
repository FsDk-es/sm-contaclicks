import './App.css';
import freeCodeCampLogo from './logo/fcc_primary_large.svg';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';

function App() {
	const manejarClick = () => {
		console.log('Click');
	};
	const reiniciarContador = () => {
		console.log('Reiniciar');
	};
	return (
		<div className="App">
			<div className="freecodecamp-logo-contenedor">
				<img
					className="freecodecamp-logo"
					src={freeCodeCampLogo}
					alt="Logo de freeCodeCamp"
					description="La imagen del logo jeje"
				/>
			</div>
			<div className="contenedor-principal">
				<Contador />
				<Boton
					texto="Click"
					esBotonDeClick={true}
					manejarClick={manejarClick}
				/>
				<Boton
					texto="Reiniciar"
					esBotonDeClick={false}
					manejarClick={reiniciarContador}
				/>
			</div>
		</div>
	);
}

export default App;
