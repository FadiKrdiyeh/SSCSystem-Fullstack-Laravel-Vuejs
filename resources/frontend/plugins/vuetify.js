// import Vue from 'vue';
import { createVuetify } from 'vuetify';
// import Vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n';
import { useI18n } from 'vue-i18n';
import i18n from './i18n';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.min.css';

// let dir = true ? 'rtl' : 'ltr';

const vuetify = createVuetify({
    directives,
    components,
    locale: {
        adapter: createVueI18nAdapter({ i18n, useI18n })
    },
    rtl: true,
    theme: {
        themes: {
            light: {
                // primary: '#3f51b5',
                // secondary: '#696969',
                // accent: '#8c9eff',
                // error: '#b71c1c',
            },
        },
    },
});

export default vuetify;
