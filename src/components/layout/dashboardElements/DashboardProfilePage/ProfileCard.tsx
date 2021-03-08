import Form from '../../../el/Form';

export default function ProfileCard(user: any): JSX.Element {
  return (
    <div className="profile-card displayFlexAndCenter">
      <Form type="profile" user={user.user} />
    </div>
  )
}
