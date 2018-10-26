<template>
  <div>
    <form @submit.prevent="updateUser(user)">
      <div>Update User</div>
      <label>名前：
        <input type="text" v-model="user.name">
      </label>
      <label>年齢：
        <input type="text" v-model="user.age">
      </label>
      <button type="submit">Update</button>
    </form>
    <router-link to="/">Top</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      user: ''
    };
  },
  computed: {
    ...mapGetters('users', ['getUser'])
  },
  created() {
    const id = this.$route.params.id
    this.user = this.getUser(id)
  },
  methods: {
    ...mapActions('users', ['updateUser'])
  }
}
</script>

<style lang="scss" scoped>

</style>

