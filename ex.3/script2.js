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
    hora = document.getElementById('hora').textContent = hora + 'H'
    minutos = document.getElementById('minutos').textContent = minutos + ' M'
    segundos = document.getElementById('segundos').textContent = segundos + ' Segundos'
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
    setInterval(function alerta_despertador() {
        console.log("Chamei a função despertador 2")
        if (horaDesp == hora && minutoDesp == minutos && segundos) {
            console.log("sua hora chegou")
            window.alert('Acorda!')
        }
    }, 10);

}

