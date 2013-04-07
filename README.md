This repo contains all of [HTML5 Boilerplate v. 4.0.1](http://html5boilerplate.com) with [SASS](http://sass-lang.com/) & [Compass](http://compass-style.org/).
The rest was added & customized by @MikeMcChillin



# Helper Classes
    @include ir
    @include hidden
    @include visuallyhidden
    @include invisible
    @include clearfix
# Animation
The most efficient way to animate an element is to add a class, and define the styles within sass
    To animate something, include the following on the element:
    @include animated($duration, $delay)

    .shake
    .fadeIn
    .fadeOut
    .bounceInDown
    .bounceInLeft
