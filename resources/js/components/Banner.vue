<template>
    <div class="banner d-flex">
        <div class="description d-flex flex-column align-items-center justify-content-center">
            <div class="d-flex flex-column align-items-center justify-content-center">
                <h2 class="banner-title banner-mt-4 conf">{{ this.langStore.lang === 'ru'
                    ? this.language.internationalScientificAndPractical.ru
                    : this.language.internationalScientificAndPractical.en
                    }} <br />
                    {{
                        this.langStore.lang === 'ru'
                            ? this.language.conference.ru
                            : this.language.conference.en
                    }}
                </h2>
                <h1 class="banner-title banner-mb-4 com">{{
                        this.langStore.lang === 'ru'
                            ? this.language.professionalCommunications.ru
                            : this.language.professionalCommunications.en
                    }} <br /> {{
                        this.langStore.lang === 'ru'
                            ? this.language.fromTermToDiscourse.ru
                            : this.language.fromTermToDiscourse.en
                    }}</h1>
                <p class="banner-date banner-title">{{
                        this.langStore.lang === 'ru'
                            ? this.language.moscow.ru
                            : this.language.moscow.en
                    }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import CButton from "@/components/ui/CButton.vue";

import {useLangStore} from "@/store/langStore";
import {mapStores} from "pinia";

export default {
    name: "Banner",
    components: {CButton},
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

.description {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.banner {
    background: url("../../images/banner.svg");
    background-size: cover;
    color: white;
    margin-top: 10rem;
    height: 500px;
}

img {
    max-height: 700px;
    min-height: 200px;
}

h1 {
    color: black;
}

.banner-title {
    color: #088F67;
    text-align: center;
}

.banner-mb-4 {
    margin-bottom: 4rem;
}

.banner-mt-4 {
    margin-top: 4rem;
}

.banner-date {
    font-size: 24pt;
}

.conf {

}

.com {
    margin-top: 1rem;
    font-size: 36pt;
}
</style>
