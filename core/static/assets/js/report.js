const dataTable = new simpleDatatables.DataTable('#datatable', {
    searchable: true,
    fixedHeight: true,
    data: {
        headings: ['Heading1', 'Heading2', 'Heading3'],
        data: [
            ['column1', 'column2', 'column3'],
            ['column1', 'column2', 'column3'],
            ['column1', 'column2', 'column3'],
            ['column1', 'column2', 'column3']
        ]
    }
})