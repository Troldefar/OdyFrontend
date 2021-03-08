import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 

import { routes } from '../../utils/ts/constants/routes';

import { logout } from '../../../redux/user';

export default function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const tryLogout = (e:any): void => {
    e.preventDefault();
    dispatch(logout);
    history.push('/');
  }
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
        <p onClick={tryLogout}>
          Logout
        </p>
      </ul>
    </div>
  );
}
