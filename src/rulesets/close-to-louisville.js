const cities = ['CIN', 'IND', 'TEN', 'CLE', 'CHI']

export default function proximityToLouisville (matchup) {
  return cities.includes(matchup.home)
}
