<template>
    <Header />
    <slot></slot>
    <Footer />
</template>

<style scoped>

</style>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    components: {Footer, Header}
}
</script>
