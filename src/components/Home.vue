<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters(['favorites'])
  },
  mounted () {
    this.$nextTick(() => {
      if (this.favorites.length > 0) {
        this.$router.push({ name: 'Favorites' })
      } else {
        this.$router.push({ name: 'WeeklySchedule' })
      }
    })
  }
}
</script>
