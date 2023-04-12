<template>
    <Bar
        id="barChart"
        :options="barChartOptions"
        :data="barChartData"
    />
</template>
<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJs, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJs.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
    name: 'BarChart',
    components: { Bar },

    data () {
        return {
            barChartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augast', 'September', 'October', 'Nobember', 'December', 'January'],
                datasets: [
                    {
                        label: 'State 1',
                        data: [50, 150, 190, 120, 200, 200, 175, 150, 125, 80, 145, 70, 170],
                        backgroundColor: '#6200EA',
                    },
                    {
                        label: 'State 2',
                        data: [85, 20, 15, 20, 20, 30, 15, 20, 25, 45, 30, 40, 45, 20],
                        backgroundColor: 'orange',
                    }
                ],
            },

            barChartOptions: {
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

    methods: {
        getRndomNumber(min, max) {
            console.log(this.labels);
           return Math.floor(Math.random() * (max - min) ) + min;
        }
    }
}
</script>
