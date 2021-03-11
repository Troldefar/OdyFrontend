import { useState, useEffect } from 'react';

import LoggedInMenu from '../menu/LoggedInMenu';
import Navbar from '../menu/Navbar';
import StatCard from '../dashboardElements/StatisticsPage/StatCard';

import { gameStatistics } from '../../utils/ts/constants/gameStatistics';

export default function Statistics(): JSX.Element {
  const setBackground = (image: string) => {
    const element = document.querySelector<HTMLElement>('#insertBackground');
    if(element !== null) {
      element.style.backgroundImage = 'url(' + image + ')';
    }
  }
  const [gameState, setGameState] = useState(gameStatistics[0]);
  const slideLeft = () => {
    setGameState(gameStatistics[gameState.index - 1]);
    setBackground(gameState.background);
  }
  const slideRight = () => {
    setGameState(gameStatistics[gameState.index + 1]);
    setBackground(gameState.background);
  }
  useEffect(() => {
    setBackground(gameState.background);
  });
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
          <div className="menu-switch displayFlexAndCenter" id="insertBackground">
            <span onClick={slideLeft} className="mdi mdi-arrow-left-bold-circle"></span>
            <p>
              { gameState.title }
            </p>
            <span onClick={slideRight} className="mdi mdi-arrow-right-bold-circle"></span>
          </div>
          {
            gameState.data.map((stat: any) => (
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
