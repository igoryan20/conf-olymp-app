<template>
    <footer class="footer">
        <div class="container d-flex justify-content-between">
            <div class="d-flex">
                <img class="mirea" src="../../images/mirea.png" width="150" alt="">
                <div>
                    <p>Москва, Пр-т Вернадского, д. 78</p>
                    <a href="tel:+7992156565">+7 (499) 215-65-65</a> <br />
                    <a href="mailto:rector@mirea.ru">rector@mirea.ru</a>
                    <div class="mt-2">
                        <img class="social-network" src="../../images/ok.svg" alt="" width="30">
                        <img class="social-network" src="../../images/tiktok.svg" alt="" width="30">
                        <img class="social-network" src="../../images/youtube.svg" alt="" width="30">
                        <img class="social-network" src="../../images/telegram.svg" alt="" width="30">
                        <img class="social-network" src="../../images/vk.svg" alt="" width="30">
                    </div>
                </div>
            </div>
            <div>
                <p>Подписка на обновления</p>
                <div class="d-flex">
                    <input class="me-2" placeholder="Введите ваш E-mail" />
                    <CButton class="primary">ОК</CButton>
                </div>
            </div>
        </div>
        <hr>
        <div class="container">
                    <p>&copy 2023 МИРЭА - Российский технологический университет
                        Международная научно-практическая конференция «Профессиональная коммуникация от термина к дискурсу»</p>
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
    box-shadow: 0 -4px 10px rgba(81, 162, 48, 0.25);
}

p {
    color: #51A230;
    margin: 0;
}

a {
    color: #51A230;
    margin: 0;
    text-decoration: none;
}

a:hover {
    cursor: pointer;
}

.mirea {
    margin-right: 2rem;
}

.mirea:hover {
    cursor: pointer;
}

.social-network {
    margin-right: 0.5rem;
}

.social-network:hover {
    cursor: pointer;
}

input {
    border: 1px solid #3E7C23;
}

input:focus {
    border: 1px solid #3E7C23;
}

input:active {
    border: 1px solid #3E7C23;
}

input::placeholder {
    color: #D9D9D9;
}

</style>
<script>
import CButton from "@/components/ui/CButton.vue";
export default {
    components: {CButton}
}
</script>
