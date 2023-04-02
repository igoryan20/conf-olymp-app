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
    border-radius: 10px;
    border: none;
    color: black;
    padding: 10px 20px;
    margin: 5px 5px;
    font-weight: bold;
    cursor: pointer;
}

button:hover {
    border: 1px solid black;
}

.primary {
    background: #20007B;
    color: white;
}

.primary:hover {
    background: rgb(32, 0, 123, 0.8);
    color: white;
    border: none;
}

.secondary {
    background: white;
    color: #20007B;
    border: 1px solid #20007B;
}

.secondary:hover {
    background: #20007B;
    color: white;
    border: 1px solid #20007B;
}
</style>
