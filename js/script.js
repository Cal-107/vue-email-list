const app = new Vue ({
    el: '#root',
    data: {
        mailsArray: [],
        urlAPI: 'https://flynn.boolean.careers/exercises/api/random/mail',
    },

    computed: {
        dataPrintOk() {
            return (this.mailsArray.length === 10) ? true : false;
        }
    },

    created() {
        this.getAPIMail();
    },

    methods: {
        getAPIMail() {
            // request HTTP --> get

            // call the API for
            for (let i = 0; i < 10; i++) {
                axios.get(this.urlAPI)
                .then ( response => {
                    response.data.response;
                    this.mailsArray.push(response.data.response)
                })
                .catch( error => {
                    console.log(error);
                })
            }
        },
    }
})

