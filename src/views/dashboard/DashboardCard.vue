<template>
    <div class="dashboard-card">
        <div class="row">
            <template v-for="card in cards">
                <div class="col-sm">
                    <div class="card text-white" :class="`bg-gradient-${card.class}`">
                        <div class="card-body">
                            <div>
                                <div class="card-title text-value-lg">{{ card.title }}</div>
                                <div class="card-subtitle" v-html="card.subtitle"></div>
                            </div>
                            <vue3-chart-js v-bind="{...Chart}"></vue3-chart-js>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {
    name: "DashboardCard",
    components: {
        Vue3ChartJs,
    },
    data() {
        return {
            cards: [
                {
                    class: "primary",
                    title: "9.823",
                    subtitle: "Members online",
                },
                {
                    class: "info",
                    title: "9.823",
                    subtitle: "Members online",
                },
                {
                    class: "warning",
                    title: "9.823",
                    subtitle: "Members online",
                },
                {
                    class: "danger",
                    title: "9.823",
                    subtitle: "Members online",
                },
            ]
        };
    },
    setup() {
        const Chart = {
            id: 'chart',
            type: 'line',
            data: {
                labels: ["January","February","March","April","May","June","July"],
                datasets: [
                    {
                        label: "My First dataset",
                        data: [65, 59, 84, 84, 51, 55, 40],
                        backgroundColor: "#877EDB",
                        borderColor: "#877EDB",
                        borderWidth: 1,
                        tension: 0.5,
                        pointStyle: 'circle',
                        pointBorderColor: '#877EDB',
                        pointBackgroundColor: "inherit",
                    }
                ],
            },
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