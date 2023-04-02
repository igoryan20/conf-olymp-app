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
                    <div class="possibilities-box">
                        <FeatureBox v-for="feature in features" :key="feature.id" :title="feature.title" :description="feature.description" />
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
import FeatureBox from "@/components/ui/FeatureBox.vue";
export default {
    name: "HomePage",
    data() {
        return {
            'features': [
                {
                    "id": 1,
                    "title": "Видеосвязь",
                    "description": "Преодолевайте географические барьеры и с легкостью проводите виртуальные конференции, используя функцию видеоконференцсвязи Confolymp."
                },
                {
                    "id": 2,
                    "title": "Управление конференцией",
                    "description": "Управляйте посещаемостью, обновляйте сеансы и регистрируйтесь в режиме реального времени с помощью нашего удобного интерфейса."
                },
                {
                    "id": 3,
                    "title": "Документооборот",
                    "description": "Легко управляйте всеми документами вашей конференции с помощью функции управления документами ConfOlympApp."
                },
            ]
        }
    },
    components: {FeatureBox, About, Delimiter, Banner},
};
</script>

<style scoped>
.possibilities-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
