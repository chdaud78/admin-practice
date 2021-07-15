<template>
    <div class="forms">
        <div class="row">
            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        Credit Card
                        <small class="text-muted">Form</small>
                    </div>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" class="form-control" placeholder="Enter your name">
                            </div>
                            <div class="form-group">
                                <label for="credit">Credit Card Number</label>
                                <input type="text" id="credit" class="form-control" placeholder="0000 0000 0000 0000">
                            </div>
                            <div class="row">
                                <div class="form-group col-sm-4">
                                    <label for="CMonth">Month</label>
                                    <select name="CMonth" id="CMonth" class="form-control">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div class="form-group col-sm-4">
                                    <label for="CYear">Year</label>
                                    <select name="CYear" id="CYear" class="form-control">
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                    </select>
                                </div>
                                <div class="form-group col-sm-4">
                                    <label for="CVC">CVV/CVC</label>
                                    <input type="text" id="CVC" class="form-control" placeholder="000">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        Company
                        <small class="text-muted">Form</small>
                    </div>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <label for="company">Company</label>
                                <input type="text" id="company" class="form-control" placeholder="Enter your company">
                            </div>
                            <div class="form-group">
                                <label for="vat">VAT</label>
                                <input type="text" id="vat" class="form-control" placeholder="PL1234567890">
                            </div>
                            <div class="form-group">
                                <label for="street">Street</label>
                                <input type="text" id="street" class="form-control" placeholder="Enter street name">
                            </div>
                            <div class="row">
                                <div class="form-group col-sm-8">
                                    <label for="city">City</label>
                                    <input type="text" id="city" class="form-control" placeholder="Enter your city">
                                </div>
                                <div class="form-group col-sm-4">
                                    <label for="post_code">Postal Code</label>
                                    <input type="text" id="post_code" class="form-control" placeholder="Postal Code">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="country">Country</label>
                                <input type="text" id="country" class="form-control" placeholder="Enter your country">
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        Basic Form
                        <small class="text-muted">Elements</small>
                    </div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label for="" class="col-sm-3 col-form-label">Username</label>
                            <div class="col-md-9"><p class="mb-0">Park Chong Myeong</p></div>
                        </div>
                        <div class="form-group row">
                            <label for="text" class="col-sm-3 col-form-label">Text Input</label>
                            <div class="col-md-9">
                                <input type="text" id="text" class="form-control" placeholder="Text">
                                <div>This is a help text</div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="email" class="col-sm-3 col-form-label">Email Input</label>
                            <div class="col-md-9">
                                <input type="text" id="email" class="form-control" placeholder="Enter Email">
                                <div>Please enter your email</div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="password" class="col-sm-3 col-form-label">Password</label>
                            <div class="col-md-9">
                                <input type="password" id="password" class="form-control" placeholder="Password">
                                <div>Please enter a complex password</div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="date" class="col-sm-3 col-form-label">Date Input</label>
                            <div class="col-md-9">
                                <input type="date" id="date" class="form-control" placeholder="연도-월-일">
                                <div>Please enter a valid date</div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="disable" class="col-sm-3 col-form-label">Disabled Input</label>
                            <div class="col-md-9">
                                <input type="text" id="disable" class="form-control disabled-input"
                                       placeholder="Disabled" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="area" class="col-sm-3 col-form-label">Textarea</label>
                            <div class="col-md-9">
                                <textarea type="date" id="area" class="form-control"
                                          placeholder="Content..."></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="select1" class="col-sm-3 col-form-label">Select</label>
                            <div class="col-md-9">
                                <select id="select1" name="select1" class="form-control">
                                    <option value="please">Please select</option>
                                    <option value="select1">select1</option>
                                    <option value="select2">select2</option>
                                    <option value="select3">select3</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="select2" class="col-sm-3 col-form-label col-form-label-lg">Select Large</label>
                            <div class="col-md-9">
                                <select id="select2" name="select2" class="form-control form-control-lg">
                                    <option value="please">Please select</option>
                                    <option value="select1">select1</option>
                                    <option value="select2">select2</option>
                                    <option value="select3">select3</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="select3" class="col-sm-3 col-form-label col-form-label-sm">Select Small</label>
                            <div class="col-md-9">
                                <select id="select3" name="select3" class="form-control form-control-sm">
                                    <option value="please">Please select</option>
                                    <option value="select1">select1</option>
                                    <option value="select2">select2</option>
                                    <option value="select3">select3</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="select4" class="col-sm-3 col-form-label">Disabled Select</label>
                            <div class="col-md-9">
                                <select id="select4" name="select4" class="form-control" disabled>
                                    <option value="please">Please select</option>
                                    <option value="select1">select1</option>
                                    <option value="select2">select2</option>
                                    <option value="select3">select3</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="select5" class="col-sm-3 col-form-label">Disabled Select</label>
                            <div class="col-md-9">
                                <select multiple id="select5" name="select5" class="form-control">
                                    <option value="please">Please select</option>
                                    <option value="select1">select1</option>
                                    <option value="select2">select2</option>
                                    <option value="select3">select3</option>
                                    <option value="select4">select4</option>
                                    <option value="select5">select5</option>
                                    <option value="select6">select6</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Radios</label>
                            <div class="col-md-9 col-form-label">
                                <div class="form-check">
                                    <input type="radio" name="radio" id="radio" class="form-check-input">
                                    <label for="radio" class="form-check-label">Option1</label>
                                </div>
                                <div class="form-check">
                                    <input type="radio" name="radio" id="radio2" class="form-check-input">
                                    <label for="radio2" class="form-check-label">Option2</label>
                                </div>
                                <div class="form-check">
                                    <input type="radio" name="radio" id="radio3" class="form-check-input">
                                    <label for="radio3" class="form-check-label">Option3</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Inline Radios</label>
                            <div class="col-md-9 col-form-label">
                                <div class="form-check form-check-inline">
                                    <input type="radio" name="radio4" id="radio4" class="form-check-input">
                                    <label for="radio4" class="form-check-label">Option1</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="radio" name="radio4" id="radio5" class="form-check-input">
                                    <label for="radio5" class="form-check-label">Option2</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="radio" name="radio4" id="radio6" class="form-check-input">
                                    <label for="radio6" class="form-check-label">Option3</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Checkboxes</label>
                            <div class="col-md-9 col-form-label">
                                <div class="form-check">
                                    <input type="checkbox" name="checkbox" id="checkbox" class="form-check-input">
                                    <label for="checkbox" class="form-check-label">Option1</label>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" name="checkbox" id="checkbox2" class="form-check-input">
                                    <label for="checkbox2" class="form-check-label">Option2</label>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" name="checkbox" id="checkbox3" class="form-check-input">
                                    <label for="checkbox3" class="form-check-label">Option3</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Inline Radios</label>
                            <div class="col-md-9 col-form-label">
                                <div class="form-check form-check-inline">
                                    <input type="checkbox" name="checkbox4" id="checkbox4" class="form-check-input">
                                    <label for="checkbox4" class="form-check-label">Option1</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="checkbox" name="checkbox4" id="checkbox5" class="form-check-input">
                                    <label for="checkbox5" class="form-check-label">Option2</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="checkbox" name="checkbox4" id="checkbox6" class="form-check-input">
                                    <label for="checkbox6" class="form-check-label">Option3</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="file" class="col-sm-3 col-form-label">File input</label>
                            <div class="col-md-9">
                                <input type="file" class="form-control-file" id="file">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="file2" class="col-sm-3 col-form-label">Multiple File input</label>
                            <div class="col-md-9">
                                <input type="file" class="form-control-file" id="file2" multiple>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="btn-zone">
                            <button class="btn btn-sm btn-primary mr-3">Submit</button>
                            <button class="btn btn-sm btn-danger">Reset</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-6">
                <div class="card">
                    <div class="card-header">Horizontal <small class="text-muted">Form</small></div>
                    <div class="card-body">
                        <form class="form">
                            <div class="form-group row">
                                <label for="email2" class="col-sm-3 col-form-label">Email</label>
                                <div class="col-sm-9">
                                    <input type="text" id="email2" class="form-control" placeholder="Enter Email..">
                                    <div>Please enter your email</div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="password2" class="col-sm-3 col-form-label">Password</label>
                                <div class="col-sm-9">
                                    <input type="password" id="password2" class="form-control"
                                           placeholder="Enter Password..">
                                    <div>Please enter your password</div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <div class="btn-zone">
                            <button class="btn btn-info btn-sm mr-3">Submit</button>
                            <button class="btn btn-danger btn-sm">Reset</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">Normal <small class="text-muted">Form</small></div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="email3">Email</label>
                            <input type="text" id="email3" class="form-control" placeholder="Enter your email">
                            <div>Please enter your email</div>
                        </div>
                        <div class="form-group">
                            <label for="password3">Password</label>
                            <input type="text" id="password3" class="form-control" placeholder="Enter your password">
                            <div>Please enter your Password</div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="btn-zone">
                            <button class="btn btn-info btn-sm mr-3">Submit</button>
                            <button class="btn btn-danger btn-sm">Reset</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">Input <small class="text-muted">Grid</small></div>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" placeholder="col-sm-3">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" placeholder="col-sm-4">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-5">
                                    <input type="text" class="form-control" placeholder="col-sm-5">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder="col-sm-6">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" placeholder="col-sm-7">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" placeholder="col-sm-8">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" placeholder="col-sm-9">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" placeholder="col-sm-10">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-11">
                                    <input type="text" class="form-control" placeholder="col-sm-11">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <input type="text" class="form-control" placeholder="col-sm-12">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">Input <small class="text-muted">Sizes</small></div>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group row">
                                <label for="small" class="col-sm-3 col-form-label col-form-label-sm">Small Input</label>
                                <div class="col-sm-9">
                                    <input type="text" id="small" class="form-control form-control-sm">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="normal" class="col-sm-3 col-form-label">Normal Input</label>
                                <div class="col-sm-9">
                                    <input type="text" id="normal" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="large" class="col-sm-3 col-form-label col-form-label-lg">Large Input</label>
                                <div class="col-sm-9">
                                    <input type="text" id="large" class="form-control form-control-lg">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-6">
                <div class="card">
                    <div class="card-header">Validation states <small class="text-muted">Form</small></div>
                    <form action="">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="valid_success">Input with success</label>
                                <input type="text" id="valid_success" class="form-control is-valid">
                            </div>
                            <div class="form-group">
                                <label for="valid_fail">Input with error</label>
                                <input type="text" id="valid_fail" class="form-control" required
                                       @change="validationCheck">
                                <div class="invalid-feedback">Please provide a valid informations.</div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="btn-zone">
                                <button class="btn btn-primary btn-sm" @click="validationCheck">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-6">
                <div class="card">
                    <div class="card-header">Inline Form</div>
                    <div class="card-body">
                        <form action="" class="form-inline">
                            <div class="form-group mr-5">
                                <label for="name2" class="mr-3">Name</label>
                                <input type="text" id="name2" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="email4" class="mr-3">Email</label>
                                <input type="text" id="email4" class="form-control">
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-header">Icon/Texts <small class="text-muted">Groups</small></div>
                            <form action="">
                                <div class="card-body">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i class="c-icon cil-user"></i>
                                                </div>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Username">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Email">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    <i class="c-icon cil-envelope-open"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    $
                                                </div>
                                            </div>
                                            <input type="text" class="form-control" placeholder="..">
                                            <div class="input-group-append">
                                                <div class="input-group-text">
                                                    .00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="btn-zone">
                                        <button class="btn btn-success btn-sm mr-3">Submit</button>
                                        <button class="btn btn-danger btn-sm">Reset</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-header">Buttons <small class="text-muted">Groups</small></div>
                            <form action="">
                                <div class="card-body">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <button class="btn btn-info">
                                                    <i class="c-icon cil-search"></i>
                                                    Search
                                                </button>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Username">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Email">
                                            <div class="input-group-append">
                                                <button class="btn btn-info">
                                                    submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <button class="btn btn-info">
                                                    <i class="c-icon cil-search"></i>
                                                </button>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Search">
                                            <div class="input-group-append">
                                                <button class="btn btn-info">
                                                    search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="btn-zone">
                                        <button class="btn btn-success btn-sm mr-3">Submit</button>
                                        <button class="btn btn-danger btn-sm">Reset</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-header">Dropdowns <small class="text-muted">Groups</small></div>
                            <form action="">
                                <div class="card-body">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="btn-group" role="group">
                                                    <button class="btn btn-info dropdown-toggle" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">
                                                        Action
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a href="#" class="dropdown-item">Action 1</a>
                                                        <a href="#" class="dropdown-item">Action 2</a>
                                                        <a href="#" class="dropdown-item">Action 3</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Username">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Email">
                                            <div class="input-group-append">
                                                <div class="btn-group" role="group">
                                                    <button class="btn btn-info dropdown-toggle" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">
                                                        Email
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a href="#" class="dropdown-item">Email 1</a>
                                                        <a href="#" class="dropdown-item">Email 2</a>
                                                        <a href="#" class="dropdown-item">Email 3</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="btn-group" role="group">
                                                    <button class="btn btn-info dropdown-toggle" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">
                                                        Action
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a href="#" class="dropdown-item">Action 1</a>
                                                        <a href="#" class="dropdown-item">Action 2</a>
                                                        <a href="#" class="dropdown-item">Action 3</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="text" class="form-control" placeholder="...">
                                            <div class="input-group-append">
                                                <div class="btn-group" role="group">
                                                    <button class="btn btn-info dropdown-toggle" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">
                                                        Email
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a href="#" class="dropdown-item">Email 1</a>
                                                        <a href="#" class="dropdown-item">Email 2</a>
                                                        <a href="#" class="dropdown-item">Email 3</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="btn-zone">
                                        <button class="btn btn-success btn-sm mr-3">Submit</button>
                                        <button class="btn btn-danger btn-sm">Reset</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="card">
                    <div class="card-header">Use the grid for big devices</div>
                    <form action="">
                        <div class="card-body">
                            <div class="form-group row">
                                <div class="col-md-8"><input type="text" class="form-control" placeholder=".col-md-8">
                                </div>
                                <div class="col-md-4"><input type="text" class="form-control" placeholder=".col-md-4">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-7"><input type="text" class="form-control" placeholder=".col-md-7">
                                </div>
                                <div class="col-md-5"><input type="text" class="form-control" placeholder=".col-md-5">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6"><input type="text" class="form-control" placeholder=".col-md-6">
                                </div>
                                <div class="col-md-6"><input type="text" class="form-control" placeholder=".col-md-6">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-5"><input type="text" class="form-control" placeholder=".col-md-5">
                                </div>
                                <div class="col-md-7"><input type="text" class="form-control" placeholder=".col-md-7">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-4"><input type="text" class="form-control" placeholder=".col-md-4">
                                </div>
                                <div class="col-md-8"><input type="text" class="form-control" placeholder=".col-md-8">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="card">
                    <div class="card-header">Use the grid for small devices</div>
                    <form action="">
                        <div class="card-body">
                            <div class="form-group row">
                                <div class="col-8"><input type="text" class="form-control" placeholder=".col-8"></div>
                                <div class="col-4"><input type="text" class="form-control" placeholder=".col-4"></div>
                            </div>
                            <div class="form-group row">
                                <div class="col-7"><input type="text" class="form-control" placeholder=".col-7"></div>
                                <div class="col-5"><input type="text" class="form-control" placeholder=".col-5"></div>
                            </div>
                            <div class="form-group row">
                                <div class="col-6"><input type="text" class="form-control" placeholder=".col-6"></div>
                                <div class="col-6"><input type="text" class="form-control" placeholder=".col-6"></div>
                            </div>
                            <div class="form-group row">
                                <div class="col-5"><input type="text" class="form-control" placeholder=".col-5"></div>
                                <div class="col-7"><input type="text" class="form-control" placeholder=".col-7"></div>
                            </div>
                            <div class="form-group row">
                                <div class="col-4"><input type="text" class="form-control" placeholder=".col-4"></div>
                                <div class="col-8"><input type="text" class="form-control" placeholder=".col-8"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">Example Form</div>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            Username
                                        </div>
                                    </div>
                                    <input type="text" class="form-control">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <i class="c-icon cil-user"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            Email
                                        </div>
                                    </div>
                                    <input type="text" class="form-control">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <i class="c-icon cil-envelope-open"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            Password
                                        </div>
                                    </div>
                                    <input type="password" class="form-control">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <i class="c-icon cil-lock-locked"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-zone">
                                <button class="btn btn-info">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">Example Form</div>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Username">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <i class="c-icon cil-user"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Email">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <i class="c-icon cil-envelope-open"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="password" class="form-control" placeholder="Password">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <i class="c-icon cil-lock-locked"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-zone">
                                <button class="btn btn-light">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">Example Form</div>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="c-icon cil-user"></i>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Username">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="c-icon cil-envelope-open"></i>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Email">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="c-icon cil-lock-locked"></i>
                                        </div>
                                    </div>
                                    <input type="password" class="form-control" placeholder="Password">
                                </div>
                            </div>
                            <div class="btn-zone">
                                <button class="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <div class="card-header">Form Elements</div>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <label for="">Prepended text</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                    </div>
                                    <input type="text" class="form-control">
                                </div>
                                <div>Here's some help text</div>
                            </div>
                            <div class="form-group">
                                <label for="">Appended text</label>
                                <div class="input-group">
                                    <input type="text" class="form-control">
                                    <div class="input-group-append">
                                        <div class="input-group-text">.00</div>
                                    </div>
                                </div>
                                <div>Here's some help text</div>
                            </div>
                            <div class="form-group">
                                <label for="">Appended and Prepend</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">$</div>
                                    </div>
                                    <input type="text" class="form-control">
                                    <div class="input-group-append">
                                        <div class="input-group-text">.00</div>
                                    </div>
                                </div>
                                <div>Here's some help text</div>
                            </div>
                            <div class="form-group">
                                <label for="">Appended with button</label>
                                <div class="input-group">
                                    <input type="text" class="form-control">
                                    <div class="input-group-append">
                                        <button class="btn btn-secondary">Go!</button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="">Two-button append</label>
                                <div class="input-group">
                                    <input type="text" class="form-control">
                                    <div class="input-group-append">
                                        <div class="btn-group" role="group">
                                            <button class="btn btn-secondary">Search</button>
                                            <button class="btn btn-secondary">Option</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-zone">
                                <button class="btn btn-info mr-3">Save changes</button>
                                <button class="btn btn-light">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "FormsPage",
    methods: {
        validationCheck() {
            let check = document.getElementById('valid_fail').value;
            if (check == "") {
                document.getElementById('valid_fail').classList.add('is-invalid');
            } else {
                document.getElementById('valid_fail').classList.remove('is-invalid');
            }
        }
    }
}
</script>
