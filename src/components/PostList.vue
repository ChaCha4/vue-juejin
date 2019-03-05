<template>
  <div v-if="posts.length">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
      </li>
    </ul>
    <div>列表为空</div>
  </div>
  <div v-else>请稍等...</div>
</template>
<script>
import axios from "axios";
export default {
  name: "postlist",
  // created是组件首次渲染进行的操作
  created() {
    // if (isSearch) {
    //   // 查询的请求
    //   console.log(this.$route.query.query);
    //   // 如果没有对应的查询请求，我们就拿全部再筛选
    // } else {
    this.getPosts(this.tab);
    // }
  },
  // watch: {
  //   tab() {
  //     this.getPosts(this.tab);
  //   }
  // },
  // watch是不管刷不刷新，只要路由变了就会执行
  // watch: {
  //   tab: {
  //     handler() {
  //       this.getPosts(this.tab);
  //     },
  //     immediate: true
  //   }
  // },
  watch: {
    "$route.query.query"() {
      console.log(1);
      this.getPosts();
    }
  },
  data: () => ({
    posts: []
  }),
  computed: {
    tab() {
      // recommend frontend backend android
      // 方法一
      // const { path } = this.$route;
      // path.replace("/welcome/", "");
      // return path === "/" ? "recommend" : path.replace("/welcome/", "");
      // 方法二
      const { type } = this.$route.params;
      return type ? type : "recommend";
    },
    isSearch() {
      return this.$route.path.indexOf("search") !== -1;
    }
  },
  methods: {
    getPosts() {
      const query = this.isSearch
        ? `title_link=${this.$route.query.query}`
        : `tab=${this.tab}`;
      axios.get(`http://localhost:3008/posts?${query}`).then(res => {
        this.posts = res.data;
      });
    }
  }
};
</script>
