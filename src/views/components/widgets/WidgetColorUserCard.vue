<template>
    <template v-for="card in cards">
        <div class="col-sm-6 col-md-2">
            <div class="card text-white" :class="card.background">
                <div class="card-body">
                    <div class="text-muted text-right">
                        <i class="c-icon c-icon-2xl" :class="card.icon"></i>
                    </div>
                    <div class="text-value-lg">{{ card.number }}</div>
                    <small class="text-muted text-uppercase font-weight-bold">{{ card.help_text }}</small>
                    <div class="progress progress-white progress-xs mt-3">
                        <div class="progress-bar" role="progressbar"
                             :style="`width: ${card.progress_number}`"
                             aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>


<script>
export default {
    name: "WidgetUserCard",
    data() {
        return {
            cards: [
                {
                    background: "bg-gradient-primary",
                    icon: "cil-people",
                    number: "87.500",
                    help_text: "VISITORS",
                    progress_number: "25%",
                },
                {
                    background: "bg-gradient-success",
                    icon: "cil-user-plus",
                    number: "385",
                    help_text: "New clients",
                    progress_number: "25%",
                },
                {
                    background: "bg-gradient-warning",
                    icon: "cil-basket",
                    number: "1238",
                    help_text: "Produces sold",
                    progress_number: "25%",
                },
                {
                    background: "bg-gradient-info",
                    icon: "cil-chart-pie",
                    number: "28%",
                    help_text: "returning visitors",
                    progress_number: "25%",
                },
                {
                    background: "bg-gradient-danger",
                    icon: "cil-speedometer",
                    number: "5:34:11",
                    help_text: "avg, time",
                    progress_number: "25%",
                },
                {
                    background: "bg-gradient-primary",
                    icon: "cil-speech",
                    number: "972",
                    help_text: "comments",
                    progress_number: "25%",
                },

            ]
        }
    }
}
</script>