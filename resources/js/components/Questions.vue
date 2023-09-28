<template>
    <div class="d-flex">
        <h4 id="questions">Если у вас есть вопросы, напишите нам </h4>
        <img src="../../images/letter.svg" width="30" alt="">
    </div>
    <div>
        <div class="input">
            <label for="name"><p></p>Имя <span>*</span></label>
            <input />
        </div>
        <div class="input">
            <label for="email">Email <span>*</span></label>
            <input />
        </div>
        <div class="textarea">
            <label for="email">Ваш вопрос <span>*</span></label>
            <textarea rows="8"/>
        </div>
        <p><span>*</span> обязательно</p>
        <div class="d-flex justify-content-center">
            <CButton class="primary w-25">Отправить</CButton>
        </div>
        <p class="mt-2">Отправляя данную форму, я подписываю <span class="green">Согласие об использовании персональных данных.</span></p>
    </div>
</template>

<script>
import CButton from "@/components/ui/CButton.vue";
export default {
    name: "Questions",
    components: {CButton}
}
</script>

<style scoped>
h4 {
    color: #3E7C23;
}

img {
    margin-left: 1rem;
}

span {
    color: red;
}

input {
    border: 1px solid #3E7C23;
}

textarea {
    border: 1px solid #3E7C23;
}

.input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.textarea {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

label {
    font-size: 14pt;
    margin-bottom: 0.25rem;
}

.green {
    color: #51A230;
}

.green:hover {
    cursor: pointer;
}
</style>
