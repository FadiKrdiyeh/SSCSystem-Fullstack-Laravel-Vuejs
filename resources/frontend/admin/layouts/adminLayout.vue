<template>
    <v-card color="grey-lighten-2">
        <v-layout class="position-relative overflow-hidden">
            <!-- Call Header -->
            <admin-header />

            <!-- Call Sidebar -->
            <admin-sidebar />

            <v-main class="w-100 h-100 pt-15">
                <v-container>
                    <router-view></router-view>
                </v-container>
            </v-main>

            <admin-footer />
        </v-layout>
    </v-card>
</template>

<script>
import adminHeader from './adminHeader.vue';
import adminSidebar from './adminSidebar.vue';
import adminFooter from './adminFooter.vue';

export default {
    name: 'Admin Layout',
    components: { adminHeader, adminSidebar, adminFooter },

    data () {
        return {}
    },
}
</script>
