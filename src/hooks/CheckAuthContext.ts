import { useSelector } from 'react-redux';

const CheckAuthContext = (): Boolean => {
  const { user }:any = useSelector<any>((state) => state.user);
  if(Object.keys(user).length > 0) {
    return true;
  } else {
    return false;
  }
}

export default CheckAuthContext;