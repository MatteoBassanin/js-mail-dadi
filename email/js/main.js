


const email = prompt("Inserisci la tua email");
console.log(email);

const emailList = ["pippo@pluto.it", "gianni@pinotto.it" , "mario@luigi.it"];
console.log(emailList);

let checkEmail = false;



for(let i = 0 ; i < emailList.length ; i++){
    const emailInserita  = emailList[i];

    if(emailInserita == email){
    checkEmail = true;
    }
    
}

if (checkEmail) {
    console.log("La tua email è valida");
}else {
    console.log("La tua email non è valida");
}