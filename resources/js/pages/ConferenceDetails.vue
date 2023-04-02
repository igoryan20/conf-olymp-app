<template>
    <div class="conference-detail">
        <h1>{{ conference.name }}</h1>
        <div class="details">
            <div class="info">
                <p><strong>Date:</strong> {{ conference.date }}</p>
                <p><strong>Location:</strong> {{ conference.location }}</p>
                <p><strong>Organizer:</strong> {{ conference.organizer }}</p>
                <p><strong>Website:</strong> <a :href="conference.website">{{ conference.website }}</a></p>
            </div>
            <div class="description">
                <h2>Description</h2>
                <p>{{ conference.description }}</p>
            </div>
        </div>
        <div class="speakers">
            <h2>Speakers</h2>
            <ul>
                <li v-for="speaker in conference.speakers" :key="speaker.id">
                    <img :src="speaker.photoUrl" alt="">
                    <div class="speaker-info">
                        <h3>{{ speaker.name }}</h3>
                        <p>{{ speaker.title }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConferenceDetail",
    data() {
        return {
            conference: {
                name: "Example Conference",
                date: "June 1-3, 2023",
                location: "San Francisco, CA",
                organizer: "Example Organizer",
                website: "https://www.exampleconference.com",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac justo euismod, tincidunt augue ut, vehicula turpis. Integer in ex ac sem lacinia mattis vel non dolor. Morbi eget convallis arcu, a lacinia nulla. Nullam mattis felis a urna volutpat, in gravida felis convallis. Duis vel risus dolor. Cras efficitur ante non libero convallis interdum. Aliquam tincidunt enim vel nisi rhoncus, quis suscipit sem luctus. Donec eu tellus bibendum, luctus dolor sed, commodo enim.",
                speakers: [
                    {
                        id: 1,
                        name: "John Smith",
                        title: "Head of Example Department",
                        photoUrl: "https://www.exampleconference.com/speakers/john-smith.jpg"
                    },
                    {
                        id: 2,
                        name: "Jane Doe",
                        title: "Example Specialist",
                        photoUrl: "https://www.exampleconference.com/speakers/jane-doe.jpg"
                    }
                ]
            }
        };
    }
};
</script>

<style scoped>
.conference-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.conference-detail h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
}

.conference-detail .details {
    display: flex;
    margin-bottom: 2rem;
}

.conference-detail .info {
    flex: 1;
}

.conference-detail .info p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.conference-detail .description {
    flex: 2;
}

.conference-detail .description h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.conference-detail .description p {
    font-size: 1.2rem;
}

.conference-detail .speakers {
    margin-bottom: 1rem;
}

.conference-detail .speakers h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.conference-detail .speakers ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
}

.conference-detail .speakers li {
    margin-right: 1rem;
    margin-bottom: 1rem;
    flex-basis: 33.33%;
    display: flex;
    align-items: center;
}

.conference-detail .speakers img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-right: 1rem;
}

.conference-detail .speaker-info {
    flex: 1;
}

.conference-detail .speaker-info h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
}

.conference-detail .speaker-info p {
    font-size: 1.2rem;
    margin-bottom: 0;
}
</style>
