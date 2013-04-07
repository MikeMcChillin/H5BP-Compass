========
     ______     __  __     __     __    
    /\  ___\   /\ \_\ \   /\ \  _ \ \   
    \ \___  \  \ \  __ \  \ \ \/ ".\ \  
     \/\_____\  \ \_\ \_\  \ \__/".~\_\ 
      \/_____/   \/_/\/_/   \/_/   \/_/ 
    
    Simple.Honest.Work.

========
                             


This is a **Mobile-First** boilerplate that leverages [HTML5 Boilerplate v. 4.0.1](http://html5boilerplate.com) with [SASS 3.2 - Including @content Mediaqueries](http://sass-lang.com/) & [Compass v0.13](http://compass-style.org/).
The rest was added & customized by [@MikeMcChillin](https://twitter.com/mikemcchillin)

**Required:** 
You must update to latest version of Sass (3.2), then Compass(0.13)

    sudo gem install sass --pre
    sudo gem install compass --pre

# Global Styles
========
* [* { Box-sizing: Border-box } FTW](http://paulirish.com/2012/box-sizing-border-box-ftw/)
* [Webkit Font Smoothing](http://maxvoltar.com/archive/-webkit-font-smoothing)
* [Optimize Legibility](http://www.usabilitypost.com/2012/11/06/optimize-legibility/)

        *
            +box-sizing(border-box)
        html
            // Sets 1em = 10px
            font-size: 62.5%
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
            text-rendering: optimizeLegibility

# Mixins
========
* [Mixins for Rem Font Sizing](http://css-tricks.com/snippets/css/less-mixin-for-rem-font-sizing/)
    
        @include font-size($size)

# Helper Classes
========
* [SASS / SCSS Mixin for Clearfix - best approach?](http://stackoverflow.com/questions/7154705/sass-scss-mixin-for-clearfix-best-approach/7154716#7154716)

        /* Replace text with an image */
        .logo
            background: url('img/logo.png') no-repeat
            height: 34px
            @extend %ir
        @extend hidden
        @extend visuallyhidden
        @extend invisible
        /* Include clearfix on parent elements with floated children */
        .nav
            @extend .clearfix
            li
                float: left

# Animation
========
The most efficient way to animate an element is to add a class, and define the styles within sass. Many of these are based on the animations found in [Animate.css](daneden.me/animate/). Also be sure to animate using [translate-X & translate-Y](http://paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/), rather than top or left.

        @include animated($duration, $delay)

        .shake - Used on forms with errors.
        .fadeIn
        .fadeOut
        .bounceInDown
        .bounceInLeft

# Fonts
========
Fonts go in the /fonts folder, update the name in _fonts.sass

# Mediaqueries
========
* [Responsive @content with Sass v3.2](http://blog.divshot.com/post/29552945105/useful-sass-mixins-for-responsive-design-font-sizing)
    #menu
        margin-right: 10px
        @include respond-to(tablet-portrait)
            margin-right: 20px
        @include respond-to(large-desktop)
            margin-right: 40px

# Main.coffee
========
    /* Smooth scrolls, given target and speed */
    scrollio('body', 2000)

    /* Form is customized for Campaign Monitor ajaxiness. Must have proper id/class, and the list must be created on the Campaign Monitor site. Also requires a '<p class="message"></p>' for ajax feedback & success messages.
    // https://gist.github.com/jdennes/1155479

# Plugins
========
* [Easing](http://gsgd.co.uk/sandbox/jquery/easing/) - **Easing is used in scrollio - located in main.coffee**
* [fitVids](https://github.com/davatron5000/FitVids.js)

        // Must uncomment the script in plugins.js to use.
        $('.video-container').fitVids()

