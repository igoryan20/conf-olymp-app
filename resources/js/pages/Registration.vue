<template>
    <div class="registration">
        <form @submit.prevent="register" class="registration-form">
            <div class="form-group">
                <label for="username">ФИО</label>
                <input type="text" id="username" v-model="username" required>
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
            <div class="d-flex justify-content-end">
                <CButton type="submit" class="secondary">Зарегестрироваться</CButton>
            </div>
            <div class="mt-4 d-flex justify-content-center">
                <p>Уже есть аккаунт? <router-link to="/login">Войдите</router-link></p>
            </div>
            <div>
                <p class="black">
                    Отправляя данную форму, я подписываю <span>Согласие об использовании персональных данных</span>
                </p>
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
}

.registration-form {
    margin-top: 10rem;
}

h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #51A230;
}

a {
    color: #51A230;
}

a:hover {
    color: #3E7C23;
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
    color: #3E7C23;
}

input {
    font-size: 1.2rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #3E7C23;
    box-sizing: border-box;
    width: 100%;
}

input:focus {
    outline: none;
    border-color: #3E7C23;
}

span {
    cursor: pointer;
    color: #51A230;
}

.black {
    color: black;
}
</style>
