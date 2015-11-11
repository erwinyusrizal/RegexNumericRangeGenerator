# Regex Numeric Range Generator
Simple Regex Numeric Range Generator - inspired by <http://utilitymill.com/utility/Regex_For_Range> since the website is down very often, I create this version using Javascript

## Usage

### Options
```
MatchWholeWord: Boolean (default: false)
MatchWholeLine: Boolean (default: false)
MatchLeadingZero: Boolean (default: false)
showProcess: Boolean (default: false)
```

### Save The Output in a variable
```
var strReg = RegNumericRange(minValue, maxValue, {
    MatchWholeWord: mww ? true : false,
    MatchWholeLine: mwl ? true : false,
    MatchLeadingZero: mlz ? true : false,
    showProcess: verbose ? true : false
}).generate();
```

### Use Callback
```
RegNumericRange(minValue, maxValue, {
    MatchWholeWord: mww ? true : false,
    MatchWholeLine: mwl ? true : false,
    MatchLeadingZero: mlz ? true : false,
    showProcess: verbose ? true : false
}).generate(function(result){
    $('#loader').hide();
    if(result.success){
        $('#message').empty();
        $('#result textarea').val(result.pattern);
    }else{
        $('#message').html('<div class="error">'+result.message+'</div>');
    }
});
```

## Todos
 - Make this support float number