export default function Dashboard() {
  let date = new Date().toString().substr(0, 25);
  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <h2 className="logo">
          Ody
        </h2>
      </div>
      <div className="dashboard-right">
        <div className="dashboard-right-upper">
          <h3>
            Dashboard
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
        <div className="dashboard-right-lower">
          Content
        </div>
      </div>
    </div>
  )
}
