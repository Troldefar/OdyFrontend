import Chart from 'chart.js';

export default function ChartElement({ctx, options}: any) {
  const newChart = new Chart(ctx, options)
  return (
    <div>
      
    </div>
  )
}
