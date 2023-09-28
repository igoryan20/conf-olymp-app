<template>
    <div class="d-flex flex-column align-items-center">
        <h1 class="title">АРХИВ ВИДЕОЗАПИСЕЙ</h1>
        <div>
            <div class="section-box">
                <div class="section">
                    <p>2022</p>
                    <svg class="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                    </svg>
                </div>
            </div>
            <div class="section-box">
                <div @click="showHide" class="section">
                    <p>2021</p>
                    <svg class="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                    </svg>
                </div>
                <div class="description" :hidden="!active">
                    <div class="d-flex flex-column align-items-center">
                        <h1 class="little-title">СЕКЦИИ</h1>
                        <div class="d-flex flex-column align-items-center">
                            <div class="section-box-inner">
                                <div class="section">
                                    <p>Профессиональные коммуникации: теоретические и
                                        практические проблемы</p>
                                    <svg class="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="section-box-inner">
                                <div @click="showHideInner" class="section">
                                    <p>Визуальные коммуникации</p>
                                    <svg class="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                                    </svg>
                                </div>
                                <div class="description" :hidden="!activeInner">
                                    <div class="d-flex flex-column justify-content-center align-items-center">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tF9-OBymExI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <p class="green">Доклад Хрусталёва Ю.С. 19 мая 2021 г.</p>
                                    </div>
                                    <div class="d-flex flex-column justify-content-center align-items-center">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/F6GKsRrLXo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <p class="green">Доклад, Егоров Д.С. 19 мая 2021 г.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="section-box-inner">
                                <div class="section">
                                    <p>Универсальный дизайн – равные возможности –
                                        комфортная среда</p>
                                    <svg class="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="section-box-inner">
                                <div class="section">
                                    <p>Инновации и опыт исследования использования
                                        компетентностного подхода в высшей школе</p>
                                    <svg class="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-box">
                <div class="section">
                    <p>2020</p>
                    <svg class="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <CButton class="secondary">Показать более ранние года <img style="margin-left: 2rem" src="../../images/double-arrow.svg" alt=""></CButton>
        </div>
        <div class="d-flex flex-row justify-content-end align-items-end mt-2">
            <a href="https://www.youtube.com/@user-bo5qt1rc3o/featured" class="green text-decoration-underline">
                <img src="../../images/youtube-red.svg" width="50" alt="">
                Перейти на YouTube канал
            </a>
        </div>
    </div>
</template>

<script>
import CButton from "@/components/ui/CButton.vue";
export default {
    name: "VideosArchive",
    components: {CButton},
    data() {
        return {
            active: true,
            activeInner: true
        }
    },
    methods: {
        showHide: function () {
            this.active = !this.active
        },
        showHideInner: function () {
            this.activeInner = !this.activeInner
        },
    }
}
</script>

<style scoped>
.section-box {
    margin-bottom: 1rem;
    width: 1000px;
}

.section-box-inner {
    margin-bottom: 1rem;
    width: 900px;
}

.section:hover {
    cursor: pointer;
}

p {
    margin: 0;
    padding: 0.5rem 2rem;
}

.section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #51A230;
    align-items: center;
}

.select-arrow {
    margin-right: 2rem;
}

.description {
    border: 1px solid #51A230;
    border-top: none;
    padding: 0.5rem 2rem;
}

.title {
    margin-top: 4rem;
    margin-bottom: 4rem;
}

.little-title {
    font-size: 14pt;
}

.green {
    color: #51A230;
}
</style>
