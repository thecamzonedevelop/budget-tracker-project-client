<template>
  <div class="w-full min-h-screen bg-slate-50 ">
    <div class="max-w-[1200px] mx-auto min-h-screen flex flex-col relative">
      <!-- header -->
      <div class="w-full bg-white py-4 px-2 flex items-center justify-center">
        <div class="lg:w-1/2 w-full h-14 bg-slate-100 rounded-[60px] flex justify-between">
          <div @click="swichTab(1)" :class="tabe == 1 ? 'bg-sky-500 text-white' : ''"
            class="flex h-full items-center justify-center flex-1 cursor-pointer  rounded-[50px]  text-lg">
            <p>All</p>
          </div>
          <div @click="swichTab(2)" :class="tabe == 2 ? 'bg-sky-500 text-white' : ''"
            class="flex h-full items-center justify-center flex-1 cursor-pointer rounded-[50px] text-lg">
            <p>Incomes</p>
          </div>
          <div @click="swichTab(3)" :class="tabe == 3 ? 'bg-sky-500 text-white' : ''"
            class="flex h-full items-center justify-center flex-1 cursor-pointer rounded-[50px] text-lg">
            <p>Expense</p>
          </div>
        </div>
      </div>
      <!-- show monitor chart -->
      <div class="p-8 bg-white mt-4 flex md:flex-row flex-col  ">
        <div class="md:w-1/3 w-full h-64">
          <BaseChart :options="chartOptions" />
        </div>
        <div class="flex-1 " v-show="tabe == 1">
          <div>
            <p class="text-lg font-bold">Total Incomes</p>
            <p class="text-3xl font-bold">$ 1,000.00</p>
            <div class="mt-4 lg:w-1/2 w-full">
              <n-progress type="line" :percentage="20" />
            </div>
          </div>
          <div class="mt-8">
            <p class="text-lg font-bold">Total Expense</p>
            <p class="text-3xl font-bold">$ 1,000.00</p>
            <div class="mt-4 lg:w-1/2 w-full ">
              <n-progress type="line" :percentage="70" />
            </div>
          </div>
        </div>
        <div class="flex-1 " v-show="tabe == 2">
          <div>
            <p class="text-lg font-bold">Total Incomes</p>
            <p class="text-3xl font-bold">$ 1,000.00</p>
          </div>
          
        </div>
        <div class="flex-1 " v-show="tabe == 3">
          <div class="">
            <p class="text-lg font-bold">Total Expense</p>
            <p class="text-3xl font-bold">$ 1,000.00</p>
            
          </div>
        </div>
      </div>
      <!-- list record -->
      <div class="mt-8 bg-white flex-1 overflow-y-scroll">
        <div v-show="tabe == 1" class="md:p-8 p-4">
          <AllList />
        </div>
      </div>
      <!-- button add -->
      <div class="absolute bottom-8 right-4">
        <button @click="showDraw = true" class="bg-sky-500 text-white p-2 h-16 w-16 rounded-full">Add</button>
      </div>
    </div>
    <n-drawer v-model:show="showDraw" placement="top" resizable>
      <n-drawer-content title="Stoner">
        Stoner is a 1965 novel by the American writer John Williams.
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script>
import axios from 'axios';
import BaseChart from '../components/BarChart.vue';
import AllList from '../components/AllList.vue';
export default {
  name: "HomeView",
  components: {
    BaseChart,
    AllList
  },
  data() {
    return {
      tabe: 1,
      posts: [],
      showDraw: false,
      chartOptions: {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          show: false
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['50%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: false,
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: 'Income' },
              { value: 735, name: 'Expense' },
            ],
          },
        ],
      }
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
    } catch (error) {

    }
  },
  methods: {
    swichTab(e) {
      this.tabe = e
      if (e == 1) {
        this.chartOptions.series[0].data = [
          { value: 1048, name: 'Income' },
          { value: 735, name: 'Expense' },
        ]
      } else if (e == 2) {
        this.chartOptions.series[0].data = [
          { value: 1048, name: 'Salary' },
          { value: 735, name: 'Bonus' },
          {value: 735, name: 'OT' },
          {value: 735, name: 'Part time' }
        ]
      } else {
        this.chartOptions.series[0].data = [
          { value: 1048, name: 'Income' },
          { value: 735, name: 'Expense' },
        ]
      }
    }
  },
};
</script>
