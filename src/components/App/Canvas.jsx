import { useState, useRef } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

import { Messages } from 'primereact/messages';

import { getToken } from '../Authorization/token'
import { drawIsHitPoint } from '../../Pages/src/js/canvas_points'

export default function Canvas({ rValue, isCorrectR, setResults }) {
    const [canvases, setCanvases] = useState([])
    const ref = useRef(null);
    let canvasCounter = 0
	const msgs = useRef(null);

    function addNewPoint(event) {
        if (!isCorrectR) {
            return;
        }
        canvasCounter++;
        const canvas = ref.current;
        const rect = canvas.getBoundingClientRect();
        const xValuePX = event.clientX - rect.left - canvas.width / 2;
        const yValuePX = (event.clientY - rect.top - canvas.height / 2) * -1;
        const rValueNum = parseFloat(rValue.name)

        const xValue = xValuePX / (canvas.width / 3) * rValueNum
        const yValue = yValuePX / (canvas.height / 3) * rValueNum

        let newCanvasId = canvas.id +  "canvas" + canvasCounter;
        
		let data = {
			x: xValue,
			y: yValue,
			r: rValueNum,
			token: getToken()
		}
    

        axios.post(`http://localhost:8080/api/v1/point/add`, data)
        	.then(res => {
        		console.log(res.status);
        		console.log(res.data);

                // animating and drawing
                setCanvases(canvases => (
                    [...canvases, <canvas ref={ref} key={newCanvasId} id={newCanvasId} className="addedCanvas" width="300" height="300" onClick={(e) => {addNewPoint(e)}} style={{zIndex: canvasCounter + 1}}></canvas>]
                ))
                drawIsHitPoint(xValue, yValue, rValueNum, true, "canvas", newCanvasId)

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

    return (
        <div className="canvas-container mt-5">
            <canvas
                ref={ref}
                id="canvas"
                width="300"
                height="300"
                onClick={(e) => {
                    addNewPoint(e)
                }}></canvas>
            {canvases}
            <Messages ref={msgs} />
        </div>
    );
}

Canvas.propTypes = {
	setResults: PropTypes.func.isRequired
};
