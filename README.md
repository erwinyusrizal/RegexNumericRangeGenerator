# Regex Numeric Range Generator
Simple Regex Numeric Range Generator - inspired by <http://utilitymill.com/utility/Regex_For_Range> since the website is down very often, I create this version using Javascript

## Demo
[Demo] - Check the online demo page

[Demo]: <http://gamon.webfactional.com/regexnumericrangegenerator/>


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
var objReg = RegNumericRange(minValue, maxValue, {
    MatchWholeWord: true,
    MatchWholeLine: true,
    MatchLeadingZero: true,
    showProcess: false //if true will generate a process object
}).generate();

console.log(objReg);

```

### Use Callback
```
RegNumericRange(minValue, maxValue, {
    MatchWholeWord: true,
    MatchWholeLine: true,
    MatchLeadingZero: true,
    showProcess: false //if true will generate a process object
}).generate(function(result){
    console.log(result);
});
```

## Todos
 - Make this support float number