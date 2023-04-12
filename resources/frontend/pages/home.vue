<template>
    <div class="pt-10" id="home">
        <div class="main-bg"></div>
        <div class="main-section">
            <h1 class="main-title text-second-color text-h2 mb-1 font-weight-bold">Providing best smart contract services.</h1>
            <p class="main-p text-medium-emphasis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil sequi, voluptatibus quasi inventore enim.</p>
            <div class="mt-7">
                <main-button text="Get Started" elevation="0"></main-button>
            </div>
        </div>

        <v-row class="brands-section justify-space-around align-center mb-10">
            <v-col v-for="image of brandImages" lg="2" class="d-flex justify-content-center align-items-center">
                <v-img :src="image.imagePath" :alt="image.name"></v-img>
            </v-col>
        </v-row>

        <div class="best-service-section d-flex align-center flex-column mb-15">
            <h3 class="first-title text-h6 text-uppercase text-grey-lighten-1 mb-3">Best Service</h3>
            <h2 class="second-title text-second-color text-h3 font-weight-bold text-center mb-5">Here to make your life more easier</h2>

            <v-row class="mb-10">
                <v-col v-for="bestServiceItem of bestServicesItems" lg="4" class="d-flex align-center flex-column py-5 px-10">
                    <v-img :src="bestServiceItem.image" width="100%"></v-img>
                    <h3 class="text-second-color text-h4 font-weight-bold mb-5">{{ bestServiceItem.title }}</h3>
                    <p class="text-center text-grey-lighten-1 text-h5">{{ bestServiceItem.description }}</p>
                </v-col>
            </v-row>

            <main-button text="Learn More" elevation="0" class="mb-10 px-10" :height="80" rounded="xl"></main-button>
        </div>

        <div class="mb-16">
            <v-card flat>
                <div class="d-flex flex-row">
                    <v-tabs v-model="selectedTab" direction="vertical" :color="getMainColor" class="pr-15">
                        <v-tab v-for="tab of tabs" :value="tab.value">
                            <v-icon size="x-large" class="mr-10" start>
                                {{ tab.icon }}
                            </v-icon>
                            {{ tab.title }}
                        </v-tab>
                    </v-tabs>

                    <v-window v-model="selectedTab" class="d-flex justify-center align-center w-100 h-100">
                        <v-window-item value="tab-1" class="pa-5">
                            <v-card flat :color="transparentMainColor" class="pa-5" height="" rounded="xl">
                                <v-card-text>
                                    <v-row>
                                        <v-col lg="8">
                                            <v-text-field bg-color="white" variant="solo" append-inner-icon="mdi-magnify" class="rounded-xl elevation-0"></v-text-field>

                                            <v-card color="white" rounded="xl" class="d-flex justify-center align-center pa-5" flat>
                                                <v-row>
                                                    <v-col lg="5">
                                                        <v-card :style="gradientBackgroundStyle" flat class="pa-5" rounded="xl">
                                                            <h6 class="text-white text-h6 font-weight-bold mb-4">Customer<br /> Rating</h6>
                                                            <v-icon v-for="i in 5" size="sm" color="white" icon="mdi-star"></v-icon>

                                                            <v-card flat rounded="xl" color="white" class="mt-5 pa-2">
                                                                <v-img src="/assets/images/home/customer-ratings.PNG"></v-img>
                                                            </v-card>
                                                        </v-card>
                                                    </v-col>
                                                    <v-col>
                                                        <h4 class="text-second-color text-h5 font-weight-bold mb-5">Why Our Products Make You Happy</h4>
                                                        <p class="text-grey text-subtitle-1 mb-3">Lorem ipsum dolor sit amet consect some adipiscing</p>

                                                        <main-button text="Explore Now" class="text-cyan-darken-3 mt-5" :color="transparentMainColor" elevation="0"></main-button>
                                                    </v-col>
                                                </v-row>
                                            </v-card>
                                        </v-col>
                                        <v-col lg="4">
                                            <v-card flat color="white" class="d-flex align-center flex-column pa-5 mb-5" rounded="xl">
                                                <v-icon icon="mdi-account-circle" size="x-large" :color="transparentMainColor" style="font-size: 50px;"></v-icon>

                                                <h6 class="text-h6 text-second-color font-weight-bold">31950+</h6>
                                                <p class="text-grey text-subtitle-1">Customers</p>

                                                <div class="customers-avatars d-flex justify-space-around w-100 px-6 mt-3">
                                                    <v-avatar v-for="i in 3" size="30" :image="`/assets/images/avatars/${i}.png`"></v-avatar>
                                                    <v-avatar size="30" icon="mdi-plus" :color="transparentMainColor" class="text-main-color"></v-avatar>
                                                </div>
                                            </v-card>

                                            <v-card flat color="" :style="gradientBackgroundStyle" class="pa-5" rounded="xl">
                                                <div class="visa-card">
                                                    <div class="card-header d-flex justify-space-between mb-5">
                                                        <div class="circles">
                                                            <v-icon icon="mdi-circle" size="x-large" color="white" class="icons icon-1"></v-icon>
                                                            <v-icon icon="mdi-circle" size="x-large" :color="getMainColor" class="icons icon-2"></v-icon>
                                                        </div>
                                                        <h6 class="text-h5 text-main-color font-weight-bold font-italic">VISA</h6>
                                                    </div>
                                                    <div class="card-content">
                                                        <h5 class="text-white font-weight-bold text-h5 mb-3">$40,000</h5>
                                                        <!-- <h6 class="text-white font-weight-bold text-h6 mb-3">... ... ... 2344</h6> -->
                                                        <ul class="d-flex justify-space-around text-white text-subtitle-1 font-weight-bold" style="list-style: none;">
                                                            <li>....</li>
                                                            <li>....</li>
                                                            <li>....</li>
                                                            <li>2344</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-window-item>

                        <v-window-item value="tab-2">
                            <v-card flat>
                                <v-card-text>
                                    <p>
                                        test2
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-window-item>
                        <v-window-item value="tab-3">
                            <v-card flat>
                                <v-card-text>
                                    <p class="mb-0">
                                        test3
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-window-item>
                    </v-window>
                </div>
            </v-card>
        </div>

        <div class="product-section mb-16">
            <div class="product-bg">
                <v-container>
                    <div class="product-section-content">
                        <h4 class="first-title text-grey-lighten-1 text-uppercase">Product</h4>
                        <h3 class="second-title text-h3 font-weight-bold text-second-color">Shopping the way you like it</h3>
                        <p class="paragraph text-grey-lighten-1 text-subtitle-1">
                            Lorem Ipsum is simply dummy text of the printing nd typesetting industry. Lorem Ipsum has been the industry.
                        </p>

                        <v-btn size="x-large" :ripple="false" variant="plain" class="px-0 text-capitalize">
                            Explore Now
                            <v-icon icon="mdi-arrow-right" class="explore-icon ml-5"></v-icon>
                        </v-btn>
                    </div>
                </v-container>
            </div>
        </div>

        <testimonials :transparentColor="transparentMainColor" />

        <our-team :mainColor="getMainColor" />

        <newsletter :mainColor="getMainColor" :transparentColor="transparentMainColor" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MainButton from '../components/mainButton.vue';
import Newsletter from '../components/newsletter.vue';
import OurTeam from '../components/ourTeam.vue';
import Testimonials from '../components/testimonials.vue';

export default {
    name: 'Home',
    components: { MainButton, Newsletter, OurTeam, Testimonials },

    data () {
        return {
            brandImages: [
                { name: 'Ashley', imagePath: '/assets/images/brands/ashley.png' },
                { name: 'Amazon', imagePath: '/assets/images/brands/amazon.png' },
                { name: 'Bassett', imagePath: '/assets/images/brands/bassett.png' },
                { name: 'Avast', imagePath: '/assets/images/brands/avast.png' },
                { name: 'BuzzFeed', imagePath: '/assets/images/brands/buzzfeed.png' },
            ],

            bestServicesItems: [
                { image: '/assets/images/best-services/1.PNG', title: 'Quick Response', description: 'The final tech sit amet, sonsectetur some adipisc elit, sed do eiusmod.' },
                { image: '/assets/images/best-services/2.PNG', title: 'Best Value', description: 'The final tech sit amet, sonsectetur some adipisc elit, sed do eiusmod.' },
                { image: '/assets/images/best-services/3.PNG', title: 'Cash-Back', description: 'The final tech sit amet, sonsectetur some adipisc elit, sed do eiusmod.' },
            ],

            selectedTab: 'tab-1',

            tabs: [
                { icon: 'mdi-briefcase', title: 'Our Store', value: 'tab-1' },
                { icon: 'mdi-chart-pie', title: 'Sales', value: 'tab-2' },
                { icon: 'mdi-truck', title: 'Shipping', value: 'tab-3' },
                { icon: 'mdi-store', title: 'Warehouse', value: 'tab-4' },
                { icon: 'mdi-text-box', title: 'Others', value: 'tab-5' },
            ],

            transparentMainColor: '',

            gradientBackgroundStyle: 'background: linear-gradient(160deg, #94f2f7, #39b9bf)',
        }
    },

    created () {
        this.transparentMainColor = `${this.getMainColor}33`;
        // console.log(this.getMainColor + '33');
        // console.log(`${this.getMainColor}33`);

        //? help
        // ! error
        // * Important
        //TODO: somthing
        //// test

        /**
         * sldfjlsdjfl
         * ! lsdkfljsdfjlsdfk
         * ? ksdjlfjsdfls
         * * lskdfjlsjdlfjl;sdfj;
         * TODO: lkjsdflkjsldkfjlksjdfkj
         * // lsdkfjlksdjflkjdslkfj
         */
    },

    computed: {
        ...mapGetters(['getMainColor']),
    }
}
</script>
