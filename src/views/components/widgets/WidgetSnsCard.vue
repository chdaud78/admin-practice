<template>
    <template v-for="card in cards">
        <div class="col-sm-6 col-lg-4">
            <div class="card">
                <div class="card-header text-center p-0 position-relative" :class="card.background">
                    <i class="c-icon c-icon-3xl my-4 text-white" :class="card.icon"></i>
                </div>
                <div class="card-body row text-center">
                    <div class="col">
                        <div class="text-value-xl">{{ card.number }}</div>
                        <div class="text-muted text-uppercase">{{ card.help_text }}</div>
                    </div>
                    <div class="c-vr"></div>
                    <div class="col">
                        <div class="text-value-xl">{{ card.number_2 }}</div>
                        <div class="text-muted text-uppercase">{{ card.help_text_2 }}</div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>

<script>
export default {
    name: "WidgetSnsCard",
    data() {
        return {
            cards: [
                {
                    background: "bg-facebook",
                    icon: "cib-facebook-f",
                    number: "89K",
                    help_text: "Friends",
                    number_2: "459",
                    help_text_2: "Feeds",
                },
                {
                    background: "bg-twitter",
                    icon: "cib-twitter",
                    number: "973K",
                    help_text: "Followers",
                    number_2: "1.792",
                    help_text_2: "tweets",
                },
                {
                    background: "bg-linkedin",
                    icon: "cib-linkedin",
                    number: "500+",
                    help_text: "Contacts",
                    number_2: "292",
                    help_text_2: "Feeds",
                }
            ]
        };
    },
}
</script>
