<template>
    <div class="registration">
        <h2>Присоединяйтесь к нашему сообществу</h2>
        <p>Зарегестрируйтесь сейчас, чтобы получить доступ к эксклюзивным учебным ресурсам и к общению с другими студентами!</p>
        <form @submit.prevent="register" class="registration-form">
            <div class="flex row">
                <div class="form-group">
                    <label for="name">Имя</label>
                    <input type="text" id="name" v-model="name" required>
                </div>
                <div class="form-group">
                    <label for="surname">Фамилия</label>
                    <input type="text" id="surname" v-model="surname" required>
                </div>
                <div class="form-group">
                    <label for="middlename">Отчество</label>
                    <input type="text" id="middlename" v-model="middlename">
                </div>
            </div>
            <div class="form-group">
                <label for="username">Имя пользователя</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="email">Электронная почта</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Пароль:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div class="form-group">
                <label for="confirm-password">Подтвердите пароль:</label>
                <input type="password" id="confirm-password" v-model="password_confirmation" required>
            </div>
            <CButton type="submit" class="primary">Зарегестрироваться</CButton>
            <div class="mt-4">
                <p>Уже есть аккаунт? <router-link to="/login">Войдите</router-link></p>
            </div>
        </form>
    </div>
</template>

<script>
import CButton from "@/components/ui/CButton.vue";
export default {
    components: {CButton},
    data() {
        return {
            name: '',
            surname: '',
            middlename: '',
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    },
    methods: {
        register() {
            if (this.validate()) {
                axios.post('/register', {
                    name: this.name,
                    surname: this.surname,
                    middlename: this.middlename,
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }).then(response => {
                    console.log(response)
                }).catch(error => {
                    console.log(error.response)
                });
            }
            console.log("Password not confirmed")
        },
        validate() {
            if (this.password === this.password_confirmation) {
                return true;
            }
            return false;
        }
    }
}
</script>

<style>
.registration {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    font-family: Arial, sans-serif;
    color: #333;
}

h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.registration-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
    width: 100%;
}

label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

input {
    font-size: 1.2rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    box-sizing: border-box;
}

input:focus {
    outline: none;
    border-color: #0077cc;
    box-shadow: 0 0 0 2px rgba(0, 119, 204, 0.2);
}
</style>
