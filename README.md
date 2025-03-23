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

## inilialize default
```js
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
```	

## Init a table


