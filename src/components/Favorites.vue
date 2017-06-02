<template>
  <div class="card">
    <h1>Favorites</h1>

    <section>
      <ul class="matchups">
        <li v-for="favorite in favorites">
          <matchup :home="favorite.home" :away="favorite.away" :date="favorite.date"></matchup>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Matchup from './Matchup'
import { mapGetters } from 'vuex'

export default {
  name: 'favorites',
  components: { Matchup },
  computed: {
    ...mapGetters(['favorites'])
  }
}
</script>

<style scoped>
</style>
