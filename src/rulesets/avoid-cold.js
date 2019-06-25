import fecha from 'fecha'

const octTeams = ['GB', 'CHI', 'BUF', 'NYG', 'NYJ', 'NE', 'PHI']
const novTeams = octTeams.concat(['CLE', 'PIT', 'CIN', 'KC', 'DEN'])
const decTeams = novTeams.concat(['TEN', 'SEA'])
const map = {
  10: octTeams,
  11: novTeams,
  12: decTeams
}

export default function avoidCold (matchup) {
  const date = fecha.parse(matchup.date, 'dddd, MMMM Do YYYY, h:mm a')
  const month = fecha.format(date, 'M')

  if (Object.keys(map).includes(month)) {
    if (map[month].includes(matchup.home)) {
      return false
    }
  }

  return true
}
