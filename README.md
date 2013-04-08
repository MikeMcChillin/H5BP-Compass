
  _   _ ____  ____  ____        ____                                    
 | | | | ___|| __ )|  _ \      / ___|___  _ __ ___  _ __   __ _ ___ ___ 
 | |_| |___ \|  _ \| |_) |____| |   / _ \| '_ ` _ \| '_ \ / _` / __/ __|
 |  _  |___) | |_) |  __/_____| |__| (_) | | | | | | |_) | (_| \__ \__ \
 |_| |_|____/|____/|_|         \____\___/|_| |_| |_| .__/ \__,_|___/___/
                                                   |_|                  
    
A **Mobile-First** boilerplate that leverages [HTML5 Boilerplate v. 4.0.1](http://html5boilerplate.com) with [SASS 3.2 - Including @content Mediaqueries](http://sass-lang.com/) & [Compass v0.13](http://compass-style.org/).
The rest was added & customized by [@MikeMcChillin](https://twitter.com/mikemcchillin)

**Required:** 
You must update to latest version of Sass (3.2), then Compass(0.13)

    sudo gem install sass --pre
    sudo gem install compass --pre


## Global Styles
##### [* { Box-sizing: Border-box } FTW](http://paulirish.com/2012/box-sizing-border-box-ftw/)

    *
        +box-sizing(border-box)

##### [Webkit Font Smoothing](http://maxvoltar.com/archive/-webkit-font-smoothing)

    html
            -webkit-font-smoothing: antialiased
            font-smoothing: antialiased

##### [Optimize Legibility](http://www.usabilitypost.com/2012/11/06/optimize-legibility/)

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


##### [Sweet SASS function to convert PX to EM](http://www.pjmccormick.com/sweet-sass-function-convert-px-em)

    font-size: em(48px)
    width: em(300px)


## Common Mixins / Compass

* `+inline-block` - [+inline-block](http://compass-style.org/reference/compass/css3/inline_block/)
* `+opacity(1)` - [+opacity(1)](http://compass-style.org/reference/compass/css3/opacity/)
* `+transition(.3s ease all)` - [+transition(.3s ease all)](http://compass-style.org/reference/compass/css3/transition/)
* `+border-radius(50%)` - [+border-radius(50%)](http://compass-style.org/reference/compass/css3/border_radius/)
    

## Helper Classes

##### [.ir mixin](https://github.com/h5bp/html5-boilerplate/blob/master/doc/css.md#ir)

    // Replace text with an image
    <div class="logo">This is the name of the site</div>

    .logo
        background: url('img/logo.png') no-repeat
        height: 34px
        width: 100px
        @extend %ir

##### [.clearfix mixin](http://stackoverflow.com/questions/7154705/sass-scss-mixin-for-clearfix-best-approach/7154716#7154716)

    // Extend clearfix on parent elements with floated children
    <ul>
        <li>Floated Left</li>
        <li>Floated Left</li>
        <li>Floated Left</li>
    </ul>

    ul
        @extend .clearfix
        li
            float: left

## Animation

The most efficient way to animate an element is to add a class, and define the styles within sass. 
##### [Animate.css](http://daneden.me/animate/)
Baked in animations in this repo include: `.shake`, `.fadeIn`, `.fadeOut`, `.bounceInDown`, `.bounceInLeft`

    @include animated($duration, $delay)


##### [Use translate-X/Y instead of top/left](http://paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/)


## Fonts

##### Fonts go in the `/fonts` folder, update the name in `_fonts.sass`

## Mediaqueries

##### [Responsive @content with Sass v3.2](http://blog.divshot.com/post/29552945105/useful-sass-mixins-for-responsive-design-font-sizing)
##### **Start with mobile styles**, and build up from there. You will likely never need to `@include respond-to(phone)`.

    #menu
        margin-right: 10px
        @include respond-to(tablet-portrait)
            margin-right: 20px
        @include respond-to(large-desktop)
            margin-right: 40px

## Common Gists
##### Be sure to check out these commonly used coffeescript gists.
* [scrollio](https://gist.github.com/MikeMcChillin/5333739) - In page navigation
* [campaign-monitor-ajax-subscribe.coffee](https://gist.github.com/MikeMcChillin/5333820) - Ajax subscribe to a Campaign Monitor email address.
* [scroll-events.coffee](https://gist.github.com/MikeMcChillin/5333753) - Set up scroll events using $(window).scroll and scrollTop()
* [resize.coffe](https://gist.github.com/MikeMcChillin/5333787) - Set up $(window).resize()

