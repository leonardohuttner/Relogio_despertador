setInterval(atualiza_hora, 10)

function atualiza_hora() {
    date = new Date
    hora = date.getHours()
    minutos = date.getMinutes()
    segundos = date.getSeconds()

    //Organiza os segundos
    if (segundos < 10) {
        segundos = "0" + segundos
    }
    if (minutos < 10) {
        minutos = "0" + minutos
    }
    visor_hora(hora, minutos, segundos)

}

function visor_hora() {
    hora = document.getElementById('hora').textContent = hora 
    minutos = document.getElementById('minutos').textContent = minutos 
    segundos = document.getElementById('segundos').textContent = segundos 
}

function btt_salvar() {
    alert("Alerta Criado")
    horaDesp = document.getElementById('horaDesp').value
    minutoDesp = document.getElementById('minutoDesp').value
    resultado.innerHTML = `Agendado para ${horaDesp}:${minutoDesp}`
    despertador(horaDesp, minutoDesp)
}

function despertador(horaDesp, minutoDesp) {
    console.log("Chamei a função despertador")
   despertador_teste = setInterval(alerta_despertador, 1000);

}

function alerta_despertador() {
    console.log( minutoDesp == minutos)
    if (minutoDesp == minutos) {

        console.log("Chamei a função despertador 2")
        window.alert('Acorda!')
        som = document.getElementById("som")
        som.play()
        resultado.innerHTML = 'Sucess'
        clearInterval(despertador_teste)

    }
}