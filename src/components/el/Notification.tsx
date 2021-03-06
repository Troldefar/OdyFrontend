import { useSelector } from 'react-redux';

export default function Notification(props: any): any {
  const msg: any = useSelector<any>((state) => state.notification);
  if(msg.msg) {
    return (
      <span className={`${props.color} notification`}>
        <>
          { msg.msg }
        </>
      </span>
    )
  } else {
    return null;
  }
}