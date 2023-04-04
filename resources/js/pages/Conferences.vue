<template>
    <div class="conferences-list container">
        <p class="count">Доступно 124 конференции</p>
        <ul>
            <li v-for="conference in conferences" :key="conference.id">
                <div class="conference-info">
                    <h2>{{ conference.name }}</h2>
                    <p v-if="conference.online">Онлайн <i class="fa-sharp fa-solid fa-circle"></i></p>
                    <p v-else>Оффлайн <i class="fa-sharp fa-solid fa-circle"></i></p>
                    <div>
                        <img src="#" alt="Картинка конференции">
                        <p>{{ conference.description }}</p>
                    </div>
                    <p><strong>Date:</strong> {{ conference.date }}</p>
                    <p><strong>Location:</strong> {{ conference.location }}</p>
                    <p><strong>Website:</strong> <a :href="conference.website">{{ conference.website }}</a></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ConferencesList",
    data() {
        return {
            conferences: [
                {
                    id: 1,
                    name: "Раскрытие мощи технологий: Знакомство с последними тенденциями и инновациями в мире конференций",
                    online: true,
                    date: "July 12-18, 2023",
                    location: "Paris, France",
                    website: "https://icml.cc/"
                },
                {
                    id: 2,
                    name: "International Conference on Computer Vision",
                    online: false,
                    date: "October 22-28, 2023",
                    location: "Santiago, Chile",
                    website: "http://iccv2023.thecvf.com/"
                },
                {
                    id: 3,
                    name: "International Conference on Natural Language Processing",
                    online: true,
                    date: "November 12-16, 2023",
                    location: "Sydney, Australia",
                    website: "https://acl2023.org/"
                }
            ]
        };
    },
    methods: {
        register(conference) {
            // TODO: Implement conference registration functionality
        }
    }
};
</script>

<style>

.count {
    color: #0a53be;
    font-weight: bold;
    font-size: large;
}

.conferences-list {
    padding: 2rem 0;
}

ul {
    padding: 0;
}

li {
    list-style: none;
}

.conference-info {
    border: 1px solid #0a53be;
    border-radius: 20px;
    padding: 2rem;
}

</style>
