<template>
  <div id="app">
    <header>
      <img src="./assets/nfl-logo.png" />

      <nav class="navigation">
        <ul>
          <li><router-link :to="{name: 'WeeklySchedule'}">Schedule</router-link></li>
          <li><router-link :to="{name: 'TripPlanner'}">Trip Planner</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'app',
  methods: {
    ...mapActions(['loadFavorites'])
  },
  mounted () {
    this.loadFavorites()
  }
}
</script>

<style>
* { margin: 0; padding: 0; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;  
}

#app::after {
  content: "";
  display: table;
  clear: both;
}

header {
  width: 100%;
  height: 60px;
  box-shadow: 3px 0px 5px 0px #999;
  z-index: 100;
  position: fixed;
  background-color: #fff;
  flex-direction: row;
  display: flex;
  align-items: center;
}

header img {
  margin-left: 25px;
  margin-right: 25px;
}

header .navigation {
  flex: 1;
  margin-top: 3px;
}

header .navigation ul { 
  list-style: none;
}

header .navigation ul li {
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 5px;
}

header .navigation a {
  color: #2c3e50;
  text-decoration: none;
  padding: 3px;
}

header .navigation a.active {
  border-bottom: 2px solid #013368;  
}

main {  
  background-color: #f9f9f9;
  padding: 85px 25px 15px 25px;
  box-sizing: border-box;
  z-index: 90;
}
</style>
