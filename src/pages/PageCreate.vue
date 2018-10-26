<template>
  <div>
    <form @submit.prevent="addUser(form)">
      <div>Create User</div>
      <label>名前：
        <input type="text" v-model="form.name">
      </label>
      <label>年齢：
        <input type="text" v-model="form.age">
      </label>
      <button type="submit">Send</button>
    </form>
    <router-link to="/">Top</router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      form: {
        name: '',
        age: ''
      }
    };
  },
  methods: {
    ...mapActions('users', ['addUser'])
  }
}
</script>

<style lang="scss" scoped>

</style>

