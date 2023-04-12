<template>
    <!-- <v-footer  absolute inset app height="200" width="auto" class="py-12"> -->
    <v-footer app class="admin-footer" id="adminFooter" :elevation="4">
        <v-row justify="center" no-gutters>
            <v-btn
                v-for="link in links"
                :key="link"
                color="white"
                variant="text"
                class="mx-2"
                rounded="xl"
            >
                {{ link }}
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>VA SSC</strong>
            </v-col>
        </v-row>
        <!-- 2023 - VA SSC -->
    </v-footer>
</template>

<script>
export default {
    name: 'Admin Footer',

    data () {
        return {
            links: [],
        }
    }
}
</script>

<style lang="scss">
// #adminFooter {
//     z-index: 999999999;
// }
</style>
