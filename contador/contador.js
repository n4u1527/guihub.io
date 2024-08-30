// Establece la fecha objetivo
const fechaObjetivo = new Date("2024-12-31T00:00:00");
function actualizarContador() {
    // Obtiene la fecha y hora actual
    const ahora = new Date();
    // Calcula la diferencia en milisegundos
    const diferencia = fechaObjetivo - ahora;
    // Convierte la diferencia a días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    //Muestra el contador en el HTML
    document.getElementById("contador").innerHTML =
        `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
    // Si la fecha objetivo ha pasado, detén el contador
    if (diferencia < 0) {
        clearInterval(intervalo);
        document.getElementById("contador").innerHTML = "¡La fecha ha llegado!";
    }
}
// Actualiza el contador cada segundo
const intervalo = setInterval(actualizarContador, 1000);