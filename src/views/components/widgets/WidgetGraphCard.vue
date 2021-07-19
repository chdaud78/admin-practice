<template>
    <template v-for="card in cards">
        <div class="col-sm-6 col-lg-3">
            <div class="card text-white" :class="`bg-gradient-${card.class}`">
                <div class="card-body d-flex justify-content-between align-items-start">
                    <div class="card-text">
                        <div class="text-value-lg">9.823</div>
                        <div>members online</div>
                    </div>
                    <div class="btn-group">
                        <div class="btn btn-transparent dropdown-toggle p-0" data-toggle="dropdown"
                             aria-haspopup="true" aria-expanded="false">
                            <i class="c-icon cil-settings"></i>
                        </div>
                        <div class="dropdown-menu">
                            <div class="dropdown-item">Action</div>
                            <div class="dropdown-item">Another Action</div>
                            <div class="dropdown-item">Something else here</div>
                        </div>
                    </div>
                </div>
                <vue3-chart-js
                    :id="Chart.id"
                    :type="Chart.type"
                    :data="card.data"
                    :options="Chart.options"></vue3-chart-js>
            </div>
        </div>
    </template>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {
    name: "WidgetGraphCard",
    components: {
        Vue3ChartJs,
    },
    data() {
        return {
            colors: [
                "primary", "info", "warning", "danger"
            ],
            cards: [
                {
                    class: "primary",
                    title: "9.823",
                    subtitle: "Members online",
                    data: {
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
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
                                pointBackgroundColor: "#291ABA",
                                pointRadius: 5,
                            }
                        ],
                    },
                },
                {
                    class: "info",
                    title: "9.823",
                    subtitle: "Members online",
                    data: {
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [
                            {
                                label: "My First dataset",
                                data: [50, 35, 42, 65, 65, 81, 52],
                                backgroundColor: "#9DCCF8",
                                borderColor: "#9DCCF8",
                                borderWidth: 1,
                                tension: 0.5,
                                pointStyle: 'circle',
                                pointBorderColor: '#9DCCF8',
                                pointBackgroundColor: "#148AFF",
                                pointRadius: 5,
                            }
                        ],
                    },
                },
                {
                    class: "warning",
                    title: "9.823",
                    subtitle: "Members online",
                    data: {
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [
                            {
                                label: "My First dataset",
                                data: [65, 70, 60, 55, 40, 35, 40],
                                backgroundColor: "#F9BB42",
                                borderColor: "#FCE0A9",
                                borderWidth: 3,
                                tension: 0.5,
                                fill: true,
                                pointBorderColor: '#877EDB',
                                pointBackgroundColor: "#291ABA",
                                pointRadius: 0,
                            }
                        ],
                    },
                },
                {
                    class: "danger",
                    title: "9.823",
                    subtitle: "Members online",
                    data: {
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [
                            {
                                label: "My First dataset",
                                data: [65, 59, 84, 84, 51, 55, 40],
                                backgroundColor: "#877EDB",
                                borderColor: "#E06464",
                                borderWidth: 2,
                                tension: 0.5,
                                pointStyle: 'circle',
                                pointBorderColor: '#E06464',
                                pointBackgroundColor: "#E06464",
                                pointRadius: 5,
                                stepped: true,

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
            type: 'line',
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