<template>
    <v-app app>
        <Component :is="layout"></Component>
    </v-app>
</template>

<script>
const DEFAULT_LAYOUT = 'Default';

export default {
    data () {
        return {}
    },
    updated () {
        console.log(`${this.layout} is used!`);
        // console.log('route meta: ', this.$route.meta);
    },
    mounted () {
        console.log('App running...');
    },
    computed: {
        layout () {
            return (this.$route.meta.layout || DEFAULT_LAYOUT) + 'Layout';
        }
    }
}
</script>
