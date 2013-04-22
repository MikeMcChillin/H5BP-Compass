$ ->
    $('a').click (e) ->
        e.preventDefault()
        $('ul').find('.flipInX').removeClass 'flipInX'
        $(@).parent('li').addClass 'flipInX'