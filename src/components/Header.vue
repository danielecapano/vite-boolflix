<template>
    <header>
        <div class="container">
            <nav>
                <img src="../assets/logo.png" alt="" class="logo">
                <div class="search">
                    <input @keyup.enter="$emit('search')" type="text" v-model="store.searchText" placeholder="Cerca film o serie TV">
                    <button @click="$emit('search')" ><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import { store } from '../store'
    export default {
        emits: ['search'],
        data(){
            return {
                store

            }
        },
        
    }
</script>

<style lang="scss" scoped>

header {
    padding: 1rem;
    background-color: #000;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    nav {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        z-index: 1;
        .logo {
            width: 150px;
        }
        .search {
            position: relative;
            input {
                border: 3px solid #DC1A28;
                outline: none;
                padding: 0.75rem;
                border-radius: 999px;
                background-color: transparent;
                color: #ffffff;
                font-size: 1rem;
                font-family: 'Outfit', sans-serif;
            }
            button {
                position: absolute;
                right: 6px;
                top: 6px;
                height: calc(100% - 12px);
                aspect-ratio: 1;
                border-radius: 50%;
                background-color: #DC1A28;
                border: none;
                outline: none;
                color: #FFF;
                font-size: 1.25rem;
                cursor: pointer;

            }

        }
        

    }
}


</style>