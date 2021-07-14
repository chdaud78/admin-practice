<template>
    <div class="dropdown-button-page">
        <div class="card">
            <div class="card-header">Dropdowns</div>
            <div class="card-body">
                <div class="btn-group">
                    <div class="dropdown mr-3">
                        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-expanded="false">Dropdown button
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a href="#" class="dropdown-item">Action</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <a class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton2"
                           data-toggle="dropdown" aria-expanded="false" href="#">Dropdown link</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                            <a href="#" class="dropdown-item">Action</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="btn-group">
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle mr-3" data-toggle="dropdown"
                                aria-expanded="false">Primary
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Action1</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle mr-3" data-toggle="dropdown"
                                aria-expanded="false">Secondary
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Action2</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-success dropdown-toggle mr-3" data-toggle="dropdown"
                                aria-expanded="false">Success
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Action3</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-info dropdown-toggle mr-3" data-toggle="dropdown" aria-expanded="false">
                            Info
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Action4</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-warning dropdown-toggle mr-3" data-toggle="dropdown"
                                aria-expanded="false">Warning
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Action5</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            Danger
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Action6</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="button-toolbar">
                    <div class="btn-group mr-3">
                        <button class="btn btn-primary">Primary</button>
                        <button class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"
                                aria-expanded="false">
                            <span class="sr-only">toggle dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Actions</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                    <div class="btn-group mr-3">
                        <button class="btn btn-secondary">Secondary</button>
                        <button class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"
                                aria-expanded="false">
                            <span class="sr-only">toggle dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Actions</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                    <div class="btn-group mr-3">
                        <button class="btn btn-success">Success</button>
                        <button class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"
                                aria-expanded="false">
                            <span class="sr-only">toggle dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Actions</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                    <div class="btn-group mr-3">
                        <button class="btn btn-info">Info</button>
                        <button class="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"
                                aria-expanded="false">
                            <span class="sr-only">toggle dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Actions</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                    <div class="btn-group mr-3">
                        <button class="btn btn-warning">Warning</button>
                        <button class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"
                                aria-expanded="false">
                            <span class="sr-only">toggle dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Actions</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-danger">Danger</button>
                        <button class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"
                                aria-expanded="false">
                            <span class="sr-only">toggle dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Actions</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="btn-group">
                    <div class="dropdown mr-3">
                        <button class="btn btn-light dropdown-toggle btn-lg" type="button"
                                data-toggle="dropdown" aria-expanded="false">Large button
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Action</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-light btn-lg">Large Split button</button>
                        <button class="btn btn-light dropdown-toggle dropdown-toggle-split btn-lg"
                                data-toggle="dropdown"
                                aria-expanded="false">
                            <span class="sr-only">toggle dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Action</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="btn-group">
                    <div class="dropdown mr-3">
                        <button class="btn btn-light dropdown-toggle btn-sm" type="button"
                                data-toggle="dropdown" aria-expanded="false">Small button
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Action</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-light btn-sm">Small Split button</button>
                        <button class="btn btn-light dropdown-toggle dropdown-toggle-split btn-sm"
                                data-toggle="dropdown"
                                aria-expanded="false">
                            <span class="sr-only">toggle dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Action</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="btn-group">
                    <div class="dropdown dropup mr-3">
                        <button class="btn btn-light dropdown-toggle" type="button"
                                data-toggle="dropdown" aria-expanded="false">Dropup button
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Action</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                    <div class="btn-group dropup">
                        <button class="btn btn-light">Dropup Split button</button>
                        <button class="btn btn-light dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"
                                aria-expanded="false">
                            <span class="sr-only">toggle dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Action</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="card">
            <div class="card-header">Menus</div>
            <div class="card-body">
                <div class="dropdown mr-3">
                    <button class="btn btn-light dropdown-toggle" type="button"
                            data-toggle="dropdown" aria-expanded="false">Dropdown button
                    </button>
                    <div class="dropdown-menu">
                        <button class="dropdown-item">Action</button>
                        <button class="dropdown-item">Another action</button>
                        <button class="dropdown-item">Something else here</button>
                    </div>
                </div>

                <hr>

                <div class="dropdown mr-3">
                    <button class="btn btn-light dropdown-toggle" type="button"
                            data-toggle="dropdown" aria-expanded="false">Dropdown menu right button
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item">Action</button>
                        <button class="dropdown-item">Another action</button>
                        <button class="dropdown-item">Something else here</button>
                    </div>
                </div>

                <hr>

                <div class="dropdown mr-3">
                    <button class="btn btn-light dropdown-toggle" type="button"
                            data-toggle="dropdown" aria-expanded="false">Dropdown menu header
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <h6 class="dropdown-header">Header</h6>
                        <button class="dropdown-item">Action</button>
                        <button class="dropdown-item">Another action</button>
                        <button class="dropdown-item">Something else here</button>
                    </div>
                </div>

                <hr>

                <div class="dropdown mr-3">
                    <button class="btn btn-light dropdown-toggle" type="button"
                            data-toggle="dropdown" aria-expanded="false">Dropdown menu divider
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item">Action</button>
                        <button class="dropdown-item">Another action</button>
                        <div class="dropdown-divider"></div>
                        <button class="dropdown-item">Something else here</button>
                    </div>
                </div>

                <hr>

                <div class="dropdown mr-3">
                    <button class="btn btn-light dropdown-toggle" type="button"
                            data-toggle="dropdown" aria-expanded="false">Dropdown menu forms
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <form action="" class="px-4 py-3">
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="Write email">
                            </div>
                            <div class="form-group">
                                <label for="password">password</label>
                                <input type="password" class="form-control" id="password" placeholder="Write password">
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="check">
                                    <label for="check" class="form-check-label">Remember me</label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">New around here? Sign up</a>
                        <a href="#" class="dropdown-item">Forgot password?</a>
                    </div>
                </div>

                <hr>

                <div class="dropdown mr-3">
                    <button class="btn btn-light dropdown-toggle" type="button"
                            data-toggle="dropdown" aria-expanded="false">Dropdown menu disabled
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item">Action</button>
                        <button class="dropdown-item disabled">Another action</button>
                        <div class="dropdown-divider"></div>
                        <button class="dropdown-item">Something else here</button>
                    </div>
                </div>

                <hr>

                <div class="dropdown mr-3">
                    <button class="btn btn-light dropdown-toggle" type="button"
                            data-toggle="dropdown" aria-expanded="false" data-display="static">Right-aligned but left aligned when large screen
                    </button>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                        <button class="dropdown-item">Action</button>
                        <button class="dropdown-item disabled">Another action</button>
                        <div class="dropdown-divider"></div>
                        <button class="dropdown-item">Something else here</button>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>