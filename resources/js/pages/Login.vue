<script setup>
import CButton from "@/components/ui/CButton.vue";
import {useUserStore} from "@/store/userStore";
import axios from "axios";
import {ref} from "vue";

const user = useUserStore()

const apiClient = axios.create({
    baseURL: "http://conf-olymp-app",
    withCredentials: true
});


const username = ref("")
const password = ref("")
const loading = ref(false)

function login() {
    loading.value = true;
    apiClient.post('/csrf-cookie').then(response => {
        apiClient.post('/login', {
            username: username.value,
            password: password.value,
        }).then(response => {
            apiClient.get('api/user')
                .then((response => {

                }));
            console.log("OK");
        }).catch(error => {
            console.log("ERROR");
        }).finally(() => {
            loading.value = false;
        });
    });
}
</script>

<template>
    <div class="login container">
        <div class="d-flex flex-column">
            <div class="d-flex justify-content-center login-form">
                <form>
                    <div class="form-group">
                        <label for="username">Имя пользователя / Email</label>
                        <input type="email" class="form-control" id="username" v-model="username" >
                    </div>
                    <div class="form-group">
                        <label for="password">Пароль:</label>
                        <input type="password" class="form-control" id="password" v-model="password">
                    </div>
                    <CButton type="submit" class="primary float-end" @click.prevent="login">
                <span v-if="loading">
                    <i class="fa fa-spinner fa-spin"></i> Загрузка...
                </span>
                        <span v-else>Войти</span>
                    </CButton>
                </form>
            </div>
            <div class="no-account">
                <p>Нет аккаунта? <router-link to="/register">Зарегестрируйся.</router-link></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login {
    margin-bottom: 10rem;
}

label {
    color: #3E7C23;
    font-size: 14pt;
    margin-bottom: 0.5rem;
}

input {
    border-color: #3E7C23;
    max-width: 500px;
}

.no-account {
    display: flex;
    flex-direction: column;
    align-items: center;
}

p {
    color: #51A230;
}

a {
    color: #51A230;
}

form {
    margin-top: 15rem;
    width: 500px;
}
</style>
