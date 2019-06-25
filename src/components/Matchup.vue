<template>
  <div class="matchup">
    <div class="details">
      <p class="away" :class="{ highlight: shouldHighlight(away) }">{{ formatTeam(away) }}</p>
      <p class="home" :class="{ highlight: shouldHighlight(home) }">{{ formatTeam(home) }}</p>
      <p class="date">{{ this.date }}</p>
    </div>
    <div class="actions">
      <a href="#" class="favorite" @click.prevent="removeFavoriteMatchup" v-if="isFavorite"><i class="fa fa-heart"></i></a>
      <a href="#" class="favorite" @click.prevent="addFavoriteMatchup" v-else><i class="fa fa-heart-o"></i></a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'matchup',
  props: ['home', 'away', 'date', 'team'],
  computed: {
    ...mapGetters(['teams', 'favorites']),
    matchup () {
      return { away: this.away, home: this.home, date: this.date }
    },
    isFavorite () {
      const fave = this.favorites.find(f => {
        return f.home === this.home && f.away === this.away && f.date === this.date
      })
      return fave !== undefined
    }
  },
  methods: {
    ...mapActions(['addFavorite', 'removeFavorite']),
    formatTeam (team) {
      if (team === 'LAR' || team === 'LAC' || team === 'NYJ' || team === 'NYG') {
        return `${this.teams[team].team} ${this.teams[team].nickname}`
      }

      return `${this.teams[team].team}`
    },
    shouldHighlight (team) {
      return this.team === team
    },
    addFavoriteMatchup () {
      this.addFavorite(this.matchup)
    },
    removeFavoriteMatchup () {
      this.removeFavorite(this.matchup)
    }
  }
}
</script>

<style scoped>
  .matchup {
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .matchup .details {
    flex: 1;
  }

  .matchup .details .date {
    font-size: 14px;
  }

  .matchup .actions a {
    color: red;
  }

  .highlight {
    font-weight: bold;
  }
</style>
