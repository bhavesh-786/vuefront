<template>
  <div id="home">
    <loading
      v-model:active="LoaderStore.isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    />
    <div class="lg:flex justify-between items-center mb-6">
      <p class="text-2xl font-semibold mb-2 lg:mb-0 getText">
        Good afternoon, GUST!
      </p>
    </div>

    <div class="flex flex-wrap -mx-3 mb-10">
      <div class="w-full">
        <p class="text-m font-semibold mb-4">Click On Performance & Avg Score Button</p>
      </div>
      <div class="w-1/2 xl:w-1/2 px-3">
        <button
          v-on:click="performance"
          class="w-full bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow getPerformance"
        >
          Performance
        </button>
      </div>
      <div class="w-1/2 xl:w-1/2 px-3">
        <button
          v-on:click="averageScore"
          style="margin-left: 1%"
          class="w-full bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow getAverage"
        >
          Average Score
        </button>
      </div>
    </div>
    <div
      v-if="this.performanceData.length > 0"
      class="flex flex-wrap -mx-3 mb-10"
    >
      <div class="w-full">
        <p class="text-xl font-semibold mb-4">
          Performance By Gender using studytime
        </p>
      </div>
      <div
        class="w-1/2 xl:w-1/2 px-3"
        :key="index"
        v-for="(perform, index) in this.performanceData"
      >
        <div
          class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0"
        >
          <div class="text-gray-700">
            <p class="font-semibold text-3xl">
              {{ perform.averageScore.toFixed(2) }}
            </p>
            <p>{{ perform.sex }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="Object.keys(this.averageData).length > 0"
      class="flex flex-wrap -mx-3 mb-10"
    >
      <div class="w-full">
        <p class="text-xl font-semibold mb-4">Performance Of G1, G2, G3</p>
      </div>
      <div
        class="w-1/3 xl:w-1/3 px-3"
        :key="index"
        v-for="(average, key, index) in this.averageData"
      >
        <div
          class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0"
        >
          <div class="text-gray-700">
            <p class="font-semibold text-3xl">
              {{ average.toFixed(2) }}
            </p>
            <p>{{ key }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-10">
      <div class="w-1/2 xl:w-1/4 px-3">
        <div
          class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0"
        >
          <div class="text-gray-700">
            <p class="font-semibold text-3xl">
              {{ this.LoaderStore.totalStudent }}
            </p>
            <p>Student</p>
          </div>
        </div>
      </div>

      <div class="w-1/2 xl:w-1/4 px-3">
        <div
          class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0"
        >
          <div class="text-gray-700">
            <p class="font-semibold text-3xl">
              {{ this.LoaderStore.totalMale }}
            </p>
            <p>Male</p>
          </div>
        </div>
      </div>

      <div class="w-1/2 xl:w-1/4 px-3">
        <div
          class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6"
        >
          <div class="text-gray-700">
            <p class="font-semibold text-3xl">
              {{ this.LoaderStore.totalFemale }}
            </p>
            <p>Female</p>
          </div>
        </div>
      </div>

      <div class="w-1/2 xl:w-1/4 px-3">
        <div
          class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6"
        >
          <div class="text-gray-700">
            <p class="font-semibold text-3xl">1,653</p>
            <p>Dummy</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <ChartComponent />
    <TableComponent /> -->
    <div class="flex flex-wrap -mx-3 mb-10">
      <div class="w-full xl:w-1/2 xl:h-1/2 px-3">
        <p class="text-xl font-semibold mb-4">Chart by Father Job</p>

        <div class="w-full bg-white border rounded-lg p-4 mb-8 xl:mb-0">
          <ChartComponent />
        </div>
      </div>

      <div class="w-full xl:w-1/2 xl:h-1/2 px-3">
        <p class="text-xl font-semibold mb-4">Chart By Gendar</p>

        <div class="w-full bg-white border rounded-lg p-4 mb-8 xl:mb-0">
          <LineChartComponent />
        </div>
      </div>
    </div>
    <!-- <DoughnutComponent /> -->

    <div class="flex flex-wrap -mx-3">
      <div class="w-full px-3">
        <p class="text-xl font-semibold mb-4">Student Performance Data</p>

        <div class="w-full bg-white border rounded-lg p-4 mb-8 xl:mb-0">
          <TableComponent :isLoad="this.isLoading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Chart from 'chart.js'
//import { Bar } from "vue-chartjs";
import axios from "axios";
import { mapState } from "vuex";

import ChartComponent from "@/components/ChartComponent.vue";
import LineChartComponent from "@/components/LineChartComponent.vue";
import TableComponent from "@/components/TableComponent.vue";
import DoughnutComponent from "@/components/DoughnutComponent.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

export default {
  name: "DashboardHome",
  data() {
    return {
      isLoading: false,
      fullPage: true,
      performanceData: [],
      averageData: 0,
    };
  },
  computed: {
    ...mapState(["LoaderStore"]),
  },
  components: {
    ChartComponent,
    LineChartComponent,
    TableComponent,
    DoughnutComponent,
    Loading,
  },
  mounted() {},
  methods: {
    performance() {
      this.LoaderStore.isLoading = true;
      axios({
        url: `performance-by-gender`,
      })
        .then((response) => {
          this.performanceData = response.data.performanceByGender;
          this.averageData = [];
          this.LoaderStore.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    averageScore() {
      this.LoaderStore.isLoading = true;
      axios({
        url: `average-score`,
      })
        .then((response) => {
          this.averageData = response.data.data;
          this.performanceData = [];
          this.LoaderStore.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>