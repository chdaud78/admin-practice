<template>
    <div class="line-chart">
        <div class="card">
            <div class="card-header">
                Polar area Chart
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
    name: "PolarAreaChart",
    components: {
        Vue3ChartJs,
    },
    setup() {
        const Chart = {
            id: 'chart',
            type: 'polarArea',
            data: {
                labels: ["January", "February", "March","April"],
                datasets: [
                    {
                        label: "My First dataset",
                        data: [60, 25, 15, 40],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(201, 203, 207)',
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

