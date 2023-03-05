<template>
    <header>
        <div class="logo">
            <router-link to="/"><img src="../../images/brand.svg" alt="Student Conferences"></router-link>
        </div>
        <nav>
            <router-link to="/">Главная</router-link>
            <router-link to="/about">О нас</router-link>
            <router-link to="/schedule">Расписание</router-link>
        </nav>
        <div class="auth-buttons">
            <router-link to="/login"><Button>Войти</Button></router-link>
            <router-link to="/register"><Button class="m-3" type="primary">Зарегестрироваться</Button></router-link>
        </div>
    </header>
</template>

<script>
import Button from "@/components/ui/CustomButton.vue";
export default {
    name: "Header",
    components: { Button }
}
</script>

<style scoped>
header {
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    position: sticky;
    top: 0;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}

nav {
    display: flex;
    margin-left: 100px;
}

nav a {
    text-decoration: none;
    color: #333;
    margin-right: 20px;
    padding: 0 40px;
    font-size: 16pt;
}

nav a:hover {
    color: #0077c0;
}

.logo img {
    height: 60px;
    transition: transform 0.5s ease;
}

.logo:hover img {
    transform: rotate(360deg);
    cursor: pointer;
}
</style>
