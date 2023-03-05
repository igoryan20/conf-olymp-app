<script setup>
import { useRouter } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import Banner from "@/components/Banner.vue";
import About from "@/components/About.vue";
import Schedule from "@/components/Schedule.vue";

const router = useRouter();

function exploreEvents() {
    router.push('/events');
}
</script>

<template>
    <main>
        <Banner />
        <About />
        <Schedule />
    </main>
</template>

<style scoped>

</style>
