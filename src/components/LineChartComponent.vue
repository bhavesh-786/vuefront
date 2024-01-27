<!-- ChartComponent.vue -->
<template>
  <div v-if="this.LoaderStore.G2Data.length > 0">
    <Line :data="renderChart" :options="options" />
  </div>
</template>
  
  <script>
import { mapState } from "vuex";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "BarChart",
  components: { Line },
  data() {
    return {
      chartData: {},
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  created() {
    this.$store.dispatch("LoaderStore/getGraphDara");
  },
  computed: {
    ...mapState(["LoaderStore"]),
    renderChart() {
      return {
        labels: this.LoaderStore.G2Data,
        datasets: [
          {
            label: "Gender Count",
            backgroundColor: ['#C28535', '#8AAE56', '#B66C46', '#fff633', '#1ba89d', '#a61ba8'],
            strokeColor: "#63b3ed",
            pointColor: "#fff",
            pointStrokeColor: "#63b3ed",
            data: this.LoaderStore.G1Data,
          },
        ],
      };
    },
  },
  mounted() {
  },
};
</script>