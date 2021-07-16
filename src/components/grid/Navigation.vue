<template>
    <aside class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
        <div class="c-sidebar-brand">
            Admin
        </div>
        <ul class="c-sidebar-nav">
            <!-- Dashboard -->
            <li class="c-sidebar-nav-item">
                <router-link to="/dashboard" class="c-sidebar-nav-link">
                    <i class="c-sidebar-nav-icon cil-speedometer"></i>
                    Dashboard
                    <span class="badge badge-info">New</span>
                </router-link>
            </li>

            <!-- Theme -->
            <li class="c-sidebar-nav-title">
                Theme
            </li>
            <li class="c-sidebar-nav-item">
                <router-link to="/theme/colors" class="c-sidebar-nav-link">
                    <i class="c-sidebar-nav-icon cil-drop"></i>
                    Colors
                </router-link>
            </li>
            <li class="c-sidebar-nav-item">
                <router-link to="/theme/typography" class="c-sidebar-nav-link">
                    <i class="c-sidebar-nav-icon cil-pen"></i>
                    Typography
                </router-link>
            </li>

            <!-- components -->
            <li class="c-sidebar-nav-title">
                COMPONENTS
            </li>
            <li class="c-sidebar-nav-dropdown">
                <a class="c-sidebar-nav-dropdown-toggle" href="#">
                    <i class="c-sidebar-nav-icon cil-puzzle"></i>
                    Base
                </a>
                <ul class="c-sidebar-nav-dropdown-items">
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/base/breadcrumb" class="c-sidebar-nav-link">Breadcrumb</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/base/cards" class="c-sidebar-nav-link">Cards</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/base/carousel" class="c-sidebar-nav-link">Carousel</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/base/collapses"  class="c-sidebar-nav-link">Collapse</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/base/jumbotrons" class="c-sidebar-nav-link">Jumbotron</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/base/list-groups" class="c-sidebar-nav-link">List groups</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/base/navs" class="c-sidebar-nav-link">Navs</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/base/paginations" class="c-sidebar-nav-link">Paginations</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/base/progress" class="c-sidebar-nav-link" href="#">Progress</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/base/scrollspy" class="c-sidebar-nav-link" href="#">Scrollspy</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/base/switches" class="c-sidebar-nav-link" href="#">Switches</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/base/tabs" class="c-sidebar-nav-link" href="#">Tabs</router-link>
                    </li>
                </ul>
            </li>
            <li class="c-sidebar-nav-dropdown">
                <a class="c-sidebar-nav-dropdown-toggle" href="#">
                    <i class="c-sidebar-nav-icon cil-cursor"></i>
                    Button
                </a>
                <ul class="c-sidebar-nav-dropdown-items">
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/buttons/buttons" class="c-sidebar-nav-link">Buttons</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/buttons/brand-buttons" class="c-sidebar-nav-link">Brand Buttons</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/buttons/buttons-group" class="c-sidebar-nav-link">Buttons Group</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/buttons/dropdowns" class="c-sidebar-nav-link">Dropdowns</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            Loading Buttons
                            <span class="badge badge-danger">PRO</span>
                            <span class="badge badge-success">NEW</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="c-sidebar-nav-item">
                <router-link to="/components/charts" class="c-sidebar-nav-link" >
                    <i class="c-sidebar-nav-icon cil-chart-pie"></i>
                    Charts
                </router-link>
            </li>
            <li class="c-sidebar-nav-dropdown">
                <a class="c-sidebar-nav-dropdown-toggle" href="#">
                    <i class="c-sidebar-nav-icon cil-code"></i>
                    Editors
                </a>
                <ul class="c-sidebar-nav-dropdown-items">
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            <i class="c-sidebar-nav-icon cil-notes"></i>
                            Code Editor
                            <span class="badge badge-danger">PRO</span>
                        </a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            <i class="c-sidebar-nav-icon cil-code"></i>
                            Markdown
                            <span class="badge badge-danger">PRO</span>
                        </a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            <i class="c-sidebar-nav-icon cil-notes"></i>
                            Rich Text Editor
                            <span class="badge badge-danger">PRO</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="c-sidebar-nav-dropdown">
                <a class="c-sidebar-nav-dropdown-toggle" href="#">
                    <i class="c-sidebar-nav-icon cil-notes"></i>
                    Forms
                </a>
                <ul class="c-sidebar-nav-dropdown-items">
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/forms" class="c-sidebar-nav-link">Basic Forms</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            Multi Select
                            <span class="badge badge-danger">PRO</span>
                            <span class="badge badge-success">NEW</span>
                        </a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            Advanced
                            <span class="badge badge-danger">PRO</span>
                        </a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            Validation
                            <span class="badge badge-danger">PRO</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="c-sidebar-nav-item">
                <a class="c-sidebar-nav-link" href="#">
                    <i class="c-sidebar-nav-icon cil-map"></i>
                    Google Maps
                    <span class="badge badge-danger">PRO</span>
                </a>
            </li>
            <li class="c-sidebar-nav-dropdown">
                <a class="c-sidebar-nav-dropdown-toggle" href="#">
                    <i class="c-sidebar-nav-icon cil-star"></i>
                    Icons
                </a>
                <ul class="c-sidebar-nav-dropdown-items">
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            CoreUI Icons
                            <span class="badge badge-success">NEW</span>
                        </a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            CoreUI Icons - Brand
                        </a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            CoreUI Icons - Flag
                        </a>
                    </li>
                </ul>
            </li>
            <li class="c-sidebar-nav-dropdown">
                <a class="c-sidebar-nav-dropdown-toggle" href="#">
                    <i class="c-sidebar-nav-icon cil-bell"></i>
                    Notifications
                </a>
                <ul class="c-sidebar-nav-dropdown-items">
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/notifications/alerts" class="c-sidebar-nav-link">Alerts</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/notifications/badge" class="c-sidebar-nav-link">Badge</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/notifications/modals" class="c-sidebar-nav-link">Modals</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            Toastr
                            <span class="badge badge-danger">PRO</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="c-sidebar-nav-dropdown">
                <a class="c-sidebar-nav-dropdown-toggle" href="#">
                    <i class="c-sidebar-nav-icon cil-bolt"></i>
                    Plugins
                </a>
                <ul class="c-sidebar-nav-dropdown-items">
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            <i class="c-sidebar-nav-icon cil-calendar"></i>
                            Calendar
                            <span class="badge badge-danger">PRO</span>
                        </a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            <i class="c-sidebar-nav-icon cil-move"></i>
                            Draggable
                            <span class="badge badge-danger">PRO</span>
                        </a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            <i class="c-sidebar-nav-icon cil-move"></i>
                            Ladda Button
                            <span class="badge badge-danger">PRO</span>
                        </a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            <i class="c-sidebar-nav-icon cil-loop-circular"></i>
                            Spinners
                            <span class="badge badge-danger">PRO</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="c-sidebar-nav-dropdown">
                <a class="c-sidebar-nav-dropdown-toggle" href="#">
                    <i class="c-sidebar-nav-icon cil-columns"></i>
                    Tables
                </a>
                <ul class="c-sidebar-nav-dropdown-items">
                    <li class="c-sidebar-nav-item">
                        <router-link to="/components/tables/tables" class="c-sidebar-nav-link">Standard Tables</router-link>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            DataTables
                            <span class="badge badge-danger">PRO</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="c-sidebar-nav-item">
                <a class="c-sidebar-nav-link" href="#">
                    <i class="c-sidebar-nav-icon cil-calculator"></i>
                    Widgets
                    <span class="badge badge-info">New</span>
                </a>
            </li>

            <!-- EXTRAS -->
            <li class="c-sidebar-nav-title">
                EXTRAS
            </li>
            <li class="c-sidebar-nav-dropdown">
                <a class="c-sidebar-nav-dropdown-toggle" href="#">
                    <i class="c-sidebar-nav-icon cil-star"></i>
                    Pages
                </a>
                <ul class="c-sidebar-nav-dropdown-items">
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            <i class="c-sidebar-nav-icon cil-account-logout"></i>
                            Login
                        </a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            <i class="c-sidebar-nav-icon cil-account-logout"></i>
                            Register
                        </a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            <i class="c-sidebar-nav-icon cil-bug"></i>
                            Error 404
                        </a>
                    </li>
                    <li class="c-sidebar-nav-item">
                        <a class="c-sidebar-nav-link" href="#">
                            <i class="c-sidebar-nav-icon cil-bug"></i>
                            Error 500
                        </a>
                    </li>
                </ul>
            </li>
            <li class="c-sidebar-nav-dropdown">
                <a class="c-sidebar-nav-dropdown-toggle" href="#">
                    <i class="c-sidebar-nav-icon cil-layers"></i>
                    Apps
                </a>
                <ul class="c-sidebar-nav-dropdown-items">
                    <li class="c-sidebar-nav-dropdown">
                        <a class="c-sidebar-nav-dropdown-toggle" href="#">
                            <i class="c-sidebar-nav-icon cil-description"></i>
                            Invoicing
                        </a>
                        <ul class="c-sidebar-nav-dropdown-items">
                            <li class="c-sidebar-nav-item">
                                <a class="c-sidebar-nav-link" href="#">
                                    Invoice
                                    <span class="badge badge-danger">PRO</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="c-sidebar-nav-dropdown">
                        <a class="c-sidebar-nav-dropdown-toggle" href="#">
                            <i class="c-sidebar-nav-icon cil-envelope-open"></i>
                            Email
                        </a>
                        <ul class="c-sidebar-nav-dropdown-items">
                            <li class="c-sidebar-nav-item">
                                <a class="c-sidebar-nav-link" href="#">
                                    Inbox
                                    <span class="badge badge-danger">PRO</span>
                                </a>
                            </li>
                            <li class="c-sidebar-nav-item">
                                <a class="c-sidebar-nav-link" href="#">
                                    Message
                                    <span class="badge badge-danger">PRO</span>
                                </a>
                            </li>
                            <li class="c-sidebar-nav-item">
                                <a class="c-sidebar-nav-link" href="#">
                                    Compose
                                    <span class="badge badge-danger">PRO</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <!-- LABELS -->
            <li class="c-sidebar-nav-title">
                LABELS
            </li>
            <li class="c-sidebar-nav-item">
                <a class="c-sidebar-nav-label" href="#">
                    <i class="c-sidebar-nav-icon text-danger cil-bookmark"></i>
                    Label danger
                </a>
            </li>
            <li class="c-sidebar-nav-item">
                <a class="c-sidebar-nav-label" href="#">
                    <i class="c-sidebar-nav-icon text-info cil-bookmark"></i>
                    Label info
                </a>
            </li>
            <li class="c-sidebar-nav-item">
                <a class="c-sidebar-nav-label" href="#">
                    <i class="c-sidebar-nav-icon text-warning cil-bookmark"></i>
                    Label warning
                </a>
            </li>

            <!-- SYSTEM UTILIZATION -->
            <li class="c-sidebar-nav-title">
                SYSTEM UTILIZATION
            </li>
            <li class="c-sidebar-nav-item px-3 c-d-minimized-none">
                <div class="text-uppercase mb-1">
                    <small><b>CPU USAGE</b></small>
                </div>
                <div class="progress progress-xs">
                    <div class="progress-bar bg-info w-25" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>
                <small class="text-muted">348 Processes. 1/4 Cores</small>
            </li>
            <li class="c-sidebar-nav-item px-3 c-d-minimized-none">
                <div class="text-uppercase mb-1">
                    <small><b>MEMORY USAGE</b></small>
                </div>
                <div class="progress progress-xs">
                    <div class="progress-bar bg-warning w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>
                <small class="text-muted">11444GB/16384MB</small>

            </li>
            <li class="c-sidebar-nav-item px-3 mb-3 c-d-minimized-none">
                <div class="text-uppercase mb-1">
                    <small><b>SSD 1 USAGE</b></small>
                </div>
                <div class="progress progress-xs">
                    <div class="progress-bar bg-danger" style="width: 95%" role="progressbar" aria-valuenow="75"
                         aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <small class="text-muted">243GB/256GB</small>
            </li>
        </ul>
        <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-minimized"></button>
    </aside>
</template>

<script>
export default {
    name: "AdminNavigation",
}
</script>
