<template>
    <v-navigation-drawer
        v-model="navbar"
        class="mt-8 position-fixed"
        :elevation="10"
        permanent
        fixed
        :rail="getShowSidebar"
        :style="[ !getShowSidebar ? 'opacity: 1' : 'opacity: 0' ]"
        @mouseover="toggleSidebar(false)"
        @mouseout="toggleSidebar(true)"
        >
        <v-list>
            <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            :title="$t('ADMIN.SIDEBAR.SANDRA_ADAMS')"
            subtitle="sandra_a88@gmailcom"
            ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list class="navigation-drawer-links" density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" :title="$t('ADMIN.SIDEBAR.MY_FILES')" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" :title="$t('ADMIN.SIDEBAR.SHARED_WITH_ME')" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" :title="$t('ADMIN.SIDEBAR.STARRED')" value="starred"></v-list-item>

            <v-list-group value="Administration" prepend-icon="mdi-security">
                <template v-slot:activator="{ props }">
                    <v-list-item
                    v-bind="props"
                    :title="$t('ADMIN.SIDEBAR.ADMINISTRATION')"
                    ></v-list-item>
                </template>

                <v-list-item
                    v-for="([title, icon], i) in admins"
                    :key="i"
                    :title="title"
                    :prepend-icon="icon"
                    :value="title"
                ></v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Admin Sidebar',

    data () {
        return {
            navbar: true,
            admins: [
                [this.$t('ADMIN.SIDEBAR.MANAGEMENT'), 'mdi-account-multiple-outline'],
                [this.$t('ADMIN.SIDEBAR.SETTINGS'), 'mdi-cog-outline'],
            ],
        }
    },

    methods: {
        toggleSidebar (status) {
            if (!this.getSidebarLock) {
                this.$store.dispatch('setShowSidebarAction', status);
            }
        },
    },

    computed: {
        ...mapGetters(['getShowSidebar', 'getSidebarLock']),
    }
}
</script>

<style lang="scss">
// .v-navigation-drawer {
//     border-top-right-radius: 15px;
// }
</style>
