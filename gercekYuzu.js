 function hesaplaFiyat(){
    var input=document.getElementById('istekMetin').value.trim();
    var sonuc=document.getElementById('sonuc');
    if(input.length == 0){
        sonuc.textContent= "bir istek yaz bi önce mal";
        return;
    }
    var fiyat = input.length * 2;
    sonuc.textContent= "Richard bunu " + fiyat + " $'a halleder";
 }