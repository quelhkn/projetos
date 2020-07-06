function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.lenght == 0 || Number(fano.value) > ano){

        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero= 'Homem'
            if (idade >=0 && idade <10){
                //criança
               // img.setAttribute('src', 'foto.png')
            }else if (idade  < 21){
                //jovem
                // img.setAttribute('src', 'foto.png')
            }else if( idade < 50){
                //adulto
                // img.setAttribute('src', 'foto.png')
            } else{
                //velho
                // img.setAttribute('src', 'foto.png')
            }
        }else if (fsex[1].checked){
            genero= 'Mulher'

            if (idade >=0 && idade <10){
                //criança
                // img.setAttribute('src', 'foto.png')
            }else if (idade  < 21){
                //jovem
                // img.setAttribute('src', 'foto.png')
            }else if( idade < 50){
                //adulto
                // img.setAttribute('src', 'foto.png')
            } else{
                //velho
                // img.setAttribute('src', 'foto.png')
            }
        }
        res.style.textAling='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}