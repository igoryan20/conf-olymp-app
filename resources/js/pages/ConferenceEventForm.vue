<script setup>
import CCheckbox from "@/components/ui/CCheckbox.vue";
import CButton from "@/components/ui/CButton.vue";
import CRadioButton from "@/components/ui/CRadioButton.vue";
import {ref} from "vue";

function nextPage()
{
    const step1 = document.querySelector('.step-1');
    step1.classList.add('hidden');
    const step2 = document.querySelector('.step-2');
    step2.classList.remove('hidden');
}

function previousPage()
{
    const step2 = document.querySelector('.step-2');
    step2.classList.add('hidden');
    const step1 = document.querySelector('.step-1');
    step1.classList.remove('hidden');
}

</script>

<template>
    <div class="container conference-form">
        <div class="step-1">
            <h1>Создание конференции</h1>
            <h4>Шаг 1 из 2. Заполнение информации</h4>
            <label>Прикрепить фото <img class="plus-in-circle" src="../../images/plus-in-circle.svg" /></label>
            <div class="d-flex justify-content-center">
                <img class="preview" src="../../images/student.jpg">
                <img class="preview" src="../../images/student.jpg">
            </div>
            <div class="d-flex flex-column align-items-center">
                <img class="tryangle" src="../../images/tryangle.svg" />
                <h5 class="regular" >Главное фото</h5>
            </div>
            <div class="form-group">
                <label for="name">Название <span>*</span></label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="form-group">
                <label for="description">Описание <span>*</span></label>
                <textarea type="text" class="form-control" rows="10" id="description" v-model="description" />
            </div>
            <div class="form-group d-flex flex-column">
                <label for="description">Тип информации <span>*</span></label>
                <CCheckbox title="Онлайн" />
                <CCheckbox title="Оффлайн" />
            </div>
            <div class="form-group">
                <label for="name">Местоположение <span>*</span></label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="form-group">
                <label for="name">Организаторы <span>*</span></label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="d-flex justify-content-between">
                <div class="form-group col-6">
                    <label for="name">Дата и время начала <span>*</span></label>
                    <input type="datetime-local" class="form-control" id="name" v-model="name">
                </div>
                <div class="form-group col-6">
                    <label for="name">Дата и время окончания <span>*</span></label>
                    <input type="datetime-local" class="form-control" id="name" v-model="name">
                </div>
            </div>
            <div class="form-group">
                <label for="name">Ссылка на ваш web сайт <span>*</span></label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <CButton @click="nextPage" class="primary float-end" >Продолжить</CButton>
        </div>
        <div class="step-2 hidden">
            <h4>Шаг 2 из 2. Формирование требований</h4>
            <div class="form-group d-flex flex-column">
                <label for="description">Количество участников <span>*</span></label>
                <CRadioButton title="Неограниченно" />
                <CRadioButton title="Ограниченно" />
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="form-group">
                <label for="name">Должности участников <span>*</span></label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="form-group">
                <label for="name">Требования к оформлению <img class="plus-in-circle" src="../../images/plus-in-circle.svg" /> <span>*</span></label>
                <div class="d-flex justify-content-center">
                    <div class="d-flex align-items-center me-4">
                        <img class="file" src="../../images/file-regular.svg" width="25" alt="">
                        <p>Название файла.pdf</p>
                        <img src="../../images/exit.svg" alt="">
                    </div>
                    <div class="d-flex align-items-center">
                        <img class="file" src="../../images/file-regular.svg" width="25" alt="">
                        <p>Название файла.pdf</p>
                        <img src="../../images/exit.svg" alt="">
                    </div>
                </div>
            </div>
            <CButton @click="previousPage" class="secondary float-end" >Назад</CButton>
            <CButton class="primary float-end" >Создать конференцию</CButton>
        </div>
    </div>
</template>

<style scoped>
.conference-form {
    margin-top: 5rem;
}

.plus-in-circle {

}

.plus-in-circle:hover {
    cursor: pointer;
}

.preview {
    width: 50%;
}

.regular {
    font-weight: normal;
}

.tryangle {
    width: 30px;
}

label {
    font-size: larger;
}

span {
    color: red;
}

.file {
}

.form-group {
    margin-top: 2rem;
}

.hidden {
    display: none;
}
</style>
