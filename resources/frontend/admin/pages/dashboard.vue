<template>
    <v-row no-gutters class="mt-5">
        <v-col
            v-for="(dashboardCard, index) of dashboardCards"
            :key="index"
            cols="12"
            lg="3"
            md="6"
            sm="12"
            class="mb-7 mb-lg-0 px-3"
        >
            <v-card
                :class="['mx-auto', 'pa-2', cardsRounded]"
                :elevation="cardsElevation"
            >
                <template v-slot:prepend>
                    <v-icon :icon="dashboardCard.icon" :class="['bg-' + dashboardCard.color + '-lighten-4', 'pa-6', 'rounded-lg']" :color="dashboardCard.color" size="x-large"></v-icon>
                </template>

                <template v-slot:title>{{ dashboardCard.title }}</template>

                <template v-slot:subtitle>{{ dashboardCard.statistics }}</template>

                <v-card-text>
                    <v-progress-linear :color="dashboardCard.color" bg-color="grey-darken-4" :model-value="dashboardCard.progress"></v-progress-linear>
                    <div class="mt-3">
                        <span :class="['text-' + (dashboardCard.arrow == 'down' ? 'red' : 'green'), 'font-weight-bold']"><v-icon :icon="'mdi-arrow-' + dashboardCard.arrow"></v-icon> {{ dashboardCard.lastWeek }}%</span> since last week
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="7" :class="['mb-10', 'mb-lg-5', $vuetify.locale.isRtl ? 'pr-6' : 'pl-6']">
            <v-card
                :class="['mx-auto', 'pa-2', cardsRounded]"
                :elevation="cardsElevation"
            >
                <v-card-item>
                    <template v-slot:title>
                        <div class="d-flex justify-space-between align-center">
                            <h4>Sales Analytics</h4>

                            <v-select
                                v-model="getAnalyticsPer"
                                :items="['Daily', 'Monthly', 'Annual']"
                                variant="solo"
                                style="max-width: 150px;"
                                density="compact"
                                bg-color="grey-lighten-2"
                                ></v-select>
                        </div>
                    </template>
                </v-card-item>

                <v-divider></v-divider>

                <v-card-text class="py-0">
                    <v-row align="center" class="py-3" no-gutters>
                        <v-col class="text-center" cols="2" v-for="(saleAnalytic, index) of salesAnalytics">
                            <h5>{{ saleAnalytic.title }}</h5>
                            <span :class="['text-' + saleAnalytic.color, 'font-weight-bold', 'text-h5 text-center']">{{ saleAnalytic.total }}$</span>
                        </v-col>
                    </v-row>
                </v-card-text>

                <div>
                    <bar-chart />
                </div>
            </v-card>
        </v-col>
        <v-col cols="5" :class="['mb-10', 'mb-lg-5', $vuetify.locale.isRtl ? 'pl-6' : 'pr-6']">
            <v-card
                :class="['mx-auto', 'pa-2', cardsRounded, 'd-flex', 'align-items-center', 'flex-column']"
                :elevation="cardsElevation"
            >
                <v-card-item class="w-100">
                    <template v-slot:title>
                        <div class="d-flex justify-space-between">
                            <h4>Invoice Analytics</h4>

                            <v-select
                                v-model="getAnalyticsPer"
                                :items="['Daily', 'Monthly', 'Annual']"
                                variant="solo"
                                style="max-width: 150px;"
                                density="compact"
                                bg-color="grey-lighten-2"
                                ></v-select>
                        </div>
                    </template>
                </v-card-item>

                <v-divider></v-divider>

                <div>
                    <doughnut-chart />
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import barChart from '../components/barChart.vue';
import doughnutChart from '../components/doughnutChart.vue';

export default {
    name: 'Dashboard',
    components: { barChart, doughnutChart },

    data () {
        return {
            cardsRounded: "rounded-lg",
            cardsElevation: 4,
            dashboardCards: [
                { title: 'test1', statistics: 22224235, icon: 'mdi-currency-usd', color: 'purple', progress: 35, arrow: 'up', lastWeek: 2.4 },
                { title: 'test2', statistics: 22224235, icon: 'mdi-account-group', color: 'green', progress: 75, arrow: 'down', lastWeek: 2.4 },
                { title: 'test3', statistics: 22224235, icon: 'mdi-file-document', color: 'blue', progress: 95, arrow: 'up', lastWeek: 2.4 },
                { title: 'test3', statistics: 22224235, icon: 'mdi-file-outline', color: 'orange', progress: 15, arrow: 'down', lastWeek: 2.4 },
            ],
            getAnalyticsPer: 'Monthly',
            salesAnalytics: [
                { title: 'Total sales', total: 1000, color: 'purple' },
                { title: 'Receipts', total: 1000, color: 'green' },
                { title: 'Expenses', total: 300, color: 'red' },
                { title: 'Earnings', total: 700, color: 'black' },
            ]
        }
    },

    created () {
        console.log(this.$vuetify.locale.isRtl);
    }
}
</script>
