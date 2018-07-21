<template>
    <div class="hello">
        <img src="../assets/logo.png">
        <h3>Libraries</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank">vue-devtools</a></li>
            <li><a href="http://element.eleme.io/#/en-US/component/installation" target="_blank">Element UI</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
