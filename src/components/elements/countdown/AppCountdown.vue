<template>
    <div>
        {{ number }}
    </div>
</template>

<script>
    export default {
        data () {
            return {
                number: this.start
            }
        },

        props: {
            start: {
                required: false,
                type: Number,
                default: 5
            }
        },

        mounted () {
            let interval = setInterval(() => {
                this.number--

                if (this.number === 0) {
                    clearInterval(interval)
                }
            }, 1000)
        }
    }
</script>
