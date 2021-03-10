import { games } from '../../utils/ts/constants/games';

import LoggedInMenu from '../menu/LoggedInMenu';
import Navbar from '../menu/Navbar';

import GameCard from '../dashboardElements/GamePage/GameCard';

export default function Game(): JSX.Element {
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
        <div className="dashboard-right-lower game-container">
          {
            games.map(game => (
              <GameCard name={game.name} image={game.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
