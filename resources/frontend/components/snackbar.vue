<template>
    <v-snackbar
        v-model="showSnackbar"
        vertical
        :timeout="timeout"
        >
        <div class="text-subtitle-1 pb-2" :class="['text-' + color]">
            <v-icon :icon="icon"></v-icon>
            {{ title }}
        </div>

        <p>{{ message }}</p>

        <template v-slot:actions>
            <v-btn
                :color="color"
                variant="text"
                @click="showSnackbar = false"
                >
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    name: 'Snackbar',

    data () {
        return {
            showSnackbar: false,
            title: 'Ooops!',
            message: 'Something went wrong!',
            icon: 'mdi-close-circle-outline',
            color: 'red',
            timeout: 4000,
        }
    },

    methods: {
        show (data) {
            this.showSnackbar = false;

            if (data != undefined) {
                this.timeout = data.timeout || 4000;

                switch (data.type) {
                    case 'success':
                        this.setSuccessSnackbar();
                        break;
                    case 'info':
                        this.setInfoSnackbar();
                        break;
                    case 'warning':
                        this.setWarningSnackbar();
                        break;
                    default:
                        this.setErrorSnackbar();
                }

                this.message = data.message || 'Something went wrong!';
                setTimeout(() => {
                    this.showSnackbar = true;
                }, 100);
            }
        },

        setSuccessSnackbar () {
            this.title = 'Great!';
            this.message = 'Done.';
            this.icon = 'mdi-check-circle-outline'
            this.color = 'green';
        },
        setInfoSnackbar () {
            this.title = 'Hmmm!';
            this.message = 'Need help?';
            this.icon = 'mdi-information-outline'
            this.color = 'blue';
        },
        setWarningSnackbar () {
            this.title = 'Hey!';
            this.icon = 'mdi-alert-outline'
            this.color = 'orange';
        },
        setErrorSnackbar () {
            this.title = 'Ooops!';
            this.icon = 'mdi-close-circle-outline',
            this.color = 'red';
        },
    },
}
</script>
