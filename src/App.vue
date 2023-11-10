<template>
  
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios'
import { store } from './store'

export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store
    }
  }

}
</script>

<style lang="scss">

</style>
