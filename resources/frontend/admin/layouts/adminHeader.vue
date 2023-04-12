<template>
    <v-app-bar class="admin-header" id="adminHeader" app style="position: fixed;" clipped-left>
        <v-app-bar-title>SSCSystem</v-app-bar-title>

        <template v-slot:prepend>
            <!-- <v-app-bar-nav-icon class="d-flex d-sm-none"></v-app-bar-nav-icon> -->
            <v-app-bar-nav-icon @click="toggleSidebar">
                <v-icon :icon="getSidebarLock ? 'mdi-lock-open-variant-outline' : 'mdi-lock-outline'"></v-icon>
                <v-tooltip
                    activator="parent"
                    location="bottom"
                >{{ getSidebarLock ? $t('ADMIN.TOOLTIPS.HEADER.UNLOCK_MENU') : $t('ADMIN.TOOLTIPS.HEADER.LOCK_MENU') }}</v-tooltip>
            </v-app-bar-nav-icon>
        </template>

        <template v-slot:append>
            <change-locale />

            <v-btn icon>
                <v-icon icon="mdi-cog"></v-icon>
                <v-tooltip
                    activator="parent"
                    location="bottom"
                >{{ $t('ADMIN.TOOLTIPS.HEADER.SETTINGS') }}</v-tooltip>
            </v-btn >

            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props">
                        <v-icon icon="mdi-dots-vertical"></v-icon>
                        <v-tooltip
                            activator="parent"
                            location="bottom"
                        >{{ $t('ADMIN.TOOLTIPS.HEADER.MORE') }}</v-tooltip>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                        v-for="(item, i) in moreMenuItems"
                        :key="i"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>
    </v-app-bar>
</template>

<script>
import ChangeLocale from '../../components/changeLocale.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'Admin Header',
    components: { ChangeLocale },
    data () {
        return {
            moreMenuItems: [
                { title: this.$t('ADMIN.HEADER.CLICK_ME', { number: 1 }) },
                { title: this.$t('ADMIN.HEADER.CLICK_ME', { number: 2 }) },
                { title: this.$t('ADMIN.HEADER.CLICK_ME', { number: 3 }) },
                { title: this.$t('ADMIN.HEADER.CLICK_ME', { number: 4 }) },
            ],
        }
    },
    methods: {
        toggleSidebar () {
            this.$store.dispatch('setShowSidebarAction', !this.getShowSidebar);
            this.$store.dispatch('setSidebarLockAction', !this.getSidebarLock);
        },
    },
    computed: {
        ...mapGetters(['getShowSidebar', 'getSidebarLock']),
    }
}
</script>
