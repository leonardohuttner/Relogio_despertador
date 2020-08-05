
setInterval(function () {
    var date = new Date()
    var hora = date.getHours()
    var minutos = date.getMinutes()
    var segundos = date.getSeconds()

    getHora = document.getElementById('horas')
    getMinutos = document.getElementById('minutos')
    getSegundos = document.getElementById('segundos')

    document.getElementById('hora').textContent = hora + ' Horas'
    document.getElementById('minutos').textContent = minutos + ' Minutos'
    document.getElementById('segundos').textContent = segundos + ' Segundos'
}, 10)

function desp() {
    alert("Alerta Criado")
    var horaDesp = document.getElementsByName('hora_Desp')
    var minutoDesp = document.getElementsByName('minuto_Desp').textContent
alert(`${horaDesp}`)
    if (horaDesp.values == hora && minutoDesp == minutos)
        window.alert(`São ${horaDesp}:${minutoDesp}`)
}
