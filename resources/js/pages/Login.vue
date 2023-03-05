<template>
    <div class="login-page">
        <div class="form-wrapper">
            <form class="login-form">
                <h1>Вход</h1>
                <div class="w-100">
                    <CustomInput label="Электронная почта" type="email" id="email" v-model="email" required />
                    <CustomInput label="Пароль" type="password" id="password" v-model="password" required="true" />
                    <Button type="primary" class="w-100">Войти</Button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import Button from "@/components/ui/CustomButton.vue";
import CustomInput from "@/components/ui/CustomInput.vue";
export default {
    name: "Login",
    components: {CustomInput, Button, MainLayout},
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            // Add your login logic here
        }
    }
}
</script>

<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 76vh;
}

.form-wrapper {
    max-width: 400px;
    width: 100%;
}

.login-form {
    background-color: #fff;
    padding: 40px;
    border-radius: 5px;
}

button[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    border: none;
    background-color: #333;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}
</style>
