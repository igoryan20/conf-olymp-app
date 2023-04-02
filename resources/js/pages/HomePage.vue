<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <Banner />
                <Delimiter />
                <About />
                <Delimiter />
                <Features />
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Delimiter from "@/components/ui/Delimiter.vue";
import About from "@/components/About.vue";
import Features from "@/components/Features.vue";

export default {
    name: "HomePage",
    components: {Features, About, Delimiter, Banner},
};
</script>

<style scoped>

</style>
