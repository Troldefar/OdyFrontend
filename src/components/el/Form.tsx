import { useState } from 'react';

import InputElement from './Input';
import Button from './Button';

import OnSubmit from '../utils/ts/functions/OnFormSubmit';

export default function Form(props: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Identify which form
  const formRole = props.identifier;

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
            onSubmit={OnSubmit}
          >
            <InputElement 
              inputType="text"
              ph="Email"
              name="email"
              onChange={(e:any) => setUsername(e.target.value)}
            />
            <InputElement 
              inputType="password"
              ph="Password"
              name="password"
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
