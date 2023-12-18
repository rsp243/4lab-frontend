import { useState, useRef } from "react";

import { drawIsHitPoint } from '../../Pages/src/js/canvas_points'

export default function ({ rValue, isCorrectR }) {
    const [canvasCounter, setCanvasCounter] = useState(0)
    const [canvases, setCanvases] = useState([])
    const ref = useRef(null);

    function addNewPoint(event) {
        if (!isCorrectR) {
            return;
        }

        const canvas = ref.current;
        const rect = canvas.getBoundingClientRect();
        const xValuePX = event.clientX - rect.left - canvas.width / 2;
        const yValuePX = (event.clientY - rect.top - canvas.height / 2) * -1;
        const rValueNum = parseFloat(rValue.name)

        console.log(rValueNum)

        const xValue = xValuePX / (canvas.width / 3) * rValueNum
        const yValue = yValuePX / (canvas.height / 3) * rValueNum

        console.log(xValue, yValue)

        setCanvasCounter(canvasCounter + 1);
        let newCanvasId = "canvas" + canvasCounter;
        setCanvases(canvases => (
            [...canvases, <canvas key={newCanvasId} id={newCanvasId} className="addedCanvas" width="300" height="300"></canvas>]
        ))
        console.log("Ended")
        // axios.post(`http://localhost:8080/api/v1/point/add`, data)
        // 	.then(res => {
        // 		console.log(res.status);
        // 		console.log(res.data);
        // 		setResults(results => (
        // 			[...results, res.data]
        // 		))
        // 		msgs.current.show([
        // 			{ sticky: false, life: 2000, severity: 'success', summary: 'Success', detail: 'Successfully Thrown', closable: false },
        // 		])
        // 	})
        // 	.catch(function (error) {
        // 		let myError = "";
        // 		if (error.response) {
        // 			// The request was made and the server responded with a status code
        // 			// that falls out of the range of 2xx
        // 			console.log(error.response.data);
        // 			myError = error.response.data.message
        // 		} else {
        // 			// Something happened in setting up the request that triggered an Error
        // 			console.log('Error', error.message);
        // 			myError = "An error during request setting up has happened"
        // 		}
        // 		msgs.current.show([
        // 			{ severity: 'error', life: 5000, summary: 'Error', detail: myError, sticky: false, closable: false }
        // 		]);
        // 	});

        setCanvasCounter(canvasCounter - 1);

        drawIsHitPoint(xValue, yValue, rValueNum, true, "canvas", newCanvasId)
        // setTimeout(setCanvases([]))
        console.log("CLOSED")
    }

    return (
        <div className="canvas-container mt-5">
            <canvas ref={ref} id="canvas" width="300" height="300" onClick={(e) => { addNewPoint(e) }}></canvas>
            {canvases}
        </div>
    );
}