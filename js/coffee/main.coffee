$ ->


    #######################
    # Smooth scroll
    #######################
    scrollio = (target, speed) ->
        $("html, body").animate
            scrollTop: $(target).offset().top
              , speed



    #########################
    # Scroll events
    #########################
    $(window).scroll ->
        scroll = $(window).scrollTop()

    #########################
    # Resize events
    #########################
    $(window).resize ->
        scroll = $(window).scrollTop()


    #######################
    # Email subscribe
    #######################
    form = $("#subscribe")

    form.submit (e) ->
        e.preventDefault()
        form.removeClass('shake')
        $.getJSON @action + "?callback=?", $(this).serialize(), (data) ->
            messageNode = $('.message')
        # if there's an error...
            if data.Status is 400
                invalidSubmit = $("#{form} input[type=email]").val()
                form.addClass('shake');
                messageNode.html("Sorry, something went wrong with the email address #{invalidSubmit}.")
            else
                justSubmitted = $("#{form} input[type=email]").val()
                successEntry = "Thank You!"
                messageNode.html("Welcome to the mailing list!")
                # if $('.email-added').length > 0
                #     $('.email-added').replaceWith(successEntry)
                # else
                #     $('form input[type=submit]').val(successEntry)
                #     setTimeout ( ->
                #         $('form input[type=submit]').val('Submit')
                #     ), 1500