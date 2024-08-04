import { ref } from 'vue'

export const validateEmail = (email) => {
  const emailError = ref('')
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || email.trim() === '') {
    emailError.value = 'メールアドレスを入力してください'
  } else if (!emailPattern.test(email)) {
    emailError.value = '有効なメールアドレスを入力してください'
  } else {
    emailError.value = ''
  }
  return emailError
}

export const validateTel = (tel) => {
  const telError = ref('')
  const telPattern = /^[0-9]{10,11}$/
  if (tel.trim() === '') {
    telError.value = '電話番号を入力してください'
  } else if (!telPattern.test(tel)) {
    telError.value = '有効な電話番号を入力してください'
  } else {
    telError.value = ''
  }
  return telError
}

export const validateName = (name) => {
  const nameError = ref('')
  if (typeof name !== 'string' || !name.trim()) {
    nameError.value = '名前を入力してください'
  } else {
    nameError.value = ''
  }
  return nameError
}

export const validateFurigana = (furigana) => {
  const furiganaError = ref('')
  const furiganaPattern = /^[\u3040-\u309F\u30A0-\u30FF]+$/
  if (!furiganaPattern.test(furigana)) {
    furiganaError.value = '有効なふりがなを入力してください'
  } else {
    furiganaError.value = ''
  }
  return furiganaError
}

export const validateRadioButton = (value) => {
  const radioButtonError = ref('')
  if (!value) {
    radioButtonError.value = 'ラジオボタンを選択してください'
  } else {
    radioButtonError.value = ''
  }
  return radioButtonError
}

export const validateCheckbox = (isChecked) => {
  const checkboxError = ref('')
  if (!isChecked) {
    checkboxError.value = 'チェックボックスを選択してください'
  } else {
    checkboxError.value = ''
  }
  return checkboxError
}
