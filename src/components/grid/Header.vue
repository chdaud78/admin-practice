<template>
    <header class="c-header c-header-light px-3">
        <button class="c-header-toggler" type="button">
            <i class="cil-menu"></i>
        </button>
        <ul class="c-header-nav">
            <li class="c-header-nav-item active px-3">
                <a class="c-header-nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
            </li>
            <li class="c-header-nav-item px-3">
                <a class="c-header-nav-link" href="#">Users</a>
            </li>
            <li class="c-header-nav-item px-3">
                <a class="c-header-nav-link" href="#">Settings</a>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'AdminHeader',
};
</script>
