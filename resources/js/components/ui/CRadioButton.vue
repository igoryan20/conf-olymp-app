<script setup>

defineProps(['title']);

</script>

<template>
    <div class="d-flex">
        <input class="custom-radio" type="radio" />
        <p>{{ title }}</p>
    </div>

</template>

<style scoped>
.custom-radio {
    color: #0a53be;
    width: 50px;
    height: 30px;
    border: 4px solid #0a53be;
    border-radius: 20px;
}

p {
    color: #0a53be;
    font-size: large;
    font-weight: bold;
}
</style>
