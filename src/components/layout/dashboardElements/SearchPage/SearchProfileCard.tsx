import { useDispatch } from 'react-redux';

import { notEmpty, empty } from '../../../../redux/notification';

export default function SearchProfileCard({user}: any): JSX.Element {
  const dispatch = useDispatch();
  const sendFriendRequest = (id: number) => {
    dispatch(notEmpty(`${user.name} was invited to be your friend`));
    setTimeout(() => {
      dispatch(empty());
    }, 3000);
    return;
  }
  return (
    <div className="user-search-card">
      <h4>
        { user.name }
      </h4>
      <div className="actions">
        <div className="friend-request">
          <span onClick={() => sendFriendRequest(user.id)} className="mdi mdi-account-plus"></span>
        </div>
      </div>
    </div>
  )
}
