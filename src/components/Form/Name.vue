<script setup>
import { ref, computed } from 'vue'

const name = ref('')
const nameError = ref('')

const isValid = computed(() => nameError.value === '')

const validateName = () => {
  if (name.value.trim() === '') {
    nameError.value = '名前を入力してください'
  } else {
    nameError.value = ''
  }
}
</script>

<template>
  <div>
    <label for="name">名前:</label>
    <input type="text" id="name" v-model="name" @blur="validateName" :data-isvalid="isValid" data-form-type="name" />
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
