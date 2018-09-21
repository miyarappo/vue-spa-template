<template>
  <div>
    <div class="loading" v-if="loading">読み込み中</div>
    <div class="error" v-if="error">{{ error }}</div>
    <div v-for="user in users" :key="user.id">
      <router-link :to="{ path: '/users/' + user.id}">{{ user.name }}</router-link>
    </div>
  </div>
</template>

<script>
  var getUsers = function (callback) {
    setTimeout (function() {
      callback(null, [
        {
          id: 1,
          name: 'Takuya Tejima'
        },
        {
          id: 2,
          name: 'Yohei Noda'
        }
      ])
    }, 1000)
  }
  export default {
    name: 'PageUsers',
    data() {
      return {
        loading: false,
        users: function() { return [] },
        error: null
      }
    },
    created() {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        this.loading = true
        getUsers((function (err, users) {
          this.loading = false
          if (err) {
            this.error = err.toString()
          } else {
            this.users = users
          }
        }).bind(this))
      }
    }
  }
</script>