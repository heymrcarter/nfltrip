<template>
  <div class="card">
    <h1>Shared favorites</h1>

    <section>
      <ul class="matchups">
        <li v-for="(favorite, i) in sharedFavorites" :key="i">
          <matchup :home="favorite.home" :away="favorite.away" :date="favorite.date"></matchup>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Matchup from './Matchup'

export default {
  name: 'shared',
  components: {
    Matchup
  },
  computed: {
    sharedFavorites () {
      const data = atob(this.$route.params.faveData)
      const json = JSON.parse(data)
      return json
    }
  }
}
</script>

<style>
</style>
