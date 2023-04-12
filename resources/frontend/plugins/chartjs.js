// import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';

// // =================================================================

// // Actions:
// const actions = [
//     {
//         name: 'Randomize',
//         handler(chart) {
//         chart.data.datasets.forEach(dataset => {
//             dataset.data = chart.data.labels.map(() => {
//             return [Utils.rand(-100, 100), Utils.rand(-100, 100)];
//             });
//         });
//         chart.update();
//         }
//     }
// ];

// // =================================================================

// // Setup:

// const DATA_COUNT = 13;
// const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 250 };

// const labels = Utils.months({count: 13});
// const data = {
//     labels: labels,
//     datasets: [
//         {
//         label: 'Dataset 1',
//         data: labels.map(() => {
//             return [Utils.rand(0, 250), Utils.rand(0, 250)];
//         }),
//         backgroundColor: Utils.CHART_COLORS.purple,
//         },
//         {
//         label: 'Dataset 2',
//         data: labels.map(() => {
//             return [Utils.rand(0, 250), Utils.rand(0, 250)];
//         }),
//         backgroundColor: Utils.CHART_COLORS.orange,
//         },
//     ]
// };

// // =================================================================

// // Config:

// const config = {
//     type: 'bar',
//     data: data,
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//             title: {
//                 display: true,
//                 text: 'Chart.js Floating BAr Chart'
//             }
//         }
//         // onClick: (e) => {
//         //     const canvasPosition = getRelativePosition(e, chart);

//         //     const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
//         //     const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
//         // }
//     }
// };

// export default {
//     actions,
//     config
// };
