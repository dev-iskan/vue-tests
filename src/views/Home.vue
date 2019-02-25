<template>
  <div>
    <app-tag text="Vue" dark></app-tag>
    <app-list>
      <li>Item one</li>
    </app-list>
    <app-form-input v-model="body"></app-form-input>
    <app-button :to="{name: 'dashboard'}" text="Dashboard"></app-button>
  </div>
</template>

<script>
// @ is an alias to /src
import AppTag from '@/components/elements/tag/AppTag'
import AppList from '@/components/elements/list/AppList'
import AppFormInput from '@/components/elements/form/AppFormInput'
import AppButton from '@/components/elements/button/AppButton'
export default {
  name: 'home',
  components: {
    AppList,
    AppFormInput,
    AppTag,
    AppButton
  },
  data () {
    return {
      body: 'abc'
    }
  }
}
</script>
