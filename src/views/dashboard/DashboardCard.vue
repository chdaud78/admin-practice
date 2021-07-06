<template>
    <div class="dashboard-card">
        <div class="row">
            <template v-for="card in cards">
                <div class="col-sm">
                    <div class="card text-white" :class="`bg-gradient-${card.class}`">
                        <div class="card-body">
                            <div>
                                <div class="card-title text-value-lg">{{ card.title }}</div>
                                <div class="card-subtitle" v-html="card.subtitle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashboardCard",
    data() {
        return {
            cards: [
                {
                    class: "primary",
                    title: "9.823",
                    subtitle: "Members online",
                },
                {
                    class: "info",
                    title: "9.823",
                    subtitle: "Members online",
                },
                {
                    class: "warning",
                    title: "9.823",
                    subtitle: "Members online",
                },
                {
                    class: "danger",
                    title: "9.823",
                    subtitle: "Members online",
                },
            ]
        };
    },
}
</script>