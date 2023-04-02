<template>
    <div class="conferences-list">
        <h1>Upcoming Conferences</h1>
        <ul>
            <li v-for="conference in conferences" :key="conference.id">
                <div class="conference-info">
                    <h2>{{ conference.name }}</h2>
                    <p><strong>Date:</strong> {{ conference.date }}</p>
                    <p><strong>Location:</strong> {{ conference.location }}</p>
                    <p><strong>Website:</strong> <a :href="conference.website">{{ conference.website }}</a></p>
                </div>
                <div class="conference-actions">
                    <router-link :to="{ name: 'conference-details', params: { id: conference.id } }">Details</router-link>
                    <button @click="register(conference)">Register</button>
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
                    name: "International Conference on Machine Learning",
                    date: "July 12-18, 2023",
                    location: "Paris, France",
                    website: "https://icml.cc/"
                },
                {
                    id: 2,
                    name: "International Conference on Computer Vision",
                    date: "October 22-28, 2023",
                    location: "Santiago, Chile",
                    website: "http://iccv2023.thecvf.com/"
                },
                {
                    id: 3,
                    name: "International Conference on Natural Language Processing",
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
.conferences-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.conferences-list h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.conferences-list ul {
    list-style: none;
    padding: 0;
}

.conferences-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 0.3rem;
}

.conferences-list li:hover {
    background-color: #e0e0e0;
}

.conferences-list li h2 {
    margin-bottom: 0.5rem;
}

.conferences-list li p {
    margin: 0;
}

.conferences-list li a {
    color: #007bff;
}

.conferences-list li button {
    padding: 1rem 2rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.3rem;
    font-size: 1.2rem;
    cursor: pointer;
}

.conferences-list li button:hover {
    background-color: #0069d9;
}
</style>
