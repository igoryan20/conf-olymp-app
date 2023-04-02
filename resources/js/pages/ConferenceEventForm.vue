<template>
    <div class="conference-form">
        <h2>Создайте конференцию</h2>
        <form>
            <div class="form-group">
                <label for="title">Название:</label>
                <input type="text" class="form-control" id="title" v-model="title" placeholder="Введите название">
            </div>
            <div class="form-group">
                <label for="description">Описание:</label>
                <textarea class="form-control" id="description" v-model="description" placeholder="Введите описание"></textarea>
            </div>
            <div class="form-group">
                <label for="location">Локация:</label>
                <input type="text" class="form-control" id="location" v-model="location" placeholder="Введите локацию">
            </div>
            <div class="form-group">
                <label for="date">Дата:</label>
                <input type="date" class="form-control" id="date" v-model="date">
            </div>
            <div class="form-group">
                <label for="time">Время:</label>
                <input type="time" class="form-control" id="time" v-model="time">
            </div>
            <div class="form-group">
                <label for="speaker">Спикер:</label>
                <input type="text" class="form-control" id="speaker" v-model="speaker" placeholder="Введите спикера">
            </div>
            <div class="form-group">
                <label for="image">Image URL:</label>
                <input type="text" class="form-control" id="image" v-model="image" placeholder="Enter image URL">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="createConferenceEvent">Создать конференцию</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            description: '',
            location: '',
            date: '',
            time: '',
            speaker: '',
            image: ''
        }
    },
    methods: {
        createConferenceEvent() {
            // Make API call to create conference event using axios
            axios.post('/api/conference-events', {
                title: this.title,
                description: this.description,
                location: this.location,
                date: this.date,
                time: this.time,
                speaker: this.speaker,
                image: this.image
            })
                .then(response => {
                    // Handle successful response
                    console.log(response)
                })
                .catch(error => {
                    // Handle error response
                    console.log(error.response)
                })
        }
    }
}
</script>

<style scoped>
.conference-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.conference-form h2 {
    text-align: center;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    font-weight: bold;
}

.form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #0077cc;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}

button:hover {
    background-color: #005fa3;
}
</style>
