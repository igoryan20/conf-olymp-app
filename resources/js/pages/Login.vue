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
    <div class="login">
        <div class="login-body">
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
            <div class="no-account">
                <p>Нет аккаунта? <router-link to="/register">Зарегестрируйся.</router-link></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-body {
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    padding: 4rem 4rem 0 4rem;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(32, 0, 123, 0.2);
}

.login-body label {
    font-weight: bold;
}

.login-body button {
    border-radius: 0;
    background-color: #0077cc;
    border-color: #0077cc;
}

.login-body button:hover {
    background-color: #005ea6;
    border-color: #005ea6;
}

.login-body p {
    text-align: center;
}

.login-body a {
    color: #0077cc;
}

.login-body a:hover {
    text-decoration: underline;
}

.no-account {
    margin-top: 5rem;
}
</style>
