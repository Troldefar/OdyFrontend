export default function LoggedInMenu(props: any): JSX.Element {
  const date = new Date().toString().substr(3, 22);
  const path = window.location.pathname;
  return (
    <div className="dashboard-right-upper">
      <h3>
        Dashboard { path === '/dashboard' ? '' : path }
      </h3>
      <h3>
        { date }
      </h3>
      <div className="icons">
        <span className="mdi mdi-database-search mr-2"></span>
        <span className="mdi mdi-bell-ring-outline mr-2"></span>
        <span className="mdi mdi-cog-outline mr-2"></span>
        <span className="mdi mdi-face-outline big"></span>
      </div>
    </div>
  )
}
