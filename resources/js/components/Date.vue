<template>
    <h4 id="date">{{ this.langStore.lang === 'ru'
        ? this.language.datesOfTheEvent.ru
        : this.language.datesOfTheEvent.en
        }}</h4>
    <div class="d-flex">
        <img src="../../images/calendar.svg" width="400" alt="">
        <div>
            <p>{{ this.langStore.lang === 'ru'
            ? this.language.confDates.ru
            : this.language.confDates.en
            }}</p>
            <div @click="changePath('#questions')" class="questions">{{ this.langStore.lang === 'ru'
                ? this.language.questions.ru
                : this.language.questions.en
                }}</div>
            <CButton @click="changePath('register')" class="secondary w-100">{{ this.langStore.lang === 'ru'
                ? this.language.registration.ru
                : this.language.registration.en
                }}</CButton>
        </div>
    </div>
</template>

<script>
import CButton from "@/components/ui/CButton.vue";

import {useLangStore} from "@/store/langStore";
import {mapStores} from "pinia";

export default {
    name: "Date",
    components: {CButton},
    computed: {
        ...mapStores(useLangStore)
    },
    data() {
        return {
            language: window.language
        }
    },
    methods: {
        changePath: function (page) {
            console.log(page)
            this.$router.push('/' + page);
            this.activePage = page;
        }
    }
}
</script>

<style scoped>

img {
    margin-right: 2rem;
}

h4 {
    color: #3E7C23;
}

.questions {
    margin-top: 0;
    padding-top: 0;
    color: #51A230;
    text-decoration: underline;
}

.questions:hover {
    cursor: pointer;
}

</style>
