<template>
  <div>
    <app-tag text="Vue" dark></app-tag>
  </div>
</template>

<script>
// @ is an alias to /src
import AppTag from '@/components/elements/tag/AppTag'
export default {
  name: 'home',
  components: [
    AppTag
  ]
}
</script>
