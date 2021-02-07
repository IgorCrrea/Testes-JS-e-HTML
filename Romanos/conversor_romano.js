function convert() {
    var roma = document.getElementById('romanos').value;
    let res = document.getElementById('res');
    respf = romanos2int(roma)
    res.innerText = respf
    
    
}

function romanos2int(romanos) {
    romanos = romanos.toUpperCase();
    let n = 0;
    const numeros = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    for(let i = 0; i < romanos.length; i++){

        let atual = romanos[i]
        let prox = romanos[i+1]
        
         if (prox && numeros[prox] > numeros[atual]){
             n -= numeros[atual]
        }else{
            n += numeros[atual]
        }
    }
   return n;
}