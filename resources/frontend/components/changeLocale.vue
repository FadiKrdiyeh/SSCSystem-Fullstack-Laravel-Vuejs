<template>
    <div>
        <v-btn icon @click="changeLocale">
            <v-icon icon="mdi-translate"></v-icon>
            <v-tooltip
                activator="parent"
                location="bottom"
            >{{ $t('ADMIN.TOOLTIPS.HEADER.CHANGE_LANGUAGE') }}</v-tooltip>
        </v-btn >
    </div>
</template>

<script>
export default {
    name: 'Locale switcher',

    data () {
        return {}
    },

    methods: {
        changeLocale () {
            // this.$vuetify.locale.current = locale
            if (this.$vuetify.locale.current === 'en') {
                this.$vuetify.locale.current = 'ar';
                localStorage.setItem('sscsystem-lang', 'ar');
            } else if (this.$vuetify.locale.current === 'ar') {
                this.$vuetify.locale.current = 'en';
                localStorage.setItem('sscsystem-lang', 'en');
            }
        },
    }
}
</script>
