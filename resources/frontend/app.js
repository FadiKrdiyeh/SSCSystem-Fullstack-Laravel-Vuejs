// import '../js/bootstrap';
import { createApp } from 'vue';
import app from './app.vue';

import DefaultLayout from './layouts/defaultLayout.vue';
import AdminLayout from './admin/layouts/adminLayout.vue';

import router from './router/router';

import common from './helpers/common';

import store from './store/index';

import vuetify from './plugins/vuetify';

import i18n from './plugins/i18n';

createApp(app)
    .component('DefaultLayout', DefaultLayout)
    .component('AdminLayout', AdminLayout)
    .use(i18n)
    .use(router)
    .use(store)
    .mixin(common)
    .use(vuetify)
    .mount('#app');
