
// Taget : Display "Ajke amr mon valo nei " for 39 times

var number = 1;

while ( number <= 39){
    // console.log( number, 'Ajke amr mon valo nei');
    number++;
}

// Display between 58 to 98
for ( var i = 58 ; i <= 98; i++){
    // console.log(i);
}

// Show all even number from 412 to 456

for ( var i = 412; i <= 456; i+=2 ){
    // console.log(i);
}

// show all odd numbers 581 to 623;

for ( var i = 581; i <= 623; i+=2){
    // console.log(i);
}


 var learnTopics = ['html', 'css3', 'boostrap', 'tailwide', 'javaScript', 'metarial'];

 for ( var i = 0; i < learnTopics.length; i++){
    var learSub = learnTopics[i];
    // console.log(learSub);
 }

for (var i = 30; i<=86; i++ ){
    if(i > 44 ){
        break
    }
    // console.log(i);
}


var booksPrice = [158, 230, 198, 349, 221, 234, 23, 523, 135, 534, 200, 145];

for ( var i = 0; i < booksPrice.length; i++){
    var bookPrice = booksPrice[i];
    if(bookPrice >= 200){
        continue;
    }
    // console.log(bookPrice);
}

