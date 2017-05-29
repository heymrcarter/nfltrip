const map = {
  'phoenix': ['ARI'],
  'atlanta': ['ATL'],
  'baltimore': ['BAL', 'WAS'],
  'buffalo': ['BUF'],
  'charlotte': ['CAR'],
  'chicago': ['CHI'],
  'cincinnati': ['CIN', 'CLE'],
  'cleveland': ['CLE', 'CIN', 'PIT'],
  'dallas': ['DAL'],
  'denver': ['DEN'],
  'detroit': ['DET'],
  'green bay': ['GB'],
  'houston': ['HOU'],
  'indianapolis': ['IND'],
  'louisville': ['IND', 'TEN', 'CIN'],
  'jacksonville': ['JAX', 'TB', 'MIA'],
  'kansas city': ['KC'],
  'los angeles': ['LAC', 'LAR'],
  'miami': ['MIA', 'TB', 'JAX'],
  'minneapolis': ['MIN'],
  'boston': ['NE'],
  'new orleans': ['NO'],
  'new york': ['NYG', 'NYJ'],
  'oakland': ['OAK', 'SF'],
  'san francisco': ['SF', 'OAK'],
  'bay area': ['SF', 'OAK'],
  'philadelphia': ['PHI'],
  'pittsburgh': ['PIT', 'CLE'],
  'seattle': ['SEA'],
  'tampa': ['TB', 'JAX', 'MIA'],
  'nashville': ['TEN'],
  'washington': ['WAS', 'BAL'],
  'dc': ['WAS', 'BAL']
}

export default function preferCity (matchup, city) {
  let matchups = []
  Object.keys(map).forEach(key => {
    if (key.startsWith(city.toLowerCase())) {
      matchups = matchups.concat(map[key])
    }
  })

  return matchups.includes(matchup.home)
}
