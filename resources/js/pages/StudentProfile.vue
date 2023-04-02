<template>
    <div class="profile-settings">
        <h1>Profile Settings</h1>
        <form>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name">
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password">
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" v-model="confirmPassword">
            </div>
            <div class="form-group">
                <label for="major">Major:</label>
                <input type="text" id="major" v-model="major">
            </div>
            <div class="form-group">
                <label for="bio">Bio:</label>
                <textarea id="bio" rows="5" v-model="bio"></textarea>
            </div>
            <div class="form-group">
                <label for="avatar">Profile Picture:</label>
                <input type="file" id="avatar" accept="image/*" @change="handleFileUpload">
                <img :src="previewImageUrl" v-if="previewImageUrl" />
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary" @click.prevent="saveChanges">Save Changes</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "ProfileSettings",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            major: "",
            bio: "",
            avatar: null,
            previewImageUrl: null
        };
    },
    methods: {
        handleFileUpload(event) {
            this.avatar = event.target.files[0];
            this.previewImageUrl = URL.createObjectURL(this.avatar);
        },
        saveChanges() {
            // TODO: Implement save changes functionality
        }
    }
};
</script>
<style scoped>
.profile-settings {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
}

.profile-settings h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.form-group {
    margin-bottom: 2rem;
}

.form-group label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    display: block;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"] {
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 0.3rem;
    border: 1px solid #ccc;
}

.form-group textarea {
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 0.3rem;
    border: 1px solid #ccc;
}

.form-group button[type="submit"] {
    padding: 1rem 2rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.3rem;
    font-size: 1.2rem;
    cursor: pointer;
}

.form-group button[type="submit"]:hover {
    background-color: #0062cc;
}

.form-group img {
    max-width: 200px;
    margin-top: 1rem;
}

@media (max-width: 768px) {
    .profile-settings {
        padding: 1rem;
    }

    .form-group button[type="submit"] {
        padding: 0.5rem 1rem;
    }
}
</style>
