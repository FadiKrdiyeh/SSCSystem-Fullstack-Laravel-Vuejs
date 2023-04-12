import { createI18n } from "vue-i18n";

import en from '../langs/en.json';
import ar from '../langs/ar.json';

export default createI18n({
    legacy: false,
    globalInjection: true,
    locale: localStorage.getItem('sscsystem-lang') || 'en',
    fallbackLocale: localStorage.getItem('sscsystem-lang') || 'en',
    messages: { en, ar }
});
