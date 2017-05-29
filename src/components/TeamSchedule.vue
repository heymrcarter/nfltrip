<template>
  <div class="card">
    <h1>2017 NFL schedule</h1>
    <ul class="schedule-selector">
      <li><router-link to="/schedule/by-week">By week</router-link></li>
      <li><router-link to="/schedule/by-team">By team</router-link></li>
    </ul>

    <section class="schedule">
      <div class="form-group">
        <label for="team-selector">Team:</label>
        <select name="team-selector" v-model="currentTeam">
          <option v-for="team in Object.keys(teams)" :value="team">{{ teams[team].team }}</option>
        </select>
      </div>

      <h2>{{ teams[currentTeam].team }} {{ teams[currentTeam].nickname }}</h2>

      <ul class="matchups">
        <li v-for="matchup in teamSchedule">
          <matchup :home="matchup.home" :away="matchup.away" :date="matchup.date" :team="currentTeam"></matchup>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Matchup from './Matchup'

export default {
  name: 'team-schedule',
  components: { Matchup },
  data () {
    return {
      currentTeam: 'ARI'
    }
  },
  computed: {
    ...mapGetters(['schedule', 'teams']),
    teamSchedule () {
      const teamSchedule = []
      Object.keys(this.schedule).forEach(week => {
        this.schedule[week].forEach(matchup => {
          if (matchup.home === this.currentTeam || matchup.away === this.currentTeam) {
            teamSchedule.push(matchup)
          }
        })
      })
      return teamSchedule
    }
  }
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
  margin-bottom: 20px;
}

h2 { margin-left: 10px; }

.matchups {
   list-style: none;
   margin-top: 20px;
}
.matchups li { border-bottom: 1px solid #013368; }
</style>
