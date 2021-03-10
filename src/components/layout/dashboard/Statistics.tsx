import { useState, useEffect } from 'react';

import LoggedInMenu from '../menu/LoggedInMenu';
import Navbar from '../menu/Navbar';
import StatCard from '../dashboardElements/StatisticsPage/StatCard';

import { gameStatistics } from '../../utils/ts/constants/gameStatistics';

export default function Statistics(): JSX.Element {
  const [gameState, setGameState] = useState({
    title: '',
    data: []
  });
  const slideLeft = () => {
    gameStatistics[0].data.map((item: any) => {
      console.log(item.title);
    })
  }
  const slideRight = () => {
    console.log("right");
  }
  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <h2 className="logo">
          Ody
        </h2>
        <Navbar />
      </div>
      <div className="dashboard-right">
        <LoggedInMenu />
        <div className="dashboard-right-lower-statistics-section">
          <div className="menu-switch displayFlexAndCenter">
            <span onClick={slideLeft} className="mdi mdi-arrow-left-bold-circle"></span>
            <p>
              {
                gameStatistics[0].title
              }
            </p>
            <span onClick={slideRight} className="mdi mdi-arrow-right-bold-circle"></span>
          </div>
          {
            gameStatistics[0].data.map((stat: any) => (
              <StatCard
                key={stat.title}
                title={stat.title} 
                text={stat.text} 
                direction={stat.direction} 
                customClassName={stat.customClassName} 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
