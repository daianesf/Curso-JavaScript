function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            if (idade >= 0 && idade < 10) {
                //criança 
                genero = 'Criança'
                img.setAttribute('src', 'images/foto-criança-m.png')
            } else if (idade < 21) {
                //jovem 
                genero = 'Adolescente'
                img.setAttribute('src', 'images/foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto 
                genero = 'Homem'
                img.setAttribute('src', 'images/foto-adulto-m.png')
            } else {
                //idoso 
                genero = 'Idoso'
                img.setAttribute('src', 'images/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            if (idade >= 0 && idade < 10) {
                //criança 
                genero = 'Criança'
                img.setAttribute('src', 'images/foto-criança-f.png')
            } else if (idade < 21) {
                //jovem 
                genero = 'Adolescente'
                img.setAttribute('src', 'images/foto-jovem-f.png')
            } else if (idade < 50) {
                //adulto 
                genero = 'Mulher'
                img.setAttribute('src', 'images/foto-adulto-f.png')
            } else {
                //idoso 
                genero = 'Idosa'
                img.setAttribute('src', 'images/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}