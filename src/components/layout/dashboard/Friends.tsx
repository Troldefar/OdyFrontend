import LoggedInMenu from '../menu/LoggedInMenu';
import Navbar from '../menu/Navbar';

import { users } from '../../utils/ts/constants/users';

import UserCard from '../dashboardElements/DashboardFriendsPage/UserCard';

export default function Friends(): JSX.Element {
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
        <div className="dashboard-right-lower-friends-section">
          { users.map(user => (
            <UserCard user={user} />
          ))}
        </div>
      </div>
    </div>
  )
}
