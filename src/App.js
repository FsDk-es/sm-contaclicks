import './App.css';
import freeCodeCampLogo from './logo/fcc_primary_large.svg';
function App() {
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
		</div>
	);
}

export default App;
