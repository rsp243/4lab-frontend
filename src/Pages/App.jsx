import './src/css/App.css';

export default function App() {
	return (
		<div className="App">
			This is my App page
		</div>
	);
}

function MyButton({ name }) {
	return (
		<button>{name}, Learn React</button>
	);
}
