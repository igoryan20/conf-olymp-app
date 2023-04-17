<template>
    <div>
        <div id="meet">
            <img src="../../images/brand.svg">
        </div>
    </div>
</template>

<script>
export default {
    name: "VideoConference",
    data() {
        return {
            meet: "",
        }
    },
    mounted() {
        this.createVideoConference();
    },
    methods: {
        createVideoConference() {
            const domain = 'localhost:8443';
            this.meet = document.querySelector('#meet');
            const options = {
                roomName: 'Тестовая видео конференция',
                width: "100%",
                height: 1000,
                parentNode: this.meet,
                lang: 'ru'
            };
            const api = new JitsiMeetExternalAPI(domain, options);
        },
    }
}
</script>

<style scoped>
#meet {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
img {
    position: fixed;
    top: 1.5rem;
    left: 2rem;
    width: 80px;
    z-index: 1;
    float: right;
}
</style>
