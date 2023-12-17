import PropTypes from 'prop-types';

import { Dropdown } from 'primereact/dropdown';

export default function XSelector({selectedX, setSelectedX}) {
	const values = [
		{ name: '-2.0' },
		{ name: '-1.5' },
		{ name: '-1.0' },
		{ name: '-0.5' },
		{ name: '0.0' },
		{ name: '0.5' },
		{ name: '1.0' },
		{ name: '1.5' },
		{ name: '2.0' },
	];

    return (
        <div className="card my-2">
            <Dropdown value={selectedX} onChange={(e) => setSelectedX(e.value)} options={values} optionLabel="name"
                placeholder="Select X value" className="w-full md:w-14rem" />
        </div>
    );
}

XSelector.propTypes = {
    setSelectedX: PropTypes.func.isRequired,
};
