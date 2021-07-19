<template>
    <div class="widgets-page">
        <div class="row">
            <widget-graph-card></widget-graph-card>
        </div>
    </div>
</template>

<script>
import WidgetGraphCard from "@/views/components/widgets/WidgetGraphCard.vue"

export default {
    name: "WidgetsPage",
    components: {
        WidgetGraphCard,
    }
}
</script>