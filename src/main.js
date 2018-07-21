import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';
import router from './router';
import Lang from './i18n';

Vue.config.productionTip = false;

const i18n = Lang(Vue);

Vue.use(Element, {
    i18n: (key, value) => i18n.t(key, value)
});

new Vue({
    i18n,
    router,
    render: h => h(App)
}).$mount('#app');
