const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earning').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Lab 01', 'Lab 02', 'Lab Jogos', 'Lab 27', 'Lab 28'],
        datasets: [{
            label: 'Quantidade de Reclamações',
            data: [30, 23, 12, 5, 14],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
        }]
    },
    options: {
        responsive: true,
    }
});

var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['Lab 01', 'Lab 02', 'Lab Jogos', 'Lab 27', 'Lab 28'],
        datasets: [{
            label: 'QR Codes Cadastrados',
            data: [40, 16, 16, 45, 45],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
        }]
    },
    options: {
        scales: {
            y: {
                responsive: true,
            }
        }
    }
});