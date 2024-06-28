<template>
    <div class="flex flex-col gap-3">
        <ListBuet v-for="(item, index) in budgets" :budgetsItem="item"  :key="index" @clickRecord="emitClickRecord" @clickEdit="emitClickEdit" @clickDelete="emitClickDelete" />
    </div>
</template>
<script>
import ListBuet from './ListBudgetd.vue';
export default {
    props: {
        budgets: {
            type: Array,
            required: true
        },

    },

    data() {
        return {

        }
    },

    components: {
        ListBuet
    },
    methods: {
        emitClickRecord() {
            this.$emit('clickRecord')
        },
        emitClickEdit() {
            this.$emit('clickEdit')
        },
        emitClickDelete() {
            this.$emit('clickDelete')
        }
    }
}
</script>
<style lang="">

</style>