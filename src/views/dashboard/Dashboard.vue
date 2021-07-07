<template>
    <section class="dashboard">
        <dashboard-card></dashboard-card>
        <dashboard-traffic-card></dashboard-traffic-card>
    </section>
</template>

<script>
import DashboardCard from "@/views/dashboard/DashboardCard.vue";
import DashboardTrafficCard from "@/views/dashboard/DashboardTrafficCard.vue";
export default {
    name: "Dashboard",
    components: {
        DashboardCard,
        DashboardTrafficCard,
    },
};
</script>