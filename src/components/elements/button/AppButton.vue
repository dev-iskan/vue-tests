<template>
  <router-link :to="to">
    {{text}}
  </router-link>
</template>

<script>
  export default {
    props: {
      text: {
        required: true,
        type: String
      },
      to: {
        required: true,
        type: Object
      }
    }
  }
</script>

<style scoped>

</style>