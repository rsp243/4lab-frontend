import PropTypes from 'prop-types';

import { useState } from 'react';
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

export default function YSelector({selectedY, setSelectedY}) {
    return (
        <div className="card flex justify-content-center my-3">
            <div className="w-14rem">
                <InputText value={selectedY} onChange={(e) => setSelectedY(e.target.value)} className="w-full"
                    step={0.1} min={-3} max={5} />
                <Slider value={selectedY} onChange={(e) => setSelectedY(e.value)} className="w-full"
                    step={0.1} min={-3} max={5} />
            </div>
        </div>
    );
}

YSelector.propTypes = {
    setSelectedY: PropTypes.func.isRequired,
};
