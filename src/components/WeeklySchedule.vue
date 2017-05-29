<template>
  <div class="card">
    <h1>2017 NFL schedule</h1>
    <ul class="schedule-selector">
      <li><router-link to="/schedule/by-week">By week</router-link></li>
      <li><router-link to="/schedule/by-team">By team</router-link></li>
    </ul>

    <section class="schedule">
      <div class="form-group">
        <label for="week-selector">Week:</label>
        <select name="week-selector" v-model="currentWeek">
          <option v-for="week in weeks">{{ week }}</option>
        </select>
      </div>

      <ul class="matchups">
        <li v-for="matchup in schedule[currentWeek]">
          <matchup :home="matchup.home" :away="matchup.away" :date="matchup.date"></matchup>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Matchup from './Matchup'

export default {
  name: 'schedule',
  components: { Matchup },
  data () {
    return {
      weeks: createWeeks(),
      currentWeek: 1
    }
  },
  computed: {
    ...mapGetters(['schedule'])
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
.card {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 20px -5px #999;
  padding: 7px;
  border-top: 2px solid #013368;
}


.schedule-selector {
  list-style: none;
}

.schedule-selector li {
  display: inline-block;  
  background-color: white;
  position: relative;
}

.schedule-selector li a {
  text-decoration: none;
  color: #2c3e50;  
  height: 100%;
  padding: 10px;
  display: block;
}

.schedule-selector li a.active {
  border-bottom: 2px solid #013368;
}

.schedule {
  margin-top: 30px;
}

.form-group {
  margin-left: 10px;
}
</style>
