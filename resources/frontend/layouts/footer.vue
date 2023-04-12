<template>
    <footer class="default-footer" id="defaultFooter">
        <v-container class="mb-10 px-15">
            <v-row>
                <v-col class="mb-7 mb-lg-0 px-3"
                    cols="12"
                    lg="4"
                    md="4"
                    sm="12">
                    <v-img class="logo" src="/assets/images/logo.png" max-width="100"></v-img>
                    <p class="text-grey-lighten-1 mb-5">Lorem ipsum dolor sit amet, conetetur sadipscing elitr.</p>
                    <div class="contact-icons">
                        <v-icon v-for="contactIcon of contactIcons" :icon="contactIcon.icon" class="mr-4"></v-icon>
                    </div>
                </v-col>

                <v-col>
                    <div>
                        <h4>Resource</h4>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </v-col>

                <v-col>
                    <div>
                        <h4>Contact Us</h4>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </v-col>

                <v-col>
                    <div>
                        <h4>Product</h4>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-divider></v-divider>
        <div class="last-content text-center py-10">
            <h4 class="text-grey-darken-1">&copy; 2023 DPI_MEDIA. All Rights Reserved</h4>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',

    data () {
        return {
            contactIcons: [
                { icon: 'mdi-facebook', link: 'https://www.facebook.com' },
                { icon: 'mdi-twitter', link: 'https://www.twitter.com' },
                { icon: 'mdi-instagram', link: 'https://www.instagram.com' },
                { icon: 'mdi-whatsapp', link: 'https://www.whatsapp.com' },
            ]
        }
    }
}
</script>
