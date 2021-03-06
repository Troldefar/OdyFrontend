import Chart from 'chart.js';

const renderChart = (ctx: any): any => {
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1 Jan', '3 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan'],
      datasets: [{
        label: 'Win history',
        data: [1, 10, 2, 15, 20, 23],
        borderColor: [
          'rgba(42, 157, 143, 1)'
        ],
        borderWidth: 4
      }]
    },
    options: {
      responsive: true
    }
  });
  return myChart;
}

export default renderChart;