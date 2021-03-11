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
  { title: 'League Of Legends ', data: lol_statistics, index: 0},
  { title: 'CS:GO ', data: cs_go_statistics, index: 1},
  { title: 'World of Warcraft', data: wow_statistics, index: 2},
  { title: 'Hearthstone ', data: hs_statistics, index: 3},
  { title: 'Call of duty ', data: cod_statistics, index: 4},
  { title: 'Valheim', data: valheim_statistics, index: 5}
];