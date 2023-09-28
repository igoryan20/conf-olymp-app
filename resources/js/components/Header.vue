<template>
    <header class="d-flex justify-content-between">
        <div class="container">
            <div class="d-flex">
                <div @click="changePath('')" class="brand-image"><img src="../../images/mirea.png" width="60" /></div>
                <ul class="d-flex align-items-center navbar-custom">
                    <div class="nav-with-submenu">
                        <li class="bold" v-if="activePage.split('#')[0] ===''">
                            <div v-on:mouseover="showSubMenu" @click="changePath('')" style="color: #3E7C23">{{ this.langStore.lang === "ru" ? this.language.aboutConference.ru : this.language.aboutConference.en }}
                                <svg id="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                                </svg>
                            </div>
                        </li>
                        <li v-else>
                            <div v-on:click="showSubMenu" @click="changePath('')" class="bold">{{ this.langStore.lang === "ru" ? this.language.aboutConference.ru : this.language.aboutConference.en }}
                                <svg id="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#000" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                                </svg>
                            </div>
                        </li>
                        <ul class="submenu" :hidden="hidden"  v-on:mouseleave="hideSubMenu">
                            <li><div @click="changePath('#date')">Дата проведения</div></li>
                            <li><router-link to="/#goal">Цель конференции</router-link></li>
                            <li><router-link to="/#direction">Направления и секции</router-link></li>
                            <li><router-link to="/#members">Положение и участники</router-link></li>
                            <li><router-link to="/#orgcomitet">Оргкомитет</router-link></li>
                            <li><router-link to="/#membership">Способы и пути участия</router-link></li>
                        </ul>
                    </div>
                    <li v-if="activePage === 'archive'" class="bold green"><div @click="changePath('archive')">{{ this.langStore.lang === "ru" ? this.language.archive.ru : this.language.archive.en }}</div></li>
                    <li v-else class="bold"><div @click="changePath('archive')">{{ this.langStore.lang === "ru" ? this.language.archive.ru : this.language.archive.en }}</div></li>
                    <li v-if="activePage === 'tvorcheskie-raboty'" class="bold green"><div @click="changePath('tvorcheskie-raboty')">{{ this.langStore.lang === "ru" ? this.language.creativeWorks.ru : this.language.creativeWorks.en }}</div></li>
                    <li v-else class="bold"><div @click="changePath('tvorcheskie-raboty')">{{ this.langStore.lang === "ru" ? this.language.creativeWorks.ru : this.language.creativeWorks.en }}</div></li>
                    <li v-if="activePage === 'events'" class="bold green"><div @click="changePath('events')">{{ this.langStore.lang === "ru" ? this.language.events.ru : this.language.events.en }}</div></li>
                    <li v-else class="bold"><div @click="changePath('events')">{{ this.langStore.lang === "ru" ? this.language.events.ru : this.language.events.en }}</div></li>
                    <li v-if="activePage === 'deadlines'" class="bold green"><div @click="changePath('deadlines')">{{ this.langStore.lang === "ru" ? this.language.forParticipants.ru : this.language.forParticipants.en }}</div></li>
                    <li v-else class="bold"><div @click="changePath('deadlines')">{{ this.langStore.lang === "ru" ? this.language.forParticipants.ru : this.language.forParticipants.en }}</div></li>
                </ul>
                <a class="wdo" href="https://wdo.org/"><img src="../../images/wdo.png" width="150" alt=""></a>
            </div>
        </div>
        <div class="lang">
            <select @change="changeLanguage" name="" id="">
                <option value="ru">RU</option>
                <option value="en">EN</option>
            </select>
        </div>
        <div class="d-flex">
            <router-link class="login" to="/login"><CButton class="primary">{{ this.langStore.lang === "ru" ? this.language.login.ru : this.language.login.en }}</CButton></router-link>
            <router-link to="/regisn dev
            ter"><CButton class="secondary" >{{ this.langStore.lang === "ru" ? this.language.registration.ru : this.language.registration.en }}</CButton></router-link>
        </div>
    </header>
</template>

<script>
import CButton from "@/components/ui/CButton.vue";
import {createCommentVNode} from "vue";
import {useLangStore} from "@/store/langStore";
import {mapStores} from "pinia";

export default {
    name: "Header",
    mounted() {
        this.activePage = (new URL(location.href)).pathname.substring(1);
    },
    computed: {
        ...mapStores(useLangStore)
    },
    props: ['lang', 'changeLang'],
    components: {CButton},
    data() {
        return {
            activePage: "",
            hidden: true,
            isFlipped: false,
            language: window.language
        }
    },
    methods: {
        showSubMenu: function (event) {
            this.hidden = false
            this.isFlipped = true
        },
        hideSubMenu: function (event) {
            this.hidden = true
            this.isFlipped = false
        },
        changePath: function (page) {
            this.$router.push('/' + page);
            this.activePage = page;
        },
        changeLanguage: function (event) {
            this.changeLang(event.target.value);
        }
    }
}
</script>

<style scoped>
header {
    width: 100%;
    background: white;
    box-shadow: 0 4px 10px rgba(81, 162, 48, 0.5);
    padding: 1.5rem 1.5rem;
    position: fixed;
    z-index: 100;
}

.brand-image:hover {
    cursor: pointer;
}

ul {
    margin: 0;
}

li {
    list-style: none;
    margin: 0 1rem;
    font-size: 20px;
}

li:hover {
    color: #5AAF35;
    cursor: pointer;
}

a {
    text-decoration: none;
    color: #000000;
}

.bold {
    font-weight: bold;
}

a:hover {
    color: #5AAF35;
    cursor: pointer;
}

.nav-with-submenu {
    position: relative;
}

.submenu {
    position: absolute;
    top: 2.5rem;
    left: 0;
    border: 1px solid #51A230;
    padding: 0;
    background: white;
    z-index: 9;
}

.submenu > a {
    font-weight: normal;
}

.submenu > li:hover {
    color: #5AAF35;
    cursor: pointer;
}

.navbar-custom {
    margin-left: 0;
}

@keyframes flipAnimation {
    0% {
        transform: rotateX(0deg);
    }
    100% {
        transform: rotateX(180deg);
    }
}

@keyframes flipAnimation-2 {
    0% {
        transform: rotateX(180deg);
    }
    100% {
        transform: rotateX(0deg);
    }
}

.flipped {
    animation: flipAnimation 0.1s ease-in-out forwards;
}

.flipped-2 {
    animation: flipAnimation 0.1s ease-in-out forwards;
}

.green {
    color: #3E7C23;
}

.wdo {
    margin-left: 1rem;
    padding-top: 0.5rem;
}

.lang {
    display: flex;
    padding: 1rem;
}

.login {
    width: 120px;
}
</style>
