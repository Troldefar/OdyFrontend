import { useSelector } from 'react-redux';

export default function LoggedInMenu() {
  const { user }:any = useSelector<any>((state) => state.user);
  return (
    '123'
  )
}
