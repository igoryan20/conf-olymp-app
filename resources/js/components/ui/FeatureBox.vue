<template>
    <div class="possibility">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: "FeatureBox",
    props: ['title', 'description']
}
</script>

<style scoped>
.possibility {
    border: 1px solid #20007B;
    box-shadow: -10px 10px 10px rgba(32, 0, 123, 0.25);
    border-radius: 20px;
    padding: 20px 40px;
    height: 15rem;
    width: 25rem;
    margin-top: 2rem;
    margin-right: 2rem;
}

h2 {
    text-align: center;
}

p {
    text-align: center;
}
</style>
