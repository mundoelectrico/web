 
  window.addEventListener("load",function(){
  
    document.getElementById("Potencia"   ).hidden = false;
    document.getElementById("Temperatura").hidden = true;
    document.getElementById("Longitud"   ).hidden = true;

    document.getElementById("Resultados").hidden = true;
    document.getElementById("movil-menu").hidden = true;
  
  }); 
  
  hamburguesa.addEventListener("click",function(){

    var Visible = document.getElementById("movil-menu").hidden;
    var intro = document.getElementById('movil-menu');
   
  
    if (Visible == true){
      document.getElementById("movil-menu").hidden = false;
      intro.className = 'movil-menu';
    } else {
      document.getElementById("movil-menu").hidden = true;
      intro.className = 'menu-oculto';
    }
  
  }); 
      
  
TipoUnidad.addEventListener("change",function(){

    var Unidad = document.getElementById("TipoUnidad");
    let Tipo = Unidad.options[Unidad.selectedIndex].value;
  
    if (Tipo =="Potencia"){
      document.getElementById("Potencia"   ).hidden = false;
      document.getElementById("Temperatura").hidden = true;
      document.getElementById("Longitud"   ).hidden = true;
    }

    if (Tipo =="Energia"){
      document.getElementById("Potencia"   ).hidden = true;
      document.getElementById("Temperatura").hidden = true;
      document.getElementById("Longitud"   ).hidden = true;
    }

    if (Tipo =="Temperatura"){
      document.getElementById("Potencia"   ).hidden = true;
      document.getElementById("Temperatura").hidden = false;
      document.getElementById("Longitud"   ).hidden = true;
    }

    if (Tipo =="Longitud"){
      document.getElementById("Potencia"   ).hidden = true;
      document.getElementById("Temperatura").hidden = true;
      document.getElementById("Longitud"   ).hidden = false;
    }

    
}); 


Convertir.addEventListener("click",function(){

  var Unidad = document.getElementById("TipoUnidad");
  let Tipo = Unidad.options[Unidad.selectedIndex].value;

  var UnidadP = document.getElementById("UnidadPotencia");
  let Potencia = UnidadP.options[UnidadP.selectedIndex].value;

  var UnidadT = document.getElementById("UnidadTemperatura");
  let Temperatura = UnidadT.options[UnidadT.selectedIndex].value;

  var UnidadL = document.getElementById("UnidadLongitud");
  let Longitud = UnidadL.options[UnidadL.selectedIndex].value;

  var Valor = document.getElementById("Cantidad").value;


  if (Tipo =="Potencia"){
    var Resultado = Array.of(4);
    Resultado = CalculoPotencia(Valor, Potencia);

    document.getElementById("Resultados").hidden = false;
    
    document.getElementById("Fila1").innerHTML = "<strong>"+Valor +" "+ Potencia +" = "    + Resultado[0]+" </strong><br>";
    document.getElementById("Fila2").innerHTML = "<strong>"+Valor +" "+ Potencia +" = "    + Resultado[1]+" </strong><br>";
    document.getElementById("Fila3").innerHTML = "<strong>"+Valor +" "+ Potencia +" = "    + Resultado[2]+" </strong><br>";
    document.getElementById("Fila4").innerHTML = "<strong>"+Valor +" "+ Potencia +" = "    + Resultado[3]+" </strong><br>";
    document.getElementById("Fila5").innerHTML = "<strong> </strong><br>";

  }

  
  if (Tipo =="Temperatura"){

    var Resultado = Array.of(5);
    Resultado = CalculoTemp(Valor, Temperatura);

    document.getElementById("Resultados").hidden = false;
    
    document.getElementById("Fila1").innerHTML = "<strong>"+Valor +" "+ "°"+ Temperatura +" = "    + Resultado[0]+" </strong><br>";
    document.getElementById("Fila2").innerHTML = "<strong>"+Valor +" "+ "°"+ Temperatura +" = "    + Resultado[1]+" </strong><br>";
    document.getElementById("Fila3").innerHTML = "<strong> </strong><br>";
    document.getElementById("Fila4").innerHTML = "<strong> </strong><br>";
    document.getElementById("Fila5").innerHTML = "<strong> </strong><br>";
  
  }


  if (Tipo =="Longitud"){
    var Resultado = Array.of(5);
    Resultado = CalculoLong(Valor, Longitud);

    document.getElementById("Resultados").hidden = false;
    
    document.getElementById("Fila1").innerHTML = "<strong>"+Valor +" "+ Longitud +" = "    + Resultado[0]+" </strong><br>";
    document.getElementById("Fila2").innerHTML = "<strong>"+Valor +" "+ Longitud +" = "    + Resultado[1]+" </strong><br>";
    document.getElementById("Fila3").innerHTML = "<strong>"+Valor +" "+ Longitud +" = "    + Resultado[2]+" </strong><br>";
    document.getElementById("Fila4").innerHTML = "<strong>"+Valor +" "+ Longitud +" = "    + Resultado[3]+" </strong><br>";
    document.getElementById("Fila5").innerHTML = "<strong>"+Valor +" "+ Longitud +" = "    + Resultado[4]+" </strong><br>";

  }


}); 



CalculoPotencia = function (Valor, UnidadPotencia) {

  var Conversion = Array.of(4);

  if (UnidadPotencia =="W"){
 
    Conversion[0] = Valor*0.001      + " KW";
    Conversion[1] = Valor*0.00134102 + " HP";
    Conversion[2] = Valor*3.414135   + " BTU/h";
    Conversion[3] = Valor*0.86       + " Kcal/h";
    
    return Conversion;
  }


  if (UnidadPotencia =="KW"){
    Conversion[0] = Valor*1000     + " W";
    Conversion[1] = Valor*1.34102  + " HP";
    Conversion[2] = Valor*3414.135 + " BTU/h";
    Conversion[3] = Valor*860      + " Kcal/h";
    
    return Conversion;
  }


  if (UnidadPotencia =="Hp"){
    Conversion[0] = Valor*745.7      + " W";
    Conversion[1] = Valor*745.7/1000 + " KW";
    Conversion[2] = Valor*2544.43    + " BTU/h";
    Conversion[3] = Valor*641.19     + " Kcal/h";
    
    return Conversion;
  }


  if (UnidadPotencia =="BTU/h"){
    Conversion[0] = Valor*0.2929      + " W";
    Conversion[1] = Valor*0.2929/1000 + " KW";
    Conversion[2] = Valor/2544.43     + " HP";
    Conversion[3] = Valor*0.25199     + " Kcal/h";
    
    return Conversion;
  }

  
  if (UnidadPotencia =="Kcal/h"){
    Conversion[0] = Valor/0.86 + " W";
    Conversion[1] = Valor/860 + " KW";
    Conversion[2] = Valor/641.49 + " HP";
    Conversion[3] = Valor/0.25199 + " BTU/h";
    
    return Conversion;
  }

};



CalculoTemp = function (Valor, Unidadtemp) {

  var Conversion = Array.of(5);

  if (Unidadtemp =="C"){
    Conversion[0] = ((9*Valor/5)+32)     + " °F";
    Conversion[1] =  (1*Valor + 273.15)  + " °K";
    Conversion[2] = " ";
    Conversion[3] = " ";
    Conversion[4] = " ";
    
    
    return Conversion;
  }

  if (Unidadtemp =="K"){
    Conversion[0] = ((9*(1*Valor-273.15)/5)+32)  + " °F";
    Conversion[1] =   1*Valor-273.15             + " °C";
    Conversion[2] = " ";
    Conversion[3] = " ";
    Conversion[4] = " ";
    
    return Conversion;
  }

  if (Unidadtemp =="F"){
    Conversion[0] =   5*(Valor-32)/9             + " °C";
    Conversion[1] = ((5*(Valor-32)/9) + 273.15)  + " °K";
    Conversion[2] = " ";
    Conversion[3] = " ";
    Conversion[4] = " ";
    
    return Conversion;
  }


};



CalculoLong = function (Valor, UnidadLong) {

  var Conversion = Array.of(5);

  if (UnidadLong =="Km"){

    Conversion[0] = Valor*1000    + " m";
    Conversion[1] = Valor*100000  + " cm";
    Conversion[2] = Valor*1000000 + " mm";
    Conversion[3] = Valor*3280.84 + " pies";
    Conversion[4] = Valor*39370.1 + " pulg";
    
    return Conversion;
  }

  if (UnidadLong =="m"){

    Conversion[0] = Valor*0.001   + " Km";
    Conversion[1] = Valor*100     + " cm";
    Conversion[2] = Valor*1000    + " mm";
    Conversion[3] = Valor*3.28084 + " pies";
    Conversion[4] = Valor*39.37   + " pulg";
    
    return Conversion;
  }

  if (UnidadLong =="cm"){

    Conversion[0] = Valor/100000 + " Km";
    Conversion[1] = Valor*0.01   + " m";
    Conversion[2] = Valor*10     + " mm";
    Conversion[3] = Valor*0.0328 + " pies";
    Conversion[4] = Valor*0.3937 + " pulg";
    
    return Conversion;
  }

  if (UnidadLong =="mm"){

    Conversion[0] = Valor/1000000 + " Km";
    Conversion[1] = Valor*0.001   + " m";
    Conversion[2] = Valor*0.1     + " cm";
    Conversion[3] = Valor*0.00328 + " pies";
    Conversion[4] = Valor*0.03937 + " pulg";
    
    return Conversion;
  }

  if (UnidadLong =="Pies"){

    Conversion[0] = Valor*0.0003048 + " Km";
    Conversion[1] = Valor*0.3048    + " m";
    Conversion[2] = Valor*30.48     + " cm";
    Conversion[3] = Valor*304.8     + " mm";
    Conversion[4] = Valor*12        + " pulg";
    
    return Conversion;
  }

  if (UnidadLong =="Pulg"){

    Conversion[0] = 2.54*Valor/100000 + " Km";
    Conversion[1] = Valor*0.0254      + " m";
    Conversion[2] = Valor*2.54        + " cm";
    Conversion[3] = Valor*25.4        + " mm";
    Conversion[4] = Valor/12          + " pies";
    
    return Conversion;
  }

};
