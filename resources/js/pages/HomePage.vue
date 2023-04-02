<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <Banner />
                <Delimiter />
                <About />
                <Delimiter />
                <div>
                    <h1>Возможности</h1>
                    <div>
                        <h2></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Delimiter from "@/components/ui/Delimiter.vue";
import About from "@/components/About.vue";
export default {
    name: "HomePage",
    components: {About, Delimiter, Banner},
};
</script>

<style scoped>

</style>
