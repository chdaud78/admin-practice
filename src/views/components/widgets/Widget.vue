<template>
    <div class="widgets-page">
        <div class="row">
            <widget-graph-card></widget-graph-card>
            <widget-progress-card></widget-progress-card>
            <widget-simple-graph-card></widget-simple-graph-card>
            <widget-icon-card></widget-icon-card>
            <widget-sns-card></widget-sns-card>
        </div>
        <widget-group-card></widget-group-card>
        <div class="row">
            <widget-user-card></widget-user-card>
            <widget-color-user-card></widget-color-user-card>
        </div>
    </div>
</template>

<script>
import WidgetSimpleGraphCard from "@/views/components/widgets/WidgetSimpleGraphCard.vue";
import WidgetGraphCard from "@/views/components/widgets/WidgetGraphCard.vue";
import WidgetProgressCard from "@/views/components/widgets/WidgetProgressCard.vue";
import WidgetIconCard from "@/views/components/widgets/WidgetIconCard.vue";
import WidgetSnsCard from "@/views/components/widgets/WidgetSnsCard.vue";
import WidgetGroupCard from "@/views/components/widgets/WidgetGroupCard.vue";
import WidgetUserCard from "@/views/components/widgets/WidgetUserCard.vue";
import WidgetColorUserCard from "@/views/components/widgets/WidgetColorUserCard.vue";

export default {
    name: "WidgetsPage",
    components: {
        WidgetGraphCard,
        WidgetProgressCard,
        WidgetSimpleGraphCard,
        WidgetIconCard,
        WidgetSnsCard,
        WidgetGroupCard,
        WidgetUserCard,
        WidgetColorUserCard,
    }
}
</script>
