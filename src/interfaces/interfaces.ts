export interface User {
  email: string,
  token: string
}

export interface Group {
  users: User[]
}

export interface SystemState {
  loggedIn: boolean,
  session: string,
  userName: string
}

export interface RequestHeader {
  headers: Object
}