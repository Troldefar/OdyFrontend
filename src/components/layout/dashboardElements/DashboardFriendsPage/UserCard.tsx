export default function UserCard<user extends {name: string; email: string;}>({user}: any): JSX.Element {
  return (
    <div className="user-card displayFlexAndCenter">
      <span className="name">
        { user.name }
      </span>
      <span className="invite-user">
        <span className="mdi mdi-account-plus"></span>
      </span>
    </div>
  )
}
