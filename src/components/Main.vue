<template>

    <main class="main-content">
        
            <section class="movies" v-if="store.movies.length !== 0">
                <div class="container">
                <h1>FILM</h1>
                <div class="grid">
                    <div v-for="(movie, i) in store.movies">
                        <Card :currentMovie="movie" />
                    </div>
                </div>
            </div>
            </section>
        
            <section class="series" v-if="store.series.length !== 0">
                <div class="container">
                <h1>SERIE TV</h1>
                <div class="grid">
                    <div v-for="(serie, i) in store.series">
                        <Card :currentMovie="serie" />
                    </div>
                </div>
            </div>
            </section>
       
    </main>
</template>

<script>
import Header from './Header.vue';
import Card from './Card.vue'
import { store } from '../store'
    export default {
        components: {
            Header,
            Card
        },
        data(){
            return {
                store,
                message: 'Ciao',

            }
        },
        
      
    }
</script>

<style lang="scss" scoped>
main {
    position: relative;
    overflow: auto;
    z-index: 1;
}
.grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1rem;
}

section {
    padding: 2rem 1rem;
    h1 {
        text-align: center;
        color: #FFF;
        font-size: 2rem;
        margin-bottom: 2rem;
    }
}

</style>