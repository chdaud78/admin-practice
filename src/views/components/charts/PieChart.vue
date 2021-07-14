<template>
    <div class="line-chart">
        <div class="card">
            <div class="card-header">
                Pie Chart
                <div class="card-header-actions">
                    <div class="card-header-action">docs</div>
                </div>
            </div>
            <div class="card-body">
                <vue3-chart-js
                    :id="Chart.id"
                    :type="Chart.type"
                    :data="Chart.data"
                    :options="Chart.options"></vue3-chart-js>
            </div>
        </div>
    </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {
    name: "PieChart",
    components: {
        Vue3ChartJs,
    },
    setup() {
        const Chart = {
            id: 'chart',
            type: 'pie',
            data: {
                labels: ["January", "February", "March"],
                datasets: [
                    {
                        label: "My First dataset",
                        data: [60, 25, 15],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'],
                    },
                ],
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        display: false,
                        min: 20,
                        max: 100,
                    },
                },
            }
        }

        return {
            Chart,
        }
    },
}
</script>

