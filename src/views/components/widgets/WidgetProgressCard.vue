<template>
    <template v-for="card in cards">
        <div class="col-sm-6 col-lg-3">
            <div class="card" :class="card.card_class">
                <div class="card-body">
                    <h3>{{ card.number }}</h3>
                    <div>{{ card.title }}</div>
                    <div class="progress progress-xs mt-2" :class="card.progress_class">
                        <div class="progress-bar" :class="card.progress_bar_class" role="progressbar"
                             :style="`width: ${card.progress_number}`" aria-valuenow="25" aria-valuemin="0"
                             aria-valuemax="100"></div>
                    </div>
                    <small class="text-muted">{{ card.text }}</small>
                </div>
            </div>
        </div>
    </template>
</template>

<script>
export default {
    name: "WidgetProgressCard",
    data() {
        return {
            cards: [
                {
                    number: "89.9%",
                    title: "Widget title",
                    progress_number: "25%",
                    progress_bar_class: "bg-gradient-primary",
                    text: "Widget helper text",
                },
                {
                    number: "12.124",
                    title: "Widget title",
                    progress_number: "25%",
                    progress_bar_class: "bg-gradient-info",
                    text: "Widget helper text",
                },
                {
                    number: "$98.111,00",
                    title: "Widget title",
                    progress_number: "25%",
                    progress_bar_class: "bg-gradient-warning",
                    text: "Widget helper text",
                },
                {
                    number: "2 TB",
                    title: "Widget title",
                    progress_number: "25%",
                    progress_bar_class: "bg-gradient-danger",
                    text: "Widget helper text",
                },
                {
                    card_class: "bg-gradient-primary text-white",
                    number: "89.9%",
                    title: "Widget title",
                    progress_class: "progress-white",
                    progress_number: "25%",
                    text: "Widget helper text",
                },
                {
                    card_class: "bg-gradient-info text-white",
                    number: "12.124",
                    title: "Widget title",
                    progress_class: "progress-white",
                    progress_number: "25%",
                    text: "Widget helper text",
                },
                {
                    card_class: "bg-gradient-warning text-white",
                    number: "$98.111,00",
                    title: "Widget title",
                    progress_class: "progress-white",
                    progress_number: "25%",
                    text: "Widget helper text",
                },
                {
                    card_class: "bg-gradient-danger text-white",
                    number: "2 TB",
                    title: "Widget title",
                    progress_class: "progress-white",
                    progress_number: "25%",
                    text: "Widget helper text",
                }
            ]
        }
    },
};
</script>