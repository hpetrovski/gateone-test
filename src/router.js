import Vue from 'vue'
import Home from './components/Home.vue'
import PostList from './components/PostList.vue'
import Router from 'vue-router'
import FavoritesList from './components/FavoritesList.vue'
import PostView from './components/PostView.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/list', component: PostList },
    { path: '/favorites', component: FavoritesList },
    { path: '/list/:id', component: PostView }
];

Vue.use(Router);

export default new Router({routes});