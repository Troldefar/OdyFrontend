import { useSelector } from 'react-redux';

import LoggedInMenu from '../menu/LoggedInMenu';
import Navbar from '../menu/Navbar';

import ProfileCard from '../dashboardElements/DashboardProfilePage/ProfileCard';

export default function Profile(): JSX.Element {
  const {user}: any = useSelector<any>((state) => state.user);
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
        <div className="dashboard-right-lower-profile-section">
          <ProfileCard user={user.user} />
        </div>
      </div>
    </div>
  )
}
