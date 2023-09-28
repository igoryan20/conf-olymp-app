<template>
    <div class="container">
        <div class="row">
            <MaterialsArchive />
            <VideosArchive />
        </div>
    </div>
</template>

<script>
import MaterialsArchive from "@/components/MaterialsArchive.vue";
import VideosArchive from "@/components/VideosArchive.vue";
export default {
    name: "Archive",
    components: {VideosArchive, MaterialsArchive}
}
</script>

<style scoped>

</style>
