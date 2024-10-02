// Sample code for rendering a scoreboard chart
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('scoreboard-chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4'],
            datasets: [{
                label: 'Scores',
                data: [12, 19, 3, 5],
                backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
