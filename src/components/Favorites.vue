<template>
  <div>
    <div class="card">
      <h1>
        <span>Favorites</span>
        <a href="#" @click.prevent="share" title="Share"><i class="fa fa-send"></i></a>
      </h1>

      <section>
        <ul class="matchups">
          <li v-for="(favorite, i) in favorites" :key="i">
            <matchup :home="favorite.home" :away="favorite.away" :date="favorite.date"></matchup>
          </li>
        </ul>
      </section>
    </div>

    <aside class="dialog-background" v-if="isDialogOpen">
      <div class="dialog">
        <div class="dialog-content">
          <h2>Share your favorites</h2>
          <p>Copy the link below and send it to all your friends!</p>
          <p class="share-url" v-if="shareUrl !== undefined">{{ shareUrl }}</p>
          <p class="alert">We went ahead and copied the URL to your clipboard. Paste away!</p>
        </div>
        <div class="dialog-actions">
          <a href="#" @click.prevent="closeDialog">Close</a>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import Matchup from './Matchup'
import { mapGetters } from 'vuex'
import clipboard from 'clipboard-js'

export default {
  name: 'favorites',
  data () {
    return {
      shareUrl: undefined,
      isDialogOpen: false
    }
  },
  components: { Matchup },
  computed: {
    ...mapGetters(['favorites'])
  },
  methods: {
    share () {
      const data = btoa(JSON.stringify(this.favorites))
      this.shareUrl = `https://heymrcarter.github.io/nfltrip/#/shared/${data}`
      this.copyUrl()
      this.isDialogOpen = true
    },
    closeDialog () {
      this.isDialogOpen = false
    },
    copyUrl () {
      clipboard.copy({
        'text/plain': this.shareUrl
      })
    }
  }
}
</script>

<style scoped>
h1 {
  display: flex;
  flex-direction: row;
  padding: 0 10px;
}

h1 span {
  flex: 1;
}

h1 a {
  flex: 0;
  color: #013368;
  font-size: 28px;
}

.dialog-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 900;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.dialog {
  background-color: #fff;
  min-width: 500px;
  min-height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px -5px #999;
  z-index: 1000;
}

.dialog-content {
  padding: 20px;
  margin-bottom: auto;
}

.dialog-content h2 {
  margin-bottom: 10px;
}

.dialog-content .share-url {
  overflow-wrap: break-word;
  margin-top: 12px;
  margin-bottom: 12px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.87);
  padding: 5px;
  font-size: 18px;
}

.dialog-content .alert {
  background-color: #4cae50;
  border-radius: 4px;
  color: #fff;
  padding: 7px;
  font-weight: bold;
}

.dialog-actions {
  margin: 10px;
  border-top: 1px solid #d7d7d7;
  padding-top: 10px;
}

.dialog-actions a {
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  padding: 10px;
}

.dialog-actions a:active {
  background-color: #d7d7d7;
}
</style>
