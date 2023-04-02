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
                    <label for="name">Фамилия</label>
                    <input type="text" id="name" v-model="name" required>
                </div>
                <div class="form-group">
                    <label for="name">Отчество</label>
                    <input type="text" id="name" v-model="name" required>
                </div>
            </div>
            <div class="form-group">
                <label for="email">ВУЗ</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="email">Направление подготовкм</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="name">Имя пользователя:</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div class="form-group">
                <label for="email">Электронная почта в домене ВУЗа:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="email">Альтернативная почта для уведомлений:</label>
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
            <button type="submit" class="btn-register">Зарегестрироваться</button>
            <div class="mt-4">
                <p>Уже есть аккаунт? <router-link to="/login">Войдите</router-link></p>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    },
    methods: {
        register() {
            axios.post('/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error.response)
            });
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

.btn-register {
    background-color: #0077cc;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn-register:hover {
    background-color: #005ea6;
}
</style>
