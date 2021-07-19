<template>
    <div class="widgets-page">
        <div class="row">
            <widget-graph-card></widget-graph-card>
            <widget-progress-card></widget-progress-card>
        </div>
    </div>
</template>

<script>
import WidgetGraphCard from "@/views/components/widgets/WidgetGraphCard.vue"
import WidgetProgressCard from "@/views/components/widgets/WidgetProgressCard.vue"

export default {
    name: "WidgetsPage",
    components: {
        WidgetGraphCard,
        WidgetProgressCard,
    }
}
</script>