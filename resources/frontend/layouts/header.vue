<template>
    <v-app-bar class="default-header px-15" id="defaultHeader" color="transparent" app style="position: absolute;" :elevation="0" :height="100">
        <v-container class="pa-0 fill-height">
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
            <v-img :src="'assets/images/logo.png'" max-width="80"></v-img>

            <div class="links">
                <v-menu location="bottom">
                    <template v-slot:activator="{ props }">
                        <v-btn
                            dark
                            v-bind="props"
                            >
                            Our Services
                            <template v-slot:append>
                                <v-icon icon="mdi-chevron-down"></v-icon>
                            </template>
                        </v-btn>
                    </template>


                    <v-list >
                        <v-list-item v-for="(link, index) in servicesLinks" :key="index">
                            <!-- <v-list-item-title>{{ link.title }}</v-list-item-title>
                            <v-image :width="50" aspect_ratio="1/1" :src="link.image"></v-image> -->
                            <v-card
                                width="300"
                                class="py-3"
                            >
                                <div class="d-flex flex-no-wrap justify-space-between">
                                    <v-avatar
                                        class="ma-3"
                                        size="70"
                                        rounded="0"
                                    >
                                        <v-img :src="link.image"></v-img>
                                    </v-avatar>

                                    <div>
                                        <v-card-title class="text-h6">{{ link.title }}</v-card-title>

                                        <v-card-subtitle class="text-wrap">{{ link.description }}</v-card-subtitle>
                                    </div>
                                </div>
                            </v-card>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-btn @click="showSuccess">Platform</v-btn>
                <v-btn @click="showInfo">About Us</v-btn>
                <v-btn @click="showWarning">Contact Us</v-btn>
                <v-btn @click="showError">Contact Us</v-btn>
            </div>

            <v-spacer></v-spacer>

            <v-btn size="x-large" :ripple="false" variant="plain">Log in</v-btn>

            <main-button text="Sign up" elevation="10" style="background-color: #39b9bf;"></main-button>
        </v-container>
    </v-app-bar>
</template>

<script>
import ChangeLocale from '../components/changeLocale.vue';
import MainButton from '../components/mainButton.vue';

export default {
    name: 'Header',
    components: { ChangeLocale, MainButton },

    data () {
        return {
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],

            servicesLinks: [
                {
                    title: "Sales Contracts",
                    image: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
                    description: "Lorem ipsum is simply text of the printing.",
                },
                {
                    title: "Shhipping Services",
                    image: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
                    description: "Lorem ipsum is simply text of the printing.",
                },
                {
                    title: "Custom Clearance",
                    image: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
                    description: "Lorem ipsum is simply text of the printing.",
                },
            ],
        }
    },

    methods: {
        showSuccess () {
            this.successMsg('Everything is okey...', 10000);
        },
        showInfo () {
            this.infoMsg('Are you need some help?', 5000);
        },
        showWarning () {
            this.warningMsg('You can\'t do that', 8000);
        },
        showError () {
            this.errorMsg();
        },
    }
}
</script>
