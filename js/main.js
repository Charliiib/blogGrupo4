// funcion para el reloj

function iniciaReloj() {
  var hoy = new Date();
  var hr = hoy.getHours();
  var min = hoy.getMinutes();
  var sec = hoy.getSeconds();
  ap = hr < 12 ? "<span>AM</span>" : "<span>PM</span>";
  hr = hr == 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;
  hr = controlaTiempo(hr);
  min = controlaTiempo(min);
  sec = controlaTiempo(sec);
  document.getElementById("clock").innerHTML =
    hr + ":" + min + ":" + sec + " " + ap;

  var meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  var dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  var diaDeSemana = dias[hoy.getDay()];
  var diaActual = hoy.getDate();
  var mesActual = meses[hoy.getMonth()];
  var anioActual = hoy.getFullYear();
  var date =
    diaDeSemana + ", " + diaActual + " " + mesActual + " " + anioActual;
  document.getElementById("date").innerHTML = date;

  var time = setTimeout(function () {
    iniciaReloj();
  }, 500);
}
function controlaTiempo(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
iniciaReloj();

// funcion para cambiar la imagen al hacer mouseover
function cambiarImagen(elementId, nuevaImagen) {
  const imagen = document.getElementById(elementId);
  if (imagen) {
    const imagenOriginal = imagen.src;

    imagen.addEventListener("mouseover", function () {
      this.src = nuevaImagen;
    });
    imagen.addEventListener("mouseout", function () {
      this.src = imagenOriginal;
    });
  }
}

cambiarImagen("carlos-img", "imagenes/perfil3.jpeg");
cambiarImagen("agus-img", "imagenes/perfilagus2.jpg");
cambiarImagen("valen-img", "imagenes/perfilvalen2.jpg");

document
  .getElementById("botonCuestionario")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (
      confirm(
        "¡Atención! Será re-dirigido a un cuestionario sobre nosotros 3. ¿Desea continuar?"
      )
    ) {
      window.location.href = "cuestionario.html";
    }
  });
