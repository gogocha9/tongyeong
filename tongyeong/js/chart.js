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

let countBox_domestic = document.querySelector('#count_domestic'),
count_domestic = 0;
let counting_domestic = setInterval(function () {
    if (count_domestic == datas_domestic.map(i => +i).reduce((a,c) => a + c, 0)) {
        clearInterval(counting_domestic);
        return false;
    }
    count_domestic += 7;
    countBox_domestic.innerHTML = new Intl.NumberFormat().format(count_domestic);
}, 20);

let countBox_overseas = document.querySelector('#count_overseas'),
count_overseas = 0;
let counting_overseas = setInterval(function () {
    if (count_overseas == datas_overseas.map(i => +i).reduce((a,c) => a + c, 0)) {
        clearInterval(counting_overseas);
        return false;
    }
    count_overseas += 1;
    countBox_overseas.innerHTML = new Intl.NumberFormat().format(count_overseas);
}, 5);