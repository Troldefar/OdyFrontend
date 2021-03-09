import LoggedInMenu from '../menu/LoggedInMenu';
import Navbar from '../menu/Navbar';

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
          <div className="item-1 displayFlexAndCenter showStat">
            <h4>
              Headshots %
            </h4>
            <p>
              34
            </p>
            <span className="arrow">
              <span className="mdi mdi-arrow-down-circle crimsonColor"></span>
            </span>
          </div>
          <div className="item-2 displayFlexAndCenter showStat">
            <h4>
              Bombs planted
            </h4>
            <p>
              200
            </p>
            <span className="arrow">
              <span className="mdi mdi-arrow-up-circle greenColor"></span>
            </span>
          </div>
          <div className="item-3 displayFlexAndCenter showStat">
            <h4>
              Enemies flashed (Pr game avg)
            </h4>
            <p>
              10
            </p>
            <span className="arrow">
              <span className="mdi mdi-arrow-down-circle crimsonColor"></span>
            </span>
          </div>
          <div className="item-4 displayFlexAndCenter showStat">
            <h4>
              Utility damage
            </h4>
            <p>
              300 (Pr game avg)
            </p>
            <span className="arrow">
              <span className="mdi mdi-arrow-up-circle greenColor"></span>
            </span>
          </div>
          <div className="item-5 displayFlexAndCenter showStat">
            <h4>
              Games won
            </h4>
            <p>
              12
            </p>
            <span className="arrow">
              <span className="mdi mdi-arrow-down-circle crimsonColor"></span>
            </span>
          </div>
          <div className="item-6 displayFlexAndCenter showStat">
            <h4>
              Deaths
            </h4>
            <p>
              50
            </p>
            <span className="arrow">
              <span className="mdi mdi-arrow-up-circle greenColor"></span>
            </span>
          </div>
          <div className="item-7 displayFlexAndCenter showStat">
            <h4>
              Riffle kills
            </h4>
            <p>
              10 (Pr game avg)
            </p>
            <span className="arrow">
              <span className="mdi mdi-arrow-down-circle crimsonColor"></span>
            </span>
          </div>
          <div className="item-8 displayFlexAndCenter showStat">
            <h4>
              Sniper kills
            </h4>
            <p>
              4 (Pr game avg)
            </p>
            <span className="arrow">
              <span className="mdi mdi-arrow-down-circle crimsonColor"></span>
            </span>
          </div>
          <div className="item-9 displayFlexAndCenter showStat">
            <h4>
              Pistol kills
            </h4>
            <p>
              7 (Pr game avg)
            </p>
            <span className="arrow">
              <span className="mdi mdi-arrow-up-circle greenColor"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
