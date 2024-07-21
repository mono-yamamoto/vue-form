<script setup>
import { ref, computed } from 'vue'

const tel = ref('')
const telError = ref('')

const isValid = computed(() => telError.value === '')

const validateTel = () => {
  const telPattern = /^[0-9]{10,11}$/
  if (tel.value.trim() === '') {
    telError.value = '電話番号を入力してください'
  } else if (!telPattern.test(tel.value)) {
    telError.value = '有効な電話番号を入力してください'
  } else {
    telError.value = ''
  }
}
</script>

<template>
  <div>
    <label for="tel">電話番号:</label>
    <input
      type="tel"
      id="tel"
      v-model="tel"
      @blur="validateTel"
      :data-isvalid="isValid"
      data-form-type="tel"
    />
    <p v-if="telError" class="error">{{ telError }}</p>
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
