<!-- ChartComponent.vue -->
<template>
  <Line :data="chartData" />

  <!-- <div class="bg-white p-4">
    <Bar :data="chartData" />
  </div> -->
</template>
  
  <script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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
      chartData: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            backgroundColor: "rgba(99,179,237,0.4)",
            strokeColor: "#63b3ed",
            pointColor: "#fff",
            pointStrokeColor: "#63b3ed",
            data: [203, 156, 99, 251, 305, 247, 256],
          },
          {
            backgroundColor: "rgba(198,198,198,0.4)",
            strokeColor: "#f7fafc",
            pointColor: "#fff",
            pointStrokeColor: "#f7fafc",
            data: [86, 97, 144, 114, 94, 108, 156],
          },
        ],
      },
      options: {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
    };
  },
};
</script>