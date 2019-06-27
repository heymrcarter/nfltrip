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
        {
          away: 'GB',
          home: 'CHI',
          date: formatDate(new Date(1567729200000))
        },
        {
          away: 'TEN',
          home: 'CLE',
          date: formatDate(new Date(1567962000000))
        },
        {
          away: 'BAL',
          home: 'MIA',
          date: formatDate(new Date(1567962000000))
        },
        {
          away: 'ATL',
          home: 'MIN',
          date: formatDate(new Date(1567962000000))
        },
        {
          away: 'BUF',
          home: 'NYJ',
          date: formatDate(new Date(1567962000000))
        },
        {
          away: 'WSH',
          home: 'PHI',
          date: formatDate(new Date(1567962000000))
        },
        {
          away: 'LAR',
          home: 'CAR',
          date: formatDate(new Date(1567962000000))
        },
        {
          away: 'KC',
          home: 'JAX',
          date: formatDate(new Date(1567962000000))
        },
        {
          away: 'IND',
          home: 'LAC',
          date: formatDate(new Date(1567973100000))
        },
        {
          away: 'CIN',
          home: 'SEA',
          date: formatDate(new Date(1567973100000))
        },
        {
          away: 'NYG',
          home: 'DAL',
          date: formatDate(new Date(1567974300000))
        },
        {
          away: 'DET',
          home: 'ARI',
          date: formatDate(new Date(1567974300000))
        },
        {
          away: 'SF',
          home: 'TB',
          date: formatDate(new Date(1567974300000))
        },
        {
          away: 'PIT',
          home: 'NE',
          date: formatDate(new Date(1567988400000))
        },
        {
          away: 'HOU',
          home: 'NO',
          date: formatDate(new Date(1568070600000))
        },
        {
          away: 'DEN',
          home: 'OAK',
          date: formatDate(new Date(1568082000000))
        }
      ],
      2: [
        {
          away: 'TB',
          home: 'CAR',
          date: formatDate(new Date(1568334000000))
        },
        {
          away: 'SF',
          home: 'CIN',
          date: formatDate(new Date(1568566800000))
        },
        {
          away: 'LAC',
          home: 'DET',
          date: formatDate(new Date(1568566800000))
        },
        {
          away: 'MIN',
          home: 'GB',
          date: formatDate(new Date(1568566800000))
        },
        {
          away: 'IND',
          home: 'TEN',
          date: formatDate(new Date(1568566800000))
        },
        {
          away: 'NE',
          home: 'MIA',
          date: formatDate(new Date(1568566800000))
        },
        {
          away: 'BUF',
          home: 'NYG',
          date: formatDate(new Date(1568566800000))
        },
        {
          away: 'SEA',
          home: 'PIT',
          date: formatDate(new Date(1568566800000))
        },
        {
          away: 'DAL',
          home: 'WSH',
          date: formatDate(new Date(1568566800000))
        },
        {
          away: 'ARI',
          home: 'BAL',
          date: formatDate(new Date(1568566800000))
        },
        {
          away: 'JAX',
          home: 'HOU',
          date: formatDate(new Date(1568566800000))
        },
        {
          away: 'KC',
          home: 'OAK',
          date: formatDate(new Date(1568577900000))
        },
        {
          away: 'CHI',
          home: 'DEN',
          date: formatDate(new Date(1568579100000))
        },
        {
          away: 'NO',
          home: 'LAR',
          date: formatDate(new Date(1568579100000))
        },
        {
          away: 'PHI',
          home: 'ATL',
          date: formatDate(new Date(1568593200000))
        },
        {
          away: 'CLE',
          home: 'NYJ',
          date: formatDate(new Date(1568679300000))
        }
      ],
      3: [
        {
          away: 'TEN',
          home: 'JAX',
          date: formatDate(new Date(1568938800000))
        },
        {
          away: 'CIN',
          home: 'BUF',
          date: formatDate(new Date(1569171600000))
        },
        {
          away: 'MIA',
          home: 'DAL',
          date: formatDate(new Date(1569171600000))
        },
        {
          away: 'DEN',
          home: 'GB',
          date: formatDate(new Date(1569171600000))
        },
        {
          away: 'ATL',
          home: 'IND',
          date: formatDate(new Date(1569171600000))
        },
        {
          away: 'BAL',
          home: 'KC',
          date: formatDate(new Date(1569171600000))
        },
        {
          away: 'OAK',
          home: 'MIN',
          date: formatDate(new Date(1569171600000))
        },
        {
          away: 'NYJ',
          home: 'NE',
          date: formatDate(new Date(1569171600000))
        },
        {
          away: 'DET',
          home: 'PHI',
          date: formatDate(new Date(1569171600000))
        },
        {
          away: 'CAR',
          home: 'ARI',
          date: formatDate(new Date(1569182700000))
        },
        {
          away: 'NYG',
          home: 'TB',
          date: formatDate(new Date(1569182700000))
        },
        {
          away: 'HOU',
          home: 'LAC',
          date: formatDate(new Date(1569183900000))
        },
        {
          away: 'PIT',
          home: 'SF',
          date: formatDate(new Date(1569183900000))
        },
        {
          away: 'NO',
          home: 'SEA',
          date: formatDate(new Date(1569183900000))
        },
        {
          away: 'LAR',
          home: 'CLE',
          date: formatDate(new Date(1569198000000))
        },
        {
          away: 'CHI',
          home: 'WSH',
          date: formatDate(new Date(1569284100000))
        }
      ],
      4: [
        {
          away: 'PHI',
          home: 'GB',
          date: formatDate(new Date(1569543600000))
        },
        {
          away: 'TEN',
          home: 'ATL',
          date: formatDate(new Date(1569776400000))
        },
        {
          away: 'NE',
          home: 'BUF',
          date: formatDate(new Date(1569776400000))
        },
        {
          away: 'KC',
          home: 'DET',
          date: formatDate(new Date(1569776400000))
        },
        {
          away: 'OAK',
          home: 'IND',
          date: formatDate(new Date(1569776400000))
        },
        {
          away: 'LAC',
          home: 'MIA',
          date: formatDate(new Date(1569776400000))
        },
        {
          away: 'WSH',
          home: 'NYG',
          date: formatDate(new Date(1569776400000))
        },
        {
          away: 'CLE',
          home: 'BAL',
          date: formatDate(new Date(1569776400000))
        },
        {
          away: 'CAR',
          home: 'HOU',
          date: formatDate(new Date(1569776400000))
        },
        {
          away: 'TB',
          home: 'LAR',
          date: formatDate(new Date(1569787500000))
        },
        {
          away: 'SEA',
          home: 'ARI',
          date: formatDate(new Date(1569787500000))
        },
        {
          away: 'MIN',
          home: 'CHI',
          date: formatDate(new Date(1569788700000))
        },
        {
          away: 'JAX',
          home: 'DEN',
          date: formatDate(new Date(1569788700000))
        },
        {
          away: 'DAL',
          home: 'NO',
          date: formatDate(new Date(1569802800000))
        },
        {
          away: 'CIN',
          home: 'PIT',
          date: formatDate(new Date(1569888900000))
        }
      ],
      5: [
        {
          away: 'LAR',
          home: 'SEA',
          date: formatDate(new Date(1570148400000))
        },
        {
          away: 'ARI',
          home: 'CIN',
          date: formatDate(new Date(1570381200000))
        },
        {
          away: 'BUF',
          home: 'TEN',
          date: formatDate(new Date(1570381200000))
        },
        {
          away: 'CHI',
          home: 'OAK',
          date: formatDate(new Date(1570381200000))
        },
        {
          away: 'TB',
          home: 'NO',
          date: formatDate(new Date(1570381200000))
        },
        {
          away: 'MIN',
          home: 'NYG',
          date: formatDate(new Date(1570381200000))
        },
        {
          away: 'NYJ',
          home: 'PHI',
          date: formatDate(new Date(1570381200000))
        },
        {
          away: 'BAL',
          home: 'PIT',
          date: formatDate(new Date(1570381200000))
        },
        {
          away: 'NE',
          home: 'WSH',
          date: formatDate(new Date(1570381200000))
        },
        {
          away: 'JAX',
          home: 'CAR',
          date: formatDate(new Date(1570381200000))
        },
        {
          away: 'ATL',
          home: 'HOU',
          date: formatDate(new Date(1570381200000))
        },
        {
          away: 'DEN',
          home: 'LAC',
          date: formatDate(new Date(1570392300000))
        },
        {
          away: 'GB',
          home: 'DAL',
          date: formatDate(new Date(1570393500000))
        },
        {
          away: 'IND',
          home: 'KC',
          date: formatDate(new Date(1570407600000))
        },
        {
          away: 'CLE',
          home: 'SF',
          date: formatDate(new Date(1570493700000))
        }
      ],
      6: [
        {
          away: 'NYG',
          home: 'NE',
          date: formatDate(new Date(1570753200000))
        },
        {
          away: 'CAR',
          home: 'TB',
          date: formatDate(new Date(1571016600000))
        },
        {
          away: 'SEA',
          home: 'CLE',
          date: formatDate(new Date(1570986000000))
        },
        {
          away: 'HOU',
          home: 'KC',
          date: formatDate(new Date(1570986000000))
        },
        {
          away: 'WSH',
          home: 'MIA',
          date: formatDate(new Date(1570986000000))
        },
        {
          away: 'PHI',
          home: 'MIN',
          date: formatDate(new Date(1570986000000))
        },
        {
          away: 'NO',
          home: 'JAX',
          date: formatDate(new Date(1570986000000))
        },
        {
          away: 'CIN',
          home: 'BAL',
          date: formatDate(new Date(1570986000000))
        },
        {
          away: 'SF',
          home: 'LAR',
          date: formatDate(new Date(1570997100000))
        },
        {
          away: 'ATL',
          home: 'ARI',
          date: formatDate(new Date(1570997100000))
        },
        {
          away: 'TEN',
          home: 'DEN',
          date: formatDate(new Date(1570998300000))
        },
        {
          away: 'DAL',
          home: 'NYJ',
          date: formatDate(new Date(1570998300000))
        },
        {
          away: 'PIT',
          home: 'LAC',
          date: formatDate(new Date(1571012400000))
        },
        {
          away: 'DET',
          home: 'GB',
          date: formatDate(new Date(1571098500000))
        }
      ],
      7: [
        {
          away: 'KC',
          home: 'DEN',
          date: formatDate(new Date(1571358000000))
        },
        {
          away: 'LAR',
          home: 'ATL',
          date: formatDate(new Date(1571590800000))
        },
        {
          away: 'MIA',
          home: 'BUF',
          date: formatDate(new Date(1571590800000))
        },
        {
          away: 'JAX',
          home: 'CIN',
          date: formatDate(new Date(1571590800000))
        },
        {
          away: 'MIN',
          home: 'DET',
          date: formatDate(new Date(1571590800000))
        },
        {
          away: 'OAK',
          home: 'GB',
          date: formatDate(new Date(1571590800000))
        },
        {
          away: 'HOU',
          home: 'IND',
          date: formatDate(new Date(1571590800000))
        },
        {
          away: 'ARI',
          home: 'NYG',
          date: formatDate(new Date(1571590800000))
        },
        {
          away: 'SF',
          home: 'WSH',
          date: formatDate(new Date(1571590800000))
        },
        {
          away: 'LAC',
          home: 'TEN',
          date: formatDate(new Date(1571601900000))
        },
        {
          away: 'NO',
          home: 'CHI',
          date: formatDate(new Date(1571603100000))
        },
        {
          away: 'BAL',
          home: 'SEA',
          date: formatDate(new Date(1571603100000))
        },
        {
          away: 'PHI',
          home: 'DAL',
          date: formatDate(new Date(1571617200000))
        },
        {
          away: 'NE',
          home: 'NYJ',
          date: formatDate(new Date(1571703300000))
        }
      ],
      8: [
        {
          away: 'WSH',
          home: 'MIN',
          date: formatDate(new Date(1571962800000))
        },
        {
          away: 'SEA',
          home: 'ATL',
          date: formatDate(new Date(1572195600000))
        },
        {
          away: 'PHI',
          home: 'BUF',
          date: formatDate(new Date(1572195600000))
        },
        {
          away: 'LAC',
          home: 'CHI',
          date: formatDate(new Date(1572195600000))
        },
        {
          away: 'NYG',
          home: 'DET',
          date: formatDate(new Date(1572195600000))
        },
        {
          away: 'TB',
          home: 'TEN',
          date: formatDate(new Date(1572195600000))
        },
        {
          away: 'CIN',
          home: 'LAR',
          date: formatDate(new Date(1572195600000))
        },
        {
          away: 'ARI',
          home: 'NO',
          date: formatDate(new Date(1572195600000))
        },
        {
          away: 'NYJ',
          home: 'JAX',
          date: formatDate(new Date(1572195600000))
        },
        {
          away: 'OAK',
          home: 'HOU',
          date: formatDate(new Date(1572195600000))
        },
        {
          away: 'CAR',
          home: 'SF',
          date: formatDate(new Date(1572206700000))
        },
        {
          away: 'DEN',
          home: 'IND',
          date: formatDate(new Date(1572207900000))
        },
        {
          away: 'CLE',
          home: 'NE',
          date: formatDate(new Date(1572207900000))
        },
        {
          away: 'GB',
          home: 'KC',
          date: formatDate(new Date(1572222000000))
        },
        {
          away: 'MIA',
          home: 'PIT',
          date: formatDate(new Date(1572308100000))
        }
      ],
      9: [
        {
          away: 'SF',
          home: 'ARI',
          date: formatDate(new Date(1572567600000))
        },
        {
          away: 'HOU',
          home: 'JAX',
          date: formatDate(new Date(1572834600000))
        },
        {
          away: 'WSH',
          home: 'BUF',
          date: formatDate(new Date(1572804000000))
        },
        {
          away: 'MIN',
          home: 'KC',
          date: formatDate(new Date(1572804000000))
        },
        {
          away: 'NYJ',
          home: 'MIA',
          date: formatDate(new Date(1572804000000))
        },
        {
          away: 'CHI',
          home: 'PHI',
          date: formatDate(new Date(1572804000000))
        },
        {
          away: 'IND',
          home: 'PIT',
          date: formatDate(new Date(1572804000000))
        },
        {
          away: 'TEN',
          home: 'CAR',
          date: formatDate(new Date(1572804000000))
        },
        {
          away: 'DET',
          home: 'OAK',
          date: formatDate(new Date(1572815100000))
        },
        {
          away: 'TB',
          home: 'SEA',
          date: formatDate(new Date(1572815100000))
        },
        {
          away: 'CLE',
          home: 'DEN',
          date: formatDate(new Date(1572816300000))
        },
        {
          away: 'GB',
          home: 'LAC',
          date: formatDate(new Date(1572816300000))
        },
        {
          away: 'NE',
          home: 'BAL',
          date: formatDate(new Date(1572830400000))
        },
        {
          away: 'DAL',
          home: 'NYG',
          date: formatDate(new Date(1572916500000))
        }
      ],
      10: [
        {
          away: 'LAC',
          home: 'OAK',
          date: formatDate(new Date(1573176000000))
        },
        {
          away: 'DET',
          home: 'CHI',
          date: formatDate(new Date(1573408800000))
        },
        {
          away: 'BAL',
          home: 'CIN',
          date: formatDate(new Date(1573408800000))
        },
        {
          away: 'BUF',
          home: 'CLE',
          date: formatDate(new Date(1573408800000))
        },
        {
          away: 'CAR',
          home: 'GB',
          date: formatDate(new Date(1573408800000))
        },
        {
          away: 'KC',
          home: 'TEN',
          date: formatDate(new Date(1573408800000))
        },
        {
          away: 'ATL',
          home: 'NO',
          date: formatDate(new Date(1573408800000))
        },
        {
          away: 'NYG',
          home: 'NYJ',
          date: formatDate(new Date(1573408800000))
        },
        {
          away: 'ARI',
          home: 'TB',
          date: formatDate(new Date(1573408800000))
        },
        {
          away: 'MIA',
          home: 'IND',
          date: formatDate(new Date(1573419900000))
        },
        {
          away: 'LAR',
          home: 'PIT',
          date: formatDate(new Date(1573421100000))
        },
        {
          away: 'MIN',
          home: 'DAL',
          date: formatDate(new Date(1573435200000))
        },
        {
          away: 'SEA',
          home: 'SF',
          date: formatDate(new Date(1573521300000))
        }
      ],
      11: [
        {
          away: 'PIT',
          home: 'CLE',
          date: formatDate(new Date(1573780800000))
        },
        {
          away: 'DAL',
          home: 'DET',
          date: formatDate(new Date(1574013600000))
        },
        {
          away: 'JAX',
          home: 'IND',
          date: formatDate(new Date(1574013600000))
        },
        {
          away: 'BUF',
          home: 'MIA',
          date: formatDate(new Date(1574013600000))
        },
        {
          away: 'DEN',
          home: 'MIN',
          date: formatDate(new Date(1574013600000))
        },
        {
          away: 'NO',
          home: 'TB',
          date: formatDate(new Date(1574013600000))
        },
        {
          away: 'NYJ',
          home: 'WSH',
          date: formatDate(new Date(1574013600000))
        },
        {
          away: 'ATL',
          home: 'CAR',
          date: formatDate(new Date(1574013600000))
        },
        {
          away: 'HOU',
          home: 'BAL',
          date: formatDate(new Date(1574013600000))
        },
        {
          away: 'ARI',
          home: 'SF',
          date: formatDate(new Date(1574024700000))
        },
        {
          away: 'CIN',
          home: 'OAK',
          date: formatDate(new Date(1574025900000))
        },
        {
          away: 'NE',
          home: 'PHI',
          date: formatDate(new Date(1574025900000))
        },
        {
          away: 'CHI',
          home: 'LAR',
          date: formatDate(new Date(1574040000000))
        },
        {
          away: 'KC',
          home: 'LAC',
          date: formatDate(new Date(1574126100000))
        }
      ],
      12: [
        {
          away: 'IND',
          home: 'HOU',
          date: formatDate(new Date(1574385600000))
        },
        {
          away: 'TB',
          home: 'ATL',
          date: formatDate(new Date(1574618400000))
        },
        {
          away: 'DEN',
          home: 'BUF',
          date: formatDate(new Date(1574618400000))
        },
        {
          away: 'NYG',
          home: 'CHI',
          date: formatDate(new Date(1574618400000))
        },
        {
          away: 'PIT',
          home: 'CIN',
          date: formatDate(new Date(1574618400000))
        },
        {
          away: 'MIA',
          home: 'CLE',
          date: formatDate(new Date(1574618400000))
        },
        {
          away: 'CAR',
          home: 'NO',
          date: formatDate(new Date(1574618400000))
        },
        {
          away: 'OAK',
          home: 'NYJ',
          date: formatDate(new Date(1574618400000))
        },
        {
          away: 'DET',
          home: 'WSH',
          date: formatDate(new Date(1574618400000))
        },
        {
          away: 'JAX',
          home: 'TEN',
          date: formatDate(new Date(1574629500000))
        },
        {
          away: 'DAL',
          home: 'NE',
          date: formatDate(new Date(1574630700000))
        },
        {
          away: 'GB',
          home: 'SF',
          date: formatDate(new Date(1574630700000))
        },
        {
          away: 'SEA',
          home: 'PHI',
          date: formatDate(new Date(1574644800000))
        },
        {
          away: 'BAL',
          home: 'LAR',
          date: formatDate(new Date(1574730900000))
        }
      ],
      13: [
        {
          away: 'CHI',
          home: 'DET',
          date: formatDate(new Date(1574962200000))
        },
        {
          away: 'BUF',
          home: 'DAL',
          date: formatDate(new Date(1574976600000))
        },
        {
          away: 'NO',
          home: 'ATL',
          date: formatDate(new Date(1574990400000))
        },
        {
          away: 'NYJ',
          home: 'CIN',
          date: formatDate(new Date(1575223200000))
        },
        {
          away: 'TEN',
          home: 'IND',
          date: formatDate(new Date(1575223200000))
        },
        {
          away: 'OAK',
          home: 'KC',
          date: formatDate(new Date(1575223200000))
        },
        {
          away: 'PHI',
          home: 'MIA',
          date: formatDate(new Date(1575223200000))
        },
        {
          away: 'GB',
          home: 'NYG',
          date: formatDate(new Date(1575223200000))
        },
        {
          away: 'WSH',
          home: 'CAR',
          date: formatDate(new Date(1575223200000))
        },
        {
          away: 'TB',
          home: 'JAX',
          date: formatDate(new Date(1575223200000))
        },
        {
          away: 'SF',
          home: 'BAL',
          date: formatDate(new Date(1575223200000))
        },
        {
          away: 'LAR',
          home: 'ARI',
          date: formatDate(new Date(1575234300000))
        },
        {
          away: 'LAC',
          home: 'DEN',
          date: formatDate(new Date(1575235500000))
        },
        {
          away: 'CLE',
          home: 'PIT',
          date: formatDate(new Date(1575235500000))
        },
        {
          away: 'NE',
          home: 'HOU',
          date: formatDate(new Date(1575249600000))
        },
        {
          away: 'MIN',
          home: 'SEA',
          date: formatDate(new Date(1575335700000))
        }
      ],
      14: [
        {
          away: 'DAL',
          home: 'CHI',
          date: formatDate(new Date(1575595200000))
        },
        {
          away: 'CAR',
          home: 'ATL',
          date: formatDate(new Date(1575828000000))
        },
        {
          away: 'BAL',
          home: 'BUF',
          date: formatDate(new Date(1575828000000))
        },
        {
          away: 'CIN',
          home: 'CLE',
          date: formatDate(new Date(1575828000000))
        },
        {
          away: 'WSH',
          home: 'GB',
          date: formatDate(new Date(1575828000000))
        },
        {
          away: 'DET',
          home: 'MIN',
          date: formatDate(new Date(1575828000000))
        },
        {
          away: 'SF',
          home: 'NO',
          date: formatDate(new Date(1575828000000))
        },
        {
          away: 'MIA',
          home: 'NYJ',
          date: formatDate(new Date(1575828000000))
        },
        {
          away: 'IND',
          home: 'TB',
          date: formatDate(new Date(1575828000000))
        },
        {
          away: 'DEN',
          home: 'HOU',
          date: formatDate(new Date(1575828000000))
        },
        {
          away: 'LAC',
          home: 'JAX',
          date: formatDate(new Date(1575839100000))
        },
        {
          away: 'TEN',
          home: 'OAK',
          date: formatDate(new Date(1575840300000))
        },
        {
          away: 'KC',
          home: 'NE',
          date: formatDate(new Date(1575840300000))
        },
        {
          away: 'PIT',
          home: 'ARI',
          date: formatDate(new Date(1575840300000))
        },
        {
          away: 'SEA',
          home: 'LAR',
          date: formatDate(new Date(1575854400000))
        },
        {
          away: 'NYG',
          home: 'PHI',
          date: formatDate(new Date(1575940500000))
        }
      ],
      15: [
        {
          away: 'NYJ',
          home: 'BAL',
          date: formatDate(new Date(1576200000000))
        },
        {
          away: 'NE',
          home: 'CIN',
          date: formatDate(new Date(1576432800000))
        },
        {
          away: 'TB',
          home: 'DET',
          date: formatDate(new Date(1576432800000))
        },
        {
          away: 'CHI',
          home: 'GB',
          date: formatDate(new Date(1576432800000))
        },
        {
          away: 'HOU',
          home: 'TEN',
          date: formatDate(new Date(1576432800000))
        },
        {
          away: 'DEN',
          home: 'KC',
          date: formatDate(new Date(1576432800000))
        },
        {
          away: 'MIA',
          home: 'NYG',
          date: formatDate(new Date(1576432800000))
        },
        {
          away: 'BUF',
          home: 'PIT',
          date: formatDate(new Date(1576432800000))
        },
        {
          away: 'PHI',
          home: 'WSH',
          date: formatDate(new Date(1576432800000))
        },
        {
          away: 'SEA',
          home: 'CAR',
          date: formatDate(new Date(1576432800000))
        },
        {
          away: 'JAX',
          home: 'OAK',
          date: formatDate(new Date(1576443900000))
        },
        {
          away: 'CLE',
          home: 'ARI',
          date: formatDate(new Date(1576443900000))
        },
        {
          away: 'LAR',
          home: 'DAL',
          date: formatDate(new Date(1576445100000))
        },
        {
          away: 'ATL',
          home: 'SF',
          date: formatDate(new Date(1576445100000))
        },
        {
          away: 'MIN',
          home: 'LAC',
          date: formatDate(new Date(1576459200000))
        },
        {
          away: 'IND',
          home: 'NO',
          date: formatDate(new Date(1576545300000))
        }
      ],
      16: [
        {
          away: 'DET',
          home: 'DEN',
          date: formatDate(new Date(1577037600000))
        },
        {
          away: 'BUF',
          home: 'NE',
          date: formatDate(new Date(1577037600000))
        },
        {
          away: 'OAK',
          home: 'LAC',
          date: formatDate(new Date(1577037600000))
        },
        {
          away: 'LAR',
          home: 'SF',
          date: formatDate(new Date(1577037600000))
        },
        {
          away: 'HOU',
          home: 'TB',
          date: formatDate(new Date(1577037600000))
        },
        {
          away: 'JAX',
          home: 'ATL',
          date: formatDate(new Date(1577037600000))
        },
        {
          away: 'BAL',
          home: 'CLE',
          date: formatDate(new Date(1577037600000))
        },
        {
          away: 'NO',
          home: 'TEN',
          date: formatDate(new Date(1577037600000))
        },
        {
          away: 'CAR',
          home: 'IND',
          date: formatDate(new Date(1577037600000))
        },
        {
          away: 'CIN',
          home: 'MIA',
          date: formatDate(new Date(1577037600000))
        },
        {
          away: 'PIT',
          home: 'NYJ',
          date: formatDate(new Date(1577037600000))
        },
        {
          away: 'NYG',
          home: 'WSH',
          date: formatDate(new Date(1577037600000))
        },
        {
          away: 'DAL',
          home: 'PHI',
          date: formatDate(new Date(1577049900000))
        },
        {
          away: 'ARI',
          home: 'SEA',
          date: formatDate(new Date(1577049900000))
        },
        {
          away: 'KC',
          home: 'CHI',
          date: formatDate(new Date(1577064000000))
        },
        {
          away: 'GB',
          home: 'MIN',
          date: formatDate(new Date(1577150100000))
        }
      ],
      17: [
        {
          away: 'NYJ',
          home: 'BUF',
          date: formatDate(new Date(1577642400000))
        },
        {
          away: 'CLE',
          home: 'CIN',
          date: formatDate(new Date(1577642400000))
        },
        {
          away: 'WSH',
          home: 'DAL',
          date: formatDate(new Date(1577642400000))
        },
        {
          away: 'GB',
          home: 'DET',
          date: formatDate(new Date(1577642400000))
        },
        {
          away: 'LAC',
          home: 'KC',
          date: formatDate(new Date(1577642400000))
        },
        {
          away: 'CHI',
          home: 'MIN',
          date: formatDate(new Date(1577642400000))
        },
        {
          away: 'MIA',
          home: 'NE',
          date: formatDate(new Date(1577642400000))
        },
        {
          away: 'PHI',
          home: 'NYG',
          date: formatDate(new Date(1577642400000))
        },
        {
          away: 'ATL',
          home: 'TB',
          date: formatDate(new Date(1577642400000))
        },
        {
          away: 'NO',
          home: 'CAR',
          date: formatDate(new Date(1577642400000))
        },
        {
          away: 'IND',
          home: 'JAX',
          date: formatDate(new Date(1577642400000))
        },
        {
          away: 'PIT',
          home: 'BAL',
          date: formatDate(new Date(1577642400000))
        },
        {
          away: 'TEN',
          home: 'HOU',
          date: formatDate(new Date(1577642400000))
        },
        {
          away: 'OAK',
          home: 'DEN',
          date: formatDate(new Date(1577654700000))
        },
        {
          away: 'ARI',
          home: 'LAR',
          date: formatDate(new Date(1577654700000))
        },
        {
          away: 'SF',
          home: 'SEA',
          date: formatDate(new Date(1577654700000))
        }
      ]
    },
    teams: {
      ARI: {
        team: 'Arizona',
        nickname: 'Cardinals'
      },
      ATL: {
        team: 'Atlanta',
        nickname: 'Falcons'
      },
      BAL: {
        team: 'Baltimore',
        nickname: 'Ravens'
      },
      BUF: {
        team: 'Buffalo',
        nickname: 'Bills'
      },
      CAR: {
        team: 'Carolina',
        nickname: 'Panthers'
      },
      CHI: {
        team: 'Chicago',
        nickname: 'Bears'
      },
      CIN: {
        team: 'Cincinnati',
        nickname: 'Bengals'
      },
      CLE: {
        team: 'Cleveland',
        nickname: 'Browns'
      },
      DAL: {
        team: 'Dallas',
        nickname: 'Cowboys'
      },
      DEN: {
        team: 'Denver',
        nickname: 'Broncos'
      },
      DET: {
        team: 'Detroit',
        nickname: 'Lions'
      },
      GB: {
        team: 'Green Bay',
        nickname: 'Packers'
      },
      HOU: {
        team: 'Houston',
        nickname: 'Texans'
      },
      IND: {
        team: 'Indianapolis',
        nickname: 'Colts'
      },
      JAX: {
        team: 'Jacksonville',
        nickname: 'Jaguars'
      },
      KC: {
        team: 'Kansas City',
        nickname: 'Chiefs'
      },
      LAC: {
        team: 'Los Angeles',
        nickname: 'Chargers'
      },
      LAR: {
        team: 'Los Angeles',
        nickname: 'Rams'
      },
      MIA: {
        team: 'Miami',
        nickname: 'Dolphins'
      },
      MIN: {
        team: 'Minnesota',
        nickname: 'Vikings'
      },
      NE: {
        team: 'New England',
        nickname: 'Patriots'
      },
      NO: {
        team: 'New Orleans',
        nickname: 'Saints'
      },
      NYG: {
        team: 'New York',
        nickname: 'Giants'
      },
      NYJ: {
        team: 'New York',
        nickname: 'Jets'
      },
      OAK: {
        team: 'Oakland',
        nickname: 'Raiders'
      },
      PHI: {
        team: 'Philadelphia',
        nickname: 'Eagles'
      },
      PIT: {
        team: 'Pittsburgh',
        nickname: 'Steelers'
      },
      SF: {
        team: 'San Francisco',
        nickname: '49ers'
      },
      SEA: {
        team: 'Seattle',
        nickname: 'Seahawks'
      },
      TB: {
        team: 'Tampa Bay',
        nickname: 'Buccaneers'
      },
      TEN: {
        team: 'Tennessee',
        nickname: 'Titans'
      },
      WSH: {
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
  try {
    return fecha.format(date, 'dddd, MMMM Do YYYY, h:mm a')
  } catch (e) {
    console.error(e)
    console.log(date)
  }
}

export default store
