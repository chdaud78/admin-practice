<template>
    <template v-for="card in cards">
        <div class="col-md-2 col-sm-4">
            <div class="card">
                <div class="card-body text-center">
                    <small class="text-muted text-value-lg">{{ card.title }}</small>
                    <div class="text-value-xl">{{ card.number }}</div>
                    <vue3-chart-js
                        :id="Chart.id"
                        :type="card.type"
                        :data="card.data"
                        :options="Chart.options"></vue3-chart-js>
                </div>
            </div>
        </div>
    </template>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';

export default {
    name: "WidgetGraphCard",
    components: {
        Vue3ChartJs,
    },
    data() {
        return {
            cards: [
                {
                    title: "TITLE",
                    number: "1,123",
                    type: "bar",
                    data: {
                        labels: ["S","M","T","T","W","F","S","S","M","T","T","W","F","S","S","M","T","T","W","F","S"],
                        datasets: [
                            {
                                label: "My First dataset",
                                data: [65, 59, 84, 84, 51, 55, 40,65, 59, 84, 84, 51, 55, 40,65, 59, 84, 84, 51, 55, 40],
                                backgroundColor: "#20a8d8",
                                borderColor: "#20a8d8",
                            }
                        ],
                    },
                },
                {
                    title: "TITLE",
                    number: "1,123",
                    type: "bar",
                    data: {
                        labels: ["S","M","T","T","W","F","S","S","M","T","T","W","F","S","S","M","T","T","W","F","S"],
                        datasets: [
                            {
                                label: "My First dataset",
                                data: [65, 59, 84, 84, 51, 55, 40,65, 59, 84, 84, 51, 55, 40,65, 59, 84, 84, 51, 55, 40],
                                backgroundColor: "#ffc107",
                                borderColor: "#ffc107",
                            }
                        ],
                    },
                },
                {
                    title: "TITLE",
                    number: "1,123",
                    type: "bar",
                    data: {
                        labels: ["S","M","T","T","W","F","S","S","M","T","T","W","F","S","S","M","T","T","W","F","S"],
                        datasets: [
                            {
                                label: "My First dataset",
                                data: [65, 59, 84, 84, 51, 55, 40,65, 59, 84, 84, 51, 55, 40,65, 59, 84, 84, 51, 55, 40],
                                backgroundColor: "#4dbd74",
                                borderColor: "#4dbd74",
                            }
                        ],
                    },
                },
                {
                    title: "TITLE",
                    number: "1,123",
                    type: "line",
                    data: {
                        labels: ["S","M","T","T","W","F","S","S","M","T","T","W","F","S","S","M","T","T","W","F","S"],
                        datasets: [
                            {
                                label: "My First dataset",
                                data: [65, 59, 84, 84, 51, 55, 40,65, 59, 84, 84, 51, 55, 40,65, 59, 84, 84, 51, 55, 40],
                                backgroundColor: "#63c2de",
                                borderColor: "#63c2de",
                                tension: 0.5,
                                pointRadius: 1,
                            }
                        ],
                    },
                },
                {
                    title: "TITLE",
                    number: "1,123",
                    type: "line",
                    data: {
                        labels: ["S","M","T","T","W","F","S","S","M","T","T","W","F","S","S","M","T","T","W","F","S"],
                        datasets: [
                            {
                                label: "My First dataset",
                                data: [65, 59, 84, 84, 51, 55, 40,65, 59, 84, 84, 51, 55, 40,65, 59, 84, 84, 51, 55, 40],
                                backgroundColor: "#4dbd74",
                                borderColor: "#4dbd74",
                                tension: 0.5,
                                pointRadius: 1,
                            }
                        ],
                    },
                },
                {
                    title: "TITLE",
                    number: "1,123",
                    type: "line",
                    data: {
                        labels: ["S","M","T","T","W","F","S","S","M","T","T","W","F","S","S","M","T","T","W","F","S"],
                        datasets: [
                            {
                                label: "My First dataset",
                                data: [65, 59, 84, 84, 51, 55, 40,65, 59, 84, 84, 51, 55, 40,65, 59, 84, 84, 51, 55, 40],
                                backgroundColor: "#f86c6b",
                                borderColor: "#f86c6b",
                                tension: 0.5,
                                pointRadius: 1,
                            }
                        ],
                    },
                },
            ]
        };
    },
    setup() {
        const Chart = {
            id: 'chart',
            options: {
                responsive: true,
                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        display: false,
                        min: 30,
                        max: 120,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    }
                }
            }
        }

        return {
            Chart,
        }
    },
}
</script>
