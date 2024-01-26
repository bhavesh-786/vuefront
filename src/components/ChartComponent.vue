<!-- ChartComponent.vue -->
<template>
  <div v-if="this.LoaderStore.F2Data.length > 0">
    <Bar :data="renderChart" />
  </div>

  <!-- <div class="bg-white p-4">
    <Bar :data="chartData" />
  </div> -->
</template>
  
  <script>
import { mapState } from "vuex";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
    };
  },
  created() {
    this.$store.dispatch("LoaderStore/getGraphDaraTwo");
  },
  computed: {
    ...mapState(["LoaderStore"]),
    renderChart() {
      return {
        labels: this.LoaderStore.F2Data,
        datasets: [
          {
            label: "Students Father Job",
            backgroundColor: ['#C28535', '#8AAE56', '#B66C46', '#fff633', '#1ba89d', '#a61ba8'],
            data: this.LoaderStore.F1Data,
          },
        ],
      };
    },
  },
};
</script>