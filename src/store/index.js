/* eslint standard/object-curly-even-spacing: 0 */
/* eslint no-multi-spaces: 0 */

import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import fecha from 'fecha'

Vue.use(Vuex)

const store = new Store({
  state: {
    schedule: {
      1: [
        { away: 'KC',  home: 'NE',  date: formatDate(new Date(2017, 8, 7, 20, 30))  },
        { away: 'NYJ', home: 'BUF', date: formatDate(new Date(2017, 8, 10, 13, 0))  },
        { away: 'ATL', home: 'CHI', date: formatDate(new Date(2017, 8, 10, 13, 0))  },
        { away: 'BAL', home: 'CIN', date: formatDate(new Date(2017, 8, 10, 13, 0))  },
        { away: 'PIT', home: 'CLE', date: formatDate(new Date(2017, 8, 10, 13, 0))  },
        { away: 'ARI', home: 'DET', date: formatDate(new Date(2017, 8, 10, 13, 0))  },
        { away: 'JAX', home: 'HOU', date: formatDate(new Date(2017, 8, 10, 13, 0))  },
        { away: 'TB',  home: 'MIA', date: formatDate(new Date(2017, 8, 10, 13, 0))  },
        { away: 'OAK', home: 'TEN', date: formatDate(new Date(2017, 8, 10, 13, 0))  },
        { away: 'PHI', home: 'WAS', date: formatDate(new Date(2017, 8, 10, 13, 0))  },
        { away: 'IND', home: 'LAR', date: formatDate(new Date(2017, 8, 10, 17, 5))  },
        { away: 'SEA', home: 'GB',  date: formatDate(new Date(2017, 8, 10, 17, 25)) },
        { away: 'CAR', home: 'SF',  date: formatDate(new Date(2017, 8, 11, 19, 10)) },
        { away: 'NYG', home: 'DAL', date: formatDate(new Date(2017, 8, 11, 22, 20)) }
      ],
      2: [
        { away: 'CIN', home: 'HOU', date: formatDate(new Date(2017, 8, 14, 20, 25)) },
        { away: 'BUF', home: 'CAR', date: formatDate(new Date(2017, 8, 17, 13, 0))  },
        { away: 'ARI', home: 'IND', date: formatDate(new Date(2017, 8, 17, 13, 0))  },
        { away: 'TEN', home: 'JAX', date: formatDate(new Date(2017, 8, 17, 13, 0))  },
        { away: 'PHI', home: 'KC',  date: formatDate(new Date(2017, 8, 17, 13, 0))  },
        { away: 'NE',  home: 'NO',  date: formatDate(new Date(2017, 8, 17, 13, 0))  },
        { away: 'MIN', home: 'PIT', date: formatDate(new Date(2017, 8, 17, 13, 0))  },
        { away: 'CHI', home: 'TB',  date: formatDate(new Date(2017, 8, 17, 13, 0))  },
        { away: 'MIA', home: 'LAC', date: formatDate(new Date(2017, 8, 17, 13, 0))  },
        { away: 'NYJ', home: 'OAK', date: formatDate(new Date(2017, 8, 17, 13, 0))  },
        { away: 'DAL', home: 'DEN', date: formatDate(new Date(2017, 8, 17, 17, 25)) },
        { away: 'WAS', home: 'LAR', date: formatDate(new Date(2017, 8, 17, 17, 25)) },
        { away: 'SF',  home: 'SEA', date: formatDate(new Date(2017, 8, 17, 17, 25)) },
        { away: 'GB',  home: 'ATL', date: formatDate(new Date(2017, 8, 17, 20, 30)) },
        { away: 'DET', home: 'NYG', date: formatDate(new Date(2017, 8, 18, 20, 30)) }
      ],
      3: [
        { away: 'LAR', home: 'SF',  date: formatDate(new Date(2017, 8, 21, 20, 25)) },
        { away: 'BAL', home: 'JAX', date: formatDate(new Date(2017, 8, 24, 13, 0))  },
        { away: 'DEN', home: 'BUF', date: formatDate(new Date(2017, 8, 24, 13, 0))  },
        { away: 'NO',  home: 'CAR', date: formatDate(new Date(2017, 8, 24, 13, 0))  },
        { away: 'PIT', home: 'CHI', date: formatDate(new Date(2017, 8, 24, 13, 0))  },
        { away: 'ATL', home: 'DET', date: formatDate(new Date(2017, 8, 24, 13, 0))  },
        { away: 'CLE', home: 'IND', date: formatDate(new Date(2017, 8, 24, 13, 0))  },
        { away: 'TB',  home: 'MIN', date: formatDate(new Date(2017, 8, 24, 13, 0))  },
        { away: 'HOU', home: 'NE',  date: formatDate(new Date(2017, 8, 24, 13, 0))  },
        { away: 'MIA', home: 'NYJ', date: formatDate(new Date(2017, 8, 24, 13, 0))  },
        { away: 'NYG', home: 'PHI', date: formatDate(new Date(2017, 8, 24, 17, 5))  },
        { away: 'SEA', home: 'TEN', date: formatDate(new Date(2017, 8, 24, 17, 25)) },
        { away: 'CIN', home: 'GB',  date: formatDate(new Date(2017, 8, 24, 17, 25)) },
        { away: 'KC',  home: 'LAC', date: formatDate(new Date(2017, 8, 24, 17, 25)) },
        { away: 'OAK', home: 'WAS', date: formatDate(new Date(2017, 8, 24, 20, 30)) },
        { away: 'DAL', home: 'ARI', date: formatDate(new Date(2017, 8, 25, 20, 30)) }
      ],
      4: [
        { away: 'CHI', home: 'GB',  date: formatDate(new Date(2017, 8, 28, 20, 25)) },
        { away: 'NO',  home: 'MIA', date: formatDate(new Date(2017, 9, 1, 13, 0))   },
        { away: 'BUF', home: 'ATL', date: formatDate(new Date(2017, 9, 1, 13, 0))   },
        { away: 'PIT', home: 'BAL', date: formatDate(new Date(2017, 9, 1, 13, 0))   },
        { away: 'CIN', home: 'CLE', date: formatDate(new Date(2017, 9, 1, 13, 0))   },
        { away: 'LAR', home: 'DAL', date: formatDate(new Date(2017, 9, 1, 13, 0))   },
        { away: 'TEN', home: 'HOU', date: formatDate(new Date(2017, 9, 1, 13, 0))   },
        { away: 'DET', home: 'MIN', date: formatDate(new Date(2017, 9, 1, 13, 0))   },
        { away: 'CAR', home: 'NE',  date: formatDate(new Date(2017, 9, 1, 13, 0))   },
        { away: 'JAX', home: 'NYJ', date: formatDate(new Date(2017, 9, 1, 13, 0))   },
        { away: 'SF',  home: 'ARI', date: formatDate(new Date(2017, 9, 1, 17, 5))   },
        { away: 'PHI', home: 'LAC', date: formatDate(new Date(2017, 9, 1, 17, 25))  },
        { away: 'NYG', home: 'TB',  date: formatDate(new Date(2017, 9, 1, 17, 25))  },
        { away: 'OAK', home: 'DEN', date: formatDate(new Date(2017, 9, 1, 17, 25))  },
        { away: 'IND', home: 'SEA', date: formatDate(new Date(2017, 9, 1, 20, 30))  },
        { away: 'WAS', home: 'KC',  date: formatDate(new Date(2017, 9, 2, 20, 30))  }
      ],
      5: [
        { away: 'NE',  home: 'TB',  date: formatDate(new Date(2017, 9, 5, 20, 25)) },
        { away: 'BUF', home: 'CIN', date: formatDate(new Date(2017, 9, 8, 13, 0))  },
        { away: 'NYJ', home: 'CLE', date: formatDate(new Date(2017, 9, 8, 13, 0))  },
        { away: 'CAR', home: 'DET', date: formatDate(new Date(2017, 9, 8, 13, 0))  },
        { away: 'SF',  home: 'IND', date: formatDate(new Date(2017, 9, 8, 13, 0))  },
        { away: 'TEN', home: 'MIA', date: formatDate(new Date(2017, 9, 8, 13, 0))  },
        { away: 'LAC', home: 'NYG', date: formatDate(new Date(2017, 9, 8, 13, 0))  },
        { away: 'ARI', home: 'PHI', date: formatDate(new Date(2017, 9, 8, 13, 0))  },
        { away: 'JAX', home: 'PIT', date: formatDate(new Date(2017, 9, 8, 13, 0))  },
        { away: 'SEA', home: 'LAR', date: formatDate(new Date(2017, 9, 8, 13, 0))  },
        { away: 'BAL', home: 'OAK', date: formatDate(new Date(2017, 9, 8, 17, 5))  },
        { away: 'GB',  home: 'DAL', date: formatDate(new Date(2017, 9, 8, 17, 25)) },
        { away: 'KC',  home: 'HOU', date: formatDate(new Date(2017, 9, 8, 17, 25)) },
        { away: 'MIN', home: 'CHI', date: formatDate(new Date(2017, 9, 9, 20, 30)) }
      ],
      6: [
        { away: 'PHI', home: 'CAR', date: formatDate(new Date(2017, 9, 12, 20, 25)) },
        { away: 'MIA', home: 'ATL', date: formatDate(new Date(2017, 9, 15, 13, 0))  },
        { away: 'CHI', home: 'BAL', date: formatDate(new Date(2017, 9, 15, 13, 0))  },
        { away: 'CLE', home: 'HOU', date: formatDate(new Date(2017, 9, 15, 13, 0))  },
        { away: 'GB',  home: 'MIN', date: formatDate(new Date(2017, 9, 15, 13, 0))  },
        { away: 'DET', home: 'NO',  date: formatDate(new Date(2017, 9, 15, 13, 0))  },
        { away: 'NE',  home: 'NYJ', date: formatDate(new Date(2017, 9, 15, 13, 0))  },
        { away: 'SF',  home: 'WAS', date: formatDate(new Date(2017, 9, 15, 13, 0))  },
        { away: 'TB',  home: 'ARI', date: formatDate(new Date(2017, 9, 15, 13, 0))  },
        { away: 'LAR', home: 'JAX', date: formatDate(new Date(2017, 9, 15, 13, 0))  },
        { away: 'PIT', home: 'KC',  date: formatDate(new Date(2017, 9, 15, 17, 5))  },
        { away: 'LAC', home: 'OAK', date: formatDate(new Date(2017, 9, 15, 17, 25)) },
        { away: 'NYG', home: 'DEN', date: formatDate(new Date(2017, 9, 15, 17, 25)) },
        { away: 'IND', home: 'TEN', date: formatDate(new Date(2017, 9, 16, 20, 30)) }
      ],
      7: [
        { away: 'KC',  home: 'OAK', date: formatDate(new Date(2017, 9, 19, 20, 25)) },
        { away: 'TB',  home: 'BUF', date: formatDate(new Date(2017, 9, 22, 13, 0))  },
        { away: 'CAR', home: 'CHI', date: formatDate(new Date(2017, 9, 22, 13, 0))  },
        { away: 'TEN', home: 'CLE', date: formatDate(new Date(2017, 9, 22, 13, 0))  },
        { away: 'NO',  home: 'GB',  date: formatDate(new Date(2017, 9, 22, 13, 0))  },
        { away: 'JAX', home: 'IND', date: formatDate(new Date(2017, 9, 22, 13, 0))  },
        { away: 'ARI', home: 'LAR', date: formatDate(new Date(2017, 9, 22, 13, 0))  },
        { away: 'NYJ', home: 'MIA', date: formatDate(new Date(2017, 9, 22, 13, 0))  },
        { away: 'BAL', home: 'MIN', date: formatDate(new Date(2017, 9, 22, 13, 0))  },
        { away: 'CIN', home: 'PIT', date: formatDate(new Date(2017, 9, 22, 13, 0))  },
        { away: 'DAL', home: 'SF',  date: formatDate(new Date(2017, 9, 22, 17, 5))  },
        { away: 'DEN', home: 'LAC', date: formatDate(new Date(2017, 9, 22, 17, 25)) },
        { away: 'SEA', home: 'NYG', date: formatDate(new Date(2017, 9, 22, 17, 25)) },
        { away: 'ATL', home: 'NE',  date: formatDate(new Date(2017, 9, 22, 17, 25)) },
        { away: 'WAS', home: 'PHI', date: formatDate(new Date(2017, 9, 23, 20, 30)) }
      ],
      8: [
        { away: 'MIA', home: 'BAL', date: formatDate(new Date(2017, 9, 26, 20, 25)) },
        { away: 'MIN', home: 'CLE', date: formatDate(new Date(2017, 9, 29, 13, 0))  },
        { away: 'OAK', home: 'BUF', date: formatDate(new Date(2017, 9, 29, 13, 0))  },
        { away: 'IND', home: 'CIN', date: formatDate(new Date(2017, 9, 29, 13, 0))  },
        { away: 'LAC', home: 'NE',  date: formatDate(new Date(2017, 9, 29, 13, 0))  },
        { away: 'CHI', home: 'NO',  date: formatDate(new Date(2017, 9, 29, 13, 0))  },
        { away: 'ATL', home: 'NYJ', date: formatDate(new Date(2017, 9, 29, 13, 0))  },
        { away: 'SF',  home: 'PHI', date: formatDate(new Date(2017, 9, 29, 13, 0))  },
        { away: 'CAR', home: 'TB',  date: formatDate(new Date(2017, 9, 29, 13, 0))  },
        { away: 'HOU', home: 'SEA', date: formatDate(new Date(2017, 9, 29, 13, 0))  },
        { away: 'DAL', home: 'WAS', date: formatDate(new Date(2017, 9, 29, 17, 5))  },
        { away: 'PIT', home: 'DET', date: formatDate(new Date(2017, 9, 29, 17, 25)) },
        { away: 'DEN', home: 'KC',  date: formatDate(new Date(2017, 9, 30, 20, 30)) }
      ],
      9: [
        { away: 'BUF', home: 'NYJ', date: formatDate(new Date(2017, 10, 2, 20, 25)) },
        { away: 'ATL', home: 'CAR', date: formatDate(new Date(2017, 10, 5, 13, 0))  },
        { away: 'IND', home: 'HOU', date: formatDate(new Date(2017, 10, 5, 13, 0))  },
        { away: 'CIN', home: 'JAX', date: formatDate(new Date(2017, 10, 5, 13, 0))  },
        { away: 'TB',  home: 'NO',  date: formatDate(new Date(2017, 10, 5, 13, 0))  },
        { away: 'LAR', home: 'NYG', date: formatDate(new Date(2017, 10, 5, 13, 0))  },
        { away: 'DEN', home: 'PHI', date: formatDate(new Date(2017, 10, 5, 13, 0))  },
        { away: 'BAL', home: 'TEN', date: formatDate(new Date(2017, 10, 5, 13, 0))  },
        { away: 'ARI', home: 'SF',  date: formatDate(new Date(2017, 10, 5, 13, 0))  },
        { away: 'WAS', home: 'SEA', date: formatDate(new Date(2017, 10, 5, 13, 0))  },
        { away: 'KC',  home: 'DAL', date: formatDate(new Date(2017, 10, 5, 17, 5))  },
        { away: 'OAK', home: 'MIA', date: formatDate(new Date(2017, 10, 5, 17, 25)) },
        { away: 'DET', home: 'GB',  date: formatDate(new Date(2017, 10, 6, 20, 30)) }
      ],
      10: [
        { away: 'SEA', home: 'ARI', date: formatDate(new Date(2017, 10, 9, 20, 25))  },
        { away: 'NO',  home: 'BUF', date: formatDate(new Date(2017, 10, 12, 13, 0))  },
        { away: 'GB',  home: 'CHI', date: formatDate(new Date(2017, 10, 12, 13, 0))  },
        { away: 'CLE', home: 'DET', date: formatDate(new Date(2017, 10, 12, 13, 0))  },
        { away: 'PIT', home: 'IND', date: formatDate(new Date(2017, 10, 12, 13, 0))  },
        { away: 'LAC', home: 'JAX', date: formatDate(new Date(2017, 10, 12, 13, 0))  },
        { away: 'NYJ', home: 'TB',  date: formatDate(new Date(2017, 10, 12, 13, 0))  },
        { away: 'CIN', home: 'TEN', date: formatDate(new Date(2017, 10, 12, 13, 0))  },
        { away: 'MIN', home: 'WAS', date: formatDate(new Date(2017, 10, 12, 13, 0))  },
        { away: 'HOU', home: 'LAR', date: formatDate(new Date(2017, 10, 12, 13, 0))  },
        { away: 'DAL', home: 'ATL', date: formatDate(new Date(2017, 10, 12, 17, 5))  },
        { away: 'NYG', home: 'SF',  date: formatDate(new Date(2017, 10, 12, 17, 25)) },
        { away: 'NE',  home: 'DEN', date: formatDate(new Date(2017, 10, 12, 20, 30)) },
        { away: 'MIA', home: 'CAR', date: formatDate(new Date(2017, 10, 13, 20, 30)) }
      ],
      11: [
        { away: 'TEN', home: 'PIT', date: formatDate(new Date(2017, 10, 16, 20, 25)) },
        { away: 'DET', home: 'CHI', date: formatDate(new Date(2017, 10, 19, 13, 0))  },
        { away: 'BAL', home: 'GB',  date: formatDate(new Date(2017, 10, 19, 13, 0))  },
        { away: 'JAX', home: 'CLE', date: formatDate(new Date(2017, 10, 19, 13, 0))  },
        { away: 'ARI', home: 'HOU', date: formatDate(new Date(2017, 10, 19, 13, 0))  },
        { away: 'LAR', home: 'MIN', date: formatDate(new Date(2017, 10, 19, 13, 0))  },
        { away: 'WAS', home: 'NO',  date: formatDate(new Date(2017, 10, 19, 13, 0))  },
        { away: 'KC',  home: 'NYG', date: formatDate(new Date(2017, 10, 19, 13, 0))  },
        { away: 'BUF', home: 'LAC', date: formatDate(new Date(2017, 10, 19, 13, 0))  },
        { away: 'CIN', home: 'DEN', date: formatDate(new Date(2017, 10, 19, 13, 0))  },
        { away: 'NE',  home: 'OAK', date: formatDate(new Date(2017, 10, 19, 17, 5))  },
        { away: 'PHI', home: 'DAL', date: formatDate(new Date(2017, 10, 19, 17, 25)) },
        { away: 'ATL', home: 'SEA', date: formatDate(new Date(2017, 10, 20, 20, 30)) }
      ],
      12: [
        { away: 'MIN', home: 'DET', date: formatDate(new Date(2017, 10, 23, 12, 30)) },
        { away: 'LAC', home: 'DAL', date: formatDate(new Date(2017, 10, 23, 16, 30)) },
        { away: 'NYG', home: 'WAS', date: formatDate(new Date(2017, 10, 23, 20, 30)) },
        { away: 'TB',  home: 'ATL', date: formatDate(new Date(2017, 10, 26, 13, 0))  },
        { away: 'CLE', home: 'CIN', date: formatDate(new Date(2017, 10, 26, 13, 0))  },
        { away: 'TEN', home: 'IND', date: formatDate(new Date(2017, 10, 26, 13, 0))  },
        { away: 'BUF', home: 'KC',  date: formatDate(new Date(2017, 10, 26, 13, 0))  },
        { away: 'MIA', home: 'NE',  date: formatDate(new Date(2017, 10, 26, 13, 0))  },
        { away: 'CAR', home: 'NYJ', date: formatDate(new Date(2017, 10, 26, 13, 0))  },
        { away: 'CHI', home: 'PHI', date: formatDate(new Date(2017, 10, 26, 13, 0))  },
        { away: 'NO',  home: 'LAR', date: formatDate(new Date(2017, 10, 26, 17, 5))  },
        { away: 'SEA', home: 'SF',  date: formatDate(new Date(2017, 10, 26, 17, 5))  },
        { away: 'JAX', home: 'ARI', date: formatDate(new Date(2017, 10, 26, 17, 25)) },
        { away: 'DEN', home: 'OAK', date: formatDate(new Date(2017, 10, 26, 17, 25)) },
        { away: 'GB',  home: 'PIT', date: formatDate(new Date(2017, 10, 26, 20, 30)) },
        { away: 'HOU', home: 'BAL', date: formatDate(new Date(2017, 10, 27, 20, 30)) }
      ],
      13: [
        { away: 'WAS', home: 'DAL', date: formatDate(new Date(2017, 10, 30, 12, 30)) },
        { away: 'MIN', home: 'ATL', date: formatDate(new Date(2017, 11, 3, 16, 30))  },
        { away: 'DET', home: 'BAL', date: formatDate(new Date(2017, 11, 3, 20, 30))  },
        { away: 'NE',  home: 'BUF', date: formatDate(new Date(2017, 11, 3, 13, 0))   },
        { away: 'SF',  home: 'GB',  date: formatDate(new Date(2017, 11, 3, 13, 0))   },
        { away: 'IND', home: 'JAX', date: formatDate(new Date(2017, 11, 3, 13, 0))   },
        { away: 'DEN', home: 'MIA', date: formatDate(new Date(2017, 11, 3, 13, 0))   },
        { away: 'CAR', home: 'NO',  date: formatDate(new Date(2017, 11, 3, 13, 0))   },
        { away: 'KC',  home: 'NYJ', date: formatDate(new Date(2017, 11, 3, 13, 0))   },
        { away: 'HOU', home: 'TEN', date: formatDate(new Date(2017, 11, 3, 13, 0))   },
        { away: 'CLE', home: 'LAC', date: formatDate(new Date(2017, 11, 3, 17, 5))   },
        { away: 'LAR', home: 'ARI', date: formatDate(new Date(2017, 11, 3, 17, 25))  },
        { away: 'NYG', home: 'OAK', date: formatDate(new Date(2017, 11, 3, 17, 25))  },
        { away: 'PHI', home: 'SEA', date: formatDate(new Date(2017, 11, 3, 20, 30))  },
        { away: 'PIT', home: 'CIN', date: formatDate(new Date(2017, 11, 4, 20, 30))  }
      ],
      14: [
        { away: 'NO',  home: 'ATL', date: formatDate(new Date(2017, 11, 7,  12, 30))  },
        { away: 'IND', home: 'BUF', date: formatDate(new Date(2017, 11, 10, 16, 30)) },
        { away: 'MIN', home: 'CAR', date: formatDate(new Date(2017, 11, 10, 20, 30)) },
        { away: 'CHI', home: 'CIN', date: formatDate(new Date(2017, 11, 10, 13, 0))  },
        { away: 'GB',  home: 'CLE', date: formatDate(new Date(2017, 11, 10, 13, 0))  },
        { away: 'SF',  home: 'HOU', date: formatDate(new Date(2017, 11, 10, 13, 0))  },
        { away: 'SEA', home: 'JAX', date: formatDate(new Date(2017, 11, 10, 13, 0))  },
        { away: 'OAK', home: 'KC',  date: formatDate(new Date(2017, 11, 10, 13, 0))  },
        { away: 'DET', home: 'TB',  date: formatDate(new Date(2017, 11, 10, 13, 0))  },
        { away: 'TEN', home: 'ARI', date: formatDate(new Date(2017, 11, 10, 13, 0))  },
        { away: 'NYJ', home: 'DEN', date: formatDate(new Date(2017, 11, 10, 17, 5))  },
        { away: 'WAS', home: 'LAC', date: formatDate(new Date(2017, 11, 10, 17, 25)) },
        { away: 'PHI', home: 'LAR', date: formatDate(new Date(2017, 11, 10, 17, 25)) },
        { away: 'DAL', home: 'NYG', date: formatDate(new Date(2017, 11, 10, 17, 25)) },
        { away: 'BAL', home: 'PIT', date: formatDate(new Date(2017, 11, 10, 20, 30)) },
        { away: 'NE',  home: 'MIA', date: formatDate(new Date(2017, 11, 11, 20, 30)) }
      ],
      15: [
        { away: 'DEN', home: 'IND', date: formatDate(new Date(2017, 11, 14, 20, 25)) },
        { away: 'CHI', home: 'DET', date: formatDate(new Date(2017, 11, 16, 16, 30)) },
        { away: 'LAC', home: 'KC',  date: formatDate(new Date(2017, 11, 16, 20, 25)) },
        { away: 'MIA', home: 'BUF', date: formatDate(new Date(2017, 11, 17, 13, 0))  },
        { away: 'GB',  home: 'CAR', date: formatDate(new Date(2017, 11, 17, 13, 0))  },
        { away: 'BAL', home: 'CLE', date: formatDate(new Date(2017, 11, 17, 13, 0))  },
        { away: 'HOU', home: 'JAX', date: formatDate(new Date(2017, 11, 17, 13, 0))  },
        { away: 'CIN', home: 'MIN', date: formatDate(new Date(2017, 11, 17, 13, 0))  },
        { away: 'NYJ', home: 'NO',  date: formatDate(new Date(2017, 11, 17, 13, 0))  },
        { away: 'PHI', home: 'NYG', date: formatDate(new Date(2017, 11, 17, 13, 0))  },
        { away: 'ARI', home: 'WAS', date: formatDate(new Date(2017, 11, 17, 13, 0))  },
        { away: 'LAR', home: 'SEA', date: formatDate(new Date(2017, 11, 17, 17, 5))  },
        { away: 'NE',  home: 'PIT', date: formatDate(new Date(2017, 11, 17, 17, 25)) },
        { away: 'TEN', home: 'SF',  date: formatDate(new Date(2017, 11, 17, 17, 25)) },
        { away: 'DAL', home: 'OAK', date: formatDate(new Date(2017, 11, 17, 20, 30)) },
        { away: 'ATL', home: 'TB',  date: formatDate(new Date(2017, 11, 18, 20, 30)) }
      ],
      16: [
        { away: 'IND', home: 'BAL', date: formatDate(new Date(2017, 11, 23, 16, 30)) },
        { away: 'MIN', home: 'GB',  date: formatDate(new Date(2017, 11, 23, 20, 30)) },
        { away: 'TB',  home: 'CAR', date: formatDate(new Date(2017, 11, 24, 13, 0))  },
        { away: 'CLE', home: 'CHI', date: formatDate(new Date(2017, 11, 24, 13, 0))  },
        { away: 'DET', home: 'CIN', date: formatDate(new Date(2017, 11, 24, 13, 0))  },
        { away: 'MIA', home: 'KC',  date: formatDate(new Date(2017, 11, 24, 13, 0))  },
        { away: 'BUF', home: 'NE',  date: formatDate(new Date(2017, 11, 24, 13, 0))  },
        { away: 'ATL', home: 'NO',  date: formatDate(new Date(2017, 11, 24, 13, 0))  },
        { away: 'LAC', home: 'NYJ', date: formatDate(new Date(2017, 11, 24, 13, 0))  },
        { away: 'LAR', home: 'TEN', date: formatDate(new Date(2017, 11, 24, 13, 0))  },
        { away: 'DEN', home: 'WAS', date: formatDate(new Date(2017, 11, 24, 13, 0))  },
        { away: 'JAX', home: 'SF',  date: formatDate(new Date(2017, 11, 24, 14, 5))  },
        { away: 'NYG', home: 'ARI', date: formatDate(new Date(2017, 11, 24, 16, 25)) },
        { away: 'SEA', home: 'DAL', date: formatDate(new Date(2017, 11, 24, 16, 25)) },
        { away: 'PIT', home: 'HOU', date: formatDate(new Date(2017, 11, 25, 16, 30)) },
        { away: 'OAK', home: 'PHI', date: formatDate(new Date(2017, 11, 25, 20, 30)) }
      ],
      17: [
        { away: 'CAR', home: 'ATL', date: formatDate(new Date(2017, 11, 31, 13, 0))  },
        { away: 'CIN', home: 'BAL', date: formatDate(new Date(2017, 11, 31, 13, 0))  },
        { away: 'GB',  home: 'DET', date: formatDate(new Date(2017, 11, 31, 13, 0))  },
        { away: 'HOU', home: 'IND', date: formatDate(new Date(2017, 11, 31, 13, 0))  },
        { away: 'BUF', home: 'MIA', date: formatDate(new Date(2017, 11, 31, 13, 0))  },
        { away: 'CHI', home: 'MIN', date: formatDate(new Date(2017, 11, 31, 13, 0))  },
        { away: 'NYJ', home: 'NE',  date: formatDate(new Date(2017, 11, 31, 13, 0))  },
        { away: 'WAS', home: 'NYG', date: formatDate(new Date(2017, 11, 31, 13, 0))  },
        { away: 'DAL', home: 'PHI', date: formatDate(new Date(2017, 11, 31, 13, 0))  },
        { away: 'CLE', home: 'PIT', date: formatDate(new Date(2017, 11, 31, 13, 0))  },
        { away: 'NO',  home: 'TB',  date: formatDate(new Date(2017, 11, 31, 13, 0))  },
        { away: 'JAX', home: 'TEN', date: formatDate(new Date(2017, 11, 31, 13, 0))  },
        { away: 'KC',  home: 'DEN', date: formatDate(new Date(2017, 11, 31, 16, 25)) },
        { away: 'OAK', home: 'LAC', date: formatDate(new Date(2017, 11, 31, 16, 25)) },
        { away: 'SF',  home: 'LAR', date: formatDate(new Date(2017, 11, 31, 16, 25)) },
        { away: 'ARI', home: 'SEA', date: formatDate(new Date(2017, 11, 31, 16, 25)) }
      ]
    },
    teams: {
      'ARI': {
        team: 'Arizona',
        nickname: 'Cardinals'
      },
      'ATL': {
        team: 'Atlanta',
        nickname: 'Falcons'
      },
      'BAL': {
        team: 'Baltimore',
        nickname: 'Ravens'
      },
      'BUF': {
        team: 'Buffalo',
        nickname: 'Bills'
      },
      'CAR': {
        team: 'Carolina',
        nickname: 'Panthers'
      },
      'CHI': {
        team: 'Chicago',
        nickname: 'Bears'
      },
      'CIN': {
        team: 'Cincinnati',
        nickname: 'Bengals'
      },
      'CLE': {
        team: 'Cleveland',
        nickname: 'Browns'
      },
      'DAL': {
        team: 'Dallas',
        nickname: 'Cowboys'
      },
      'DEN': {
        team: 'Denver',
        nickname: 'Broncos'
      },
      'DET': {
        team: 'Detroit',
        nickname: 'Lions'
      },
      'GB': {
        team: 'Green Bay',
        nickname: 'Packers'
      },
      'HOU': {
        team: 'Houston',
        nickname: 'Texans'
      },
      'IND': {
        team: 'Indianapolis',
        nickname: 'Colts'
      },
      'JAX': {
        team: 'Jacksonville',
        nickname: 'Jaguars'
      },
      'KC': {
        team: 'Kansas City',
        nickname: 'Chiefs'
      },
      'LAC': {
        team: 'Los Angeles',
        nickname: 'Chargers'
      },
      'LAR': {
        team: 'Los Angeles',
        nickname: 'Rams'
      },
      'MIA': {
        team: 'Miami',
        nickname: 'Dolphins'
      },
      'MIN': {
        team: 'Minnesota',
        nickname: 'Vikings'
      },
      'NE': {
        team: 'New England',
        nickname: 'Patriots'
      },
      'NO': {
        team: 'New Orleans',
        nickname: 'Saints'
      },
      'NYG': {
        team: 'New York',
        nickname: 'Giants'
      },
      'NYJ': {
        team: 'New York',
        nickname: 'Jets'
      },
      'OAK': {
        team: 'Oakland',
        nickname: 'Raiders'
      },
      'PHI': {
        team: 'Philadelphia',
        nickname: 'Eagles'
      },
      'PIT': {
        team: 'Pittsburgh',
        nickname: 'Steelers'
      },
      'SF': {
        team: 'San Francisco',
        nickname: '49ers'
      },
      'SEA': {
        team: 'Seattle',
        nickname: 'Seahawks'
      },
      'TB': {
        team: 'Tampa Bay',
        nickname: 'Buccaneers'
      },
      'TEN': {
        team: 'Tennessee',
        nickname: 'Titans'
      },
      'WAS': {
        team: 'Washington',
        nickname: 'Redskins'
      }
    },
    favorites: []
  },
  getters: {
    schedule: state => state.schedule,
    teams: state => state.teams,
    favorites: state => state.favorites
  },
  actions: {
    addFavorite ({ commit }, matchup) {
      commit('ADD_FAVORITE', matchup)
    },
    removeFavorite ({ commit }, matchup) {
      commit('REMOVE_FAVORITE', matchup)
    },
    loadFavorites ({ commit }) {
      let favorites = JSON.parse(window.localStorage.getItem('nfltrip:faves'))

      if (!favorites) {
        window.localStorage.setItem('nfltrip:faves', '[]')
        favorites = []
      }

      commit('LOAD_FAVORITES', favorites)
    }
  },
  mutations: {
    LOAD_FAVORITES (state, favorites) {
      state.favorites = favorites
    },
    ADD_FAVORITE ({ favorites }, matchup) {
      favorites.push(matchup)

      window.localStorage.setItem('nfltrip:faves', JSON.stringify(favorites))
    },
    REMOVE_FAVORITE (state, matchup) {
      state.favorites = state.favorites.filter(m => {
        if (m.home === matchup.home && m.away === matchup.away && m.date === matchup.date) {
          return false
        }

        return true
      })

      window.localStorage.setItem('nfltrip:faves', JSON.stringify(state.favorites))
    }
  }
})

function formatDate (date) {
  return fecha.format(date, 'dddd, MMMM Do YYYY, h:mm a')
}

export default store
