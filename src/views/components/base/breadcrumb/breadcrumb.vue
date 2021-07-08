<template>
    <div class="breadcrumb-wrap">
        <div class="card">
            <div class="card-header">
                Bootstrap Breadcrumb
                <div class="card-header-actions">
                    <a class="card-header-action" href="#">
                        <small class="text-muted">docs</small>
                    </a>
                </div>
            </div>
            <div class="card-body">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link to="/components">components</router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link to="/components/base">base</router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link to="/components/base/breadcrumb">breadcrumb</router-link>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>

</script>
