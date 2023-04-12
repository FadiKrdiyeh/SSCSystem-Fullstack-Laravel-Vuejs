<template>
    <div class="our-team-section">
        <h5 class="first-title text-center text-uppercase text-grey-lighten-1 mb-8 text-h6">Our Team</h5>
        <h3 class="second-title text-center text-second-color font-weight-bold text-h3 mb-8">Meet the team</h3>

        <div class="team-cards py-10">
            <v-row>
                <v-col v-for="teamMember of ourTeam">
                    <v-card flat class="mx-auto d-flex align-center flex-column" max-width="344">
                        <v-avatar :image="teamMember.image" size="150" class="mb-5" />

                        <v-card-title class="font-weight-bold">{{ teamMember.name }}</v-card-title>

                        <v-card-subtitle class="font-italic mb-5">{{ teamMember.job }}</v-card-subtitle>

                        <v-card-actions>
                            <v-btn icon="mdi-facebook" :color="mainColor" variant="text"></v-btn>
                            <v-btn icon="mdi-twitter" :color="mainColor" variant="text"></v-btn>
                            <v-btn icon="mdi-instagram" :color="mainColor" variant="text"></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Our Team',
    props: ['mainColor'],

    data () {
        return {
            ourTeam: [
                { name: 'Agnes Remi', job: 'Managing Director', image: '/assets/images/avatars/1.png', facebook: 'https://www.facebook.com', twitter: 'https://www.twitter.com', instagram: 'https://www.instagram.com' },
                { name: 'Agnes Remi', job: 'Managing Director', image: '/assets/images/avatars/2.png', facebook: 'https://www.facebook.com', twitter: 'https://www.twitter.com', instagram: 'https://www.instagram.com' },
                { name: 'Agnes Remi', job: 'Managing Director', image: '/assets/images/avatars/3.png', facebook: 'https://www.facebook.com', twitter: 'https://www.twitter.com', instagram: 'https://www.instagram.com' },
            ]
        }
    }
}
</script>
