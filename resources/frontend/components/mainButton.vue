<template>
    <v-btn @click="call" :color="getMainColor" class="text-white font-weight-bold" rounded="lg" size="x-large" :elevation="elevation">{{ text }}</v-btn>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "Main Button",
    props: ['text', 'elevation'],

    data () {
        return {}
    },

    methods: {
        call () {
            // this.getSnackbarRef.show({ type: 'warning' });
            this.successMsg('sjdf');
        }
    },

    computed: {
        ...mapGetters(['getMainColor']),
    }
}
</script>
