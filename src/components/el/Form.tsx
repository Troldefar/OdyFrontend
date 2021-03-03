import { useState } from 'react';

import InputElement from './Input';
import Button from './Button';

import OnSubmit from '../utils/ts/functions/OnFormSubmit';

export default function Form(props: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Identify which form
  const formRole = props.identifier;

  function login(e: any): void {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({username, password})
    })
      .then(response => console.log(response))
      .catch((error: any) => console.log(error));
  }

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
            onSubmit={login}
          >
            <input 
              name="email"
              className="input"
              onChange={(e:any) => setUsername(e.target.value)}
            />
            <input 
              name="password"
              className="input"
              type="password"
              onChange={(e:any) => setPassword(e.target.value)}
            />
            <Button
              text="Login"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
