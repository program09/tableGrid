# TABLE GRID
## Description
This is a implementation of AG-GRID in js and Bootstrap5.

## Implementation
1. Download the project from github, import files in your project.
2. Add the following files in your project.

    ```html
        <link rel="stylesheet" href="tableGrid.css">
        <script src="tableGrid.js"></script>
    ```

## Inilialize default
```html
    <div id="ag-grid" class="ag-grid"></div>
```
```js
    const data = {
        Active: { label: "Activo", color: "success" },
        Inactive: { label: "Inactivo", color: "danger" },
    }

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
            type: 'badge', // Switch -> per two statuses, badge per any statuses
            statuses: data // Dictionari of values statuses
        },
        filterCol: true, // Show filter column
        actions: {
            show:true, // Show actions column
            position: "end", // Start, end
            none: [] // Hide actions: edit, delete  default [] ?? ['edit', 'delete']
        }, 
        paginationDefault: {
            pagination: true, // Show pagination
            size: 10, // Size per page
            useApi: false // Use api pagination
        } 
    });
```	

```js
    const columnDefs = [
        { field: "id", headerName: "Código", minWidth: 100, maxWidth: 100 },
        { field: "name", headerName: "Nombre", cellRenderer: renderCol},
        { field: "status", headerName: "Estado"}, // Defined how a badge or switch
    ];

    // Render col with the val od the data
    const renderCol = (params) => {
        const value = params.value?.toLowerCase();
        return `<div>${value}</div>`;
    };
```

## Metods

### setRows(data)

Agregar datos en gran cantidad

```js
    const data = {
        {id: 1, name: '2021-2022', status: 'Active'},
        {id: 2, name: '2022-2023', status: 'Active'},
        {id: 3, name: '2023-2024', status: 'Inactive'},
        {id: 4, name: '2024-2025', status: 'Active'},
        {id: 5, name: '2025-2026', status: 'Active'}
    }
    table.setRows(data);
```

### clickActions
Acciones para los botones de editar, eliminar, switch

```js
    table.clickAction(
        {
            onEdit : (rowId) => {
                console.log('EDIT:' + rowId) // rowId of the row selected
            }, 
            onDelete : (rowId) => {
                console.log('DELETE:' + rowId) // rowId of the row selected
            },
            onSwitch: (rowId, status) => {
                console.log('SWITCH:' + rowId + ' status actual ' + status) // rowId of the row selected and status of the row selected
                table.updateRowFieldById(1, 'status', 'Inactive'); // Update row field status by id
            },
        }
    )
```

###  Add new row
Agregar una nueva fila a la tabla
```js
    const data = {
        id: 1,
        name: '2021-2022',
        status: 'Active'
    }
    table.addRow(data)
```

### Delete row
Eliminar una fila de la tabla por id
```js
    const id = 1
    table.deleteRow(id)
```

### delete any rows
Eliminar varias filas de la tabla por id, recibe un array de ids
```js
    const rowIds = [1,2,3]
    table.deleteRowsByIds(rowIds)
```

### Mostrar cantidad de registros seleccionados
Muestra la cantidad de registros seleccionados en un botón, recibe el id del botón, por defecto #del-selected
```html
    <div id="del-selected">
        <span>0</span>
    </div>
```	
```js
    table.showDelete('del-selected') // del-selected is the id of the button default #del-selected
```

### Show selected rows real time
Muetra la cantidad de registros seleccionados en tiempo real. y los muestra en un contenedor
```html
    <div id="del-selected">
        <span>0</span>
    </div>
```	
```js
    table.enableRealTimeSelectionUpdate(() => {
        table.showDelete();
    });
```

### Update row field by id
Actualizar un campo de una fila por id
```js
    const id = 1
    const field = 'status'
    const value = 'Inactive'
    table.updateRowFieldById(id,field, value)
```

### Delete all rows, clear table
Eliminar todas las filas de la tabla, limpiar la tabla
```js
    table.clearRows()
```
### Search by value
Buscar por valor, recibe un valor para buscar, por defecto busca en todos los campos
```js
    const value = '2021'
    table.filterText(value)
```

### Export to excel
Descargar la tabla en excel, recibe un array de columnas a ocultar, por defecto no oculta ninguna columna
Incluir en el html el siguiente script
```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.4/xlsx.full.min.js"></script>
```

```js
    const hidedColumns = ['id', ...] // Array of columns to hide, OPTIONAL
    table.exportToExcel(hidedColumns)
```
### Export to PDF 
Descargar la tabla en pdf, recibe un array de columnas a ocultar, por defecto no oculta ninguna columna
Incluir en el html el siguiente script
```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.25/jspdf.plugin.autotable.min.js"></script>
```
```js
    const hidedColumns = ['id', ...] // Array of columns to hide, OPTIONAL
    const title = 'Sales' // Title of the PDF, OPTIONAL
    table.exportToPdf(hidedColumns, title)
```

### Select row by id
Seleccionar una fila por id
```js
    const id = 1
    table.selectRow(id)
```	

### Unelect row by id
Deseleccionar una fila por id
```js
    const id = 1
    table.unselectRow(id)
```	

### Select rows on real time actions
Acciones al seleccionar alguna fila en tiempo real, recibe un array de filas seleccionadas
```js
    table.enableRealTimeSelectionUpdate((selectedData) => {
        console.log(selectedData) // Array of rows selected
        table.getSelectedRows()
    });
```

### Get all rows selected
Obtener todas las filas seleccionadas, retorna un array de filas seleccionadas
```js
    table.getSelectedRows()
```










