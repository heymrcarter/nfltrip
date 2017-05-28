<template>
  <div class="matchup">
    <p class="away">{{ away }}</p>
    <p class="home">{{ home }}</p>
    <p class="date">{{ formattedDate }}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'matchup',
  props: ['home', 'away', 'date'],
  computed: {
    formattedDate () {
      const date = moment(this.date)
      return date.format('dddd, MMMM Do YYYY, h:mm a')
    }
  }
}
</script>

<style scoped>
  .matchup {
    padding: 10px;
  }
</style>
