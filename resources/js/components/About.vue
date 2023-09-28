<template>
    <div id="about" class="about">
        <p>
            {{ this.langStore.lang === 'ru'
                ? this.language.about.ru
                : this.language.about.en
            }}
        </p>
    </div>
</template>

<script>

import {useLangStore} from "@/store/langStore";
import {mapStores} from "pinia";

export default {
    name: "About",
    computed: {
        ...mapStores(useLangStore)
    },
    data() {
        return {
            language: window.language
        }
    },
}
</script>

<style scoped>
.about {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-top: 2rem;
    text-align: start;
    margin-bottom: 3rem;
}
</style>
