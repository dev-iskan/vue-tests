<template>
  <div>
    player
  </div>
</template>

<script>
  export default {
    data () {
      return {
        player: null
      }
    },
    destroyed () {
      this.player = null
    },
    mounted () {
      this.player = 'instance'
    }
  }
</script>

<style scoped>

</style>