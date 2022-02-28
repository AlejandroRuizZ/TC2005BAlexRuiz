
var total = 0;

var precioSifu= 60;
var precioRing= 100;
var precioGhost= 40;
var Tax = .20;
boton.onclick = () =>{
   let sifu = document.getElementById("sifuInput").value;
    let ring = document.getElementById("ringInput").value;  
    let ghost = document.getElementById("ghostInput").value; 

    var total = (precioGhost*ghost) + (precioRing*ring) + (precioSifu*sifu);
    document.getElementById("total").innerHTML = total;
    var totalMasTax = total + (total*Tax);
    document.getElementById("totalMasTax").innerHTML = totalMasTax;
}







