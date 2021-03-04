import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from './Button';

import { login } from '../../redux/user';
import CheckAuthContext from '../../hooks/CheckAuthContext';

export default function Form(props: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = CheckAuthContext();
  let history = useHistory();
  // dispatch
  const dispatch = useDispatch();
  // login
  function tryLogin(e: any): void {
    e.preventDefault();
    try {
      fetch('http://127.0.0.1:8000/api/auth/login', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({email, password})
      })
        .then(response => response.json())
        .then(json => {
          dispatch(login(json.original));
          history.push('/dashboard');
        })
        .catch((error: any) => console.log(error));
    } catch (e) {
      throw new Error(e.message);
    }
  }
  // return
  return (
    <div className="center-form">
      <div className="form-card">
        <div className="form-image">
          <h2>
            Ody
          </h2>
        </div>
        <div className="form-form">
          <form
            method="post"
            className="login-form"
            encType="multipart/form-data"
            onSubmit={tryLogin}
          >
            <input 
              name="email"
              className="input"
              placeholder="Email"
              onChange={(e:any) => setEmail(e.target.value)}
            />
            <input 
              name="password"
              className="input"
              type="password"
              placeholder="Password"
              onChange={(e:any) => setPassword(e.target.value)}
            />
            <Button
              text="Login"
            />
          </form>
          <span>
            { user ? 'user' : 'no user' }
          </span>
        </div>
      </div>
    </div>
  )
}
