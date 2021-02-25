export interface User {
  email: String,
  token: String
}

export interface Group {
  users: User[]
}

export interface SystemState {
  loggedIn: Boolean,
  session: String,
  userName: String
}