<template>
  <div>
    <div class="loading" v-if="loading">読み込み中</div>
    <div class="error" v-if="error">{{ error }}</div>
    <div v-if="user">
      <h2>{{ user.name }}</h2>
      <p>{{ user.description }}</p>
    </div>
  </div>
</template>

<script>
  var userData = [
    {
      id: 1,
      name: 'Takuya Tejima',
      description: '東南アジアで働くエンジニアです'
    },
    {
      id: 2,
      name: 'Yohei Noda',
      description: 'アウトドア・フットサルが趣味のエンジニアです'
    }
  ]
  var getUser = function (userId, callback) {
    setTimeout(function () {
      var filteredUsers = userData.filter(user => {
        return user.id === parseInt(userId, 10)
      })
      callback(null, filteredUsers && filteredUsers[0])
    }, 1000)
  }
  export default {
    name: 'PageUserDetail',
    data() {
      return {
        loading: false,
        user: null,
        error: null
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.loading = true
        getUser(this.$route.params.userId, (function (err, user) {
          this.loading = false
          if (err) {
            this.error = err.toString()
          } else {
            this.user = user
          }
        }).bind(this))
      }
    }
  }
</script>
