<template>
  <div>
    <router-link to="/create">Create</router-link>
    <div v-for="user in getUsers" :key="user.id">
      <router-link :to="`update/${ user.id }`" >{{ user.id }}</router-link>
      <div>{{ user.name }}</div>
      <div>{{ user.age }}</div>
      <button @click="deleteUser(user.id)">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('users', ['getUsers'])
  },
  methods: {
    ...mapActions('users', ['deleteUser'])
  }
}
</script>

<style lang="sass" scoped>

</style>
