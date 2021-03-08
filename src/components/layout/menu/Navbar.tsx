import { Link } from 'react-router-dom';

import { routes } from '../../utils/ts/constants/routes';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-ul">
        <p>
          Main
        </p>
        {
          routes.map((route) => (
            route.name !== '' ?
            <Link to={route.path} className="navbar-ul-li">
              <span className={ `mdi ${route.icon} fs-2` }></span>
              { route.name }
            </Link>
            : ''
          ))
        }
        <p>
          Others
        </p>
      </ul>
    </div>
  );
}
