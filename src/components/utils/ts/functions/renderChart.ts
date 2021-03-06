import Chart from 'chart.js';

const renderChart = (ctx: any): any => {
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1/1', '1/3', '1/5', '1/6', '1/7', '1/8'],
      datasets: [{
        label: 'Games won',
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