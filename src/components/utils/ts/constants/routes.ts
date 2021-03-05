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
  { path: '/', Component: App, name: 'Home' },
  { path: '/dashboard', Component: Dashboard, name: 'Dashboard' },
  { path: '/friends', Component: Friends, name: 'Friends' },
  { path: '/game', Component: Game, name: 'Game' },
  { path: '/profile', Component: Profile, name: 'Profile' },
  { path: '/search', Component: Search, name: 'Search' },
  { path: '/statistics', Component: Statistics, name: 'Statistics' },
];