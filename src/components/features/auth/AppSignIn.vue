<template>
  <div>
    You must <router-link :to="{name:'auth-signin', query: {redirect: $route.fullPath}}">sign in</router-link>
  </div>
</template>

<script>
  export default {
    
  }
</script>