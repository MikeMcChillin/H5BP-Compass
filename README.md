
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
    $phone: 480px
    $tablet-portrait: 767px
    $large-desktop: 1200px

    // http://blog.divshot.com/post/29552945105/useful-sass-mixins-for-responsive-design-font-sizing
    =respond-to($media)
        // Phone
        @if $media == phone
            @media (max-width: $phone)
                @content
        // Tablet Portrait
        @if $media == tablet-portrait
            @media (max-width: $tablet-portrait)
                @content
        // Tablet Landscape - Desktop
        @if $media == tablet-landscape-desktop
            @media (min-width: $tablet-portrait + 1) and (max-width: $large-desktop - 1)
                @content
        // Large Desktop
        @if $media == large-desktop
            @media (min-width: $large-desktop)
                @content
        // Non-Retina
        @if $media == non-retina
            @media screen and (-webkit-max-device-pixel-ratio: 1)
                @content
        // Retina Only
        @if $media == retina
            @media screen and (-webkit-min-device-pixel-ratio: 2)
                @content


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
