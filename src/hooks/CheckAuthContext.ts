import { useSelector } from 'react-redux';

const CheckAuthContext = () => {
  console.log("Checking auth...");
  const { user }:any = useSelector<any>((state) => state.user);
  console.log("USER AUTH: ", user);
  return user;
}

export default CheckAuthContext;