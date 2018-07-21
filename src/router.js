import Vue from 'vue'
import Home from './components/Home.vue'
import PostList from './components/PostList.vue'
import Router from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/list', component: PostList }
];

Vue.use(Router);

export default new Router({routes});