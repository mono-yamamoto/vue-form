<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const emailError = ref('')

const isValid = computed(() => emailError.value === '')

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email.value.trim() === '') {
    emailError.value = 'メールアドレスを入力してください'
  } else if (!emailPattern.test(email.value)) {
    emailError.value = '有効なメールアドレスを入力してください'
  } else {
    emailError.value = ''
  }
}
</script>

<template>
  <div>
    <label for="email">メールアドレス:</label>
    <input
      type="email"
      id="email"
      v-model="email"
      @blur="validateEmail"
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
