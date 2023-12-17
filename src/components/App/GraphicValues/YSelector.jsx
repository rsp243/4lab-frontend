import PropTypes from 'prop-types';

import { useState } from 'react';
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";
import { Message } from 'primereact/message';

export default function YSelector({ selectedY, setSelectedY, isCorrectY, setIsCorrectY }) {
    let minValue = -3
    let maxValue = 5
    function handleChange(e) {
        if (!(minValue <= e <= maxValue)) {
            setIsCorrectY(false)
        } else {
            setIsCorrectY(true)
        }
    }

    return (
        <>
            <div className="card flex justify-content-center my-3">
                <div className="w-14rem">
                    <InputText
                        value={selectedY}
                        onChange={(e) => {
                            setSelectedY(e.target.value)
                            handleChange(e.target.value)
                        }}
                        placeholder="Select Y value"
                        className="w-full"
                        step={0.1}
                        min={minValue}
                        max={maxValue} />
                    <Slider
                        value={selectedY}
                        onChange={(e) => {
                            setSelectedY(e.value)
                            handleChange(e.value)
                        }}
                        className="w-full"
                        step={0.1}
                        min={minValue}
                        max={maxValue} />
                </div>
            </div>
            {
                !isCorrectY &&
                <Message className='mb-2' severity="error" text="Passed Y don't belong availible values. Min = '-3', Max = '5" />
            }
        </>
    );
}

YSelector.propTypes = {
    setSelectedY: PropTypes.func.isRequired,
};
