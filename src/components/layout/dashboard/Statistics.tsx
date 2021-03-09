import LoggedInMenu from '../menu/LoggedInMenu';
import Navbar from '../menu/Navbar';

import { statistics } from '../../utils/ts/constants/statisticsSubjects';

import StatCard from '../dashboardElements/DashboardStatPage/StatCard';

export default function Statistics(): JSX.Element {
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
