function myFunction(){ 
    var phi = 3.14 
    var diameter = document.getElementById("diameter").value 
    var jari_jari = diameter/2
    var tinggi = document.getElementById("tinggi").value 
    var volume = phi * (jari_jari* jari_jari) * tinggi 
    document.getElementById("jari-jari").innerText = "Jari-Jari = " + jari_jari + " cm" 
    document.getElementById("Tinggi").innerText = "Tinggi = " + tinggi + " cm" 
    document.getElementById("demo").innerText = "Volume tabung = " + volume + " liter" 
} 