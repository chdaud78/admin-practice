<template>
    <div class="dashboard-synthesis-card">
        <div class="card">
            <div class="card-header">Traffic & Sales</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm">
                        <div class="row">
                            <div class="col-sm">
                                <div class="c-callout c-callout-info">
                                    <div class="text-muted">New Clients</div>
                                    <h5>9,123</h5>
                                </div>
                            </div>
                            <div class="col-sm">
                                <div class="c-callout c-callout-danger">
                                    <div class="text-muted">Recuring Clients</div>
                                    <h5>22,643</h5>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-0">
                        <template v-for="progress in progresses">
                            <div class="progress-group mb-4">
                                <div class="progress-group-prepend">
                                    <span class="progress-group-text">{{ progress.title }}</span>
                                </div>
                                <div class="progress-group-bars">
                                    <div class="progress progress-xs">
                                        <div class="progress-bar bg-info" role="progressbar"
                                             :style="`width: ${progress.bar1}%`"
                                             :aria-valuenow="progress.bar1" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar bg-danger" role="progressbar"
                                             :style="`width: ${progress.bar2}%`"
                                             :aria-valuenow="progress.bar2" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>

                    <div class="col-sm">
                        <div class="row">
                            <div class="col-sm">
                                <div class="c-callout c-callout-warning">
                                    <div class="text-muted">pageViews</div>
                                    <h5>78,623</h5>
                                </div>
                            </div>
                            <div class="col-sm">
                                <div class="c-callout c-callout-success">
                                    <div class="text-muted">Organic</div>
                                    <h5>49,123</h5>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-0">
                        <div class="progress-group">
                            <div class="progress-group-header">
                                <i class="cil-user progress-group-icon"></i>
                                <div>Male</div>
                                <div class="ml-auto font-weight-bold">43%</div>
                            </div>
                            <div class="progress-group-bars">
                                <div class="progress progress-xs">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 43%"
                                         aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="progress-group mb-5">
                            <div class="progress-group-header">
                                <i class="cil-user-female progress-group-icon"></i>
                                <div>Female</div>
                                <div class="ml-auto font-weight-bold">37%</div>
                            </div>
                            <div class="progress-group-bars">
                                <div class="progress progress-xs">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 37%"
                                         aria-valuenow="37" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <template v-for="organic in organics">
                            <div class="progress-group">
                                <div class="progress-group-header align-items-end">
                                    <i class="progress-group-icon" :class="organic.icon"></i>
                                    <div>{{ organic.name }}</div>
                                    <div class="ml-auto font-weight-bold mr-2">{{ organic.number }}</div>
                                    <div class="text-muted small">({{ organic.rate }}%)</div>
                                </div>
                                <div class="progress-group-bars">
                                    <div class="progress progress-xs">
                                        <div class="progress-bar bg-success" role="progressbar"
                                             :style="`width: ${organic.rate}%`" :aria-valuenow="organic.rate"
                                             aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

                <table class="table table-responsive-sm table-hover table-outline mb-0">
                    <thead class="thead-light">
                    <tr>
                        <th class="text-center">
                            <i class="c-icon cil-people"></i>
                        </th>
                        <th>Users</th>
                        <th class="text-center">Country</th>
                        <th> Usage</th>
                        <th class="text-center">Payment Method</th>
                        <th>Activity</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="userStatus in userStatuses">
                        <td class="text-center">
                                <span class="c-avatar border-light">
                                    <img :src="userStatus.images" alt="profile" class="c-avatar-img">
                                </span>
                        </td>
                        <td>
                            <div>{{ userStatus.name }}</div>
                            <div class="small text-muted">
                                <span>{{ userStatus.status }}</span> | {{ userStatus.registered_at }}
                            </div>
                        </td>
                        <td class="text-center">
                            <i class="c-icon c-icon-xl" :class="`cif-${userStatus.country}`"></i>
                        </td>
                        <td>
                            <div class="overflow-hidden">
                                <div class="float-left">
                                    <strong>
                                        {{ userStatus.usage_rate }}%
                                    </strong>
                                </div>
                                <div class="float-right">
                                    <small class="text-muted">
                                        {{ userStatus.usage_date }}
                                    </small>
                                </div>
                            </div>
                            <div class="progress progress-xs mt-2">
                                <div class="progress-bar" :class="`bg-gradient-${userStatus.usage_status}`"
                                     role="progressbar" :style="`width: ${userStatus.usage_rate}%`"
                                     :aria-valuenow="userStatus.usage_rate" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </td>
                        <td class="text-center">
                            <i class="c-icon c-icon-xl" :class="`cib-${userStatus.payment_method}`"></i>
                        </td>
                        <td>
                            <div class="small text-muted">Last login</div>
                            <strong>{{ userStatus.activity }}</strong>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashboardSynthesisCard",
    data() {
        return {
            progresses: [
                {
                    title: "Monday",
                    bar1: 34,
                    bar2: 78,
                },
                {
                    title: "Tuesday",
                    bar1: 66,
                    bar2: 92,
                },
                {
                    title: "Wednesday",
                    bar1: 15,
                    bar2: 65,
                },
                {
                    title: "Tuesday",
                    bar1: 50,
                    bar2: 80,
                },
                {
                    title: "Friday",
                    bar1: 22,
                    bar2: 66,
                },
                {
                    title: "Saturday",
                    bar1: 45,
                    bar2: 77,
                },
                {
                    title: "Sunday",
                    bar1: 6,
                    bar2: 69,
                },
            ],
            organics: [
                {
                    icon: "cib-google",
                    name: "Organic Search",
                    number: "191.235",
                    rate: 56,
                },
                {
                    icon: "cib-facebook-f",
                    name: "Facebook",
                    number: "51.223",
                    rate: 15,
                },
                {
                    icon: "cib-twitter",
                    name: "Twitter",
                    number: "97.564",
                    rate: 11,
                },
                {
                    icon: "cib-linkedin",
                    name: "LinkedIn",
                    number: "27.319",
                    rate: 8,
                },
            ],
            userStatuses: [
                {
                    images: "/images/bee_sad.png",
                    connect: "success",
                    name: "Yiorgos Avraamu",
                    status: "New",
                    registered_at: "Jan 1,2015",
                    country: "us",
                    usage_rate: 50,
                    usage_status: "success",
                    usage_date: "Jun 11, 2015 - Jul 10, 2015",
                    payment_method: "cc-apple-pay",
                    activity: "10 sec ago",
                },
                {
                    images: "/images/bee_sad.png",
                    connect: "danger",
                    name: "Avram Tarasios",
                    status: "Recuring",
                    registered_at: "Jan 15,2015",
                    country: "ar",
                    usage_rate: 10,
                    usage_status: "info",
                    usage_date: "Jun 11, 2015 - Jul 10, 2015",
                    payment_method: "cc-visa",
                    activity: "5 minutes ago",
                },
                {
                    images: "/images/bee_sad.png",
                    connect: "warning",
                    name: "Quintin Ed",
                    status: "New",
                    registered_at: "July 30,2015",
                    country: "bo",
                    usage_rate: 74,
                    usage_status: "warning",
                    usage_date: "Jun 11, 2015 - Jul 10, 2015",
                    payment_method: "cc-stripe",
                    activity: "1hour ago",
                },
                {
                    images: "/images/bee_sad.png",
                    connect: "",
                    name: "Eneas Kwadwo",
                    status: "New",
                    registered_at: "May 1,2015",
                    country: "br",
                    usage_rate: 50,
                    usage_status: "danger",
                    usage_date: "Jun 11, 2015 - Jul 10, 2015",
                    payment_method: "cc-paypal",
                    activity: "Last month",
                },
                {
                    images: "/images/bee_sad.png",
                    connect: "success",
                    name: "Agapetus Tadeas",
                    status: "New",
                    registered_at: "Jan 14,2015",
                    country: "uy",
                    usage_rate: 22,
                    usage_status: "info",
                    usage_date: "Jun 11, 2015 - Jul 10, 2015",
                    payment_method: "cc-apple-pay",
                    activity: "Last week",
                },
                {
                    images: "/images/bee_sad.png",
                    connect: "danger",
                    name: "Yiorgos Avraamu",
                    status: "New",
                    registered_at: "Jan 1,2015",
                    country: "bs",
                    usage_rate: 50,
                    usage_status: "success",
                    usage_date: "Jun 11, 2015 - Jul 10, 2015",
                    payment_method: "cc-amex",
                    activity: "Yesterday",
                }
            ]
        };
    }
};
</script>
