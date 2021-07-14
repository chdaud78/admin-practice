<template>
    <div class="line-chart">
        <div class="card">
            <div class="card-header">
                Bubble Chart
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
    name: "BubbleChart",
    components: {
        Vue3ChartJs,
    },
    setup() {
        const Chart = {
            id: 'chart',
            type: 'bubble',
            data: {
                labels: ["January"],
                datasets: [
                    {
                        label: "My First dataset",
                        data: [
                            {x: 60, y: 25, r: 15},
                            {x: 40, y: 30, r: 30},
                            {x: 52, y: 70, r: 10},
                            {x: 48, y: 50, r: 50},
                        ],
                        backgroundColor: 'rgb(255, 99, 132)',
                    },
                    {
                        label: "My Second dataset",
                        data: [
                            {x: 58, y: 25, r: 15},
                            {x: 44, y: 30, r: 30},
                            {x: 50, y: 70, r: 10},
                        ],
                        backgroundColor: 'rgb(255, 205, 86)',
                    },
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

