<script setup>
import { ref, computed } from 'vue'
import { validateName } from './validate'

const name = ref('')
const nameError = ref('')

const isValid = computed(() => (name.value === '' ? false : nameError.value === ''))

const handleBlur = () => {
  nameError.value = validateName(name.value).value
}
</script>

<template>
  <div>
    <label for="name">名前:</label>
    <input
      type="text"
      id="name"
      v-model="name"
      @blur="handleBlur"
      :data-isvalid="isValid"
      data-form-type="name"
    />
    <p v-if="nameError" class="error">{{ nameError }}</p>
  </div>
</template>

<style scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.error {
  color: red;
  font-size: 14px;
}
</style>
