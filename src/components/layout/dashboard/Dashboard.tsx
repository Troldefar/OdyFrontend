import LoggedInMenu from '../menu/LoggedInMenu';
import Navbar from '../menu/Navbar';

import NumericView from '../dashboardElements/IndexPage/NumericView';
import CanvasView from '../dashboardElements/IndexPage/CanvasView';
import GuildView from '../dashboardElements/IndexPage/QuickSearch';
import CurrentGroup from '../dashboardElements/IndexPage/CurrentGroup';

export default function Dashboard(): JSX.Element {
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
        <div className="dashboard-right-lower">
          <NumericView />
          <CanvasView />
          <GuildView />
          <CurrentGroup />
        </div>
      </div>
    </div>
  )
}
