<template>
    <div class="newsletter-section">
        <v-card flat :color="transparentColor" rounded="xl">
            <v-row>
                <v-col>
                    <div class="newsletter-content pa-15 mx-5">
                        <h5 class="first-title text-uppercase text-h6 text-grey-lighten-1 mb-8">Newsletter</h5>
                        <h3 class="second-title text-h4 text-second-color font-weight-black mb-8">Subscribe our newsletter</h3>

                        <v-text-field bg-color="white" variant="solo" min-height="800" density="default" placeholder="Enter your mail..">
                            <template v-slot:append-inner>
                                <v-btn :color="mainColor" height="75%" flat>
                                    <v-icon icon="mdi-arrow-right" size="x-large" color="white"></v-icon>
                                </v-btn>
                            </template>
                        </v-text-field>
                    </div>
                </v-col>
                <v-col class="w-100">
                    <div class="newsletter-background"></div>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'Newsletter',
    props: ['mainColor', 'transparentColor'],

    data () {
        return {}
    }
}
</script>
