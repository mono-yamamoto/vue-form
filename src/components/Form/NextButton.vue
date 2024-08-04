<script setup>
defineProps({
  isDisabled: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <button :disabled="!isDisabled">次へ</button>
</template>

<style scoped>
button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}
</style>
