<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.svg" alt>
      </router-link>
    </div>
    <ul>
      <!-- 当路径为/,/welcome/xxx（首页时）active-class=active -->
      <li>
        <router-link :active-class="isHome ?'active':''" to="/">首页</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/activities">动态</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/topics">话题</router-link>
      </li>
    </ul>
    <input class="search" type="text" v-model.trim="searchValue" placeholder="搜索掘金">
    <button :disabled="searchValue ? false : true" @click="search">搜索</button>
  </header>
</template>
<script>
export default {
  name: "header",
  data: () => ({
    searchValue: ""
  }),
  computed: {
    isHome() {
      const { path } = this.$route;
      return path === "/" || path.indexOf("welcome") !== -1;
    }
  },
  methods: {
    search() {
      this.$router.push(`/search?query=${this.searchValue}`);
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 60px;
  align-items: center;
  background-color: #fff;
  padding-left: 40px;
  .logo {
    margin-right: 20px;
  }
  ul {
    display: flex;
    padding-left: 0;
    margin: 0;
    list-style: none;
    li {
      width: 70px;
      line-height: 70px;
      text-align: center;
      a {
        color: #71777c;
      }
      a.active {
        color: #007fff;
      }
    }
  }
  .search {
    width: 150px;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
  }
  button {
    height: 30px;
  }
}
</style>
