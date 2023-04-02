<template>
    <div class="banner d-flex">
        <div class="description d-flex flex-column">
            <h1>ConfOlympApp: Идеальное веб-приложение для планирования студенческих конференций</h1>
            <p>Планирование конференции может быть напряженным занятием, но с ConfOlympApp это проще простого! Попрощайтесь с бумажными регистрациями и конфликтами в расписании. Подпишитесь прямо сейчас на идеальное веб-приложение для организации студенческих конференций и управления ими.</p>
            <CButton class="secondary w-100">Зарегестрироваться</CButton>
        </div>
        <img src="../../images/students.png" alt="">
    </div>
</template>

<script>
import CButton from "@/components/ui/CButton.vue";
export default {
    name: "Banner",
    components: {CButton}
}
</script>

<style scoped>
.banner {
    margin-top: 3rem;
    height: 50%;
}
h1 {
    font-weight: bold;
    color: #20007B;
}

p {
    font-weight: bold;
    color: #316BFF;
}

.description {
    position: relative;
    top: 50px;
    left: 0;
    width: 100%;
    z-index: 11;
}

img {
    position: relative;
    top: 0;
    right: 0;
    border-radius: 0 100px 100px 0;
    width: 50%;
}
</style>
