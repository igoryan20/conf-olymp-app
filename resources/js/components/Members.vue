<template>
    <div class="d-flex flex-column align-items-center">
        <h1 class="title">УЧАСТНИКИ КОНФЕРЕНЦИИ</h1>
        <div class="d-flex container-box">
            <div class="box"><p>Научные <br /> работники</p></div>
            <div class="box"><p>Преподаватели</p></div>
            <div class="box"><p>Аспиранты</p></div>
            <div class="box"><p>Студенты</p></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Members"
}
</script>

<style scoped>

p {
    margin: 0;
}

.title {
    margin-bottom: 2rem;
}

.container-box {
    display: flex;

}

.box {
    display: flex;
    justify-content: center;
    margin-left: 2rem;
    border: 1px solid #51A230;
    height: 5rem;
    width: 10rem;
    align-items: center;
}
</style>
