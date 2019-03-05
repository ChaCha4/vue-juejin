<template>
  <div>
    <div class="home-head">
      <ul>
        <li>
          <router-link to="/" exact>推荐</router-link>
        </li>
        <li>
          <router-link to="/welcome/frontend">前端</router-link>
        </li>
        <li>
          <router-link to="/welcome/android">Android</router-link>
        </li>
        <li>
          <router-link to="/welcome/backend">后端</router-link>
        </li>
      </ul>
    </div>
    <router-view :key="$route.path"></router-view>
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>
<style lang="scss" scoped>
.home-head {
  display: flex;
  height: 60px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  ul {
    padding-left: 0;
    margin: 0;
    display: flex;
    list-style: none;
    margin-left: 100px;
    li {
      margin-right: 20px;
      line-height: 60px;
      a {
        color: #71777c;
      }
      a.router-link-active {
        color: #007fff;
      }
    }
  }
}
</style>


