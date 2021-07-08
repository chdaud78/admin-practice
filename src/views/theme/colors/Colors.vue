<template>
    <div class="colors">
        <div class="card">
            <div class="card-header">Theme colors</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4" v-for="themeColor in themeColors">
                        <div class="w-75 rounded theme-color" :class="`bg-${themeColor.bg}`" style="padding-top: 75%"></div>
                        <h6 class="mt-2">{{ themeColor.name }}</h6>
                        <div>
                            <span class="text-muted">HEX: </span>
                            <span><strong>{{ themeColor.hex }}</strong></span>
                        </div>
                        <div>
                            <span class="text-muted">RGB: </span>
                            <span><strong>{{ themeColor.rgb }}</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">Grays</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4" v-for="grayColor in grayColors">
                        <div class="w-75 rounded theme-color" :class="`bg-${grayColor.bg}`" style="padding-top: 75%"></div>
                        <h6 class="mt-2">{{ grayColor.name }}</h6>
                        <div>
                            <span class="text-muted">HEX: </span>
                            <span><strong>{{ grayColor.hex }}</strong></span>
                        </div>
                        <div>
                            <span class="text-muted">RGB: </span>
                            <span><strong>{{ grayColor.rgb }}</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Colors",
    data() {
        return {
            themeColors: [
                {
                    bg: "primary",
                    name: "Brand Primary Color",
                    hex: "#20a8d8",
                    rgb: "rgb(32, 168, 216)",
                },
                {
                    bg: "secondary",
                    name: "Brand Secondary Color",
                    hex: "#c8ced3",
                    rgb: "rgb(200, 206, 211)",
                },
                {
                    bg: "success",
                    name: "Brand Success Color",
                    hex: "#4dbd74",
                    rgb: "rgb(77, 189, 116)",
                },
                {
                    bg: "danger",
                    name: "Brand Danger Color",
                    hex: "#f86c6b",
                    rgb: "rgb(248, 108, 107)",
                },
                {
                    bg: "warning",
                    name: "Brand Warning Color",
                    hex: "#ffc107",
                    rgb: "rgb(255, 193, 7)",
                },
                {
                    bg: "info",
                    name: "Brand Info Color",
                    hex: "#63c2de",
                    rgb: "rgb(99, 194, 222)",
                },
                {
                    bg: "light",
                    name: "Brand Light Color",
                    hex: "#f0f3f5",
                    rgb: "rgb(240, 243, 245)",
                },
                {
                    bg: "dark",
                    name: "Brand Dark Color",
                    hex: "#2f353a",
                    rgb: "rgb(47, 53, 58)",
                },
            ],
            grayColors: [
                {
                    bg: "gray-100",
                    name: "Gray 100 Color",
                    hex: "#ebedef",
                    rgb: "rgb(235, 237, 239)",
                },
                {
                    bg: "gray-200",
                    name: "Gray 200 Color",
                    hex: "#d8dbe0",
                    rgb: "rgb(216, 219, 224)",
                },
                {
                    bg: "gray-300",
                    name: "Gray 300 Color",
                    hex: "#c4c9d0",
                    rgb: "rgb(196, 201, 208)",
                },
                {
                    bg: "gray-400",
                    name: "Gray 400 Color",
                    hex: "#b1b7c1",
                    rgb: "rgb(177, 183, 193)",
                },
                {
                    bg: "gray-500",
                    name: "Gray 500 Color",
                    hex: "#9da5b1",
                    rgb: "rgb(157, 165, 177)",
                },
                {
                    bg: "gray-600",
                    name: "Gray 600 Color",
                    hex: "#8a93a2",
                    rgb: "rgb(138, 147, 162)",
                },
                {
                    bg: "gray-700",
                    name: "Gray 700 Color",
                    hex: "#768192",
                    rgb: "rgb(118, 129, 146)",
                },
                {
                    bg: "gray-800",
                    name: "Gray 800 Color",
                    hex: "#636f83",
                    rgb: "rgb(99, 111, 131)",
                },
                {
                    bg: "gray-900",
                    name: "Gray 900 Color",
                    hex: "#636f83",
                    rgb: "rgb(79, 93, 115)",
                },
            ],
        };
    },
};
</script>
