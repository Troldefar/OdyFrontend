import { useSelector, RootStateOrAny } from 'react-redux';

import Button from '../../el/Button';

export default function Navbar() {
  const user  = useSelector((state: RootStateOrAny) => state.user.value);
  function handleLogout() {
    console.log("123");
  }
  function handleLogin() {
    console.log("login");
  }
  console.log(user);
  return (
    <div>
      { user ? <div>{user}</div> : ''}
    </div>
  )
}
