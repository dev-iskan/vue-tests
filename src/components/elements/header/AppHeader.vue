<template>
  <div>
    <h1>{{text}}</h1>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        required: true,
        type: String
      }
    }
  }
</script>

<style scoped>

</style>