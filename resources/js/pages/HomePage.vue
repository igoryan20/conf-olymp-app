<template>
    <div class="container">
        <div class="row">
            <Banner />
            <Delimiter />
            <About />
            <Date />
            <Delimiter />
            <Goal />
            <Delimiter />
            <Directions />
            <Delimiter />
            <Sections />
            <Delimiter />
            <Polozhenie />
            <Delimiter />
            <Members />
            <Delimiter />
            <OrgComitet />
            <Delimiter />
            <Membership />
            <Delimiter />
            <Questions />
            <Delimiter />
            <Partners />
        </div>
    </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Delimiter from "@/components/ui/Delimiter.vue";
import About from "@/components/About.vue";
import Features from "@/components/Features.vue";
import Date from '@/components/Date.vue'
import Goal from '@/components/Goal.vue'
import Directions from "@/components/Directions.vue";
import Sections from "@/components/Sections.vue";
import Polozhenie from "@/components/Polozhenie.vue";
import Members from "@/components/Members.vue";
import OrgComitet from "@/components/OrgComitet.vue";
import Membership from "@/components/Membership.vue";
import Questions from "@/components/Questions.vue";
import Partners from "@/components/Partners.vue";

export default {
    name: "HomePage",
    components: {
        Partners,
        Questions,
        Membership, Features, About, Delimiter, Banner, Date, Goal, Directions, Sections,
    Polozhenie, Members, OrgComitet},
    mounted() {
        this.scrollToAnchor();
    },
    methods: {
        scrollToAnchor() {
            console.log((new URL(location.href)).pathname.substring(1));
        }
    }
};
</script>

<style scoped>

</style>
