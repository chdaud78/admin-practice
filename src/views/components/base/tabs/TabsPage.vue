<template>
    <div class="tabs-page">
        <div class="row">
            <template v-for="tabClass in tabClasses">
                <div class="col-md-6 mb-4">
                    <div class="nav-tabs-boxed" :class="tabClass.class">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#home-1" role="tab" aria-controls="home"
                                   aria-selected="false">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#profile-1" role="tab"
                                   aria-controls="profile" aria-selected="false">
                                    Profile
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#messages-1" role="tab"
                                   aria-controls="messages" aria-selected="true">
                                    Messages
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane" id="home-1" role="tabpanel">
                                1. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </div>
                            <div class="tab-pane" id="profile-1" role="tabpanel">
                                2. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </div>
                            <div class="tab-pane active" id="messages-1" role="tabpanel">
                                3. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt
                                in culpa qui officia deserunt mollit anim id est laborum.
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
    name: "TabsPage",
    data() {
        return {
            tabClasses: [
                {
                    class: "",
                },
                {
                    class: "nav-tabs-boxed-top-right",
                },
                {
                    class: "nav-tabs-boxed-left",
                },
                {
                    class: "nav-tabs-boxed-right",
                }
            ]
        };
    },
}
</script>
