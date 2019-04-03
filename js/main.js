
let n =  new Date();
y = n.getFullYear();
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
document.getElementById("fechaactual").innerHTML = dias[n.getDay()] + " " + n.getDate() +" de "+ meses[n.getMonth()] + " de " + y;
 
function googleSearch(evt){
    var googlefind = evt.target.getAttribute("alt");
    window.open("http://www.google.com/search?hl=en&q=" + escape(googlefind));
   }

var images= document.getElementsByClassName("imgComida");
for (var i=0, len=images.length, img; i<len; i++) {
    img = images[i];
    img.addEventListener ("click", googleSearch);
}
