import { useEffect } from 'react';

import Canvas from '../../../el/ChartElement';
import renderChart from '../../../utils/ts/functions/renderChart';

export default function CanvasView() {
  function ok() {
    const canvas: any = document.getElementById("test");
    if(!canvas) {
      return;
    } else {
      const ctx = canvas.getContext("2d");
      renderChart(ctx);
    }
  }
  useEffect(() => {
    ok();
  }, [ok()])  
  return (
    <div className="grid-item-three grid-item displayFlexAndCenter">
      <div className="canvasContainer displayFlexAndCenter">
        <Canvas canvasIdentifier="test" />
      </div>
    </div>
  )
}
