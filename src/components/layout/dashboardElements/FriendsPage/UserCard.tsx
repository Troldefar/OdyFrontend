import { useDispatch } from 'react-redux';

import { notEmpty, empty } from '../../../../redux/notification';

export default function UserCard({user}: any): JSX.Element {
  const dispatch = useDispatch();
  const inviteFriendToParty = (user: any) => {
    dispatch(notEmpty(user.name + ' was invited to your party'));
    setTimeout(() => {
      dispatch(empty());
    }, 3000);
    return;
  }
  const removeFriend = (user: any) => {
    dispatch(notEmpty(user.name + ' was removed from your friendlist'));
    setTimeout(() => {
      dispatch(empty());
    }, 3000);
    return;
  }
  return (
    <div className="user-card displayFlexAndCenter">
      <span className="name">
        { user.name }
      </span>
      <span className="invite-user">
        <span onClick={() => inviteFriendToParty(user)} className="mdi mdi-account-plus"></span>
        <span onClick={() => removeFriend(user)} className="mdi mdi-account-minus"></span>
      </span>
    </div>
  )
}
