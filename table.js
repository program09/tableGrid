const statusRenderer = (params) => {
    const status = params.value?.toLowerCase();
    return `<div class="badge bg-success">${status}</div>`;
};

const data = {
    active: { label: "Activo", color: "success" },
    inactive: { label: "Inactivo", color: "danger" },
}

const columnDefs = [
    { field: "id", headerName: "Código" },
    { field: "name", headerName: "Año académico" },
    { field: "start", headerName: "Fecha de inicio", filter: 'agDateColumnFilter' },
    { field: "end", headerName: "Fecha de fin", filter: 'agDateColumnFilter' },
];

const table = new AgGridTable({
    containerId: "ag-grid", // ID of the container
    columnDefs: columnDefs, // Column definitions
    selectable: {
        show: true, // Show selectable column
        type: "multiRow" //simpleRow, multiRow
    },
    statusCol: {
        show:true, // Show status column
        active: 'Active', // Value checked switch
        type: 'badge', // Switch, badge
        statuses: data // Dictionari of values statuses
    },
    filterCol: true, // Show filter column
    actions: {
        show:true, // Show actions column
        position: "end", // Start, end
        none: ['edit'] // Hide actions: edit, delete  default []
    }, 
    paginationDefault: {
        pagination: true, // Show pagination
        size: 10, // Size per page
        useApi: false // Use api pagination
    } 
});

// Función para generar datos de prueba
function generateSampleData(count) {
    const names = ["John", "Jane", "Alex", "Maria", "Carlos", "Laura", "David", "Sofia", "Luis", "Ana"];
    const lastNames = ["Doe", "Smith", "Garcia", "Martinez", "Lopez", "Perez", "Gonzalez", "Rodriguez", "Hernandez", "Torres"];
    const statuses = ["Active", "inactive"];

    const data = [];
    for (let i = 1; i <= count; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

        data.push({
            id: i,
            name: `${randomName} ${randomLastName}`,
            status: randomStatus,
        });
    }
    return data;
}

// Generar 30 datos de prueba
const sampleData = generateSampleData(30);

// Establecer los datos en la tabla
table.setRows(sampleData);

table.clickAction(
    {
        onEdit : (rowId) => {
            alert(rowId)
        }, 
        onDelete : (rowId) => {
            alert('DELETE: ' + rowId)
        },
        onSwitch: (rowId, status) => {
            alert(`${rowId}. - ${status}`);
            table.updateRowFieldById(1, 'status', 'Inactive');
        },
    }
)

table.enableRealTimeSelectionUpdate(() => {
    table.showDelete();
});


