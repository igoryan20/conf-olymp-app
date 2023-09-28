<template>
    <button class="{{ this.className }}">
      <slot></slot>
    </button>
</template>

<script>
export default {
    name: "CButton",
    props: ['className']
}
</script>

<style scoped>
button {
    background: white;
    border: none;
    color: black;
    padding: 5px 30px;
    margin: 5px 5px;
    font-weight: bold;
    cursor: pointer;
}

.primary {
    background: #51A230;
    color: white;
    border: 1px solid #3E7C23;
}

.primary:hover {
    background: #3E7C23;
    color: white;
    border: 1px solid #3E7C23;
}

.secondary {
    background: white;
    color: #51A230;
    border: 1px solid #51A230;
}

.secondary:hover {
    background: #51A230;
    color: white;
    border: 1px solid #51A230;
}
</style>
