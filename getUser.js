import { createApp, reactive } from "https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js";

const store = reactive({
    searchText: "",
    userData: {},
    load: false,

    async search() {

        this.load = true;

        const githubUserSearch = await fetch(`https://api.github.com/users/${this.searchText}`);
        const data = await githubUserSearch.json();
        console.log(data)

        this.userData = data;

        this.load = false;
    }
})

createApp({ store }).mount('#githubUserSearch')