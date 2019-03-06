<template>
  <form action="#" @submit.prevent="submit">
    <button type="submit">Sign In</button>
  </form>
</template>

<script>
  export default {
    methods: {
      submit() {
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect)
          return
        }
        this.$router.push({name: 'dashboard'})
      }
    }
  }
</script>

<style scoped>

</style>