<script setup>
defineProps(['label', 'type', 'required', 'id', 'modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
    <div class="form-group">
        <label :for="id">{{ label }}</label>
        <input
            :type="type"
            :id="id"
            :required="required"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<style scoped>

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #007bff;
}

input {
    padding: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none;
    border-radius: 10px;
}

input:focus {
    border-color: #0077FF;
    box-shadow: 0 0 5px rgba(0, 119, 255, 0.5);
}
</style>
