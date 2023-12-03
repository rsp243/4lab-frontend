import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function ResultTable() {
    const results = {}

    return (
        <DataTable value={results} tableStyle={{ minWidth: '75em' }}>
            <Column field="XValue" header="X Value" sortable></Column>
            <Column field="YValue" header="Y Value" sortable></Column>
            <Column field="RValue" header="R Value" sortable></Column>
            <Column field="HitMiss" header="Hit/Miss" sortable></Column>
            <Column field="EventTime" header="Event Time" sortable></Column>
            <Column field="ExecutionTime" header="Execution Time, ms" sortable></Column>
        </DataTable>
    );
}