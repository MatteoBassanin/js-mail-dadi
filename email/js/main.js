


let email = prompt("Inserisci la tua email");
console.log(email);

let emailList = ["pippo@pluto.it", "gianni@pinotto.it" , "mario@luigi.it"];
console.log(emailList);




for(let i = 0 ; i < emailList.length ; i++){
    if(email == emailList){
    console.log("La tua email è valida");
    }else{
    console.log("La tua email non è valida");
    }

}