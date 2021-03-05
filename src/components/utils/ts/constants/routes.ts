/*
  * Interfaces
*/
import { RouteInterface } from '../../../../interfaces/interfaces';

/* 
  * Elements
*/
import Dashboard from '../../../layout/dashboard/Dashboard';
import Friends from '../../../layout/dashboard/Friends';
import Game from '../../../layout/dashboard/Game';
import Profile from '../../../layout/dashboard/Profile';
import Search from '../../../layout/dashboard/Search';
import Statistics from '../../../layout/dashboard/Statistics';
import App from '../../../../App';

/* 
  * Routes
*/
export const routes: RouteInterface[] = [
  { path: '/', Component: App, name: 'Home', icon: '' },
  { path: '/dashboard', Component: Dashboard, name: 'Dashboard', icon: 'mdi-home-outline' },
  { path: '/friends', Component: Friends, name: 'Friends', icon: 'mdi-account-multiple' },
  { path: '/game', Component: Game, name: 'Game', icon: 'mdi-gamepad-square-outline' },
  { path: '/profile', Component: Profile, name: 'Profile', icon: 'mdi-human-handsdown' },
  { path: '/search', Component: Search, name: 'Search', icon: 'mdi-database-search'},
  { path: '/statistics', Component: Statistics, name: 'Statistics', icon: 'mdi-chart-areaspline' },
];