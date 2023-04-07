<script setup>
import {ref} from "vue";
import {FontAwesomeLayers} from "@fortawesome/vue-fontawesome";
import CButton from "@/components/ui/CButton.vue";

const conferences = ref([
    {
        id: 1,
        name: "Раскрытие мощи технологий: Знакомство с последними тенденциями и инновациями в мире конференций",
        description: "Unlocking the power of technology: Getting to know the latest trends and innovations in the world of conferences conference is an event that explores the cutting-edge advancements in the use of technology in the conference industry. This conference brings together industry experts, professionals, and innovators to discuss the latest trends, best practices, and technological innovations in the field of conferences.\n" +
            "...",
        online: true,
        offline: true,
        date: "Июль 12-18, 2023",
        location: "Paris, France",
        website: "https://icml.cc/"
    },
    {
        id: 2,
        name: "International Conference on Computer Vision",
        description: "Unlocking the power of technology: Getting to know the latest trends and innovations in the world of conferences conference is an event that explores the cutting-edge advancements in the use of technology in the conference industry. This conference brings together industry experts, professionals, and innovators to discuss the latest trends, best practices, and technological innovations in the field of conferences.\n" +
            "...",
        online: false,
        offline: true,
        date: "October 22-28, 2023",
        location: "Santiago, Chile",
        website: "http://iccv2023.thecvf.com/"
    },
    {
        id: 3,
        name: "International Conference on Natural Language Processing",
        description: "Unlocking the power of technology: Getting to know the latest trends and innovations in the world of conferences conference is an event that explores the cutting-edge advancements in the use of technology in the conference industry. This conference brings together industry experts, professionals, and innovators to discuss the latest trends, best practices, and technological innovations in the field of conferences.\n" +
            "...",
        online: true,
        offline: false,
        date: "November 12-16, 2023",
        location: "Sydney, Australia",
        website: "https://acl2023.org/"
    }
]);

function register() {

}
</script>

<template>
    <div class="conferences-list container">
        <p class="count">Доступно 124 конференции</p>
        <ul>
            <li v-for="conference in conferences" :key="conference.id">
                <div class="conference-info">
                    <h2>{{ conference.name }}</h2>
                    <div class="d-flex">
                        <p class="me-4" ><strong>Дата:</strong> {{ conference.date }}</p>
                        <p class="me-4" v-if="conference.online">Онлайн <font-awesome-icon class="online" icon="fa-solid fa-circle" /></p>
                        <p v-if="conference.offline">Оффлайн <font-awesome-icon class="offline" icon="fa-solid fa-circle" /></p>
                    </div>
                    <div class="d-flex">
                        <img src="../../images/img.png" alt="Картинка конференции">
                        <div>
                            <p class="description">{{ conference.description }}</p>
                            <div class="float-end">
                                <router-link to="/conference-details"><CButton class="secondary">Посмотреть детали</CButton></router-link>
                            </div>
                        </div>
                    </div>

                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>

.online {
    color: #00A110;
}

.offline {
    color: gray;
}

.count {
    color: #0a53be;
    font-weight: bold;
    font-size: large;
}

.conferences-list {
    padding: 2rem 0;
}

ul {
    padding: 0;
}

li {
    list-style: none;
}

.conference-info {
    border: 1px solid #0a53be;
    border-radius: 20px;
    padding: 2rem;
    margin: 2rem 0;
}

img {
    width: 50%;
    height: 50%;
    border-radius: 20px;
    margin-right: 4rem;
}

.description {
    font-size: larger;
}

</style>
