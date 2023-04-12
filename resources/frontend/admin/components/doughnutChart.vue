<template>
    <Doughnut
        id="doughnutChart"
        :options="doughnutChartOptions"
        :data="doughnutChartData"
        :series="[50, 80, 20, 45, 70]"
    />
</template>
<script>
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJs.register(ArcElement, Tooltip, Legend);

export default {
    name: 'DoughnutChart',
    components: { Doughnut },

    data () {
        return {
            // series: []

            doughnutChartData: {
                labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
                datasets: [
                    {
                        data: [50, 80, 20, 45, 70],
                        backgroundColor: ['red', 'orange', 'yellow', 'green', '#6200EA'],
                    },
                ],
            },

            doughnutChartOptions: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Statistics'
                    },
                },
            },
        }
    },
}
</script>
