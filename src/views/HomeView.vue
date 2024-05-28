<template>
  <div class="home">
    <el-button>I am ElButton</el-button>

  </div>
</template>

<script>

export default {
  name: "HomeView",
  components: {

  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {

  },
  async created() {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      this.posts = data;
      console.log("🚀 ~ created ~ data:", data)
    } catch (error) {

    }
  },
  methods: {

  },
};
</script>
