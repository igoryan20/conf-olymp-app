<template>
    <div class="container">
        <div class="d-flex flex-column align-items-center">
            <h1 class="title">УЧАСТИЕ В КОНФЕРЕНЦИИ</h1>
        </div>

        <div>
            <h4>Участнику необходимо предоставить до 15 мая 2023 г</h4>
            <div class="d-flex justify-content-center process">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <img class="mb-4" src="../../images/application.png" width="100" alt="">
                    <p>Заявку</p>
                </div>
                <div class="arrow2">
                    <img src="../../images/arrow.png" width="50" alt="">
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <img class="mb-4" src="../../images/contract.png" width="100" alt="">
                    <p>Cогласие на обработку персональных данных</p>
                </div>
                <div class="arrow2">
                    <img src="../../images/arrow.png" width="50" alt="">
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <img class="mb-4" src="../../images/paper.png" width="100" alt="">
                    <p>Текст статьи</p>
                </div>
                <div class="arrow2">
                    <img src="../../images/arrow.png" width="50" alt="">
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <img class="mb-4" src="../../images/presentation.png" width="100" alt="">
                    <p>Презентация к докладу</p>
                </div>
            </div>
        </div>

        <div class="mt-4">
            <h4>Заявки и материалы по конфереции принимаются только на почту: <a href="mailto:profcommunication@mail.ru">profcommunication@mail.ru</a></h4>
        </div>

        <div class="d-flex flex-column align-items-center">
            <h1 class="margin-top-10">НЕОБХОДИМЫЕ ДОКУМЕНТЫ</h1>
        </div>

        <div class="d-flex flex-column doc-box">
            <a class="doc" href="#">Форма заявки</a>
            <a class="doc" href="#">Требования к оформлению статей в сборник трудов</a>
            <a class="doc" href="#">Образец статьи</a>
            <a class="doc" href="#">Заявление о согласии на обработку персональных данных</a>
        </div>

        <div class="d-flex flex-column align-items-center">
            <h1 class="margin-top-10">КОНТАКТНЫЕ ЛИЦА</h1>
        </div>

        <div>
            <img src="../../images/image-holder.svg" width="200" alt="">
            <p>
                <span>Заведующий кафедрой электроники, РТУ МИРЭА, г. Москва:</span> <br />
                Назаренко М.А.
                <br/><a href="mailto:nazarenko@mirea.ru">nazarenko@mirea.ru</a>
            </p>
        </div>
        <div class="right">
            <div>
                <img src="../../images/image-holder.svg" width="200" alt="">
            </div>
            <p>
                <span>Ассистент кафедры электроники, РТУ МИРЭА, г. Москва:</span> <br />
                Шмелева А.Н.
                <br/><a href="mailto:shmelyova@mirea.ru">shmelyova@mirea.ru</a>
            </p>
        </div>
        <div class="mb-0">
            <img src="../../images/image-holder.svg" width="200" alt="">
            <p class="mb-0">
                <span>Кандидат филологических наук, оргкомитет конференции:</span> <br />
                Казачкова Ольга Александровна
                <br/><a href="mailto:kazachkova@mirea.ru">kazachkova@mirea.ru</a>
            </p>
            <p class="tel">8 (916) 753 55 47</p>
        </div>
        <div class="right">
            <div>
                <img src="../../images/image-holder.svg" width="200" alt="">
            </div>
            <p class="mb-0">
                <span>К.т.н., доцент кафедры компьютерного дизайна:</span> <br />
                Бойко Юлия Алексеевна
                <br/><a href="mailto:bojko@mirea.ru">bojko@mirea.ru</a>
            </p>
            <p class="tel">8 (916) 753 55 47</p>
        </div>
    </div>
</template>

<script>
import Partners from "@/components/Partners.vue";
export default {
    name: "Deadlines",
    components: {Partners}
}
</script>

<style scoped>
.title {
    margin-top: 10rem;
    margin-bottom: 4rem;
}

.process {
    margin-top: 5rem;
}

.arrow2 {
    margin: 2rem;
}

a {
    color: #51A230;
}

a:hover {
    color: #3E7C23;
}

.margin-top-10 {
    margin-top: 4rem;
}

.doc {
    font-size: 14pt;
}

.doc-box {
    margin-top: 2rem;
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
