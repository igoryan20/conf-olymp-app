<template>
    <div class="d-flex flex-column align-items-center">
    <h1 id="orgcomitet" class="title">ОРГАНИЗАЦИОННЫЙ КОМИТЕТ</h1>
    <div>
        <div>
            <img src="../../images/image-holder.svg" width="200" alt="">
            <p>
                <span>Председатель организационного комитета:</span> <br />
                Прокопов Н.И., первый проректор РТУ МИРЭА (г. Москва)
            </p>
        </div>
        <div class="right">
            <div>
                <img src="../../images/image-holder.svg" width="200" alt="">
                <img src="../../images/image-holder.svg" width="200" alt="">
            </div>
            <p>
                <span>Заместители председателя организационного комитета:</span> <br />
                Назаренко М.А., заведующий кафедрой электроники, РТУ МИРЭА, г. Москва.
                Мамедова И.Ю., заведующий кафедрой компьютерного дизайна, РТУ МИРЭА, г. Москва.
            </p>
        </div>
        <div>
            <img src="../../images/image-holder.svg" width="200" alt="">
            <p>
                <span>Ответственный секретарь организационного комитета:</span> <br />
                Шмелёва А.Н., ассистент кафедры электроники, РТУ МИРЭА, г. Москва.
            </p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "OrgComitet"
}
</script>

<style scoped>
.title {
    margin-bottom: 2rem;
}

span {
    color: #3E7C23;
}

img {
    margin-bottom: 2rem;
}

.right {
    display: flex;
    flex-direction: column;
    justify-content: right;
    text-align: right;
}
</style>
