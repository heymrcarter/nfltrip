<template>
  <div class="hello">
    <h1>NFL trip planner</h1>
    <p class="large">Helps you find the perfect game for a trip!</p>
    <div class="actions">
      <router-link to="/" class="btn">View schedule</router-link>
      <router-link to="/" class="btn">Plan trip</router-link>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.hello {
  box-sizing: border-box;
}

.hello::after {
  content: "";
  display: table;
  clear: both;
}

h1, h2 {
  font-weight: normal;
  margin-bottom: 10px;
}

p {
  margin-bottom: 10px;
  display: block;
}

.large { font-size: 18px; }

.actions {
  margin: 10px 0;
  box-sizing: border-box;
}

a {
  color: #42b983;
}

.btn {
  background-color: #fff;
  padding: 10px;
  border: 2px solid #013368;
  border-radius: 10px;
  color: #013368;
  text-decoration: none;
  display: inline-block;
}
</style>
