
var numbers = [34, 53, 35, 543, 65, 68, 66, 61,  75, 94, 29, 36];


for ( var i = 0 ; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 65){
        continue;
    }
    console.log(number);
}

