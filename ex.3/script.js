
setInterval(function () {
    var date = new Date()
    var hora = date.getHours()
    var minutos = date.getMinutes()
    var segundos = date.getSeconds()

    if (segundos < 10) {
        segundos = "0" + segundos
    }
    getHora = document.getElementById('hora').textContent = hora + 'H'
    getMinutos = document.getElementById('minutos').textContent = minutos + ' M'
    getSegundos = document.getElementById('segundos').textContent = segundos + ' Segundos'

}, 10)

function alerta_salvar() {
    alert("Alerta Criado")
    let horaDesp = document.getElementById('hora22').value
    let minutoDesp = document.getElementById('minuto22').value
    //var resultado = document.getElementById('resultado')
    resultado.innerHTML =  `Agendado para as ${horaDesp}:${minutoDesp}` 


    setInterval(function desp() {
        

        let horaDesp = document.getElementById('hora22').value
        let minutoDesp = document.getElementById('minuto22').value
        console.log(`cheguei ${horaDesp},${minutoDesp}`)

        if (horaDesp == hora && minutoDesp == minutos)
            window.alert(`São ${horaDesp}:${minutoDesp}`)
    }, 10)
}