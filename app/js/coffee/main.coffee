$ ->
    $("button").on "click", (e) ->
        e.preventDefault()
        $(".wut").toggleClass "hidden"

    console.log("heyyy")