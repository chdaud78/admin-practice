<template>
    <div class="switches-page">
        <div class="row">
            <template v-for="switchButton in switchButtons">
                <div :class="switchButton.col">
                    <div class="card">
                        <div class="card-header">
                            {{ switchButton.title }}
                        </div>
                        <div class="card-body">
                            <label class="c-switch mr-3" :class="[switchButton.classes, `${switchButton.shape}-primary`]">
                                <input type="checkbox" class="c-switch-input" checked>
                                <span class="c-switch-slider" :data-checked="switchButton.checkedText" :data-unchecked="switchButton.uncheckedText"></span>
                            </label>
                            <label class="c-switch mr-3" :class="[switchButton.classes, `${switchButton.shape}-secondary`]">
                                <input type="checkbox" class="c-switch-input" checked>
                                <span class="c-switch-slider" :data-checked="switchButton.checkedText" :data-unchecked="switchButton.uncheckedText"></span>
                            </label>
                            <label class="c-switch mr-3" :class="[switchButton.classes, `${switchButton.shape}-success`]">
                                <input type="checkbox" class="c-switch-input" checked>
                                <span class="c-switch-slider" :data-checked="switchButton.checkedText" :data-unchecked="switchButton.uncheckedText"></span>
                            </label>
                            <label class="c-switch mr-3" :class="[switchButton.classes, `${switchButton.shape}-warning`]">
                                <input type="checkbox" class="c-switch-input" checked>
                                <span class="c-switch-slider" :data-checked="switchButton.checkedText" :data-unchecked="switchButton.uncheckedText"></span>
                            </label>
                            <label class="c-switch mr-3" :class="[switchButton.classes, `${switchButton.shape}-info`]">
                                <input type="checkbox" class="c-switch-input" checked>
                                <span class="c-switch-slider" :data-checked="switchButton.checkedText" :data-unchecked="switchButton.uncheckedText"></span>
                            </label>
                            <label class="c-switch mr-3" :class="[switchButton.classes, `${switchButton.shape}-danger`]">
                                <input type="checkbox" class="c-switch-input" checked>
                                <span class="c-switch-slider" :data-checked="switchButton.checkedText" :data-unchecked="switchButton.uncheckedText"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </template>
            <div class="col-12">
                <div class="card">
                    <div class="card-header">Sizes</div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Size</th>
                                    <th>Example</th>
                                    <th>Css class</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Large</td>
                                    <td>
                                        <label class="c-switch c-switch-primary c-switch-pill c-switch-lg mr-3">
                                            <input type="checkbox" class="c-switch-input" checked>
                                            <span class="c-switch-slider"></span>
                                        </label>
                                    </td>
                                    <td>
                                        Add <code>.c-switch-lg</code>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Normal</td>
                                    <td>
                                        <label class="c-switch c-switch-primary c-switch-pill mr-3">
                                            <input type="checkbox" class="c-switch-input" checked>
                                            <span class="c-switch-slider"></span>
                                        </label>
                                    </td>
                                    <td>
                                        -
                                    </td>
                                </tr>
                                <tr>
                                    <td>Large</td>
                                    <td>
                                        <label class="c-switch c-switch-primary c-switch-pill c-switch-sm mr-3">
                                            <input type="checkbox" class="c-switch-input" checked>
                                            <span class="c-switch-slider"></span>
                                        </label>
                                    </td>
                                    <td>
                                        Add <code>.c-switch-sm</code>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SwitchPage",
    data() {
        return {
            switchButtons: [
                {
                    title: "Switch default",
                    shape: "c-switch",
                    classes: "",
                    col: "col-md-6"
                },
                {
                    title: "Switch default - pills",
                    shape: "c-switch",
                    classes: "c-switch-pill",
                    col: "col-md-6"
                },

                {
                    title: "Switch outline",
                    shape: "c-switch-outline",
                    classes: "",
                    col: "col-md-6"
                },
                {
                    title: "Switch outline - pills",
                    shape: "c-switch-outline",
                    classes: "c-switch-pill",
                    col: "col-md-6"
                },

                {
                    title: "Switch opposite",
                    shape: "c-switch-opposite",
                    classes: "",
                    col: "col-md-6"
                },
                {
                    title: "Switch opposite - pills",
                    shape: "c-switch-opposite",
                    classes: "c-switch-pill",
                    col: "col-md-6"
                },

                {
                    col: "col-md-6",
                    title: "Switch with text",
                    shape: "c-switch",
                    classes: "c-switch-label",
                    checkedText: "ON",
                    uncheckedText: "OFF",
                },
                {
                    col: "col-md-6",
                    title: "Switch with text - pills",
                    shape: "c-switch",
                    classes: "c-switch-pill c-switch-label",
                    checkedText: "ON",
                    uncheckedText: "OFF",
                },

                {
                    col: "col-md-6",
                    title: "Switch with text outline",
                    shape: "c-switch-outline",
                    classes: "c-switch-label",
                    checkedText: "ON",
                    uncheckedText: "OFF",
                },
                {
                    col: "col-md-6",
                    title: "Switch with text outline - pills",
                    shape: "c-switch-outline",
                    classes: "c-switch-pill c-switch-label",
                    checkedText: "ON",
                    uncheckedText: "OFF",
                },

                {
                    col: "col-md-6",
                    title: "Switch with text opposite",
                    shape: "c-switch-opposite",
                    classes: "c-switch-label",
                    checkedText: "ON",
                    uncheckedText: "OFF",
                },
                {
                    col: "col-md-6",
                    title: "Switch with text opposite - pills",
                    shape: "c-switch-opposite",
                    classes: "c-switch-pill c-switch-label",
                    checkedText: "ON",
                    uncheckedText: "OFF",
                },

                {
                    col: "col-md-6",
                    title: "Switch with icon",
                    shape: "c-switch",
                    classes: "c-switch-label",
                    checkedText: "✓",
                    uncheckedText: "✕",
                },
                {
                    col: "col-md-6",
                    title: "Switch with icon - pills",
                    shape: "c-switch",
                    classes: "c-switch-pill c-switch-label",
                    checkedText: "✓",
                    uncheckedText: "✕",
                },

                {
                    col: "col-md-6",
                    title: "Switch with icon outline",
                    shape: "c-switch-outline",
                    classes: "c-switch-label",
                    checkedText: "✓",
                    uncheckedText: "✕",
                },
                {
                    col: "col-md-6",
                    title: "Switch with icon outline - pills",
                    shape: "c-switch-outline",
                    classes: "c-switch-pill c-switch-label",
                    checkedText: "✓",
                    uncheckedText: "✕",
                },

                {
                    col: "col-md-6",
                    title: "Switch with icon opposite",
                    shape: "c-switch-opposite",
                    classes: "c-switch-label",
                    checkedText: "✓",
                    uncheckedText: "✕",
                },
                {
                    col: "col-md-6",
                    title: "Switch with icon opposite - pills",
                    shape: "c-switch-opposite",
                    classes: "c-switch-pill c-switch-label",
                    checkedText: "✓",
                    uncheckedText: "✕",
                },

                {
                    col: "col-12",
                    title: "3d Switch",
                    shape: "c-switch",
                    classes: "c-switch-3d",
                },
            ],
        };
    }
}
</script>
