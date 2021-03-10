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
  { title: 'League Of Legends ', data: lol_statistics},
  { title: 'CS:GO ', data: cs_go_statistics},
  { title: 'World of Warcraft', data: wow_statistics},
  { title: 'Hearthstone ', data: hs_statistics},
  { title: 'Call of duty ', data: cod_statistics},
  { title: 'Valheim', data: valheim_statistics}
];