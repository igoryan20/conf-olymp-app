<template>
    <div class="banner">
        <div class="banner-darkness">
            <h1>Добро пожаловать на студенченские конференции</h1>
            <p>Присоеденись к нашим мероприятиям и докладчикам</p>
            <router-link to="/schedule" class="cta">Посмотреть расписание</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style scoped>
.banner {
    color: #fff;
    text-align: center;
    padding: 150px 10%;
    background-image: url("../../images/students.png");
    background-size: cover;
    background-position: top;
}

.banner-darkness {
    background-color: rgba(50, 50, 50, 0.7);
    padding: 40px;
    border-radius: 20px;
}

.banner h1 {
    font-size: 48px;
    margin-bottom: 20px;
}

.banner p {
    font-size: 24px;
    margin-bottom: 40px;
}

.cta {
    display: inline-block;
    background-color: #fff;
    color: #0077c0;
    padding: 15px 30px;
    border-radius: 5px;
    font-size: 18px;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}

.cta:hover {
    background-color: #0077c0;
    color: #fff;
}
</style>
