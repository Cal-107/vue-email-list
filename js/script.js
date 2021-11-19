const app = new Vue ({
    el: '#root',
    data: {
        mailsArray: [],
        urlAPI: 'https://flynn.boolean.careers/exercises/api/random/mail',
    },
    created() {
        this.getAPIMail()
    },
    methods: {
        getAPIMail() {
            // request HTTP --> get

            // call the API for
            axios.get(this.urlAPI)
            .then ( response => {
                console.log(response.data.response);
                response.data.response;
            })
            .catch( error => {
                console.log(error);
            })
        },
    }
})