<template>
  <div>
    <app-tag text="Vue" dark></app-tag>
    <app-list>
      <li>Item one</li>
    </app-list>
    <app-form-input v-model="body"></app-form-input>
    <app-button :to="{name: 'dashboard'}" text="Dashboard"></app-button>

    <app-notifications></app-notifications>

    <app-greeting></app-greeting>
  </div>
</template>

<script>
// @ is an alias to /src
import AppTag from '@/components/elements/tag/AppTag'
import AppList from '@/components/elements/list/AppList'
import AppFormInput from '@/components/elements/form/AppFormInput'
import AppButton from '@/components/elements/button/AppButton'
import AppNotifications from '@/components/features/notification/AppNotifications'
import AppGreeting from '@/components/features/auth/AppGreeting'
export default {
  name: 'home',
  components: {
    AppList,
    AppFormInput,
    AppTag,
    AppButton,
    AppNotifications,
    AppGreeting
  },
  data () {
    return {
      body: 'abc'
    }
  }
}
</script>
