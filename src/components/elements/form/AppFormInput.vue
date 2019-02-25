<template>
  <div>
    <input 
    type="text" 
    :value="modelValue"
    @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
  export default {
    model: {
      prop: 'modelValue',
      event: 'input'
    },
    props: {
      modelValue: {
        default: undefined
      }
    }
  }
</script>

<style scoped>

</style>