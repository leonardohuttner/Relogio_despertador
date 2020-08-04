

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano').value 
    var res = document.querySelector(`div#res`)

    if (fano == 0 || Number(fano) > ano ){
        window.alert('Erro, valor invalido')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano)
        var genero = ''
        
        if (fsex[1].checked){
            genero = 'homem'
        }else{
            genero = 'mulher'
        }
        res.innerHTML = `Sua idade é ${idade} e genero ${genero}`
    }
}