<template>
  <div id="app">
    <aside class="left-rail">
      <img src="./assets/nfl-logo.jpg" />

      <nav class="navigation">
        <ul>
          <li>Schedule

            <ul>
              <li><router-link :to="{name: 'ScheduleByWeek'}">By week</router-link></li>
              <li><router-link :to="{name: 'ScheduleByTeam'}">By team</router-link></li>
            </ul>
          </li>
          <li><router-link :to="{name: 'TripPlanner'}">Trip Planner</router-link></li>
        </ul>
      </nav>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
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

.left-rail {
  float: left;
  width: 15%;
  height: 100vh;
  box-shadow: 3px 0px 10px -5px #999;
  z-index: 100;
  padding-top: 15px;
  position: fixed;
}

.left-rail img {
  width: 100%;
}

.left-rail .navigation {
  text-align: center;
  margin-top: 10px;
}

.left-rail .navigation ul { 
  list-style: none;
}

.left-rail .navigation ul li {
  display: block;
  margin-bottom: 10px;
  color: #777;
}

.left-rail .navigation ul li ul {
  margin-top: 10px;
}

.left-rail .navigation a {
  color: #2c3e50;
  text-decoration: none;
  padding: 3px 0;
}

.left-rail .navigation a.active {
  border-bottom: 2px solid #013368;  
}

main {
  float: right;
  width: 85%;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 15px 25px;
  box-sizing: border-box;
  z-index: 90;
}
</style>
