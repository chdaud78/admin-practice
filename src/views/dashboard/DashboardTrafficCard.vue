<template>
    <div class="dashboard-traffic-card">
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div>
                        <h4 class="card-title mb-1">Traffic</h4>
                        <div class="small text-muted">September 2019</div>
                    </div>
                    <div>
                        <div class="btn-toolbar d-md-block">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-outline-secondary">
                                    <input type="radio" name="options" id="option1" autocomplete="off"> Day
                                </label>
                                <label class="btn btn-outline-secondary active">
                                    <input type="radio" name="options" id="option2" autocomplete="off" checked> Month
                                </label>
                                <label class="btn btn-outline-secondary">
                                    <input type="radio" name="options" id="option3" autocomplete="off"> Year
                                </label>
                            </div>
                            <button class="btn btn-primary ml-4">
                                <i class="c-icon cil-cloud-download"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="chart mt-3">
                    <vue3-chart-js v-bind="{...Chart}"></vue3-chart-js>
                </div>
            </div>
            <div class="card-footer">
                <div class="row">
                    <div class="col-sm">
                        <div class="text-muted">Visits</div>
                        <strong>29.703 Users (40%)</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-gradient-success" role="progressbar" style="width: 40%"
                                 aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="text-muted">Unique</div>
                        <strong>24.093 Users (20%)</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-gradient-info" role="progressbar" style="width: 20%"
                                 aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="text-muted">Pageviews</div>
                        <strong>78.706 Views (60%)</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-gradient-warning" role="progressbar" style="width: 60%"
                                 aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="text-muted">New Users</div>
                        <strong>22.123 Users (80%)</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-gradient-danger" role="progressbar" style="width: 80%"
                                 aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="text-muted">Bounce Rate</div>
                        <strong>40.15%</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-gradient-primary" role="progressbar" style="width: 40.15%"
                                 aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
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
    setup() {
        const Chart = {
            id: 'chart',
            type: 'line',
            data: {
                labels: ["M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S"],
                datasets: [

                    {
                        label: "My First dataset",
                        data: [95, 100, 80, 100, 96, 98, 82, 72, 92, 86, 93, 88, 95, 70, 96, 77, 96, 100, 80, 85, 70, 65],
                        borderColor: "#2eb85c",
                        borderWidth: 2,
                        tension: 0.5,
                        pointStyle: 'circle',
                        pointBorderColor: '#2eb85c',
                        pointBackgroundColor: "#2eb85c",
                        radius: 0,
                    },
                    {
                        label: "My First dataset",
                        data: [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
                        borderColor: "#e55353",
                        borderWidth: 2,
                        borderDash: [5, 5],
                        tension: 0.5,
                        pointStyle: 'line',
                        pointBorderColor: '#e55353',
                        pointBackgroundColor: "#e55353",
                        pointRadius: 1,
                    },
                    {
                        label: "My First dataset",
                        data: [180, 70, 80, 60, 170, 95, 170, 150, 160, 90, 170, 70, 80, 60, 120, 200, 110, 60, 70, 230, 110],
                        backgroundColor: "#E5E6E6",
                        borderColor: "#3399ff",
                        borderWidth: 2,
                        tension: 0.5,
                        fill: true,
                        pointStyle: 'circle',
                        pointBorderColor: '#3399ff',
                        pointBackgroundColor: "#3399ff",
                        radius: 0,
                    },
                ],
            },
            options: {
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        }
                    },
                    y: {
                        min: 0,
                        max: 250,
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
