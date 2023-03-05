<template>
    <section class="schedule">
        <div class="container">
            <h2>Расписание</h2>
            <p>Проверьте расписание предстоящих конференций</p>
            <router-link to="/schedule" class="button">Посмотреть расписание</router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: "Schedule"
}
</script>

<style scoped>
.schedule {
    padding: 100px 0;
}

.schedule h2 {
    font-size: 36px;
    margin: 0;
}

.schedule p {
    font-size: 20px;
    margin: 20px 0;
}
</style>
