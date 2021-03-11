/*
  * Interfaces
*/
import { GameStatistics } from '../../../../interfaces/interfaces';

import {
  cs_go_statistics,
  lol_statistics,
  wow_statistics,
  hs_statistics,
  cod_statistics,
  valheim_statistics
} from './statisticsSubjects';

/* 
  * Routes
*/
export const gameStatistics: GameStatistics[] = [
  { title: 'League Of Legends ', data: lol_statistics, index: 0, background: 'https://w.wallhaven.cc/full/1j/wallhaven-1joy1w.png'},
  { title: 'CS:GO ', data: cs_go_statistics, index: 1, background: 'https://w.wallhaven.cc/full/g8/wallhaven-g876jd.jpg'},
  { title: 'World of Warcraft', data: wow_statistics, index: 2, background: 'https://w.wallhaven.cc/full/0q/wallhaven-0qg365.jpg'},
  { title: 'Hearthstone ', data: hs_statistics, index: 3, background: 'https://w.wallhaven.cc/full/39/wallhaven-39ojvv.jpg'},
  { title: 'Call of duty ', data: cod_statistics, index: 4, background: 'https://w.wallhaven.cc/full/4l/wallhaven-4lgm92.jpg'},
  { title: 'Valheim', data: valheim_statistics, index: 5, background: 'https://w.wallhaven.cc/full/l3/wallhaven-l33x2r.png'}
];