<template>
    <div class="line-chart">
        <div class="card">
            <div class="card-header">
                Line Chart
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
    name: "LineChart",
    components: {
        Vue3ChartJs,
    },
    setup() {
        const Chart = {
            id: 'chart',
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        data: [80, 25, 25, 79, 26, 65, 30],
                        backgroundColor: "rgba(231, 237, 240, 0.6)",
                        borderColor: "#ABC8D6",
                        borderWidth: 4,
                        tension: 0.5,
                        pointStyle: 'circle',
                        pointBorderColor: '#ABC8D6',
                        pointBackgroundColor: "#ABC8D6",
                        pointRadius: 2,
                        fill: true
                    },
                    {
                        label: "My Second dataset",
                        data: [95, 52, 79, 62, 50, 91, 41],
                        borderColor: "#DCDCDC",
                        borderWidth: 4,
                        tension: 0.5,
                        pointStyle: 'circle',
                        pointBorderColor: '#DCDCDC',
                        pointBackgroundColor: "#DCDCDC",
                        pointRadius: 2,
                    }
                ],
            },
            options: {
                responsive: true,
                scales: {
                    y: {
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

