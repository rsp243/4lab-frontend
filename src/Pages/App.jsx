import { useState } from 'react';
import ButtonBlock from '../components/App/ActionButtonBlock';
import Canvas from '../components/App/Canvas';
import Selectors from '../components/App/GraphicValues/Selectors';
import ResultTable from '../components/App/ResultTable';

import './src/css/App.css';
import '../canvas';

export default function App() {
	return (
		<div className="App">
			<div className="card flex flex-column justify-content-center align-items-center">
				<Canvas />
				<Selectors />
				<ButtonBlock />
				<ResultTable />
			</div>
		</div>
	);
}
