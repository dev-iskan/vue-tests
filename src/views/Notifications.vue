<template>
  <ul>
    <li
            v-for="notification in notifications"
            :key="notification.id"
        >
            {{ notification.body }}
        </li>
  </ul>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        notifications: 'notifications'
      })
    },
    methods: {
      ...mapActions({
        getNotifications: 'getNotifications'
      })
    },
    mounted () {
      this.getNotifications()
    }
  }
</script>

<style scoped>

</style>