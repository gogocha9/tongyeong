const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

let datas_domestic = [
    '15',
    '17',
    '16',
    '20',
    '23',
    '12',
    '15',
    '5',
    '9',
    '16',
    '21',
    '13',
];

let datas_overseas = [
    '13',
    '12',
    '15',
    '14',
    '20',
    '9',
    '5',
    '2',
    '6',
    '11',
    '13',
    '23',
];

const ctx_domestic = document.getElementById('domestic').getContext('2d');
const Chart_domestic = new Chart(ctx_domestic, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            data: datas_domestic,
            backgroundColor: [
                'rgba(120, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
            ],
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
                display: false
            },
        }
    }
});

const ctx_overseas = document.getElementById('overseas').getContext('2d');
const Chart_overseas = new Chart(ctx_overseas, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            data: datas_overseas,
            backgroundColor: [
                'rgba(160, 99, 132, 0.8)',
                'rgba(190, 162, 235, 0.8)',
            ],
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
                display: false
            },
        },
    }
});