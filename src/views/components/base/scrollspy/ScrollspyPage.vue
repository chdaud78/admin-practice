<template>
    <div class="scrollspy-wrap">
        <div class="card">
            <div class="card-header">Scrollspy</div>
            <div class="card-body">
                <div class="navbar navbar-light bg-light" id="navbar-example1">
                    <a href="#" class="navbar-brand">Navbar</a>
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a href="#fat" class="nav-link">@fat</a>
                        </li>
                        <li class="nav-item">
                            <a href="#mdo" class="nav-link">@mdo</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown"
                               role="button"
                               aria-expanded="false">@Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a href="#one" class="dropdown-item">one</a>
                                <a href="#two" class="dropdown-item">two</a>
                                <div class="dropdown-divider" role="separator"></div>
                                <a href="#three" class="dropdown-item">three</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div data-spy="scroll" data-target="#navbar-example1" data-offset="0"
                     style="position: relative; height: 200px; overflow: auto; margin-top: .5rem; overflow-y: scroll;">
                    <h4 id="fat">@fat</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat, purus at luctus
                        pulvinar, sapien libero scelerisque neque, sed bibendum ex dui at felis. Integer sed imperdiet
                        nibh, non eleifend lectus. Sed interdum, tortor et rutrum elementum, nisi risus venenatis risus,
                        eget dictum ligula lacus et magna. Nullam pharetra enim quis velit pellentesque euismod. Integer
                        nec neque massa. Maecenas sollicitudin id justo id varius. Maecenas vel nisl eget velit aliquam
                        facilisis. Aenean luctus placerat ornare. Cras congue dolor et enim molestie rhoncus. Proin
                        volutpat, augue eget luctus scelerisque, orci nisi mollis eros, ut volutpat ipsum justo ac
                        tortor.</p>
                    <h4 id="mdo">@mdo</h4>
                    <p>Curabitur eget arcu quam. Nullam blandit justo eu commodo mollis. Quisque hendrerit orci vitae
                        ante faucibus molestie. Praesent maximus et dolor eu condimentum. Praesent egestas est eu sem
                        scelerisque tempor. Curabitur posuere metus vitae risus ultricies fermentum. Nulla fermentum,
                        elit ac maximus laoreet, arcu massa bibendum ipsum, ac feugiat tellus orci id erat. Pellentesque
                        elit felis, vehicula et egestas nec, pulvinar quis magna. Morbi sit amet malesuada erat, a
                        placerat ex.</p>
                    <h4 id="one">one</h4>
                    <p>Praesent imperdiet, nulla sit amet vehicula volutpat, dolor velit aliquet mauris, a placerat orci
                        urna vitae tellus. In hac habitasse platea dictumst. Donec ut elit eu urna tristique
                        pellentesque. Maecenas dignissim iaculis scelerisque. Aenean ligula neque, efficitur sed
                        elementum id, posuere eget lectus. Sed tristique sollicitudin arcu at interdum. Donec eget
                        gravida nisi, id mollis nibh. Aliquam id accumsan quam. Praesent at suscipit magna. Sed
                        porttitor tincidunt congue. Fusce dignissim dapibus consectetur. Ut bibendum finibus sem eu
                        sodales. Nullam porta nisi lacus, at mollis arcu malesuada at.</p>
                    <h4 id="two">two</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat, purus at luctus
                        pulvinar, sapien libero scelerisque neque, sed bibendum ex dui at felis. Integer sed imperdiet
                        nibh, non eleifend lectus. Sed interdum, tortor et rutrum elementum, nisi risus venenatis risus,
                        eget dictum ligula lacus et magna. Nullam pharetra enim quis velit pellentesque euismod. Integer
                        nec neque massa. Maecenas sollicitudin id justo id varius. Maecenas vel nisl eget velit aliquam
                        facilisis. Aenean luctus placerat ornare. Cras congue dolor et enim molestie rhoncus. Proin
                        volutpat, augue eget luctus scelerisque, orci nisi mollis eros, ut volutpat ipsum justo ac
                        tortor.</p>
                    <h4 id="three">three</h4>
                    <p>Praesent imperdiet, nulla sit amet vehicula volutpat, dolor velit aliquet mauris, a placerat orci
                        urna vitae tellus. In hac habitasse platea dictumst. Donec ut elit eu urna tristique
                        pellentesque. Maecenas dignissim iaculis scelerisque. Aenean ligula neque, efficitur sed
                        elementum id, posuere eget lectus. Sed tristique sollicitudin arcu at interdum. Donec eget
                        gravida nisi, id mollis nibh. Aliquam id accumsan quam. Praesent at suscipit magna. Sed
                        porttitor tincidunt congue. Fusce dignissim dapibus consectetur. Ut bibendum finibus sem eu
                        sodales. Nullam porta nisi lacus, at mollis arcu malesuada at.</p>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                Scrollspy
                <small class="text-muted">with list-group</small>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-4">
                        <div class="list-group" id="list-example">
                            <a class="list-group-item list-group-item-action" href="#list-item-1">Item1</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-2">Item2</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-3">Item3</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-4">Item4</a>
                        </div>
                    </div>
                    <div class="col-8">
                        <div data-spy="scroll" data-target="#list-example" data-offset="0"
                             style="height: 200px; overflow: auto">
                            <h4 id="list-item-1">Item 1</h4>
                            <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua
                                id
                                magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur
                                labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum
                                do
                                non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et
                                incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt
                                mollit
                                dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo
                                velit
                                ut eiusmod cupidatat elit dolore.</p>
                            <h4 id="list-item-2">Item 2</h4>
                            <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua
                                id
                                magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur
                                labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum
                                do
                                non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et
                                incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt
                                mollit
                                dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo
                                velit
                                ut eiusmod cupidatat elit dolore.</p>
                            <h4 id="list-item-3">Item 3</h4>
                            <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua
                                id
                                magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur
                                labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum
                                do
                                non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et
                                incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt
                                mollit
                                dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo
                                velit
                                ut eiusmod cupidatat elit dolore.</p>
                            <h4 id="list-item-4">Item 4</h4>
                            <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua
                                id
                                magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur
                                labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum
                                do
                                non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et
                                incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt
                                mollit
                                dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo
                                velit
                                ut eiusmod cupidatat elit dolore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
