<template>
    <div class="c-app">
        <admin-navigation></admin-navigation>
        <div class="c-wrapper">
            <admin-header></admin-header>
            <div class="c-body">
                <div class="main"></div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminHeader from "./components/grid/Header.vue";
import AdminNavigation from "./components/grid/Navigation.vue";

export default {
    name: 'Admin',
    components: {
        AdminHeader,
        AdminNavigation,
    },
};
</script>

<style lang="scss">
@import "~@coreui/coreui/scss/coreui";
@import '~@coreui/icons/css/free.min.css';
</style>
