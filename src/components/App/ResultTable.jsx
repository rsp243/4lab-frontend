import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function ResultTable({results}) {
    return (
        <DataTable scrollable scrollHeight="400px" value={results} tableStyle={{ maxWidth: '70rem', margin: "0 auto" }}>
            <Column field="x" header="X Value" sortable></Column>
            <Column field="y" header="Y Value" sortable></Column>
            <Column field="r" header="R Value" sortable></Column>
            <Column field="isHit" header="Hit/Miss" sortable></Column>
            <Column field="currentTime" header="Event Time" sortable></Column>
            <Column field="executionTime" header="Execution Time, ms" sortable></Column>
        </DataTable>
    );
}