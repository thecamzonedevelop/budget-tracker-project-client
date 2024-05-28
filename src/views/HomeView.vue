<template>
  <div class="home">
    <el-button>I am ElButton</el-button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
   
  },
  async created() {
    const response = await fetch('/api/posts');
    const data = await response.json();
    this.posts = data;
  },
  methods: {
      
  },
};
</script>
