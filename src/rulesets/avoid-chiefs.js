export default function avoidChiefs (matchups) {
  let chiefsAtHome = false
  matchups.forEach(matchup => {
    if (matchup.home === 'KC') {
      chiefsAtHome = true
    }
  })

  return chiefsAtHome
}
