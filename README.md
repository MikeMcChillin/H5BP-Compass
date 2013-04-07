
This repo contains all of [HTML5 Boilerplate v. 4.0.1](http://html5boilerplate.com) with [SASS](http://sass-lang.com/) & [Compass](http://compass-style.org/).
The rest was added & customized by [@MikeMcChillin](https://twitter.com/mikemcchillin)

**Required:** 
You must update to latest version of Sass (3.2), then Compass(0.13):
    sudo gem install sass --pre
    sudo gem install compass --pre

# Global Styles
Refer to these articles
[* { Box-sizing: Border-box } FTW](http://paulirish.com/2012/box-sizing-border-box-ftw/)
    *
        +box-sizing(border-box)
    html
        // Sets 1em = 10px
        font-size: 62.5%
        // http://maxvoltar.com/archive/-webkit-font-smoothing
        -webkit-font-smoothing: antialiased
        font-smoothing: antialiased
    h1,
    h2,
    h3,
    h4,
    h5,
    h6
        font-size: 1em
        margin: 0
        line-height: 1
        // http://www.usabilitypost.com/2012/11/06/optimize-legibility/
        text-rendering: optimizeLegibility
# Mixins
    /* Both a fix for IE 7 & 8 with Rems, and a reminder to always use ems */
    @include font-size($size)
# Helper Classes
    /* Replace text with an image */
    @include ir
        .logo
            background: url('img/logo.png') no-repeat
            height: 34px
            @extend %ir
    @include hidden
    @include visuallyhidden
    @include invisible
    /* Include clearfix on parent elements with floated children */
    @include clearfix
        .nav
            @include clearfix
            li
                float: left
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
        @include respond-to(large-desktop)
            margin-right: 40px
