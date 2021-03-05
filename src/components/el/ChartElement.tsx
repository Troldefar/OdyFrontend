import Chart from 'chart.js';

export default function ChartElement({options, canvasIdentifier}: any): any {
  const displayCanvas: any = <canvas id={canvasIdentifier}></canvas>;
  const newChart = new Chart(displayCanvas.getContext('2d'), options);
  console.log(newChart);
}
