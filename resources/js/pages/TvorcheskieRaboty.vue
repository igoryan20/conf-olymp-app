<template>
    <div class="d-flex flex-column align-items-center">
        <h1 class="title">ТВОРЧЕСКИЕ РАБОТЫ</h1>
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
                    <div class="d-flex flex-column align-items-center tvor-box">
                        <h4>Архитектурные визионы: исследование форм, функций и новаторских концепций</h4>
                        <br />
                        <div class="d-flex">
                            <p>
                                Эта выставка является местом встречи для талантливых студентов-архитекторов, которые представят свои работы, выполненные в разных стилях и техниках, чтобы показать свое мастерство и уникальный взгляд на архитектурную форму. На выставке были представлены разнообразные проекты, начиная от крупномасштабных зданий и сооружений до мелких элементов декора и дизайна. Каждый проект имеет свою уникальную концепцию и идею, которая отражает индивидуальный подход к архитектуре.
                            </p>
                            <img src="../../images/tvorcheskie-1.png" width="400" alt="">
                        </div>
                    </div>
                    <div class="d-flex flex-column align-items-center tvor-box">
                        <h4>Текстильные тропы: эксперименты с формой, цветом и структурой</h4>
                        <br />
                        <div class="d-flex">
                            <p>
                                На выставке были представлены разнообразные работы, включая текстильные изделия, предметы интерьера, одежду и аксессуары, выполненные в разных стилях и техниках. Каждый проект будет иметь свою уникальную концепцию, форму, цвет и структуру, отражающие индивидуальный подход и креативный потенциал авторов.                            </p>
                            <img src="../../images/tvorcheskie-2.png" width="400" alt="">
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
    </div>
</template>

<script>
import CButton from "@/components/ui/CButton.vue";
export default {
    name: "TvorcheskieRaboty",
    components: {CButton},
    data() {
        return {
            active: true,
        }
    },
    methods: {
        showHide: function () {
            this.active = !this.active
        },
    }
}
</script>

<style scoped>
.section-box {
    margin-bottom: 1rem;
    width: 1000px;
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
    max-width: 1000px;
}

.title {
    margin-bottom: 4rem;
    margin-top: 10rem;
}

.tvor-box {
    padding: 1rem 1rem;
    border: 1px solid #51A230;
    margin-bottom: 2rem;
}
</style>
