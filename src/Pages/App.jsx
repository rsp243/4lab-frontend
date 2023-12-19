import axios from "axios";
import PropTypes from 'prop-types';
import { Messages } from 'primereact/messages';
import { useState, useRef, useEffect } from 'react';

import ButtonBlock from '../components/App/ActionButtonBlock';
import Canvas from '../components/App/Canvas';
import Selectors from '../components/App/GraphicValues/Selectors';
import ResultTable from '../components/App/ResultTable';

import './src/css/App.css';
import './src/js/canvas';
import React from 'react';
import { drawIsHitPoint, drawPoint } from './src/js/canvas_points'
import { drawBeginnigGraph } from "./src/js/canvas"
import fissureSrc from './src/img/fissure.png';

export default function App({ getToken }) {
	const [xValue, setXValue] = useState()
	const [yValue, setYValue] = useState()
	const [rValue, setRValue] = useState()
	const [isCorrectX, setIsCorrectX] = useState();
	const [isCorrectY, setIsCorrectY] = useState();
	const [isCorrectR, setIsCorrectR] = useState();

	const msgs = useRef(null);
	const [results, setResults] = useState([]);

	useEffect(() => {
		axios.post(`http://localhost:8080/api/v1/point/getAll`, { token: getToken() })
			.then(res => {
				console.log(res.status);
				console.log(res.data);
				setResults(res.data);
				for (let i = 0; i < res.data.length; i++) {
					let point = res.data[i];
					drawPoint(
						point.x,
						point.y,
						point.r, false, 
						fissureSrc,
						0,
						"canvas",
						false)
				}
			})
			.catch(function (error) {
				let myError = "";
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.log(error.response.data);
					myError = error.response.data.message
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
					myError = "An error during request setting up has happened"
				}
				msgs.current.show([
					{ severity: 'error', life: 5000, summary: 'Error', detail: myError, sticky: false, closable: false }
				]);
			})
	}, [msgs])

	const handleThrowClick = async e => {
		e.preventDefault();

		if (yValue < -3 || yValue > 5) {
			setIsCorrectY(false)
			setYValue(-3)
		}

		if (!(isCorrectX && isCorrectY && isCorrectR)) {
			msgs.current.show([
				{ sticky: false, life: 5000, severity: 'error', summary: 'Error', detail: 'You chose invalid values in selectors. Fix all error messages', closable: false },
			])
			return;
		}

		let data = {
			x: parseFloat(xValue.name),
			y: parseFloat(yValue),
			r: parseFloat(rValue.name),
			token: getToken()
		}

		axios.post(`http://localhost:8080/api/v1/point/add`, data)
			.then(res => {
				console.log(res.status);
				console.log(res.data);

				let point = res.data

				let isHitBool = true
				if (point.isHit == "MISS") {
					isHitBool = false
				}
				drawIsHitPoint(
					point.x,
					point.y,
					point.r,
					isHitBool,
					"canvas", "canvas1")

				setResults(results => (
					[...results, res.data]
				))

				msgs.current.show([
					{ sticky: false, life: 2000, severity: 'success', summary: 'Success', detail: 'Successfully Thrown', closable: false },
				])
			})
			.catch(function (error) {
				let myError = "";
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.log(error.response.data);
					myError = error.response.data.message
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
					myError = "An error during request setting up has happened"
				}
				msgs.current.show([
					{ severity: 'error', life: 5000, summary: 'Error', detail: myError, sticky: false, closable: false }
				]);
			});
	}

	const handleAnotherAttemptClick = async e => {
		e.preventDefault();

		let data = {
			token: getToken()
		}

		axios.post(`http://localhost:8080/api/v1/point/delete`, data)
			.then(res => {
				console.log(res.status);
				console.log(res.data);
				setResults([])
				drawBeginnigGraph("canvas")

				msgs.current.show([
					{ sticky: false, life: 2000, severity: 'success', summary: 'Success', detail: res.data.message, closable: false },
				])
			})
			.catch(function (error) {
				let myError = "";
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.log(error.response.data);
					myError = error.response.data.message
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
					myError = "An error during request setting up has happened"
				}
				msgs.current.show([
					{ severity: 'error', life: 5000, summary: 'Error', detail: myError, sticky: false, closable: false }
				]);
			});
	}

	return (
		<div className="App">
			<div className="card flex flex-column justify-content-center align-items-center">
				<Canvas rValue={rValue} isCorrectR={isCorrectR} setResults={setResults} />
				<Selectors
					xValue={xValue} setXValue={setXValue} isCorrectX={isCorrectX} setIsCorrectX={setIsCorrectX}
					yValue={yValue} setYValue={setYValue} isCorrectY={isCorrectY} setIsCorrectY={setIsCorrectY}
					rValue={rValue} setRValue={setRValue} isCorrectR={isCorrectR} setIsCorrectR={setIsCorrectR}
				/>
				<ButtonBlock
					handleThrowClick={handleThrowClick}
					handleAnotherAttemptClick={handleAnotherAttemptClick} />
				<Messages ref={msgs} />
			</div>
			<ResultTable results={results} />
			<div style={{"height": "50px"}}></div>
		</div>
	);
}

App.propTypes = {
	getToken: PropTypes.func.isRequired
};
