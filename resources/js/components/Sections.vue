<template>
    <div class="d-flex flex-column align-items-center">
        <h1 class="title">СЕКЦИИ</h1>
        <div>
            <div class="section-box">
                <div class="section">
                    <p>Профессиональные коммуникации: теоретические и
                        практические проблемы</p>
                    <svg class="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                    </svg>
                </div>
            </div>
            <div class="section-box">
                <div class="section">
                    <p>Визуальные коммуникации</p>
                    <svg class="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                    </svg>
                </div>
                <div class="description">
                    Секция визуальных коммуникаций представляет собой захватывающий мир творчества и визуального воздействия на аудиторию. В этой секции исследуются различные аспекты визуального языка, дизайна и искусства, которые служат ключевым инструментом для передачи информации, идей и эмоций.                </div>
            </div>
            <div class="section-box">
                <div class="section">
                    <p>Универсальный дизайн – равные возможности –
                        комфортная среда</p>
                    <svg class="select-arrow" :class="{ flipped: isFlipped }" width="19" height="12" viewBox="0 0 19 12" fill="#3E7C23" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07432 8.59127L16.6655 1.00006L18.0797 2.41427L9.07018 11.4238L7.65596 10.0096L7.65964 10.0059L0 1.94317L1.45 0.565674L9.07432 8.59127Z"/>
                    </svg>
                </div>
            </div>
            <div class="section-box">
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
</template>

<script>
export default {
    name: "Sections"
}
</script>

<style scoped>

.section-box {
    margin-bottom: 1rem;
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
    margin-bottom: 4rem;
}
</style>
