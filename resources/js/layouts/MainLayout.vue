<template>
    <Header v-bind:lang="lang" :changeLang="changeLang" />
        <slot></slot>
    <Footer />
</template>

<style scoped>

</style>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import {useLangStore} from "@/store/langStore";
import {mapStores} from "pinia";

export default {
    components: {Footer, Header},
    data() {
        return {
            lang: 'ru'
        }
    },
    computed: {
        ...mapStores(useLangStore)
    },
    methods: {
        changeLang(lang) {
            this.langStore.lang = lang;
        }
    }
}
</script>
