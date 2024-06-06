<template>
  <div class="home">
    <n-button type="primary">
      Primary
    </n-button>
  </div>
</template>

<script>
import axios from 'axios';


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
      const data2 = await axios.get('/api/posts');
      console.log("🚀 ~ created ~ data2:", data2)
      console.log("🚀 ~ created ~ data:", data)
    } catch (error) {

    }
  },
  methods: {

  },
};
</script>
