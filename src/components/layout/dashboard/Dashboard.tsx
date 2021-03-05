export default function Dashboard() {
  let date = new Date().toString().substr(3, 22);
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
          <div className="grid-item-one grid-item">
            
          </div>
          <div className="grid-item-two grid-item">
            
          </div>
          <div className="grid-item-three grid-item">
            
          </div>
          <div className="grid-item-four grid-item">
            
          </div>
          <div className="grid-item-five grid-item">
            
          </div>
        </div>
      </div>
    </div>
  )
}
