$(function(){
    $('input').on("keydown", function(e){

        if (e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 27 || e.keyCode == 13 || (e.keyCode == 65 && e.ctrlKey === true) || (e.keyCode == 67 && e.ctrlKey === true) || (e.keyCode == 86 && e.ctrlKey === true) || (e.keyCode == 88 && e.ctrlKey === true) || (e.keyCode >= 35 && e.keyCode <= 39)) {
            return;
        } else {
            if (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    });

    $('form#generate').on("submit", function(e){
        e.preventDefault();

        var minValue = $('input#min-value').val().trim(),
            maxValue = $('input#max-value').val().trim(),
            mww = $('input[name="mww"]:checked').val(),
            mwl = $('input[name="mwl"]:checked').val(),
            mlz = $('input[name="mlz"]:checked').val(),
            verbose = $('input[name="verbose"]:checked').val();

        RegNumericRange(minValue, maxValue, {
          MatchWholeWord: mww ? true : false,
          MatchWholeLine: mwl ? true : false,
          MatchLeadingZero: mlz ? true : false,
          showProcess: verbose ? true : false
        }).generate(function(result){
            $('#loader').hide();
            if(result.success){
                $('#message').empty();
                $('#result textarea').val(result.data.pattern);
                if(verbose){
                    var list = '';
                    for(i in result.data.process){
                        list += '<li class="title">'+result.data.process[i].title+'</li>';
                        for(a in result.data.process[i].steps){
                          list += '<li class="step">'+result.data.process[i].steps[a]+'</li>';
                        }
                    }
                    var wrapperHeight = $(window).innerHeight() - 83;
                    $('#console .console-wrapper').css('height', wrapperHeight);
                    $('#console ul').html(list);
                }
            }else{
                $('#message').html('<div class="error">'+result.message+'</div>');
            }
        });

    });

    $('input[name="verbose"]').on("change", function(e){
        if($(this).is(':checked')){
            $('#console').animate({
                right:0
            });
        }else{
          $('#console ul').html("");
          $('#console').animate({
              right:-300
          });
        }
    });

    var clipboard = new Clipboard('#copytoclipboard');

});
