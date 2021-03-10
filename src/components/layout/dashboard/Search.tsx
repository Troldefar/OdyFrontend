import LoggedInMenu from '../menu/LoggedInMenu';
import Navbar from '../menu/Navbar';

import SearchInput from '../dashboardElements/SearchPage/SearchInput';
import SearchOutput from '../dashboardElements/SearchPage/SearchOutput';

export default function Search(): JSX.Element {
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
        <div className="dashboard-right-lower-search-section">
          <SearchInput />
          <SearchOutput />
        </div>
      </div>
    </div>
  )
}
