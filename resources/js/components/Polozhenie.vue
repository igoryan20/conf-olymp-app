<template>
    <div class="d-flex flex-column align-items-center">
        <h1 id="members" class="title">ПОЛОЖЕНИЕ КОНФЕРЕНЦИИ</h1>
        <div>
            <CButton class="secondary">Просмотреть <img src="../../images/eye.svg" width="30" alt=""></CButton>
            <CButton class="primary">Скачать <img src="../../images/download.svg" width="30" alt=""></CButton>
        </div>
    </div>
</template>

<script>
import CButton from "@/components/ui/CButton.vue";

export default {
    name: "Polozhenie",
    components: {CButton}

}
</script>

<style scoped>
.title {
    margin-bottom: 2rem;
}
</style>
