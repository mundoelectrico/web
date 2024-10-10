
window.addEventListener("load",function(){

  document.getElementById("NOSEKWH" ).hidden = true;
  document.getElementById("AlertaFP").hidden = true;
  document.getElementById("Moneda").value = "Dolares";
  document.getElementById("LabelCosto").innerHTML = "<center><strong> Dolares </strong></center>";
  document.getElementById("CostoTotal").innerHTML = "<center><strong>        </strong></center>";
  document.getElementById("Consumo"   ).innerHTML = "<center><strong>        </strong></center>";
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



NosePotencia.addEventListener("click",function(){
  var NosePotencia = document.getElementById("NosePotencia").checked;
 
  if ( NosePotencia == true  ){ document.getElementById("NOSEKWH").hidden = false; }
  else                        { document.getElementById("NOSEKWH").hidden = true; }
           
});


Monofasica.addEventListener("click",function(){
  var Monofasica = document.getElementById("Monofasica").checked;
  var ValorPotencia = document.getElementById("ValorPotencia").value;

  if ( Monofasica == true  ){ document.getElementById("Trifasica" ).checked = false; }
  else {   document.getElementById("Trifasica" ).checked = true; }

  var Monofasica = document.getElementById("Monofasica").checked;
  var V = document.getElementById("Voltaje").value;
  var I = document.getElementById("Corriente").value;
  var COS = document.getElementById("FP").value;
  var K;

  if (Monofasica == true ){ K = 1;
  } else { K = 1.73;   }


  var Calculo = MultiploPotenciaInv(ValorPotencia, K*V*I*COS);

  Calculo = Math.round(1000*Calculo)/1000;

  document.getElementById("Potencia").value = Calculo;

});

Trifasica.addEventListener("click",function(){
  var Trifasica = document.getElementById("Trifasica").checked;
  var ValorPotencia = document.getElementById("ValorPotencia").value;
 
  if ( Trifasica == true  ){ document.getElementById("Monofasica" ).checked = false; }
  else {   document.getElementById("Monofasica").checked = true; }

  var Monofasica = document.getElementById("Monofasica").checked;
  var V = document.getElementById("Voltaje").value;
  var I = document.getElementById("Corriente").value;
  var COS = document.getElementById("FP").value;
  var K;

  if (Monofasica == true ){ K = 1;
  } else { K = 1.73;   }

  var Calculo = MultiploPotenciaInv(ValorPotencia, K*V*I*COS);

  Calculo = Math.round(1000*Calculo)/1000;

  document.getElementById("Potencia").value = Calculo;


});


Voltaje.addEventListener("change",function(){

  var ValorPotencia = document.getElementById("ValorPotencia").value;
  var Monofasica = document.getElementById("Monofasica").checked;
  var V = document.getElementById("Voltaje").value;
  var I = document.getElementById("Corriente").value;
  var COS = document.getElementById("FP").value;
  var K;

  if (Monofasica == true ){ K = 1;
  } else { K = 1.73;   }

  var Calculo = MultiploPotenciaInv(ValorPotencia, K*V*I*COS);
  
  Calculo = Math.round(1000*Calculo)/1000;

  document.getElementById("Potencia").value = Calculo;
           
});


Corriente.addEventListener("change",function(){

  var ValorPotencia = document.getElementById("ValorPotencia").value;
  var Monofasica = document.getElementById("Monofasica").checked;
  var V = document.getElementById("Voltaje").value;
  var I = document.getElementById("Corriente").value;
  var COS = document.getElementById("FP").value;
  var K;

  if (Monofasica == true ){ K = 1;
  } else { K = 1.73;   }

  var Calculo = MultiploPotenciaInv(ValorPotencia, K*V*I*COS);

  Calculo = Math.round(1000*Calculo)/1000;
 
  document.getElementById("Potencia").value = Calculo;
         
});


FP.addEventListener("change",function(){

  var ValorPotencia = document.getElementById("ValorPotencia").value;
  var Monofasica = document.getElementById("Monofasica").checked;
  var V = document.getElementById("Voltaje").value;
  var I = document.getElementById("Corriente").value;
  var COS = document.getElementById("FP").value;
  var K;

  if (Monofasica == true ){ K = 1;
  } else { K = 1.73;   }


  if (ValidarFP(COS) == true ){
    var Calculo = MultiploPotenciaInv(ValorPotencia, K*V*I*COS);
    Calculo = Math.round(1000*Calculo)/1000;
    document.getElementById("Potencia").value = Calculo;
    } else {
    document.getElementById("Potencia").value = 0;
    document.getElementById("FP").value = 0;
  }
         
});


ValorPotencia.addEventListener("change",function(){

  var ValorPotencia = document.getElementById("ValorPotencia").value;
  var Potencia      = document.getElementById("Potencia"     ).value;

  if (ValorPotencia == "KW"){ document.getElementById("Potencia").value = Potencia/1000; } 

  if (ValorPotencia == "W" ){ document.getElementById("Potencia").value = 1000*Potencia; } 

});


ValidarFP = function (FP) {

  var Validar = true;
  document.getElementById("AlertaFP").hidden = true;

 if (FP < 0){
    Validar = false;
    document.getElementById("AlertaFP").hidden = false;
  } 
  if (FP > 1){
    Validar = false;
    document.getElementById("AlertaFP").hidden = false;
  }   

  return Validar;

};


Calcular.addEventListener("click",function(){

  var ValorPotencia = document.getElementById("ValorPotencia").value;
  var Potencia      = document.getElementById("Potencia"     ).value;
  var TipoTiempo    = document.getElementById("TipoTiempo"   ).value;
  var Tiempo        = document.getElementById("Tiempo"       ).value;
  var Tarifa        = document.getElementById("Tarifa"       ).value;
  var Moneda        = document.getElementById("Moneda"       ).value;

  var consumo = Math.round( 1000*MultiploTime(TipoTiempo,Tiempo)*MultiploPotencia(ValorPotencia,Potencia))/1000;

  document.getElementById("Consumo").innerHTML = "<center><strong>" + consumo  + "</strong></center>";

  var costo = Math.round( 1000*consumo*Tarifa)/1000;
    
  document.getElementById("CostoTotal").innerHTML = "<center><strong>" + costo  + "</strong></center>";

  document.getElementById("LabelCosto").innerHTML = "<center><strong>" + Moneda + "</strong></center>";


});




MultiploTime = function (Tiempo, Cantidad) {

 var K; 

 if (Tiempo ==  "Minutos"){ K = Cantidad/60;   } 
 if (Tiempo ==  "Horas"  ){ K = Cantidad;      }
 if (Tiempo ==  "Dias"   ){ K = Cantidad*24;   }
 if (Tiempo ==  "Semanas"){ K = Cantidad*24*7; }

 return K;

};


MultiploPotencia = function (Vatios, Cantidad) {  

  var K; 

  if ( Vatios == "KW"   ){ K = Cantidad;      } 
  if ( Vatios == "W"    ){ K = Cantidad/1000; }
  
  return K;
  
};


MultiploPotenciaInv = function (Vatios, Cantidad) {  

  var K; 

  if ( Vatios == "W"  ){ K = Cantidad;      } 
  if ( Vatios == "KW" ){ K = Cantidad/1000; }
  
  return K;
  
};
