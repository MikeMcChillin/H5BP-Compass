$ ->



    unless Modernizr.input.placeholder
        $("input[type=\"text\"]", "header").each ->
            @value = $j(this).attr("placeholder")  unless $(this).val()
            $(this).focus ->
                @value = ""  if @value is $j(this).attr("placeholder")

            $(this).blur ->
                @value = $j(this).attr("placeholder")  if @value is ""