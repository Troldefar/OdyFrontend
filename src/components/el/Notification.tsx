import { useSelector } from 'react-redux';

export default function Notification(props: object): any {
  const msg: any = useSelector<any>((state) => state.notification);
  if(msg.msg) {
    return (
      <span className="notification">
        <>
          { msg.msg }
        </>
      </span>
    )
  } else {
    return null;
  }
}