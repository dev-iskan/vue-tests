<template>
  <div
    class="tag"
    :class="{'tag--dark': dark}"
  >
    {{text}}
  </div>
</template>

<script>
  export default {
     props: {
      text: {
        required: true,
        type:String
      },
      dark: {
        required: false,
        type:Boolean
      }
     }
  }
</script>

<style scoped>
</style>