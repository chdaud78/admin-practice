<template>
    <div class="buttons-page">
        <template v-for="buttonKind in buttonKinds">
            <div class="card">
                <div class="card-header">{{ buttonKind.title }}</div>
                <div class="card-body">
                    <template v-for="buttonState in buttonStates">
                        <h6>{{ buttonState.title }}</h6>
                        <div class="btn-zone mb-4">
                            <div class="row">
                                <template v-for="buttonColor in buttonColors">
                                    <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                        <button class="btn btn-block"
                                                :class="[`${buttonKind.shape}-${buttonColor.color}`, buttonKind.class ,buttonState.state]">
                                            {{ buttonColor.color }}
                                        </button>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </template>
        <div class="card">
            <div class="card-header">Sizes</div>
            <div class="card-body">
                <h6>Small add</h6>
                <div class="row mb-4">
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-primary btn-sm">Standard Butttons</button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-outline-secondary btn-sm">Outline Butttons</button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-ghost-success btn-sm">Ghost Butttons</button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-warning btn-square btn-sm">square Butttons</button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-warning btn-pill btn-sm">Pill Butttons</button>
                    </div>
                </div>

                <h6>Normal add</h6>
                <div class="row mb-4">
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-primary">Standard Butttons</button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-outline-secondary">Outline Butttons</button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-ghost-success">Ghost Butttons</button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-warning btn-square">square Butttons</button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-warning btn-pill">Pill Butttons</button>
                    </div>
                </div>

                <h6>Small add</h6>
                <div class="row">
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-primary btn-lg">Standard Butttons</button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-outline-secondary btn-lg">Outline Butttons</button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-ghost-success btn-lg">Ghost Butttons</button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-warning btn-square btn-lg">square Butttons</button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-warning btn-pill btn-lg">Pill Butttons</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">With Icons</div>
            <div class="card-body">
                <div class="row mb-4">
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-primary">
                            <i class="c-icon cil-lightbulb"></i>
                            Standard Butttons
                        </button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-outline-secondary">
                            <i class="c-icon cil-lightbulb"></i>
                            Outline Butttons
                        </button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-ghost-success">
                            <i class="c-icon cil-lightbulb"></i>
                            Ghost Butttons
                        </button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-warning btn-square">
                            <i class="c-icon cil-lightbulb"></i>
                            square Butttons
                        </button>
                    </div>
                    <div class="col-6 col-sm-4 col-md mb-3 mb-xl-0 text-center">
                        <button class="btn bnt-block btn-warning btn-pill">
                            <i class="c-icon cil-lightbulb"></i>
                            Pill Butttons
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Block Level Buttons</div>
                    <div class="card-body">
                        <button class="btn btn-block btn-dark">Block level button</button>
                        <button class="btn btn-block btn-primary">Block level button</button>
                        <button class="btn btn-block btn-success">Block level button</button>
                        <button class="btn btn-block btn-info">Block level button</button>
                        <button class="btn btn-block btn-warning">Block level button</button>
                        <button class="btn btn-block btn-danger">Block level button</button>
                        <button class="btn btn-block btn-link">Block level button</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Block Level Buttons</div>
                    <div class="card-body">
                        <button class="btn btn-block btn-outline-dark">Block level button</button>
                        <button class="btn btn-block btn-outline-primary">Block level button</button>
                        <button class="btn btn-block btn-outline-success">Block level button</button>
                        <button class="btn btn-block btn-outline-info">Block level button</button>
                        <button class="btn btn-block btn-outline-warning">Block level button</button>
                        <button class="btn btn-block btn-outline-danger">Block level button</button>
                        <button class="btn btn-block btn-outline-link">Block level button</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ButtonsPage",
    data() {
        return {
            buttonKinds: [
                {
                    title: "Standard Buttons",
                    shape: "btn",
                },
                {
                    title: "Outline Buttons",
                    shape: "btn-outline",
                },
                {
                    title: "Ghost Buttons",
                    shape: "btn-ghost",
                },
                {
                    title: "Square Buttons",
                    shape: "btn",
                    class: "btn-square",
                },
                {
                    title: "Pill Buttons",
                    shape: "btn",
                    class: "btn-pill",
                },
            ],
            buttonStates: [
                {
                    title: "Normal",
                    state: "",
                },
                {
                    title: "Active State",
                    state: "active",
                },
                {
                    title: "Disabled",
                    state: "disabled",
                }
            ],
            buttonColors: [
                {
                    color: "primary",
                },
                {
                    color: "secondary",
                },
                {
                    color: "success",
                },
                {
                    color: "warning",
                },
                {
                    color: "danger",
                },
                {
                    color: "info",
                },
                {
                    color: "light",
                },
                {
                    color: "dark",
                },
                {
                    color: "link",
                },
            ],
        };
    },
}
</script>
