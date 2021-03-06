import { useEffect } from 'react';
import Chart from 'chart.js';

import Canvas from '../../el/ChartElement';
import renderChart from '../../utils/ts/functions/renderChart';

export default function Dashboard() {
  let date = new Date().toString().substr(3, 22);
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
    <div className="dashboard-container">
      <div className="dashboard-left">
        <h2 className="logo">
          Ody
        </h2>
      </div>
      <div className="dashboard-right">
        <div className="dashboard-right-upper">
          <h3>
            Dashboard
          </h3>
          <h3>
            { date }
          </h3>
          <div className="icons">
            <span className="mdi mdi-database-search mr-2"></span>
            <span className="mdi mdi-bell-ring-outline mr-2"></span>
            <span className="mdi mdi-cog-outline mr-2"></span>
            <span className="mdi mdi-face-outline big"></span>
          </div>
        </div>
        <div className="dashboard-right-lower">
          <div className="grid-item-two grid-item">
            <div className="statsContainer displayFlexAndCenter">
              <h2>
                Games played
              </h2>
              <h1>
                0
              </h1>
            </div>
            <div className="statsContainer displayFlexAndCenter">
              <h2>
                Friends online
              </h2>
              <h1>
                0
              </h1>
            </div>
            <div className="statsContainer displayFlexAndCenter">
              <h2>
                Last logged in
              </h2>
              <h1>
                { new Date().toString().substr(0, 10) }
              </h1>
            </div>
            <div className="statsContainer displayFlexAndCenter">
              <h2>
                Rating
              </h2>
              <h1>
                0
              </h1>
            </div>
          </div>
          <div className="grid-item-three grid-item displayFlexAndCenter">
            <div className="canvasContainer displayFlexAndCenter">
              <Canvas canvasIdentifier="test" />
            </div>
          </div>
          <div className="grid-item-four grid-item">
            <h2>
              Guild news
            </h2>
            <p>
              Test left the guild
            </p>
            <p>
              Test left the guild
            </p>
            <p>
              Test Joined the guild
            </p>
          </div>
          <div className="grid-item-five grid-item">
            <h2>
              Current group
            </h2>
            <div className="current-group">
              <span className="mdi mdi-face-agent big-text"></span>
              <span className="mdi mdi-face-agent big-text"></span>
              <span className="mdi mdi-face-agent big-text"></span>
              <span className="mdi mdi-plus big-text"></span>
              <span className="mdi mdi-plus big-text"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
