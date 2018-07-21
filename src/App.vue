<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <router-link to="/list">Post List</router-link>
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
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

</style>
