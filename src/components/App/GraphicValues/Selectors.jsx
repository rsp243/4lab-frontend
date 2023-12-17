import PropTypes from 'prop-types';

import RSelector from "./RSelector";
import XSelector from "./XSelector";
import YSelector from "./YSelector";

export default function Selectors({xValue, setXValue, yValue, setYValue, rValue, setRValue}) {
    return (
        <>
            <XSelector selectedX={xValue} setSelectedX={setXValue} />
            <YSelector selectedY={yValue} setSelectedY={setYValue} />
            <RSelector selectedR={rValue} setSelectedR={setRValue} />
        </>
    );
}

Selectors.propTypes = {
    setXValue: PropTypes.func.isRequired,
    setYValue: PropTypes.func.isRequired,
    setRValue: PropTypes.func.isRequired
};
