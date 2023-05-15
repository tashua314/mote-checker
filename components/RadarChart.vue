<template>
  <v-container>
    <!--<canvas ref="canvas"></canvas>-->
    <Radar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Radar } from 'vue-chartjs/legacy'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  RadialLinearScale
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement,
  ChartDataLabels
)

export default defineComponent({
  name: 'RadarChart',
  components: {
    Radar
  },
  data() {
    return {
      chartOptions: {
        scales: {
          r: {
            max: 5, // 最大値
            pointLabels: { // 軸ラベル
              font: {
                size: 30,
              },
            },
            ticks: { // 目盛り
              stepSize: 1, // 目盛りの間隔
              font: {
                size: 15,
              },
            },
          },
        },
        plugins: {
          legend: { // 凡例
            labels: {
              font: {
                size: 30,
              },
            },
          },
          datalabels: { // データラベル
            display: true,
            color: 'black',
            font: {
              size: 20,
            },
            formatter: (value, context) => {
              return value.toFixed(1)
            },
            anchor: 'end',
            align: 'end',
            offset: 10,
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartId: {
      type: String,
      default: 'radar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    chartData: function() {
      // if (chartInstance) {
      //   chartInstance.destroy()
      // }
      this.renderChart()
    }
  },
  methods: {
    renderChart() {
    }
  }
})
</script>
