function Carregar(){
    var data = new Date();
    var h = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();
    var msg = document.getElementById('texto');
    var img = document.getElementById('imagem');
    //hora = 7 //debug
    Relogio();
    if(h > 0 && h<= 12){
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    }else if (h >12 && h <= 18){
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#d58a36'
    }else{
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#1e2a38'
    }
    function Relogio(){
        setInterval(Relogio,1000);
        var data = new Date();
        var h = data.getHours();
        var m = data.getMinutes();
        var s = data.getSeconds();
        //var painel = document.getElementById('relogio')
        msg.innerHTML = `Agora são <strong>${zero(h)}:${zero(m)}:${zero(s)}</strong> horas.`
    }
    function zero(x){
        if(x < 10){
            x = "0" + x
        }return x;
    }
}