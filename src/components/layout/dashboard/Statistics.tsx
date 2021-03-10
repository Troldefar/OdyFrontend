import LoggedInMenu from '../menu/LoggedInMenu';
import Navbar from '../menu/Navbar';

import { statistics } from '../../utils/ts/constants/statisticsSubjects';

import StatCard from '../dashboardElements/DashboardStatPage/StatCard';

export default function Statistics(): JSX.Element {
  const slideLeft = () => {
    console.log("left");
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
              CS: GO
            </p>
            <span onClick={slideRight} className="mdi mdi-arrow-right-bold-circle"></span>
          </div>
          {
            statistics.map((stat) => (
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
