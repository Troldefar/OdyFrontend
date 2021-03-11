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
  headers: object
}

export interface ReduxAction {
  type: string,
  payload: object
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

export interface GameDisplayInterface {
  name: string;
  image: string;
}

export interface UserInterface {
  name: string;
  email: string;
}

export interface StatisticsDisplayInterface {
  title: string;
  text: string;
  direction: string;
  customClassName: string;
}

export interface GameStatistics {
  title: string;
  data: any;
  index: number;
  background: string;
}