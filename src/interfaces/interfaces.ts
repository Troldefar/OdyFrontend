import { ReactNode } from "react";

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

export interface ReduxAction {
  type: string,
  payload: Object
}

export interface PropsInterface {
  component: React.FC<any>;
}

export interface MessageInterface {
  msg: string;
  [key:string]: string;
}

export interface RouteInterface {
  path: string;
  Component: any;
  name: string;
  icon: string;
}

export interface CanvasProps {
  width: number;
  height: number;
  canvasIdentifier: string;
}