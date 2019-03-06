<template>
    <div>
        Hi, {{ $auth.user.first_name }}.
    </div>
</template>

<script>
    import auth from '@/mixins/auth'

    export default {
        mixins: [
            auth
        ]
    }
</script>
