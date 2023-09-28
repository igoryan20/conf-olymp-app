<template>
    <div class="container">
        <div class="d-flex flex-column align-items-center">
            <h1 class="title">МЕРОПРИЯТИЯ</h1>
        </div>
        <div>
            <h4>Регистрация открыта</h4>
            <div>
                <div class="d-flex conf-box">
                    <img class="image" src="../../images/image-holder.svg" width="100" alt="">
                    <div class="d-flex justify-content-between conf-box-inner">
                        <div>
                            <h4 class="conf">Конференция 1</h4>
                            <div class="d-flex">
                                <p class="place">МИРЭА, Москва</p>
                                <p class="date">01 сентября 2023</p>
                            </div>
                        </div>
                        <div>
                            <p class="black">Регистрация до 01 августа 2023</p>
                            <CButton class="primary">Подать заявку</CButton>
                        </div>
                    </div>
                </div>
                <div class="d-flex conf-box">
                    <img class="image" src="../../images/image-holder.svg" width="100" alt="">
                    <div class="d-flex justify-content-between conf-box-inner">
                        <div>
                            <h4 class="conf">Конференция 2</h4>
                            <div class="d-flex">
                                <p class="place">МИРЭА, Москва</p>
                                <p class="date">01 ноября 2023</p>
                            </div>
                        </div>
                        <div>
                            <p class="black">Регистрация до 01 ноября 2023</p>
                            <CButton class="primary">Подать заявку</CButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CButton from "@/components/ui/CButton.vue";
export default {
    name: "Events",
    components: {CButton}
}
</script>

<style scoped>
.title {
    margin-top: 10rem;
    margin-bottom: 4rem;
}

.conf {
    color: #3E7C23  ;
}

.conf-box {
    margin-top: 2rem;
    border: 1px solid #51A230;
    padding: 2rem;
}

.conf-box-inner {
    width: 1000px;
}

.image {
    margin-right: 4rem;
}

.date {
    color: black;
}

.place {
    margin-right: 2rem;;
}

.black {
    color: black;
}
</style>
