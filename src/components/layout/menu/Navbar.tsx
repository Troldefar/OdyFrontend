import { useSelector } from 'react-redux';

export default function Navbar() {
  const { user }:any = useSelector<any>((state) => state.user);
  let div;
  if(user.user) {
    return (
      <div className="navBar">
        { user.user ?
            <button className="small-btn">
              { user.user.email }
            </button>
            :
            ''
        }
      </div>
    )
  } else {
    return (
      <></>
    )
  }
}
