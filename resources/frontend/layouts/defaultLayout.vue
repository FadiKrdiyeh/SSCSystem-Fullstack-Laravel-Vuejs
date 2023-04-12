<template>
    <div class="pt-15">
        <app-header />

        <!-- <app-sidebar /> -->

        <v-main>
            <v-container>
                <!-- <v-btn color="primary">
                    <router-link to="/test">test</router-link>
                </v-btn>
                <v-btn color="secondary">
                    <router-link to="/test">test</router-link>
                </v-btn>
                <v-btn color="accent">
                    <router-link to="/test">test</router-link>
                </v-btn>
                <v-btn color="error">
                    <router-link to="/test">test</router-link>
                </v-btn> -->
                <router-view></router-view>
            </v-container>
        </v-main>
        <app-footer />

        <snackbar ref="snackbar"></snackbar>
    </div>
</template>

<script>
import AppHeader from './header.vue';
import AppSidebar from './sidebar.vue';
import AppFooter from './footer.vue';

import Snackbar from '../components/snackbar.vue';

import { mapGetters } from 'vuex';

export default {
    name: 'Default Layout',
    components: { AppHeader, AppSidebar, AppFooter, Snackbar },

    data () {
        return {}
    },

    // created () {
    //     console.log('Before edit', this.getTest);
    //     this.$store.dispatch('setTestAction', 'Helloooo');
    //     console.log('After edit', this.getTest);
    // },

    mounted () {
        // this.$root.snackbar = this.$refs.snackbar;
        this.$store.dispatch('setSnackbarRefAction', this.$refs.snackbar);
    },

    computed: {
        ...mapGetters(['getTest']),
    }
}
</script>
