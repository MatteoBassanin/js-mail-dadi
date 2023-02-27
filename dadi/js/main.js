// generare 2 numeri da 1 a 6 uno per me e uno x il computer

// comparare qual'è il più grande

// stabilire il vincitore


const numeriPlayer = Math.floor(Math.random() * 6) + 1;
console.log(numeriPlayer);

const numeriCpu = Math.floor(Math.random() * 6) + 1;
console.log(numeriCpu);

if (numeriPlayer > numeriCpu){
    console.log("Player vince");
}else if (numeriPlayer < numeriCpu){
    console.log("CPU vince");
}else {
    console.log("Pareggio");
}