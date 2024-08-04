<script setup>
import { ref, computed } from 'vue'
import { validateEmail } from './validate'

const email = ref('')
const emailError = ref('')

const isValid = computed(() => (email.value === '' ? false : emailError.value === ''))

const handleBlur = () => {
  emailError.value = validateEmail(email.value).value
}
</script>

<template>
  <div>
    <label for="email">メールアドレス:</label>
    <input
      type="email"
      id="email"
      v-model="email"
      @blur="handleBlur"
      :data-isvalid="isValid"
      data-form-type="email"
    />
    <p v-if="emailError" class="error">{{ emailError }}</p>
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
