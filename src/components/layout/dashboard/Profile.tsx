import LoggedInMenu from '../menu/LoggedInMenu';
import Navbar from '../menu/Navbar';

export default function Profile(): JSX.Element {
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
          Profile section
        </div>
      </div>
    </div>
  )
}
