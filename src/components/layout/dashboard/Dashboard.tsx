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
          { date }
        </div>
        <div className="dashboard-right-lower">
          Content
        </div>
      </div>
    </div>
  )
}
