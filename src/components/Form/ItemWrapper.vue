<script setup>
import { ref, onMounted, onBeforeUnmount, defineEmits } from 'vue'

const emit = defineEmits(['update:childIsValid'])
const childIsValid = ref(false)
const childFormTypes = ref([])
const rootElement = ref(null)

const updateChildState = () => {
  const slotElements = rootElement.value.querySelectorAll('[data-form-type]')
  if (slotElements.length > 0) {
    childFormTypes.value = Array.from(slotElements).map((el) => el.getAttribute('data-form-type'))
    childIsValid.value = Array.from(slotElements).every(
      (el) => el.getAttribute('data-isvalid') === 'true'
    )
  }
  emit('update:childIsValid', childIsValid.value)
}
onMounted(() => {
  updateChildState()

  const observer = new MutationObserver(updateChildState)
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['data-isvalid', 'data-form-type']
  })

  onBeforeUnmount(() => {
    observer.disconnect()
  })
})
</script>

<template>
  <div
    ref="rootElement"
    :data-child-isvalid="childIsValid"
    :data-child-form-type="childFormTypes.join(' ')"
  >
    <slot />
  </div>
</template>
