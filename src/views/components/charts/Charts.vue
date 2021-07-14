<template>
    <div class="charts-page">
        <div class="card-columns cols-2">
            <line-chart></line-chart>
            <radar-chart></radar-chart>
            <bar-chart></bar-chart>
            <pie-chart></pie-chart>
            <doughnut-chart></doughnut-chart>
            <polar-area-chart></polar-area-chart>
            <bubble-chart></bubble-chart>
            <scatter-chart></scatter-chart>
        </div>
    </div>
</template>

<script>
import LineChart from "@/views/components/charts/LineChart.vue";
import RadarChart from "@/views/components/charts/RadarChart.vue";
import BarChart from "@/views/components/charts/BarChart.vue";
import PieChart from "@/views/components/charts/PieChart.vue";
import DoughnutChart from "@/views/components/charts/DoughnutChart.vue";
import PolarAreaChart from "@/views/components/charts/PolarAreaChart.vue";
import BubbleChart from "@/views/components/charts/BubbleChart.vue";
import ScatterChart from "@/views/components/charts/ScatterChart.vue";

export default {
    name: "Charts",
    components: {
        LineChart,
        RadarChart,
        BarChart,
        PieChart,
        DoughnutChart,
        PolarAreaChart,
        BubbleChart,
        ScatterChart,
    },
}
</script>
