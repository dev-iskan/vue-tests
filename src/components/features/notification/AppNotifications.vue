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
    import axios from 'axios'

    export default {
        data () {
            return {
                notifications: []
            }
        },

        methods: {
            async getNotifications () {
                let response = await axios.get('/notifications.json')

                this.notifications = response.data.data
            }
        },

        mounted () {
            this.getNotifications()
        }
    }
</script>