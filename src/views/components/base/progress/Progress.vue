<template>
    <div class="progress-page">
        <div class="card">
            <div class="card-header">
                Progress
                <small class="text-muted">labels</small>
            </div>
            <div class="card-body">
                <h6>No label</h6>
                <div class="progress mb-3">
                    <div class="progress-bar" role="progressbar" style="width:75%" aria-valuenow="25" aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>
                <h6>Progress label</h6>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width:75%" aria-valuenow="25" aria-valuemin="0"
                         aria-valuemax="100">75%
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                Progress
                <small class="text-muted">width</small>
            </div>
            <div class="card-body">
                <h6>Default width</h6>
                <div class="progress mb-3">
                    <div class="progress-bar" role="progressbar" style="width:75%" aria-valuenow="25" aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>
                <h6>Custom width</h6>
                <div class="progress w-75 mb-3">
                    <div class="progress-bar" role="progressbar" style="width:75%" aria-valuenow="25" aria-valuemin="0"
                         aria-valuemax="100">75%
                    </div>
                </div>
                <div class="progress w-50 mb-3">
                    <div class="progress-bar" role="progressbar" style="width:75%" aria-valuenow="25" aria-valuemin="0"
                         aria-valuemax="100">75%
                    </div>
                </div>
                <div class="progress w-25 mb-3">
                    <div class="progress-bar" role="progressbar" style="width:75%" aria-valuenow="25" aria-valuemin="0"
                         aria-valuemax="100">75%
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                Progress
                <small class="text-muted">height</small>
            </div>
            <div class="card-body">
                <h6>Default height</h6>
                <div class="progress mb-3">
                    <div class="progress-bar" role="progressbar" style="width:75%" aria-valuenow="25" aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>
                <h6>Custom height</h6>
                <div class="progress progress-xs mb-3">
                    <div class="progress-bar" role="progressbar" style="width:75%" aria-valuenow="25" aria-valuemin="0"
                         aria-valuemax="100">75%
                    </div>
                </div>
                <div class="progress progress-sm mb-3">
                    <div class="progress-bar" role="progressbar" style="width:75%" aria-valuenow="25" aria-valuemin="0"
                         aria-valuemax="100">75%
                    </div>
                </div>
                <div class="progress mb-3" style="height: 2rem">
                    <div class="progress-bar" role="progressbar" style="width:75%" aria-valuenow="25" aria-valuemin="0"
                         aria-valuemax="100">75%
                    </div>
                </div>
                <div class="progress mb-3" style="height: 20px">
                    <div class="progress-bar" role="progressbar" style="width:75%" aria-valuenow="25" aria-valuemin="0"
                         aria-valuemax="100">75%
                    </div>
                </div>
                <div class="progress" style="height: 2px">
                    <div class="progress-bar" role="progressbar" style="width:75%" aria-valuenow="25" aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                Progress
                <small class="text-muted">colors</small>
            </div>
            <div class="card-body">
                <h6>gradient-success</h6>
                <div class="progress mb-3">
                    <div class="progress-bar bg-gradient-success random-color" role="progressbar" style="width:75%"
                         aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>gradient-info</h6>
                <div class="progress mb-3">
                    <div class="progress-bar bg-gradient-info random-color" role="progressbar" style="width:75%"
                         aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>gradient-waning</h6>
                <div class="progress mb-3">
                    <div class="progress-bar bg-gradient-warning random-color" role="progressbar" style="width:75%"
                         aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>gradient-danger</h6>
                <div class="progress mb-3">
                    <div class="progress-bar bg-gradient-danger random-color" role="progressbar" style="width:75%"
                         aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>gradient-primary</h6>
                <div class="progress mb-3">
                    <div class="progress-bar bg-gradient-primary random-color" role="progressbar" style="width:75%"
                         aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>gradient-secondary</h6>
                <div class="progress mb-3">
                    <div class="progress-bar bg-gradient-secondary random-color" role="progressbar" style="width:75%"
                         aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>gradient-dark</h6>
                <div class="progress mb-3">
                    <div class="progress-bar bg-gradient-dark random-color" role="progressbar" style="width:75%"
                         aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                Progress
                <small class="text-muted">striped</small>
            </div>
            <div class="card-body">
                <div class="progress mb-3">
                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:75%"
                         aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-3">
                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width:75%"
                         aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-3">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width:75%"
                         aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-3">
                    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width:75%"
                         aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                Progress
                <small class="text-muted">animated</small>
            </div>
            <div class="card-body">
                <div class="progress mb-3">
                    <div class="progress-bar progress-bar-animated progress-bar-striped bg-success" role="progressbar"
                         style="width:75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-3">
                    <div class="progress-bar progress-bar-animated progress-bar-striped bg-info" role="progressbar"
                         style="width:75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-3">
                    <div class="progress-bar progress-bar-animated progress-bar-striped bg-warning" role="progressbar"
                         style="width:75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-3">
                    <div class="progress-bar progress-bar-animated progress-bar-striped bg-danger" role="progressbar"
                         style="width:75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                Progress
                <small class="text-muted">multiple bars</small>
            </div>
            <div class="card-body">
                <div class="progress mb-3">
                    <div class="progress-bar bg-warning user-color-change" role="progressbar" style="width:10%"
                         aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-info user-color-change" role="progressbar" style="width:35%"
                         aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-success user-color-change" role="progressbar" style="width:20%"
                         aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-3">
                    <div class="progress-bar bg-warning user-color-change" role="progressbar" style="width:10%"
                         aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">10%
                    </div>
                    <div class="progress-bar bg-info user-color-change" role="progressbar" style="width:35%"
                         aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%
                    </div>
                    <div class="progress-bar bg-success user-color-change" role="progressbar" style="width:20%"
                         aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%
                    </div>
                </div>
                <div class="progress mb-3">
                    <div class="progress-bar bg-warning user-color-change" role="progressbar" style="width:10%"
                         aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">10%
                    </div>
                    <div class="progress-bar progress-bar-animated progress-bar-striped bg-info user-color-change"
                         role="progressbar" style="width:35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                        35%
                    </div>
                    <div class="progress-bar bg-success user-color-change" role="progressbar" style="width:20%"
                         aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-dark w-25" @click.prevent="ClickRandom">Click to Change</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProgressPage",
    mounted() {
        this.ProgressRandom();
    },
    methods: {
        ProgressRandom() {
            setInterval(() => {
                let random
                document.querySelectorAll('.random-color').forEach(x => {
                    random = Math.floor(Math.random() * (100 - 1) + 1);
                    x.style.width = random + '%';
                })
            }, 3000)
        },
        ClickRandom() {
            let random
            document.querySelectorAll('.user-color-change').forEach(x => {
                random = Math.floor(Math.random() * (100 - 1) + 1);
                x.style.width = random + '%';
                x.innerText = random + "%";
            })
        }
    },
}
</script>
