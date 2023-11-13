<template>
    <div class="card">
        <img :src="getImageSrc" alt="Poster" class="card-image">
        <div class="card-info">
            <p class="title">{{ getTitle }}</p>
            <p v-if="getOriginalTitle !== getTitle">Titolo Originale: {{ getOriginalTitle }}</p>
            <div class="language">
                <p>Lingua: </p>
                <img :src="srcFlag" alt="">
            </div>

         
       
           
            <p class="overview">{{ currentMovie.overview }}</p>
            <div class="vote-average">
                <p>Voto:</p>
                <div class="stars">
                    <div class="star" v-for="n in 5">
                        <span v-if="getVoteAverage >=n"><font-awesome-icon icon="fa-solid fa-star" /></span>
                        <span v-else><font-awesome-icon icon="fa-regular fa-star" /></span>
                    </div>
    
                </div>
               <span>{{ getVoteAverage }}/5</span>
            </div>
           
        </div>
    </div>
</template>

<script>
import { store } from '../store'

    export default {
        props: {
            currentMovie: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                store
            }
        },
        computed: {
            srcFlag(){
                if(this.currentMovie.original_language !== 'en'){

                    return `https://flagsapi.com/${(this.currentMovie.original_language).toUpperCase()}/flat/24.png`
                } else {
                    return `https://flagsapi.com/GB/flat/24.png`
                }
            },
            getTitle(){
                if(this.currentMovie.title) {
                    return this.currentMovie.title
                } else {
                    return this.currentMovie.name
                }
            },
            getOriginalTitle(){
                if(this.currentMovie.original_title) {
                    return this.currentMovie.original_title
                } else {
                    return this.currentMovie.original_name
                }
            },
            getVoteAverage(){
                return Math.floor(this.currentMovie.vote_average / 2) 
            },
            getImageSrc() {
                if(this.currentMovie.poster_path){

                    return `https://image.tmdb.org/t/p/w500${this.currentMovie.poster_path}`
                } else {
                    return 'src/assets/netflix_black.png'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    height: 100%;
    
    .card-image {
        width: 100%;
        aspect-ratio: 2 / 3;
        object-fit: cover;
        transition: 0.5s;
    }
    .card-info {
        position: absolute;
        bottom: -100%;
        padding: 1rem;
        color: #FFF;
        z-index: 20;
        transition: 0.5s;
        .title {
            text-align: center;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 1rem;
            font-size: 1.5rem;

        }
        .language {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
         
        }
        .vote-average {
        display: flex;
        gap: 0.5rem;
        .stars {
            display: flex;
            color: #ebd425;
    }
}

        .overview {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5; 
            overflow: hidden;
            margin-bottom: 1rem;
        }
    }

    &::after {
        position: absolute;
        inset: 0;
        content: '';
        background: linear-gradient(transparent 0%, transparent 20%, rgba(0,0,0,0.9) 100%);
        z-index: 10;
        transform: translateY(100%);
        transition: 0.5s;
    }

    &:hover {
        .card-info {
            bottom: 0;
        }
        &::after {
            transform: translateY(0);
        }

        .card-image {
            filter: blur(2px)
        }
    }

}



   

</style>