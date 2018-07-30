<template>
    <div id="app">
        <router-link to="/" id="menu">Home</router-link>
        <router-link to="/list" id="menu">Post List</router-link>
        <router-link to="/favorites" id="menu">Favorites</router-link>
        <router-view></router-view>
    </div>

</template>

<script>
    import Home from './components/Home.vue'

    export default {
        name: 'app',
        components: {
            Home
        }
    }
</script>

<style lang="scss">
    @import "~element-ui/lib/theme-chalk/index.css";
    @import url("https://fonts.googleapis.com/css?family=Raleway");
    #app {
        font-family: 'Raleway', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
     
    }
    #menu{
        padding:30px;
        text-decoration: none;
        text-shadow: 1px 1px hsla(0, 0%, 10%, 0.171);
        color: black;
    }
    template{
   
    }

</style>
