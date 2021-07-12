<template>
    <div class="list-groups">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header">
                        List group
                        <small class="text-muted">
                            disabled items
                        </small>
                    </div>
                    <div class="card-body">
                        <div class="list-group">
                            <div class="list-group-item disabled">Cras justo odio</div>
                            <div class="list-group-item">Dapibus ac facilisis in</div>
                            <div class="list-group-item">Morbi leo risus</div>
                            <div class="list-group-item disabled">Porta ac consectetur ac</div>
                            <div class="list-group-item">Vestibulum at eros</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header">
                        List group
                        <small class="text-muted">
                            disabled items
                        </small>
                    </div>
                    <div class="card-body">
                        <div class="list-group">
                            <div class="list-group-item active">Cras justo odio</div>
                            <div class="list-group-item">Dapibus ac facilisis in</div>
                            <div class="list-group-item">Morbi leo risus</div>
                            <div class="list-group-item disabled">Porta ac consectetur ac</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header">
                        List group
                        <small class="text-muted">
                            buttons
                        </small>
                    </div>
                    <div class="card-body">
                        <div class="list-group">
                            <button class="list-group-item list-group-item-action active">button item</button>
                            <button class="list-group-item list-group-item-action">Button</button>
                            <button class="list-group-item list-group-item-action">This is button</button>
                            <button class="list-group-item list-group-item-action" disabled>Disabled button</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header">
                        List group
                        <small class="text-muted">
                            with badge
                        </small>
                    </div>
                    <div class="card-body">
                        <div class="list-group">
                            <div class="list-group-item d-flex justify-content-between align-items-center">
                                ras justo odio
                                <span class="badge badge-primary badge-pill">14</span>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center">
                                BMorbi leo risus
                                <span class="badge badge-primary badge-pill">2</span>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center">
                                a ac consectetur ac
                                <span class="badge badge-primary badge-pill">1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header">
                        List group
                        <small class="text-muted">
                            colors
                        </small>
                    </div>
                    <div class="card-body">
                        <div class="list-group">
                            <div class="list-group-item">Default</div>
                            <div class="list-group-item list-group-item-primary">Primary</div>
                            <div class="list-group-item list-group-item-secondary">Secondary</div>
                            <div class="list-group-item list-group-item-success">Success</div>
                            <div class="list-group-item list-group-item-danger">Danger</div>
                            <div class="list-group-item list-group-item-warning">Warning</div>
                            <div class="list-group-item list-group-item-info">Info</div>
                            <div class="list-group-item list-group-item-light">Light</div>
                            <div class="list-group-item list-group-item-dark">Dark</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header">
                        List group
                        <small class="text-muted">
                            colors active accent
                        </small>
                    </div>
                    <div class="card-body">
                        <div class="list-group list-group-accent">
                            <div class="list-group-item">Default</div>
                            <div class="list-group-item list-group-item-primary list-group-item-accent-primary">
                                Primary
                            </div>
                            <div class="list-group-item list-group-item-accent-secondary list-group-item-secondary">
                                Secondary
                            </div>
                            <div class="list-group-item list-group-item-success list-group-item-accent-success">
                                Success
                            </div>
                            <div class="list-group-item list-group-item-danger list-group-item-accent-danger">Danger
                            </div>
                            <div class="list-group-item list-group-item-warning list-group-item-accent-warning">
                                Warning
                            </div>
                            <div class="list-group-item list-group-item-info list-group-item-accent-info">Info</div>
                            <div class="list-group-item list-group-item-light list-group-item-accent-light">Light</div>
                            <div class="list-group-item list-group-item-dark list-group-item-accent-dark">Dark</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <div class="card-header">
                        List group
                        <small class="text-muted">
                            inside cards
                        </small>
                    </div>
                    <div class="card-body">
                        <div class="card-deck">
                            <div class="card">
                                <div class="card-header">Card with list group</div>
                                <div class="card-body">
                                    <div class="list-group mb-2">
                                        <div class="list-group-item">
                                            Cars justo odio
                                        </div>
                                        <div class="list-group-item">
                                            Dapibus ac facilisis in
                                        </div>
                                        <div class="list-group-item">
                                            Morbi leo risus
                                        </div>
                                    </div>
                                    <div class="card-text">
                                        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
                                        tempor.
                                        Laborum consequat non elit enim exercitation cillum aliqua consequat id
                                        aliqua.
                                        Esse ex consectetur mollit voluptate est in duis laboris ad sit ipsum anim
                                        Lorem.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">Card with flush list group</div>
                                <ul class="list-group list-group-flush">
                                    <a href="#" class="list-group-item list-group-item-action">Cras justo odio</a>
                                    <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                                    <a href="#"  class="list-group-item list-group-item-action">Vestibulum at eros</a>
                                </ul>
                                <div class="card-body">
                                    Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor.
                                    Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse
                                    ex consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

</script>
