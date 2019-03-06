<template>
    <div>
        <a href="#" @click.prevent="play">
            {{ part.title }}
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            part: {
                required: true,
                type: Object
            }
        },

        methods: {
            play () {
                //
            }
        }
    }
</script>
