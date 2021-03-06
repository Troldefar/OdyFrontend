import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import { routes } from '../../utils/ts/constants/routes';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-ul">
        {
          routes.map((route) => (
            <Link to={route.path} className="navbar-ul-li">
              <span className={ `mdi ${route.icon}` }></span>
              { route.name }
            </Link>
          ))
        }
      </ul>
    </div>
  );
}
