<template>
    <section class="dashboard">
        <dashboard-card></dashboard-card>
        <dashboard-traffic-card></dashboard-traffic-card>
        <dashboard-sns-card></dashboard-sns-card>
        <dashboard-synthesis-card></dashboard-synthesis-card>
    </section>
</template>

<script>
import DashboardCard from "@/views/dashboard/DashboardCard.vue";
import DashboardTrafficCard from "@/views/dashboard/DashboardTrafficCard.vue";
import DashboardSnsCard from "@/views/dashboard/DashboardSnsCard.vue";
import DashboardSynthesisCard from "@/views/dashboard/DashboardSynthesisCard.vue";

export default {
    name: "Dashboard",
    components: {
        DashboardCard,
        DashboardTrafficCard,
        DashboardSnsCard,
        DashboardSynthesisCard,
    },
};
</script>