<template>
  <div class="wrapper">
    <Header @search="search" />
    <Main  />
  </div>
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
   
  },
  methods: {
            searchMovies(){
                axios.get(`https://api.themoviedb.org/3/search/movie`, {
                  params: {
                    api_key: this.store.API_KEY,
                    query: this.store.searchText,
                    language: 'it-IT'
                  }
                })
                .then(res => {
                    console.log(res.data.results);
                    this.store.movies = res.data.results
                    
                })
            },
            searchSeries(){
                axios.get(`https://api.themoviedb.org/3/search/tv`, {
                  params: {
                    api_key: this.store.API_KEY,
                    query: this.store.searchText,
                    language: 'it-IT'
                  }
                })
                .then(res => {
                    console.log(res.data.results);
                    this.store.series = res.data.results
                })
            },
            search(){
              if(store.searchText === ''){
                store.movies = [];
                store.series = []
              } else {
                this.searchMovies();
                this.searchSeries();
              }
            }

        },

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;600&display=swap');
 
* {
padding: 0;
margin: 0;
box-sizing: border-box;
}

img {
  max-width: 100%;
  display: block;
}

body {
  font-family: 'Outfit', sans-serif;
}

.wrapper {
  background-image: url(./assets/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: auto;
 

  &::after {
    content: '';
    position: absolute;
    inset: 	0;
    background:linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
  
  }
}

.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

</style>
