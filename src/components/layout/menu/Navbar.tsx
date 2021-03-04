import { useSelector, RootStateOrAny } from 'react-redux';
import { useState, useEffect } from 'react';

import Button from '../../el/Button';

export default function Navbar() {
  const [loggedUser, setLoggedUser] = useState({});
  const user = useSelector((state: RootStateOrAny) => state.user.value);
  console.log("updated navbar component");
  console.log("USER: ", user);
  if(user) {
    setLoggedUser(user);
    console.log("user present", user);
  } else {
    console.log("no user present", user);
  }
  useEffect(() => {
    console.log(loggedUser);
  }, [loggedUser]);
  return (
    <div>
      { user ? 
        { loggedUser }
        : ''
      }
    </div>
  )
}
