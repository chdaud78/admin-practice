<template>
    <header class="c-header c-header-light px-3">
        <button class="c-header-toggler c-class-toggler mt-2" type="button" data-target="#sidebar" data-class="c-sidebar-show">
            <i class="c-icon c-icon-lg cil-menu"></i>
        </button>
        <!-- Header left -->
        <ul class="c-header-nav d-md-down-none">
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
        <!-- Header Dark mode (pro)-->
        <ul class="c-header-nav mfs-auto">
            <li class="c-header-nav-item">
                <a class="c-header-nav-link" href="#">
                    <i class="c-icon cil-moon"></i>
                </a>
            </li>
        </ul>
        <!-- Header right -->
        <ul class="c-header-nav ml-3">
            <!-- notifications -->
            <li class="c-header-nav-item dropdown mx-2 px-1">
                <a class="c-header-nav-link" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="true" href="#">
                    <i class="c-icon cil-bell"></i>
                    <span class="badge badge-pill badge-danger">5</span>
                </a>
                <!-- notifications dropdown -->
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg pt-0">
                    <span class="dropdown-header bg-light"> <strong>You have 5 notifications</strong></span>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon text-success mr-2 cil-user-plus"></i>
                        New user registered
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon text-danger mr-2 cil-user-unfollow"></i>
                        User deleted
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon text-info mr-2 cil-chart"></i>
                        Sales report is ready
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon text-success mr-2 cil-basket"></i>
                        New client
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon text-warning mr-2 cil-speedometer"></i>
                        Server overloaded
                    </a>
                    <span class="dropdown-header bg-light"> <strong>Server</strong></span>
                    <a href="#" class="dropdown-item d-block">
                        <div class="text-uppercase mb-1">
                            <small><b>CPU USAGE</b></small>
                        </div>
                        <div class="progress progress-xs">
                            <div class="progress-bar bg-info w-25" role="progressbar" aria-valuenow="75"
                                 aria-valuemin="0"
                                 aria-valuemax="100"></div>
                        </div>
                        <small class="text-muted">348 Processes. 1/4 Cores</small>
                    </a>
                    <a href="#" class="dropdown-item d-block">
                        <div class="text-uppercase mb-1">
                            <small><b>MEMORY USAGE</b></small>
                        </div>
                        <div class="progress progress-xs">
                            <div class="progress-bar bg-warning w-75" role="progressbar" aria-valuenow="75"
                                 aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small class="text-muted">11444GB/16384MB</small>
                    </a>
                    <a href="#" class="dropdown-item d-block">
                        <div class="text-uppercase mb-1">
                            <small><b>SSD 1 USAGE</b></small>
                        </div>
                        <div class="progress progress-xs">
                            <div class="progress-bar bg-danger" style="width: 95%" role="progressbar" aria-valuenow="75"
                                 aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small class="text-muted">243GB/256GB</small>
                    </a>
                </div>
            </li>

            <!-- tasks -->
            <li class="c-header-nav-item dropdown mx-2 px-1">
                <a class="c-header-nav-link" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="true" href="#">
                    <i class="c-icon cil-list-rich"></i>
                    <span class="badge badge-pill badge-warning">15</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg pt-0">
                    <div class="dropdown-header bg-light"><strong>You have 5 pending tasks</strong></div>
                    <a href="#" class="dropdown-item d-block">
                        <div class="progress-group mb-0">
                            <div class="progress-group-header mb-1">
                                <small>Upgrade NPM & Bower</small>
                                <div class="ml-auto"><small><b>43%</b></small></div>
                            </div>
                            <div class="progress-group-bars">
                                <div class="progress progress-xs">
                                    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="0"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="dropdown-item d-block">
                        <div class="progress-group mb-0">
                            <div class="progress-group-header mb-1">
                                <small>ReactJS Version</small>
                                <div class="ml-auto"><small><b>25%</b></small></div>
                            </div>
                            <div class="progress-group-bars">
                                <div class="progress progress-xs">
                                    <div class="progress-bar bg-danger w-25" role="progressbar" aria-valuenow="25"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="dropdown-item d-block">
                        <div class="progress-group mb-0">
                            <div class="progress-group-header mb-1">
                                <small>VueJS Version</small>
                                <div class="ml-auto"><small><b>50%</b></small></div>
                            </div>
                            <div class="progress-group-bars">
                                <div class="progress progress-xs">
                                    <div class="progress-bar bg-warning w-50" role="progressbar" aria-valuenow="50"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="dropdown-item d-block">
                        <div class="progress-group mb-0">
                            <div class="progress-group-header mb-1">
                                <small>Add new layouts</small>
                                <div class="ml-auto"><small><b>75%</b></small></div>
                            </div>
                            <div class="progress-group-bars">
                                <div class="progress progress-xs">
                                    <div class="progress-bar bg-info w-75" role="progressbar" aria-valuenow="75"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="dropdown-item d-block">
                        <div class="progress-group mb-0">
                            <div class="progress-group-header mb-1">
                                <small>Angular 8 Version</small>
                                <div class="ml-auto"><small><b>100%</b></small></div>
                            </div>
                            <div class="progress-group-bars">
                                <div class="progress progress-xs">
                                    <div class="progress-bar bg-success w-100" role="progressbar" aria-valuenow="100"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="dropdown-divider my-0"></div>
                    <a href="#" class="dropdown-item"><strong>View all tasks</strong></a>
                </div>
            </li>

            <!-- message -->
            <li class="c-header-nav-item dropdown mx-2 px-1">
                <a class="c-header-nav-link" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="true" href="#">
                    <i class="c-icon cil-envelope-open"></i>
                    <span class="badge badge-pill badge-info">7</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg pt-0">
                    <span class="dropdown-header bg-light"><strong>You have 4 messages</strong></span>
                    <a href="#" class="dropdown-item overflow-hidden">
                        <div class="c-avatar float-left mr-2">
                            <img class="c-avatar-img border-light" src="/admin-practice/images/bee_sad.png" alt="">
                            <span class="c-avatar-status bg-success"></span>
                        </div>
                        <div class="message float-left">
                            <div class="name overflow-hidden">
                                <small class="text-muted float-left">John Doe</small>
                                <small class="text-muted float-right">Just now</small>
                            </div>
                            <div class="text-truncate font-weight-bold">
                                <span class="text-danger">!</span>
                                Important message
                            </div>
                            <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor asd incididunt</div>
                        </div>
                    </a>
                    <a href="#" class="dropdown-item overflow-hidden">
                        <div class="c-avatar float-left mr-2">
                            <img class="c-avatar-img border-light" src="/admin-practice/images/bee_sad.png" alt="">
                            <span class="c-avatar-status bg-warning"></span>
                        </div>
                        <div class="message float-left">
                            <div class="name overflow-hidden">
                                <small class="text-muted float-left">Lee Tea</small>
                                <small class="text-muted float-right">3 minutes ago</small>
                            </div>
                            <div class="text-truncate font-weight-bold">
                                Message Message
                            </div>
                            <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor asd incididunt</div>
                        </div>
                    </a>
                    <a href="#" class="dropdown-item overflow-hidden">
                        <div class="c-avatar float-left mr-2">
                            <img class="c-avatar-img border-light" src="/admin-practice/images/bee_sad.png" alt="">
                            <span class="c-avatar-status bg-warning"></span>
                        </div>
                        <div class="message float-left">
                            <div class="name overflow-hidden">
                                <small class="text-muted float-left">Park Leng</small>
                                <small class="text-muted float-right">5 minutes ago</small>
                            </div>
                            <div class="text-truncate font-weight-bold">
                                Message Message
                            </div>
                            <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor asd incididunt</div>
                        </div>
                    </a>
                    <a href="#" class="dropdown-item overflow-hidden">
                        <div class="c-avatar float-left mr-2">
                            <img class="c-avatar-img border-light" src="/admin-practice/images/bee_sad.png" alt="">
                            <span class="c-avatar-status bg-success"></span>
                        </div>
                        <div class="message float-left">
                            <div class="name overflow-hidden">
                                <small class="text-muted float-left">Kim chi</small>
                                <small class="text-muted float-right">1:52 pm</small>
                            </div>
                            <div class="text-truncate font-weight-bold">
                                Message Message
                            </div>
                            <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor asd incididunt</div>
                        </div>
                    </a>
                    <div class="dropdown-divider my-0"></div>
                    <a href="#" class="dropdown-item"><strong>View all messages</strong></a>
                </div>
            </li>

            <!-- Account -->
            <li class="c-header-nav-item dropdown mx-2">
                <a class="c-header-nav-link" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="true" href="#">
                    <div class="c-avatar border-light">
                        <img class="c-avatar-img" src="/admin-practice/images/bee_sad.png" alt="">
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg pt-0">
                    <!-- Account -->
                    <span class="dropdown-header bg-light"><strong>Account</strong></span>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon cil-bell mr-2"></i>
                        Updates
                        <span class="badge badge-info mfs-auto">42</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon cil-envelope-open mr-2"></i>
                        messages
                        <span class="badge badge-success mfs-auto">42</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon cil-task mr-2"></i>
                        Updates
                        <span class="badge badge-danger mfs-auto">42</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon cil-comment-square mr-2"></i>
                        Updates
                        <span class="badge badge-warning mfs-auto">42</span>
                    </a>
                    <!-- Setting -->
                    <span class="dropdown-header bg-light"><strong>Setting</strong></span>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon cil-user mr-2"></i>
                        Profile
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon cil-settings mr-2"></i>
                        Settings
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon cil-credit-card mr-2"></i>
                        Payments
                        <span class="badge badge-secondary mfs-auto">42</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon cil-file mr-2"></i>
                        Projects
                        <span class="badge badge-primary mfs-auto">42</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon cil-lock-locked mr-2"></i>
                        Lock Account
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="c-icon cil-account-logout mr-2"></i>
                        Logout
                    </a>
                </div>
            </li>

            <!-- Right aside handler -->
            <li class="c-header-nav-item">
                <a class="c-header-nav-link" href="#">
                    <i class="c-icon c-icon-lg cil-apps-settings"></i>
                </a>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'AdminHeader',
};
</script>
