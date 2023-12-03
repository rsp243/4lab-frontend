import { Button } from 'primereact/button';

export default function ButtonBlock() {
    return (
        <div className="card mb-6">
            <Button className="mx-3" label="Throw An Axe" icon="pi pi-check" iconPos="right" />
            <Button className="mx-3" label="Start Another Attempt" icon="pi pi-refresh" iconPos="right" />
        </div>
    );
}
