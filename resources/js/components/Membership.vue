<template>
    <div class="d-flex flex-column align-items-center">
        <h1 id="membership" class="title">СПОСОБЫ И ПУТИ УЧАСТИЯ</h1>
        <div class="d-flex mb-4">
            <div class="box">
                Онлайн
            </div>
            <p class="and">и/или</p>
            <div class="box">
                Оффлайн
            </div>
        </div>
        <p>Заседания будут проведены в очном и дистанционном формате, возможно использование очного формата с дистанционным участием. Доклады могут быть представлены в виде озвученных презентаций по шаблону оргкомитета и будут размещены в сети Интернет на ресурсах конференции. Все представленные материалы рецензируются членами программного комитета или привлеченными экспертами. Планируется издание трудов конференции и размещение их на платформе Российского индекса научного цитирования.</p>
    </div>
</template>

<script>
export default {
    name: "Membership"
}
</script>

<style scoped>
.title {
    margin-bottom: 2rem;
}

.box {
    display: flex;
    justify-content: center;
    margin-left: 2rem;
    border: 1px solid #51A230;
    height: 5rem;
    width: 10rem;
    align-items: center;
}

.and {
    display: flex;
    justify-content: center;
    margin-left: 2rem;
    height: 5rem;
    align-items: center;
}
</style>
