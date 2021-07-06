<template>
    <section class="dashboard">
        <dashboard-card></dashboard-card>
    </section>
</template>

<script>
import DashboardCard from "@/views/dashboard/DashboardCard.vue";
export default {
    name: "Dashboard",
    components: {
        DashboardCard,
    },
};
</script>