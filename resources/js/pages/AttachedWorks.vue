<template>
    <div class="d-flex flex-column align-items-center">
        <h1 class="title">ПРИКРЕПЛЕННЫЕ РАБОТЫ</h1>
        <div>
            <div class="section-box">
                <div @click="showHide('termin')" class="section">
                    <p>Терминоведение</p>
                    <svg class="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                    </svg>
                </div>
                <div class="description" :hidden="!active['termin']">
                    <div class="d-flex flex-column align-items-center">
                        <div class="box">
                            <div>
                                <button class="awaiting">Ожидает одобрения</button>
                            </div>
                            <div class="d-flex flex-row">
                                <a class="link">Щукин И.Н. Культурные особенности и перевод: анализ..._.pdf</a>
                                <img src="../../images/download-green.svg" width="30" alt="">
                                <img src="../../images/edit.svg" width="30" alt="">
                                <img src="../../images/remove.svg" width="30" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-box">
                <div @click="showHide('lang')" class="section">
                    <p>Сопоставительное языкознание</p>
                    <svg class="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                    </svg>
                </div>
                <div class="description" :hidden="!active['lang']">
                    <div class="d-flex flex-column align-items-center">
                        <div class="box">
                            <div>
                                <button class="done">Одобрено</button>
                            </div>
                            <div class="d-flex flex-row">
                                <a class="link">Щукин И.Н. Культурные особенности и перевод: анализ..._.pdf</a>
                                <img src="../../images/download-green.svg" width="30" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-box">
                <div class="section" @click="showHide('termin2')">
                    <p>Терминоведение</p>
                    <svg class="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                    </svg>
                </div>
                <div class="description" :hidden="!active['termin2']">
                    <div class="d-flex flex-column align-items-center">
                        <div class="d-flex flex-column align-items-center">
                            <div class="box">
                                <div>
                                    <button class="cancel">Отклонено</button>
                                </div>
                                <div class="d-flex flex-row">
                                    <a class="link">Щукин И.Н. Культурные особенности и перевод: анализ..._.pdf</a>
                                    <img src="../../images/download-green.svg" width="30" alt="">
                                    <img src="../../images/edit.svg" width="30" alt="">
                                    <img src="../../images/remove.svg" width="30" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-box">
                <div class="section" @click="showHide('termin3')">
                    <p>Терминоведение</p>
                    <svg class="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                    </svg>
                </div>
                <div class="description" :hidden="!active['termin3']">
                    <div class="d-flex flex-column align-items-center">
                        <div class="box">
                            <div class="d-flex flex-row">
                                <button class="ozeneno">Оценено</button>
                                <p class="green">75/100 баллов</p>
                            </div>
                            <div class="d-flex flex-row">
                                <a class="link">Щукин И.Н. Культурные особенности и перевод: анализ..._.pdf</a>
                                <img src="../../images/download-green.svg" width="30" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <CButton class="secondary">Прикрепить новую работу</CButton>
        </div>
    </div>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade show" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CButton from "@/components/ui/CButton.vue";
export default {
    name: "AttachedWorks",
    components: {CButton},
    data() {
        return {
            active: {
                'termin': true,
                'lang': false,
                'termin2': true,
                'termin3': false,
            },
        }
    },
    methods: {
        showHide: function (section) {
            this.active[section] = !this.active[section]
        },
    }
}
</script>

<style scoped>
.section-box {
    margin-bottom: 1rem;
    width: 1000px;
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

.section:hover {
    cursor: pointer;
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

.box {
    border: 1px solid #51A230;
    padding: 1rem 1rem;
    margin: 1rem 1rem;
    min-width: 950px;
}

.link {
    color: #51A230;
    text-decoration: underline;
    margin-right: 1rem;
}

.link:hover {
    cursor: pointer;
    color: #3E7C23;
}

.awaiting {
    background: #51A230;
    color: white;
    border: none;
    padding: 0.25rem 1rem;
    margin-bottom: 1rem;
    cursor: default;
}

.done {
    background: #76E347;
    color: black;
    border: none;
    padding: 0.25rem 1rem;
    margin-bottom: 1rem;
    cursor: default;
}

.cancel {
    background: red;
    color: white;
    border: none;
    padding: 0.25rem 1rem;
    margin-bottom: 1rem;
    cursor: default;
}

.ozeneno {
    background: #3E7C23;
    color: white;
    border: none;
    padding: 0.25rem 1rem;
    margin-bottom: 1rem;
    cursor: default;
}

.green {
    color: #51A230;
    margin: 0;
    padding-top: 0;
    padding-left: 1rem;
}
</style>
