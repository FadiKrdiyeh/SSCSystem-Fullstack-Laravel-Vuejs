
            // dataCount: 13,
            // numberCFG: { count: this.dataCount, min: 0, max: 250 },

            // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augast', 'September', 'October', 'Nobember', 'December', 'January'],




                //     {
                //         label: 'Dataset 1',
                //         data: this.labels.map(() => {
                //             return [0, getRndomNumber(0, 250)];
                //         }),
                //         backgroundColor: 'purple',
                //     },
                //     {
                //         label: 'Dataset 2',
                //         data: this.labels.map(() => {
                //             return [0, getRndomNumber(0, 250)];
                //         }),
                //         backgroundColor: 'orange',
                //     },





    methods: {
        getRndomNumber(min, max) {
            console.log(this.labels);
           return Math.floor(Math.random() * (max - min) ) + min;
        }
    }
