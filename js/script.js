

function factorize(n){
    var factors = [];
    
    for(var i = 0; i<=n;i++){
        if(n % i == 0){
            factors.push(i);
        }
    }
    return factors;
}


function findUnique(str){
    var uniqueStr = "";
    for(var i=0;i<str.length;i++){
        if(uniqueStr.indexOf(str.charAt(i))  ==  -1){
            uniqueStr += str[i];
        }
    }
    return uniqueStr;
}// end findUnique


function multiply(g,h){
    return g*h;
}//end mult

function power(n,m){
    return n**m;
}//end power

function doOperation(x,y,operator){
    return operator(x,y);

}// end do operation
