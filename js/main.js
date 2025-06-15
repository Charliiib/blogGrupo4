console.log("El archivo JS se cargó correctamente");


function iniciaReloj() {
    var hoy = new Date();
    var hr = hoy.getHours();
    var min = hoy.getMinutes();
    var sec = hoy.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    hr = controlaTiempo(hr);
    min = controlaTiempo(min);
    sec = controlaTiempo(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var diaDeSemana = dias[hoy.getDay()];
    var diaActual = hoy.getDate();
    var mesActual = meses[hoy.getMonth()];
    var anioActual = hoy.getFullYear();
    var date = diaDeSemana+", "+diaActual+" "+mesActual+" "+anioActual;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ iniciaReloj() }, 500);
}
function controlaTiempo(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}