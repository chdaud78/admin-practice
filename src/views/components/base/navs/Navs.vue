<template>
    <div class="navs">
        <div class="card">
            <div class="card-header">
                Bootstrap Navs
            </div>
            <div class="card-body">
                <ul class="nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Active link</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Another link</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link disabled">Disable</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                Bootstrap Navs
                <small class="text-muted">icons</small>
            </div>
            <div class="card-body">
                <ul class="nav nav-pills" role="tablist">
                    <li class="nav-item"><a target="_self" class="nav-link" id="home-tab_2" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true"><i
                        class="c-icon cil-basket"></i></a></li>
                    <li class="nav-item"><a id="link-tab2" data-toggle="tab" href="#link2" role="tab" aria-controls="link2" aria-selected="true" class="nav-link"><i class="c-icon cil-settings"></i></a>
                    </li>
                    <li class="nav-item"><a id="another2" data-toggle="tab" href="#another2" role="tab" aria-controls="another2" aria-selected="true" class="nav-link active"><i
                        class="c-icon cil-bell"></i></a></li>
                    <li class="nav-item"><a href="#" target="_self" class="nav-link disabled"><i
                        class="c-icon cil-envelope-closed"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                Bootstrap Navs
                <small class="text-muted">tab style</small>
            </div>
            <div class="card-body">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="link-tab" data-toggle="tab" href="#link" role="tab" aria-controls="link" aria-selected="true">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="another" data-toggle="tab" href="#another" role="tab" aria-controls="another" aria-selected="true">Another link</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link disabled">Disable</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                Bootstrap Navs
                <small class="text-muted">pill style</small>
            </div>
            <div class="card-body">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Active</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Link</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Another link</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link disabled">Disable</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                Bootstrap Navs
                <small class="text-muted">fill tabs</small>
            </div>
            <div class="card-body">
                <ul class="nav nav-fill nav-tabs">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Active</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Link</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Another link</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link disabled">Disable</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                Bootstrap Navs
                <small class="text-muted">justified tabs</small>
            </div>
            <div class="card-body">
                <ul class="nav nav-tabs nav-justified">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Active</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Link</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Another link</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link disabled">Disable</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                Bootstrap Navs
                <small class="text-muted">dropdown support</small>
            </div>
            <div class="card-body">
                <ul class="nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Active</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" aria-expanded="false" role="button" data-toggle="dropdown" id="dropdownMenuLink" class="nav-link dropdown-toggle">Dropdown</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a role="menuitem" href="#" target="_self" class="dropdown-item">one</a>
                            <a role="menuitem" href="#" target="_self" class="dropdown-item">two</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a role="menuitem" href="#" target="_self" class="dropdown-item">three</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                Bootstrap Navs
                <small class="text-muted">vertical variation</small>
            </div>
            <div class="card-body">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Active</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Link</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Another link</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link disabled">Disable</a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>

</script>
