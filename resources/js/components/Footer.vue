<template>
    <footer>
        <div class="container">
            <p>&copy; 2023 Student Conferences</p>
            <nav>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Accessibility</a></li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    footer {
        background-color: #333;
        color: #fff;
        padding: 20px;
        text-align: center;
        font-size: 14px;
        margin-top: 50px;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: 0 auto;
    }

    nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    nav li {
        margin-right: 10px;
    }

    nav a {
        color: #666;
        text-decoration: none;
    }

    nav a:hover {
        text-decoration: underline;
    }
</style>
