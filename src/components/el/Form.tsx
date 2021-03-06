import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from './Button';

import { login } from '../../redux/user';
import { notEmpty, empty } from '../../redux/notification';

export default function Form(props: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [favoriteGame, setFavoriteGame] = useState('');
  let history = useHistory();
  // dispatch
  const dispatch = useDispatch();
  // identify
  const type = props.type;
  // login
  function tryLogin(e: any): void {
    e.preventDefault();
    if(email === '' || password === '') {
      dispatch(notEmpty('Email or password is not provided'));
      setTimeout(() => {
        dispatch(empty());
      }, 3000);
      return;
    }
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
  function pushRegisterRoute() {
    history.push('/register');
  }
  async function tryRegister(e: any): Promise<any> {
    e.preventDefault();
    const pwMatch = password === passwordConfirmation;
    if(email === '' || password === '' || age === 0 || country === '' || favoriteGame === '' || passwordConfirmation === '') {
      dispatch(notEmpty('Additional information is required'));
      setTimeout(() => {
        dispatch(empty());
      }, 3000);
      return;
    }
    if(!pwMatch) {
      dispatch(notEmpty('Passwords must match'));
      setTimeout(() => {
        dispatch(empty());
      }, 3000);
      return;
    }
    try {
      await fetch('http://127.0.0.1:8000/api/user/register', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({email, password, name, age, country, favorite_game: favoriteGame})
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
  const loginDiv = <div className="center-form displayFlexAndCenter">
    <div className="form-card">
      <div className="form-image displayFlexAndCenter">
        <h2>
          Ody
        </h2>
      </div>
      <div className="form-form displayFlexAndCenter">
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
        <div className="newUser">
          <p onClick={pushRegisterRoute}>
            New?
          </p>
        </div>
      </div>
    </div>
  </div>
  const registerDiv = <div className="center-form displayFlexAndCenter">
    <div className="form-card">
      <div className="form-image displayFlexAndCenter">
        <h2>
          Sign up
        </h2>
      </div>
      <div className="form-form displayFlexAndCenter">
        <form
          method="post"
          className="login-form"
          encType="multipart/form-data"
          onSubmit={tryRegister}
        >
          <input 
            name="email"
            className="input"
            placeholder="Email"
            onChange={(e:any) => setEmail(e.target.value)}
          />
          <input 
            name="name"
            className="input"
            placeholder="Name"
            onChange={(e:any) => setName(e.target.value)}
          />
          <input 
            name="country"
            className="input"
            placeholder="Country"
            onChange={(e:any) => setCountry(e.target.value)}
          />
          <input 
            name="age"
            className="input"
            placeholder="Age"
            type="n"
            onChange={(e:any) => setAge(e.target.value)}
          />
          <select name="slct" id="slct" 
            onChange={(e:any) => setFavoriteGame(e.target.value)}>
            <option selected disabled>Favorite game</option>
            <option value="cs">Counter strike</option>
            <option value="lol">League of Legends</option>
            <option value="wow">World of Warcraft</option>
            <option value="cod">Call of duty</option>
            <option value="hs">Hearthstone</option>
          </select>
          <input 
            name="password"
            className="input"
            type="password"
            placeholder="Password"
            onChange={(e:any) => setPassword(e.target.value)}
          />
          <input 
            name="passwordConfirmation"
            className="input"
            type="password"
            placeholder="Re enter password"
            onChange={(e:any) => setPasswordConfirmation(e.target.value)}
          />
          <Button
            text="Register"
          />
        </form>
      </div>
    </div>
  </div>
  // return
  return (
    type === 'register' ? registerDiv : loginDiv
  )
}
