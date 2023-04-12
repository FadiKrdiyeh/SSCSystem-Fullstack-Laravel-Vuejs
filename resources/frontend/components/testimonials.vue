<template>
    <div class="testimonials-section">
        <v-row>
            <v-col class="pa-15">
                <v-card :color="transparentColor" rounded="xl" class="main-card" flat>
                    <v-card  class="inner-card card-1 pa-5" color="white" rounded="lg" flat>
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <v-avatar class="ma-3" size="100">
                                <v-img src="/assets/images/avatars/1.png"></v-img>
                            </v-avatar>
                            <div>
                                <v-card-title class="text-h5 font-weight-bold font-italic">James Smith</v-card-title>
                                <v-card-subtitle class="text-subtitle-1 text-wrap font-italic text-grey-darken-1 font-weight-medium" style="line-height: 1.8;">Lorem ipsum dolor sit amet, consectetur ncinim uis nostrud</v-card-subtitle>
                            </div>
                        </div>
                    </v-card>

                    <v-card class="inner-card card-2 pa-5" color="white" rounded="lg" flat>
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="text-h5 font-weight-bold font-italic">Lisa Anne</v-card-title>
                                <v-card-subtitle class="text-subtitle-1 text-wrap font-italic text-grey-darken-1 font-weight-medium" style="line-height: 1.8;">Lorem ipsum dolor sit amet, consectetur ncinim uis nostrud</v-card-subtitle>
                            </div>
                            <v-avatar class="ma-3" size="100">
                                <v-img src="/assets/images/avatars/2.png"></v-img>
                            </v-avatar>
                        </div>
                    </v-card>
                </v-card>
            </v-col>
            <v-col class="pa-15">
                <div class="testimonials-content px-5">
                    <h6 class="first-title text-h6 text-uppercase text-grey-lighten-1 mb-8">Testimonials</h6>
                    <h3 class="second-title text-h3 font-weight-bold text-second-color mb-8">We are loyal with our customers</h3>
                    <p class="text-grey text-h6 mb-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                    </p>

                    <main-button text="Learm More" height="75" width="50%" rounded="xl" class="text-capitalize" flat />
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import MainButton from './mainButton.vue';

export default {
    name: 'Testimonials',
    props: ['mainColor', 'transparentColor'],
    components: { MainButton },

    data () {
        return {}
    }
}
</script>
