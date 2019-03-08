<template>
<ul>
  <li
    v-for="notification in notifications"
    :key="notification.id"
  >
    {{ notification.body }}

    <a href="#" @click.prevent="markNotificationRead(notification)">Mark read</a>
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
        getNotifications: 'getNotifications',
        markNotificationRead: 'markNotificationRead'
      })
    },
    mounted () {
      this.getNotifications()
    }
  }
</script>

<style scoped>

</style>