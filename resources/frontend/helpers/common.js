import axios from "axios"
import { mapGetters } from "vuex";

export default {
    data () {
        return {
            defaultTimeout: 4000,
        }
    },
    methods: {
        async callApi (url, method, dataObj) {
            try {
                return await axios({
                    url: `/app/${ url }`,
                    method: method,
                    data: dataObj
                });
            } catch (error) {
                return error.response;
            }
        },

        successMsg (message, timeout = this.defaultTimeout) {
            this.getSnackbarRef.show({ type: 'success', message: message, timeout: timeout });
        },
        infoMsg (message, timeout = this.defaultTimeout) {
            this.getSnackbarRef.show({ type: 'info', message: message, timeout: timeout });
        },
        warningMsg (message, timeout = this.defaultTimeout) {
            this.getSnackbarRef.show({ type: 'warning', message: message, timeout: timeout });
        },
        errorMsg (message, timeout = this.defaultTimeout) {
            this.getSnackbarRef.show({ type: 'error', message: message, timeout: timeout });
        },
    },

    computed: {
        ...mapGetters(['getSnackbarRef']),
    }
}
