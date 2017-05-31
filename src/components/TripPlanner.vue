<template>
  <div class="card">
    <h1>Trip planner</h1>

    <section>
      <div class="form-group">
        <label for="week-selector">Week:</label>
        <select name="week-selector" v-model="currentWeek">
          <option v-for="week in weeks">{{ week }}</option>
        </select>
      </div>

      <h2>Filters</h2>
      <div class="form-group">
        <label><input type="checkbox" v-model="closeToLouisville"/> Close to Louisville</label>
        <label><input type="checkbox" v-model="avoidCold"/> Avoid cold</label>
        <label><input type="checkbox" v-model="avoidChiefs"/> Avoid Chiefs home games</label>
        <label><input type="checkbox" v-model="filterOnCity"/> <input type="text" placeholder="City" v-model="desiredCity"></label>
      </div>

      <ul class="matchups">
        <li v-if="avoidChiefs && matchups.length === 0">Chiefs at home against {{ chiefsOpponent() }}</li>
        <li v-if="!avoidChiefs && matchups.length === 0">No matchups</li>
        <li v-for="matchup in matchups">
          <matchup :home="matchup.home" :away="matchup.away" :date="matchup.date"></matchup>
        </li>
      </ul>
    </section>
  </div> 
</template>

<script>
import Matchup from './Matchup'
import { mapGetters } from 'vuex'
import closeToLouisville from '../rulesets/close-to-louisville'
import avoidCold from '../rulesets/avoid-cold'
import avoidChiefs from '../rulesets/avoid-chiefs'
import fecha from 'fecha'
import preferCity from '../rulesets/prefer-city'

export default {
  name: 'trip-planner',
  components: { Matchup },
  data () {
    return {
      matchups: [],
      currentWeek: 1,
      weeks: createWeeks(),
      closeToLouisville: false,
      avoidCold: false,
      avoidChiefs: false,
      filterOnCity: false,
      desiredCity: undefined
    }
  },
  watch: {
    currentWeek: function (value) {
      this.updateMatchups()
    },
    closeToLouisville: function (value) {
      this.updateMatchups()
    },
    avoidCold: function (value) {
      this.updateMatchups()
    },
    avoidChiefs: function (value) {
      this.updateMatchups()
    },
    filterOnCity: function () {
      this.updateMatchups()
    },
    desiredCity: function () {
      this.updateMatchups()
    }
  },
  computed: {
    ...mapGetters(['schedule', 'teams'])
  },
  methods: {
    updateMatchups () {
      let matchups = this.schedule[this.currentWeek]

      if (this.closeToLouisville) {
        matchups = matchups.filter(matchup => closeToLouisville(matchup))
      }

      if (this.avoidCold) {
        matchups = matchups.filter(matchup => avoidCold(matchup))
      }

      if (this.avoidChiefs) {
        const chiefsAtHome = avoidChiefs(matchups)
        if (chiefsAtHome) {
          matchups = []
        }
      }

      if (this.filterOnCity && this.desiredCity !== undefined) {
        matchups = matchups.filter(matchup => preferCity(matchup, this.desiredCity))
      }

      this.matchups = matchups
    },
    chiefsOpponent () {
      const matchup = this.schedule[this.currentWeek].find(m => m.home === 'KC')
      const opponent = this.teams[matchup.away].team
      const date = fecha.format(matchup.date, 'dddd, MMMM Do YYYY, h:mm a')
      return `${opponent} on ${date}`
    }
  },
  mounted () {
    this.updateMatchups()
  }
}

function createWeeks () {
  const weeks = []

  for (let i = 1; i < 18; i++) {
    weeks.push(i)
  }

  return weeks
}
</script>

<style scoped>
  .form-group {
    margin: 10px;
  }

  h2 {
    margin: 0 10px;
  }

  label {
    display: block;
  }

  input[type="text"] {
    padding: 5px;
  }
</style>
