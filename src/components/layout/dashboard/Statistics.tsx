import { useState, useEffect } from 'react';

import LoggedInMenu from '../menu/LoggedInMenu';
import Navbar from '../menu/Navbar';
import StatCard from '../dashboardElements/StatisticsPage/StatCard';

import { gameStatistics } from '../../utils/ts/constants/gameStatistics';

export default function Statistics(): JSX.Element {
<<<<<<< HEAD
  const [gameState, setGameState] = useState(gameStatistics[0]);
  console.log("GS: ", gameState);
=======
  const [gameState, setGameState] = useState({
    title: '',
    data: []
  });
>>>>>>> 841e3a11e1177e73098a52ab039e477fef308918
  const slideLeft = () => {
    setGameState(gameStatistics[gameState.index - 1]);
  }
  const slideRight = () => {
    setGameState(gameStatistics[gameState.index + 1]);
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
<<<<<<< HEAD
              { gameState.title }
=======
              {
                gameStatistics[0].title
              }
>>>>>>> 841e3a11e1177e73098a52ab039e477fef308918
            </p>
            <span onClick={slideRight} className="mdi mdi-arrow-right-bold-circle"></span>
          </div>
          {
<<<<<<< HEAD
            gameState.data.map((stat: any) => (
=======
            gameStatistics[0].data.map((stat: any) => (
>>>>>>> 841e3a11e1177e73098a52ab039e477fef308918
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
