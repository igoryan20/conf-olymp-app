<template>
    <div class="login">
        <div class="login-header">
            <h2 class="text-center">Student Login</h2>
        </div>
        <div class="login-body">
            <form>
                <div class="form-group">
                    <label for="username">Имя пользователя или электронная почта:</label>
                    <input type="email" class="form-control" id="username" v-model="email" placeholder="Enter username">
                </div>
                <div class="form-group">
                    <label for="password">Пароль:</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Enter password">
                </div>
                <button type="submit" class="btn btn-primary btn-block" @click.prevent="login">
                    <span v-if="loading">
                        <i class="fa fa-spinner fa-spin"></i> Загрузка...
                    </span>
                    <span v-else>Войти</span>
                </button>
            </form>
            <div class="mt-4">
                <p>Нет аккаунта? <router-link to="/registration">Зарегестрируйся.</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            loading: false
        }
    },
    methods: {
        login() {
            this.loading = true;
            axios.post('/csrf-cookie').then(response => {
                axios.post('/login', {
                    email: this.email,
                    password: this.password,
                }).then(response => {
                    console.log(response);
                    this.loading = false;
                }).catch(error => {
                    console.log(error.response);
                    this.loading = false;
                });
            });
        }
    }
}
</script>

<style>
.login {
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-header {
    margin-bottom: 2rem;
}

.login-header h2 {
    font-size: 3rem;
    color: #0077cc;
}

.login-body {
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.login-body form {
    margin-bottom: 1rem;
}

.login-body label {
    font-weight: bold;
}

.login-body input {
    border-radius: 0;
    border-color: #ccc;
}

.login-body input:focus {
    border-color: #0077cc;
}

.login-body button {
    margin-top: 2rem;
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
</style>
