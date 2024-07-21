<script setup>
import { reactive, ref } from 'vue'
import * as Form from './components/Form/_index.js'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const childIsValid = ref(false)

const handleChildIsValidUpdate = (value) => {
  childIsValid.value = value
}

const submitForm = () => {
  console.log('フォームが送信されました:', form)
}
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <Form.ItemWrapper @update:childIsValid="handleChildIsValidUpdate">
        <Form.Name />
        <Form.Email />
      </Form.ItemWrapper>
      <Form.Tel />
      <p>ああああ{{ childIsValid }}</p>
      <button type="submit">送信</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  width: 600px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  display: inline-block;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  font-size: 14px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #369f6b;
}
</style>
