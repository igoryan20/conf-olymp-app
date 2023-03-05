<template>
    <button :class="'button ' + ((type === 'primary') ? 'button-primary' : '')">
      <slot></slot>
    </button>
</template>

<script>
export default {
    name: "CustomButton",
    props: {
        type: String
    }
}
</script>

<style scoped>
.button {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    text-decoration: none;
}

.button-primary {
    background-color: #316BFF;
    color: white;
}

.button:hover {
    background-color: #dedede;
    color: #fff;
}

.button-primary:hover {
    background-color: #0077FF;
}
</style>
