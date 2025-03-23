AgGridTable
AgGridTable es una clase que facilita la creación y gestión de tablas utilizando la librería AG-Grid. Proporciona métodos para manipular filas, exportar datos a Excel y PDF, manejar acciones como editar y eliminar, y más.

Instalación
Para utilizar AgGridTable, asegúrate de incluir las siguientes dependencias en tu proyecto:

html
Copy
<!-- AG-Grid -->
<script src="https://cdn.jsdelivr.net/npm/ag-grid-community/dist/ag-grid-community.min.js"></script>

<!-- Para exportar a Excel -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.4/xlsx.full.min.js"></script>

<!-- Para exportar a PDF -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.25/jspdf.plugin.autotable.min.js"></script>
Run HTML
Uso básico
Crear una instancia de AgGridTable
javascript
Copy
const table = new AgGridTable({
    containerId: "myGrid", // ID del contenedor de la tabla
    columnDefs: [
        { headerName: "Nombre", field: "name" },
        { headerName: "Edad", field: "age" },
        { headerName: "Ciudad", field: "city" },
    ],
    selectable: { show: true, type: "multiRow" }, // Selección múltiple
    paginationPageSize: 10, // Tamaño de página
    actions: { show: true, position: "start", none: [] }, // Mostrar acciones
});
Métodos principales
initTable()
Inicializa la tabla con las configuraciones proporcionadas.

setRows(data)
Establece los datos de la tabla.

javascript
Copy
table.setRows([
    { id: 1, name: "John", age: 25, city: "New York" },
    { id: 2, name: "Anna", age: 30, city: "London" },
]);
addRow(data)
Agrega una nueva fila a la tabla.

javascript
Copy
table.addRow({ id: 3, name: "Mike", age: 32, city: "San Francisco" });
deleteRowById(rowId)
Elimina una fila por su ID.

javascript
Copy
table.deleteRowById(1);
deleteRowsByIds(rowIds)
Elimina varias filas por sus IDs.

javascript
Copy
table.deleteRowsByIds([1, 2]);
updateRowFieldById(rowId, field, newValue)
Actualiza un campo específico de una fila.

javascript
Copy
table.updateRowFieldById(1, "age", 26);
clearRows()
Elimina todas las filas de la tabla.

javascript
Copy
table.enableRealTimeSelectionUpdate(() => {
    table.showDelete();
});
Mostrar columnas seleccionadas

javascript
Copy
table.clearRows();
filterText(value)
Filtra las filas de la tabla por un texto.

javascript
Copy
table.filterText("John");
exportToExcel(hideColumns)
Exporta la tabla a un archivo Excel. Puedes ocultar columnas específicas.

javascript
Copy
table.exportToExcel(["actions"]);
exportToPdf(hideColumns, title)
Exporta la tabla a un archivo PDF. Puedes ocultar columnas específicas y agregar un título.

javascript
Copy
table.exportToPdf(["actions"], "Reporte de Usuarios");
clickAction({ onEdit, onDelete })
Maneja los eventos de clic en los botones de editar y eliminar.

javascript
Copy
table.clickAction({
    onEdit: (rowId) => alert(`Editar fila con ID: ${rowId}`),
    onDelete: (rowId) => alert(`Eliminar fila con ID: ${rowId}`),
});
selectRow(id)
Selecciona una fila por su ID.

javascript
Copy
table.selectRow(1);
unselectRow(id)
Deselecciona una fila por su ID.

javascript
Copy
table.unselectRow(1);
enableRealTimeSelectionUpdate(callback)
Habilita la actualización en tiempo real de la selección de filas.

javascript
Copy
table.enableRealTimeSelectionUpdate((selectedData) => {
    console.log("Filas seleccionadas:", selectedData);
});
getSelectedRows()
Obtiene las filas seleccionadas.

javascript
Copy
const selectedRows = table.getSelectedRows();
console.log(selectedRows);
Ejemplo completo
html
Copy

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AgGridTable Example</title>
    <script src="https://cdn.jsdelivr.net/npm/ag-grid-community/dist/ag-grid-community.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.4/xlsx.full.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.25/jspdf.plugin.autotable.min.js"></script>
</head>
<body>
    <div id="myGrid" style="height: 400px; width: 100%;" class="ag-theme-alpine"></div>
    <button onclick="table.exportToExcel(['actions'])">Exportar a Excel</button>
    <button onclick="table.exportToPdf(['actions'], 'Reporte')">Exportar a PDF</button>

    <script>
        const table = new AgGridTable({
            containerId: "myGrid",
            columnDefs: [
                { headerName: "Nombre", field: "name" },
                { headerName: "Edad", field: "age" },
                { headerName: "Ciudad", field: "city" },
            ],
            selectable: { show: true, type: "multiRow" },
            paginationPageSize: 10,
            actions: { show: true, position: "start", none: [] },
        });

        table.setRows([
            { id: 1, name: "John", age: 25, city: "New York" },
            { id: 2, name: "Anna", age: 30, city: "London" },
        ]);

        table.clickAction({
            onEdit: (rowId) => alert(`Editar fila con ID: ${rowId}`),
            onDelete: (rowId) => alert(`Eliminar fila con ID: ${rowId}`),
        });
    </script>
</body>
</html>