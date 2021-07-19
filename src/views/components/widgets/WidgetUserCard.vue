<template>
    <template v-for="card in cards">
        <div class="col-sm-6 col-md-2">
            <div class="card">
                <div class="card-body">
                    <div class="text-muted text-right">
                        <i class="c-icon c-icon-2xl" :class="card.icon"></i>
                    </div>
                    <div class="text-value-lg">{{ card.number }}</div>
                    <small class="text-muted text-uppercase font-weight-bold">{{ card.help_text }}</small>
                    <div class="progress progress-xs mt-3">
                        <div class="progress-bar" :class="card.progress_kind" role="progressbar"
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
                    icon: "cil-people",
                    number: "87.500",
                    help_text: "VISITORS",
                    progress_kind: "bg-gradient-primary",
                    progress_number: "25%",
                },
                {
                    icon: "cil-user-plus",
                    number: "385",
                    help_text: "New clients",
                    progress_kind: "bg-gradient-success",
                    progress_number: "25%",
                },
                {
                    icon: "cil-basket",
                    number: "1238",
                    help_text: "Produces sold",
                    progress_kind: "bg-gradient-warning",
                    progress_number: "25%",
                },
                {
                    icon: "cil-chart-pie",
                    number: "28%",
                    help_text: "returning visitors",
                    progress_kind: "bg-gradient-info",
                    progress_number: "25%",
                },
                {
                    icon: "cil-speedometer",
                    number: "5:34:11",
                    help_text: "avg, time",
                    progress_kind: "bg-gradient-danger",
                    progress_number: "25%",
                },
                {
                    icon: "cil-speech",
                    number: "972",
                    help_text: "comments",
                    progress_kind: "bg-gradient-primary",
                    progress_number: "25%",
                },

            ]
        }
    }
}
</script>