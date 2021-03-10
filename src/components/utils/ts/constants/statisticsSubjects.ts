/*
  * Interfaces
*/
import { StatisticsDisplayInterface } from '../../../../interfaces/interfaces';

/* 
  * Routes
*/
export const statistics: StatisticsDisplayInterface[] = [
  { title: 'Headshots %', text: '20', direction: 'up', customClassName: 'item-1' },
  { title: 'Entry frags', text: '2', direction: 'up', customClassName: 'item-2'  },
  { title: 'Flashbangs', text: '14', direction: 'down', customClassName: 'item-3'  },
  { title: 'Utility damage', text: '304', direction: 'down', customClassName: 'item-4'  },
  { title: 'Deaths', text: '10', direction: 'up', customClassName: 'item-5'  },
  { title: 'Games won %', text: '64', direction: 'up', customClassName: 'item-6'  },
  { title: 'Pistol kills', text: '4', direction: 'up', customClassName: 'item-7'  },
  { title: 'Riffle kills', text: '14', direction: 'up', customClassName: 'item-8'  },
  { title: 'Sniper kills', text: '7', direction: 'up', customClassName: 'item-9'  }
];