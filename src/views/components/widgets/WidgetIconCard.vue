<template>
    <template v-for="card in cards">
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="card-body d-flex align-items-center" :class="card.full_check">
                    <div class="p-3 mfe-3" :class="card.color">
                        <i class="c-icon c-icon-xl text-white" :class="card.icon"></i>
                    </div>
                    <div class="card-text">
                        <div class="text-primary font-weight-bold">{{ card.number }}</div>
                        <div class="text-muted text-uppercase font-weight-bold small">{{ card.text }}</div>
                    </div>
                </div>
                <template v-if="card.footer_check">
                    <div class="card-footer">
                        <a href="#" class="d-flex text-muted justify-content-between align-items-center">
                            <small class="font-weight-bold ">View More</small>
                            <i class="c-icon cil-chevron-right"></i>
                        </a>
                    </div>
                </template>
            </div>
        </div>
    </template>
</template>

<script>
export default {
    name: "WidgetIconCard",
    data() {
        return {
            cards: [
                {
                    full_check: "",
                    color: "bg-gradient-primary",
                    icon: "cil-settings",
                    number: "$1.999,50",
                    text: "Widget title",
                    footer_check: false,
                },
                {
                    full_check: "",
                    color: "bg-gradient-info",
                    icon: "cil-monitor",
                    number: "$1.999,50",
                    text: "Widget title",
                    footer_check: false,
                },
                {
                    full_check: "",
                    color: "bg-gradient-warning",
                    icon: "cil-moon",
                    number: "$1.999,50",
                    text: "Widget title",
                    footer_check: false,
                },
                {
                    full_check: "",
                    color: "bg-gradient-danger",
                    icon: "cil-bell",
                    number: "$1.999,50",
                    text: "Widget title",
                    footer_check: false,
                },
                {
                    full_check: "",
                    color: "bg-gradient-primary",
                    icon: "cil-settings",
                    number: "$1.999,50",
                    text: "Widget title",
                    footer_check: true,
                },
                {
                    full_check: "",
                    color: "bg-gradient-info",
                    icon: "cil-monitor",
                    number: "$1.999,50",
                    text: "Widget title",
                    footer_check: true,
                },
                {
                    full_check: "",
                    color: "bg-gradient-warning",
                    icon: "cil-moon",
                    number: "$1.999,50",
                    text: "Widget title",
                    footer_check: true,
                },
                {
                    full_check: "",
                    color: "bg-gradient-danger",
                    icon: "cil-bell",
                    number: "$1.999,50",
                    text: "Widget title",
                    footer_check: true,
                },
                {
                    full_check: "p-0",
                    color: "bg-gradient-primary",
                    icon: "cil-settings",
                    number: "$1.999,50",
                    text: "Widget title",
                    footer_check: false,
                },
                {
                    full_check: "p-0",
                    color: "bg-gradient-info",
                    icon: "cil-monitor",
                    number: "$1.999,50",
                    text: "Widget title",
                    footer_check: false,
                },
                {
                    full_check: "p-0",
                    color: "bg-gradient-warning",
                    icon: "cil-moon",
                    number: "$1.999,50",
                    text: "Widget title",
                    footer_check: false,
                },
                {
                    full_check: "p-0",
                    color: "bg-gradient-danger",
                    icon: "cil-bell",
                    number: "$1.999,50",
                    text: "Widget title",
                    footer_check: false,
                }

            ]
        };
    },
}
</script>
