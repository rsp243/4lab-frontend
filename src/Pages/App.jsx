import RSelector from '../components/App/GraphicValues/RSelector';
import XSelector from '../components/App/GraphicValues/XSelector';
import YSelector from '../components/App/GraphicValues/YSelector';
import './src/css/App.css';

export default function App() {
	return (
		<div className="App">
			<XSelector />
			<YSelector />
			<RSelector />
		</div>
	);
}
