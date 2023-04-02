<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <h5 class="text-uppercase mb-3">О нас</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu ligula. Mauris euismod lectus nec mi luctus, vel posuere velit faucibus.</p>
                </div>
                <div class="col-sm-6 col-md-4">
                    <h5 class="text-uppercase mb-3">Быстрые ссылки</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Домой</a></li>
                        <li><a href="#">Курсы</a></li>
                        <li><a href="#">Блок</a></li>
                        <li><a href="#">Свяжитесь с нами</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5 class="text-uppercase mb-3">Подпишитесь</h5>
                    <p>Подпишитесь на нашу рассылку новостей, чтобы получать последние обновления о наших курсах и ресурсах.</p>
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" placeholder="Введите вашу почту">
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Подписаться</button>
                    </form>
                </div>
            </div>
        </div>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p>&copy; 2023 Conf Olymp. Все права защищены.</p>
                </div>
                <div class="col-md-6">
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#">Условия</a></li>
                        <li class="list-inline-item"><a href="#">Политика конфиденциальности</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #f8f8f8;
    padding: 4rem 0;
    font-size: 1.2rem;
    color: #333;
}

.footer h5 {
    color: #0077cc;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
}

.footer p {
    margin-bottom: 1.5rem;
}

.footer ul li a {
    color: #333;
    text-decoration: none;
}

.footer ul li a:hover {
    color: #0077cc;
}

.footer form {
    margin-top: 1.5rem;
}

.footer form input[type="email"] {
    border-radius: 0;
    border-color: #0077cc;
}

.footer form button[type="submit"] {
    background-color: #0077cc;
    border-color: #0077cc;
    border-radius: 0;
}

.footer form button[type="submit"]:hover {
    background-color: #005ea6;
    border-color: #005ea6;
}

.footer hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.footer p:last-child {
    margin-bottom: 0;
}

.footer .list-inline-item {
    margin-right: 1rem;
}
</style>
