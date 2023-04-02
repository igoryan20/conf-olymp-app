<template>
    <div class="who-register-container">
        <div class="type-item">
            <img src="../../images/student.jpg" width="500">
            <button class="btn btn-large btn-student">Студент</button>
        </div>
        <div class="type-item">
            <button class="btn btn-large btn-teacher">Преподаватель</button>
        </div>
        <div class="type-item">
            <button class="btn btn-large btn-organizer">Организатор</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegistrationPage",
    data() {

    }
};
</script>

<style>
.who-register-container {
    padding: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.type-item {
    border: 1px solid blue;
}

.btn-large {
    padding: 2rem 3rem;
    margin: 1rem;
    font-size: 20pt;
}

.btn-large:hover {
   border: 1px solid #007bff;
}

.btn-student {
    background: #007bff;
    color: white;
}

.btn-teacher {
    background: blueviolet;
    color: white;
}

.btn-organizer {
    background: darkblue;
    color: white;
}
</style>
