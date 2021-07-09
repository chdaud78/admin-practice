<template>
    <div class="cards">
        <div class="card-columns">
            <div class="card">
                <div class="card-header">Card title</div>
                <div class="card-body">{{ content }}</div>
            </div>
            <div class="card">
                <div class="card-body">{{ content }}</div>
                <div class="card-footer">Card footer</div>
            </div>
            <div class="card">
                <div class="card-header">
                    Card with label
                    <div class="card-header-actions">
                        <div class="card-header-action">
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="card-body">{{ content }}</div>
            </div>
            <div class="card">
                <div class="card-header clearfix">
                    <p class="mb-0 pt-1 float-left">
                        Card with switch
                    </p>
                    <label class="c-switch c-switch-primary float-right mb-0">
                        <input type="checkbox" class="c-switch-input" @change="switchHandler($event)"
                               v-model="switchData">
                        <span class="c-switch-slider"></span>
                    </label>
                </div>
                <div class="card-body">{{ content }}</div>
            </div>
            <div class="card">
                <div class="card-header clearfix">
                    <p class="mb-0 pt-1 float-left">
                        Card with label
                    </p>
                    <span class="badge badge-success float-right">success</span>
                </div>
                <div class="card-body">{{ content }}</div>
            </div>
            <div class="card border-primary">
                <div class="card-header">
                    Card outline
                </div>
                <div class="card-body">{{ content }}</div>
            </div>
            <div class="card card-accent-primary">
                <div class="card-header">
                    Card with accent
                </div>
                <div class="card-body text-primary">{{ content }}</div>
            </div>
            <div class="card">
                <div class="card-header">
                    Card actions
                    <div class="card-header-actions">
                        <a class="card-header-action btn-setting" href="#"><i class="c-icon cil-settings"></i></a>
                        <a class="card-header-action btn-minimized" href="#"><i
                            class="c-icon cil-arrow-circle-top"></i></a>
                        <a class="card-header-action btn-close" href="#"><i class="c-icon cil-x-circle"></i></a>
                    </div>
                </div>
                <div class="card-body">{{ content }}</div>
            </div>
            <div class="card bg-success text-white">
                <div class="card-header">
                    Card outline
                </div>
                <div class="card-body">{{ content }}</div>
            </div>
            <div class="card">
                <div class="card-header text-center">
                    <img src="/admin-practice/images/bee_sad.png" alt="" class="w-100">
                </div>
                <div class="card-body">{{ content }}</div>
            </div>
            <div class="card">
                <div class="card-header">Featured</div>
                <div class="list-group list-group-flush">
                    <div class="list-group-item">Cras justo odio</div>
                    <div class="list-group-item">Dapibus ac facilisis</div>
                    <div class="list-group-item">Vestibulum at eros</div>
                </div>
            </div>
            <div class="card">
                <div class="card-header text-center">
                    <img src="/admin-practice/images/bee_sad.png" alt="" class="w-100">
                </div>
                <div class="card-body">{{ content }}</div>
                <div class="list-group list-group-flush">
                    <div class="list-group-item">Cras justo odio</div>
                    <div class="list-group-item">Dapibus ac facilisis</div>
                    <div class="list-group-item">Vestibulum at eros</div>
                </div>
                <div class="card-body">
                    <a href="" class="card-link">Card link</a>
                    <a href="" class="card-link">Another link</a>
                </div>
            </div>
            <div class="card">
                <div class="card-header border-bottom-0">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a href="#" class="nav-link active">Active</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Link</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="card-title">Name</div>
                    {{ content }}
                </div>
            </div>
            <div class="card border-success">
                <div class="card-header border-success">Card Mixins</div>
                <div class="card-body">{{ content }}</div>
                <div class="card-footer border-success">Card footer</div>
            </div>
            <div class="card">
                <div class="row no-gutters">
                    <div class="col-md-4 border-right">
                        <img src="/admin-practice/images/bee_sad.png" alt="" class="mt-4" style="width: 100%;">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="card-title">Card title</div>
                            <p class="card-text">{{ content }}</p>
                            <p class="card-text">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-primary text-white">
                <div class="card-body">{{ content }}</div>
            </div>
            <div class="card">
                <div class="card-header bg-facebook content-center p-3">
                    <i class="c-icon c-icon-3xl cib-facebook-f text-white"></i>
                </div>
                <div class="card-body row text-center">
                    <div class="col">
                        <div class="text-value-xl">89K</div>
                        <div class="text-uppercase text-muted small">FRIENDS</div>
                    </div>
                    <div class="vr"></div>
                    <div class="col">
                        <div class="text-value-xl">496</div>
                        <div class="text-uppercase text-muted small">FEEDS</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cards",
    data() {
        return {
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, " +
                "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna " +
                "aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud " +
                "exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n",
            switchData: false,
        };
    },
    methods: {
        switchHandler(event) {
            if (this.switchData) {
                event.target.closest('.card').classList.add('bg-primary', 'text-white');
            } else {
                event.target.closest('.card').classList.remove('bg-primary', 'text-white');
            }
        }
    }
}
</script>