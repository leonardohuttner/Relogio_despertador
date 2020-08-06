//Obtem Hora atual 
setInterval(function () {
    var date = new Date()
    var hora = date.getHours()
    var minutos = date.getMinutes()
    var segundos = date.getSeconds()
//Organiza os segundos
    if (segundos < 10) {
        segundos = "0" + segundos
    }
    if (minutos < 10) {
        minutos = "0" + minutos
    }
    getHora = document.getElementById('hora').textContent = hora + 'H'
    getMinutos = document.getElementById('minutos').textContent = minutos + ' M'
    getSegundos = document.getElementById('segundos').textContent = segundos + ' Segundos'

}, 10)
//Dispara com o botão "Salvar", confirma o horario agendado
function btt_salvar() {
    alert("Alerta Criado")
    var horaDesp = document.getElementById('horaDesp').value
    var minutoDesp = document.getElementById('minutoDesp').value
   
    resultado.innerHTML =  `Agendado para as ${horaDesp}:${minutoDesp}` 

//Função verificador alerta !ERRO!
    setInterval(function desp() {
        var date = new Date()
        horasAlarm = date.getHora()
        minutosAlarm = date.getMinutes()
        segundosAlarm = date.getSegundos()
        console.log(`cheguei ${horaDesp},${minutoDesp}`)//Controle
        alerta_hora(horasAlarm,minutosAlarm,segundosAlarm)
        
    }, 10)

    function alerta_hora(horasAlarm,minutosAlarm,segundosAlarm){
        console.log("chamei alerta log")
        if ( horaDesp == horasAlarm && minutoDesp == minutosAlarm && segundosAlarm == 00)
            window.alert(`São ${horaDesp}:${minutoDesp}`)
    }
}