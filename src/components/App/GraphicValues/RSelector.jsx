import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

export default function RSelector() {
    const [selectedR, setSelectedR] = useState(null);
	const values = [
		{ name: '-2.0' },
		{ name: '-1.5' },
		{ name: '-1.0' },
		{ name: '-0.5' },
		{ name: '0.5' },
		{ name: '1.0' },
		{ name: '1.5' },
		{ name: '2.0' },
	];

    return (
        <div className="card mt-2 mb-4">
            <Dropdown value={selectedR} onChange={(e) => setSelectedR(e.value)} options={values} optionLabel="name"
                placeholder="Select R value" className="w-full md:w-14rem" />
        </div>
    );
}
