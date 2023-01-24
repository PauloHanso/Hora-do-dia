function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}:${minutos} horas!`
    if (hora >= 0 && hora <12){
        //Bom Dia PORRA
        img.src="manha.png"
        document.body.style.background = "#add8e6"
    }else if (hora >= 12 && hora < 18){
        // Boa tarde PORRA
        img.src="tarde.png"
        document.body.style.background = "#ff7f00"
    }else {
        img.src="noite.png"
    }
}

