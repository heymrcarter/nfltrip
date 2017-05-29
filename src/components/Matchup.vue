<template>
  <div class="matchup">
    <p class="away">{{ formatTeam(away) }}</p>
    <p class="home">{{ formatTeam(home) }}</p>
    <p class="date">{{ formattedDate }}</p>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'matchup',
  props: ['home', 'away', 'date'],
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
    }
  }
}
</script>

<style scoped>
  .matchup {
    padding: 10px;
  }
</style>
