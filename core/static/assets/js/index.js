const totalViewChart = document.getElementById('total-views-chart');
const revenueChart = document.getElementById('revenue-chart');
const growthRateChart = document.getElementById('growth-rate-chart');
const datatable = document.getElementById('datatable');

// Note: changes to the plugin code is not reflected to the chart, because the plugin is loaded at chart construction time and editor changes only trigger an chart.update().
const plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
        const { ctx } = chart
        ctx.save()
        ctx.globalCompositeOperation = 'destination-over'
        ctx.fillStyle = options.color || '#99ffff'
        ctx.fillRect(0, 0, chart.width, chart.height)
        ctx.restore()
    }
}

new Chart(totalViewChart, {
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        datasets: [
            {
                type: 'line',
                label: 'Hotel Cortez',
                data: [12, 19, 3, 5],
                fill: true,
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(201, 203, 207, 0.2)'],
                borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)'],
                borderWidth: 1
            },
        ]
    },
    options: {
        plugins: {
            customCanvasBackgroundColor: {
                color: 'lightBlue'
            }
        }
    },
    plugins: [plugin]
})

new Chart(revenueChart, {
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        datasets: [
            {
                type: 'line',
                label: 'Hotel Cortez',
                data: [12, 87, 37, 57],
                fill: true,
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(201, 203, 207, 0.2)'],
                borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)'],
                borderWidth: 1
            },
        ]
    },
    options: {
        plugins: {
            customCanvasBackgroundColor: {
                color: 'lightBlue'
            }
        }
    },
    plugins: [plugin]
})

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