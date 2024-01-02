var shoppingCart = {
    books : 43,
    pen : 34,
    paper : 54,
    laptop : 3,
    iPad : 5,
    mobile : 9
}


const keys = Object.keys(shoppingCart);
const values = Object.values(shoppingCart);

// loop on object

for ( var i = 0; i <keys.length; i++ ){
    const popartyName = keys[i]
    // console.log(popartyName);
    const popartyValues = shoppingCart[popartyName];
    console.log(popartyName, popartyValues);
}


for (var propartyName in shoppingCart){
    console.log(propartyName);
}