<template>
    <div class="buttons-group-page">
        <div class="card">
            <div class="card-header">Button group</div>
            <div class="card-body">
                <div class="btn-group" role="group" aria-label="Button group">
                    <button class="btn btn-light">Left</button>
                    <button class="btn btn-light">Middle</button>
                    <button class="btn btn-light">Right</button>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">Button toolbar</div>
            <div class="card-body">
                <div class="btn-toolbar" role="toolbar" aria-label="Button toolbar">
                    <div class="btn-group mr-3" role="group" aria-label="Button toolbar group">
                        <button class="btn btn-light">1</button>
                        <button class="btn btn-light">2</button>
                        <button class="btn btn-light">3</button>
                    </div>
                    <div class="btn-group mr-3" role="group" aria-label="Button toolbar group">
                        <button class="btn btn-light">4</button>
                        <button class="btn btn-light">5</button>
                        <button class="btn btn-light">6</button>
                        <button class="btn btn-light">7</button>
                    </div>
                    <div class="btn-group mr-3" role="group" aria-label="Button toolbar group">
                        <button class="btn btn-light">8</button>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="btnGroupAddon2">@</span>
                        </div>
                        <input class="form-control" type="text" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2">
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">Button group sizing</div>
            <div class="card-body">
                <div class="btn-group btn-group-lg mb-4" role="group" aria-label="Button group">
                    <button class="btn btn-light">Left</button>
                    <button class="btn btn-light">Middle</button>
                    <button class="btn btn-light">Right</button>
                </div>
                <br>
                <div class="btn-group mb-4" role="group" aria-label="Button group">
                    <button class="btn btn-light">Left</button>
                    <button class="btn btn-light">Middle</button>
                    <button class="btn btn-light">Right</button>
                </div>
                <br>
                <div class="btn-group btn-group-sm" role="group" aria-label="Button group">
                    <button class="btn btn-light">Left</button>
                    <button class="btn btn-light">Middle</button>
                    <button class="btn btn-light">Right</button>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">Button nesting</div>
            <div class="card-body">
                <div class="btn-group btn-group-lg mb-4" role="group" aria-label="Button group">
                    <button class="btn btn-light">Left</button>
                    <button class="btn btn-light">Middle</button>
                    <button class="btn btn-light">Right</button>
                    <div class="btn-group" role="group">
                        <button class="btn btn-light dropdown-toggle" id="btnGroupDrop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </button>
                        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <a href="#" class="dropdown-item">Dropdown Link</a>
                            <a href="#" class="dropdown-item">Dropdown Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">Button vertical</div>
            <div class="card-body">
                <div class="btn-group btn-group-vertical btn-group-lg mb-4" role="group" aria-label="Button group">
                    <button class="btn btn-light">Left</button>
                    <button class="btn btn-light">Middle</button>
                    <button class="btn btn-light">Right</button>
                    <div class="btn-group" role="group">
                        <button class="btn btn-light dropdown-toggle" id="btnGroupDrop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </button>
                        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <a href="#" class="dropdown-item">Dropdown Link</a>
                            <a href="#" class="dropdown-item">Dropdown Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>
