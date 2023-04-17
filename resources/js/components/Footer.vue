<template>
    <footer class="footer">
        <div class="container">
            <div class="row flex justify-content-between">
                <div class="col-sm-2 col-md-4">
                    <h5 class="text-uppercase mb-3">О нас</h5>
                    <p>В нашей компании мы стремимся предоставлять высококачественные продукты и услуги для удовлетворения потребностей наших клиентов. Уделяя особое внимание инновациям и совершенству, мы стремимся добиваться наилучших возможных результатов и выстраивать прочные, долгосрочные отношения с нашими клиентами.</p>
                </div>
                <div class="col-md-4">
                    <h5 class="text-uppercase mb-3">Подпишитесь</h5>
                    <p>Подпишитесь на нашу рассылку новостей, чтобы получать последние обновления о наших курсах и ресурсах.</p>
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" placeholder="Введите вашу почту">
                        </div>
                        <CButton type="submit" class="primary">Подписаться</CButton>
                    </form>
                </div>
            </div>
        </div>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p>&copy; 2023 ConfOlympApp. Все права защищены.</p>
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
footer {
    position: relative;
    bottom: 0;
    width: 100%;
    margin-top: 5rem;
    padding: 5rem;
    box-shadow: 0 -4px 10px rgba(49, 107, 255, 0.25);
}
</style>
<script>
import CButton from "@/components/ui/CButton.vue";
export default {
    components: {CButton}
}
</script>
