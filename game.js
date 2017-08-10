var carCompanies=["honda","ford","dodge","toyota","acura","audi","ferrari","lincon","tesla","jeep","kia"];
var numberOfTrys=20;
var lengthofCarArray=carCompanies.length;
var wins=0;
var trys=20;
var losses=0;
var dashArr=[];
var letterUsedArr=[];

window.onload = function initateHangman(){

var randomNumber = Math.floor(Math.random()*lengthofCarArray);
var randomCar=carCompanies[randomNumber];
for (var i=0; i<randomCar.length; i++ ){
    dashArr.push(" _ ");
     }
document.getElementById("gameWord").innerHTML=dashArr;
document.getElementById("noOfTrysDisplay").innerHTML="Number of Tyes: "+trys;
document.getElementById("lettersDisplay").innerHTML="Letters Used: "+letterUsedArr;
document.getElementById("winsDisplay").innerHTML="Wins: "+wins;
document.getElementById("lossDisplay").innerHTML="Loss: "+losses;

document.onkeyup=function(data){
    console.log(data);

    
    if(randomCar.indexOf(data.key) >= 0 && letterUsedArr.indexOf(data.key)<0 && data.keyCode>=65 && data.keyCode<=90){
        console.log(data.keyCode);
        for (var x = 0; x<randomCar.length; x++){
        if(randomCar[x]==data.key){
           dashArr.splice(x,1,randomCar[x]);
           document.getElementById("gameWord").innerHTML = dashArr; 
        }

        
    }
    if(dashArr.join('')==randomCar){
            wins++;
            dashArr=[];
            letterUsedArr=[];
            window.onload();
            trys=20;
            document.getElementById("noOfTrysDisplay").innerHTML="Number of Tyes: "+trys;
            document.getElementById("lettersDisplay").innerHTML="Letters Used: "+letterUsedArr;   
            }


     //dashArr.splice(randomCar.indexOf(data.key),1,randomCar[randomCar.indexOf(data.key)]);
     //document.getElementById("gameWord").innerHTML = dashArr; 
     if (letterUsedArr.indexOf(data.key) == -1 && data.keyCode>=65 && data.keyCode<=90) {
        letterUsedArr.push(data.key);

     } 
    //  trys--;
     document.getElementById("noOfTrysDisplay").innerHTML="Number of Tyes: "+trys;
    document.getElementById("lettersDisplay").innerHTML="Letters Used: "+letterUsedArr;   
    }
else{
    if (letterUsedArr.indexOf(data.key) == -1 && data.keyCode>=65 && data.keyCode<=90 ) {
        letterUsedArr.push(data.key);
    trys--; 
    } 
     
     document.getElementById("noOfTrysDisplay").innerHTML="Number of Tyes: "+trys;
    document.getElementById("lettersDisplay").innerHTML="Letters Used: "+letterUsedArr; 
}
// if(trys>0 && ){}
// else 
    if(trys==0){
    trys=20;
    dashArr=[];
    losses++;
    letterUsedArr=[];
    window.onload();
}



};

};




