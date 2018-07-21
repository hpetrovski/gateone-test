import enLocale from 'element-ui/lib/locale/lang/en';
import VueI18n from 'vue-i18n';

export default (Vue) => {
    Vue.use(VueI18n);

// Create VueI18n instance with options
    const i18n = new VueI18n({
        locale: 'en', // set locale
        messages: {en: {...enLocale}}, // set locale messages
    });

    return i18n;
}
