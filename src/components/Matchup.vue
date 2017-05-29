<template>
  <div class="matchup">
    <p class="away" :class="{ highlight: shouldHighlight(away) }">{{ formatTeam(away) }}</p>
    <p class="home" :class="{ highlight: shouldHighlight(home) }">{{ formatTeam(home) }}</p>
    <p class="date">{{ formattedDate }}</p>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'matchup',
  props: ['home', 'away', 'date', 'team'],
  computed: {
    ...mapGetters(['teams']),
    formattedDate () {
      const date = moment(this.date)
      return date.format('dddd, MMMM Do YYYY, h:mm a')
    }
  },
  methods: {
    formatTeam (team) {
      if (team === 'LAR' || team === 'LAC' || team === 'NYJ' || team === 'NYG') {
        return `${this.teams[team].team} ${this.teams[team].nickname}`
      }

      return `${this.teams[team].team}`
    },
    shouldHighlight (team) {
      return this.team === team
    }
  }
}
</script>

<style scoped>
  .matchup {
    padding: 10px;
  }

  .highlight {
    font-weight: bold;
  }
</style>
