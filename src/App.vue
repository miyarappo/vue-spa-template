<template>
  <div id="app">
    <nav>
      <router-link to="/">トップページ</router-link>
      <router-link to="/users">ユーザー一覧ページ</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

