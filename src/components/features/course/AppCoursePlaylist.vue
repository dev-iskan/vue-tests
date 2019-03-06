<template>
    <div>
        <AppCoursePart
            v-for="part in course.parts"
            :key="part.id"
            :part="part"
        />
    </div>
</template>

<script>
    import AppCoursePart from './AppCoursePart'

    export default {
        components: {
            AppCoursePart
        },

        props: {
            course: {
                required: true,
                type: Object
            }
        }
    }
</script>
