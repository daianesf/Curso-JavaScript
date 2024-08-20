let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero (n) {
    if (Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){  
    if(isNumero(num.value) && !inLista(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''
    }else{
        window.alert('[ERRO] Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
                
        for( let pos of valores){
            soma += pos
            if(pos > maior){
                maior = pos
            }
            if(pos < menor)
                menor = pos
        }
        let media = soma / tot
       
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> somando os valores, temos ${soma} .</p>`
        res.innerHTML += `<p>O valor ${maior} é o maior da lista.</p>`
        res.innerHTML += `<p> O valor ${menor} é o menor da lista.</p>`
        res.innerHTML += `<p> A média dos valores é ${media.toFixed(2)} .</p>`
    }
}


