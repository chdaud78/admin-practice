<template>
    <div class="collapses">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="c-icon c-icon-lg cil-hamburger-menu"></i>
                        <strong>Bootstrap collapse</strong>
                        <div class="card-header-actions">
                            <div class="card-header-action">
                                <small class="text-muted">docs</small>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <a href="#collapseExample" class="btn btn-primary mb-2" data-toggle="collapse" role="button"
                           aria-expanded="false" aria-controls="collapseExample">Toggle Collapse</a>
                        <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                                <button class="btn btn-primary mb-2" type="button" data-toggle="collapse"
                                        data-target="#collapseExample_2" aria-expanded="false"
                                        aria-controls="collapseExample_2">
                                    Button with data-target
                                </button>
                                <div class="collapse" id="collapseExample_2">
                                    <div class="card card-body">
                                        Hello!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header">
                        <a href="#collapseExample_3" class="text-primary" data-toggle="collapse" role="button"
                           aria-expanded="true" aria-controls="collapseExample_3">Collapsible card</a>
                    </div>
                    <div class="collapse" id="collapseExample_3">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                            lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                            probably haven't heard of them accusamus labore VHS.

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header">
                        Collapse
                        <small class="ml-1">accordion</small>
                    </div>
                    <div class="card-body">
                        <div class="card mb-0">
                            <div class="card-header">
                                <a href="#collapseExample_4" class="text-primary" data-toggle="collapse" role="button"
                                   aria-expanded="true" aria-controls="collapseExample_4">Collapsible Group Item #1</a>
                            </div>
                            <div class="collapse" id="collapseExample_4">
                                <div class="card-body">
                                    Hello!
                                </div>
                            </div>
                        </div>
                        <div class="card mb-0">
                            <div class="card-header">
                                <a href="#collapseExample_5" class="text-primary" data-toggle="collapse" role="button"
                                   aria-expanded="true" aria-controls="collapseExample_5">Collapsible Group Item #2</a>
                            </div>
                            <div class="collapse" id="collapseExample_5">
                                <div class="card-body">
                                    Hello!!
                                </div>
                            </div>
                        </div>
                        <div class="card mb-0">
                            <div class="card-header">
                                <a href="#collapseExample_6" class="text-primary" data-toggle="collapse" role="button"
                                   aria-expanded="true" aria-controls="collapseExample_6">Collapsible Group Item #3</a>
                            </div>
                            <div class="collapse" id="collapseExample_6">
                                <div class="card-body">
                                    Hello!!!
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
