const times = {
  '1': 13,
  '2': 14,
  '3': 15,
  '4': 16,
  '5': 17,
  '6': 18,
  '7': 19,
  '8': 20,
  '9': 21,
  '10': 22,
  '11': 11,
  '12': 12
}
function scrape ($) {
  const gamesForWeek = []
  $('#sched-container .table-caption').each(function (i, day) {
    const gameDay = $(day)
      .text()
      .split(', ')[1]
    const gameDate = new Date(`${gameDay}, 2019`)
    const gamesForDayContainer = $(day).next('.responsive-table-wrap')
    gamesForDayContainer.find('table tbody tr').each(function (i, game) {
      const cells = $(game).find('td')
      const kickoffCell = $(cells[2])
        .find('a')
        .text()
      const kickoff = kickoffCell.split(' ')[0]
      const kickoffHour = kickoff.split(':')[0] === 'TBD' ? '1' : kickoff.split(':')[0]
      const kickoffMinute = kickoff.split(':')[1] === undefined ? '00' : kickoff.split(':')[1]
      const matchup = {
        away: $(game)
          .find('td:first-child a abbr')
          .text(),
        home: $(game)
          .find('.home .home-wrapper a abbr')
          .text(),
        date: `formatDate(new Date(${gameDate.setHours(times[kickoffHour], kickoffMinute)}))`
      }
      gamesForWeek.push(matchup)
    })
  })

  console.log(JSON.stringify(gamesForWeek, null, 2))
}

scrape(window.$)
