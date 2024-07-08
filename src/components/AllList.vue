<template>
  <n-infinite-scroll style="height: 70vh" :distance="20" @load="handleLoad">
    <div class="flex flex-col gap-3">
      <ListBuet
        v-for="(item, index) in budgets"
        :budgetsItem="item"
        :key="index"
        @clickRecord="emitClickRecord(item)"
        @clickEdit="emitClickEdit"
        @clickDelete="deleteRecord(item.type, item.id)"
      />
    </div>
    <div v-if="loading" class="text w-full text-center py-2">
      Loading...
    </div>
    <div v-if="noMoreData" class="text w-full text-center py-2">
      No More Data
    </div>
  </n-infinite-scroll>
</template>

<script>
import ListBuet from './ListBudgetd.vue';

export default {
  components: {
    ListBuet
  },

  props: {
    budgets: {
      type: Array,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      loading: false,
      page: 0,  // Initialize the current page
      size: 10   // Number of items per page
    };
  },

  computed: {
    noMoreData() {
      return this.budgets.length >= this.total;
    },
    totalPages() {
      return Math.ceil(this.total / this.size);
    }
  },

  methods: {
    // Emit event when a record is clicked
    emitClickRecord(item) {
      this.$emit('clickRecord', item);
    },

    // Emit event when edit is clicked
    emitClickEdit() {
      this.$emit('clickEdit');
    },

    // Emit event to delete a record
    deleteRecord(type, id) {
      this.$emit('clickDelete', type, id);
    },

    // Handle loading more data on scroll
    async handleLoad() {
      if (this.loading || this.noMoreData || this.page >= this.totalPages) return;
      this.loading = true;

      try {
        this.page += 1; // Increment the page number
        const res = await this.$api.listAll(this.page, this.size);
        this.$emit('updateBudgets', res.content); // Emit the new items to the parent component
      } catch (error) {
        console.error('Error loading more data:', error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.text {
  color: #000;
}
</style>
