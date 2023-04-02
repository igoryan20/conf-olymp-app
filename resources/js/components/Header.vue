<template>
    <header class="d-flex justify-content-between">
        <router-link to="/"><img src="../../images/brand.svg" width="60" /></router-link>
        <ul class="d-flex flex-wrap align-items-center">
            <li><router-link to="/#about">О платформе</router-link></li>
            <li><router-link to="/#features">Возможнсти</router-link></li>
        </ul>
        <div class="d-flex flex-wrap">
            <router-link to="/login"><CButton class="primary">Войти</CButton></router-link>
            <router-link to="/register"><CButton class="secondary" >Зарегестироваться</CButton></router-link>
        </div>
    </header>
</template>

<script>
import CButton from "@/components/ui/CButton.vue";
export default {
    name: "Header",
    components: {CButton}
}
</script>

<style scoped>
header {
    position: sticky;
    width: 100%;
    background: white;
    box-shadow: 0 4px 10px rgba(49, 107, 255, 0.25);
    padding: 1.5rem 1.5rem;
}

ul {
    margin: 0;
}

li {
    list-style: none;
    margin: 0 1rem;
}

ul > li > a {
    text-decoration: none;
    color: #20007B;
    font-weight: bold;
}
</style>
