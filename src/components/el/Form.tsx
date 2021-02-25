import InputElement from './Input';
import Button from './Button';

export default function Form(props: any) {

  const onsubmit = (e: any): void => {
    e.preventDefault();
    console.log("wqod");
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
            onSubmit={onsubmit}
          >
            <InputElement 
              inputType="text"
              ph="Email"
              name="email"
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
