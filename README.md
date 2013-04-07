
This repo contains all of [HTML5 Boilerplate v. 4.0.1](http://html5boilerplate.com) with [SASS](http://sass-lang.com/) & [Compass](http://compass-style.org/).
The rest was added & customized by [@MikeMcChillin](https://twitter.com/mikemcchillin)

# Global Styles
    *
        -webkit-font-smoothing: antialiased
        font-smoothing: antialiased
        text-rendering: optimizeLegibility
        +box-sizing(border-box)
# Mixins
    /* Both a fix for IE 7&8 with Rems, and a reminder to always use ems */
    @include font-size($size)
# Helper Classes
    /* Replace text with an image */
    @include ir
    @include hidden
    @include visuallyhidden
    @include invisible
    /* Include clearfix on parent elements with floated children */
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
# Fonts
Fonts go in the /fonts folder, update the name in _fonts.sass
# Mediaqueries
    // http://blog.divshot.com/post/29552945105/useful-sass-mixins-for-responsive-design-font-sizing
    ///////////////////////
    // Example Usage
    ///////////////////////
    #menu
        float: right
        max-width: 640px
        @include respond-to(tablet-portrait)
            margin-right: 20px
        @include respond-to(phone)
            margin-right: 10px
