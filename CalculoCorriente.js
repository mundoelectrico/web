
window.addEventListener("load",function(){

  document.getElementById("Alerta").hidden=true;
  document.getElementById("Resultado").hidden=true;
  document.getElementById("LabelFP").hidden=true;


}); 

UnidadPotencia.addEventListener("change",function(){

  var Potencia = document.getElementById("UnidadPotencia");
  let PotenciaSeleccionada = Potencia.options[Potencia.selectedIndex].value;

    if (PotenciaSeleccionada =="W" || PotenciaSeleccionada =="KW" || PotenciaSeleccionada =="HP"){
      document.getElementById("LabelFP").hidden=false;
    } else {
      document.getElementById("LabelFP").hidden=true; 
      document.getElementById("Alerta").hidden=true; 
    }

         
});

BotonCalcular.addEventListener("click",function(){

  var TipoCalculo = document.getElementById("TipoCorriente");
  var Voltaje = document.getElementById("Voltaje").value;
  var Potencia = document.getElementById("Potencia").value;
  var UnidadesPotencia = document.getElementById("UnidadPotencia").value;
  var FP = document.getElementById("FactorPotencia").value;


  document.getElementById("Alerta").hidden=true;
  document.getElementById("Resultado").hidden=true;

  // Validacion Datos

  var Confirmacion = true;

  if (Potencia == 0 ){ 
    Confirmacion = false;
    document.getElementById("Alerta").hidden=false;
    document.getElementById("Alerta").innerHTML = "<strong> Debe introducir el valor de la Potencia! </strong>";
  }


  if (Voltaje == 0 ){ 
    Confirmacion = false;
    document.getElementById("Alerta").hidden=false;
    document.getElementById("Alerta").innerHTML = "<strong> Debe introducir el valor de Voltaje! </strong>";
  }


  if (UnidadesPotencia =="W" || UnidadesPotencia =="KW" ){

    if (FP <= 0){
      Confirmacion = false;
      document.getElementById("Alerta").hidden=false;
      document.getElementById("Alerta").innerHTML = "<strong> Debe introducir un Valor de Factor de Potencia entre 0 y 1  </strong>";
    } 
    if (FP > 1){
      Confirmacion = false;
      document.getElementById("Alerta").hidden=false;
      document.getElementById("Alerta").innerHTML = "<strong> Debe introducir un Valor de Factor de Potencia entre 0 y 1  </strong>";
    }   
    
    
  }

  // Fin Validacion Datos



  // Inicio Calculos


  if ( Confirmacion == true ){

    var Multiplo = Power(UnidadesPotencia);
    let TipoCorriente = TipoCalculo.options[TipoCalculo.selectedIndex].value;



      if (TipoCorriente == "Continua"){
        var Icalculada = Multiplo*Potencia/(Voltaje);
        var IFinal     = Math.round(1000*Icalculada)/1000;
      } 


      if (TipoCorriente == "AlternaMonofasica" || TipoCorriente == "AlternaBifasica" ){

        if ( UnidadesPotencia == "KVA" || UnidadesPotencia == "VA" ){ 

          var Icalculada = Multiplo*Potencia/(Voltaje);
          var IFinal     = Math.round(1000*Icalculada)/1000;
        } 
     
         if ( UnidadesPotencia == "KW" || UnidadesPotencia == "W" || UnidadesPotencia == "HP"){ 
          var Icalculada = Multiplo*Potencia/(Voltaje *FP);
          var IFinal     = Math.round(1000*Icalculada)/1000;
        } 
    
      }
   

      if (TipoCorriente == "AlternaTrifasica"){

        if ( UnidadesPotencia == "KVA" || UnidadesPotencia == "VA" || UnidadesPotencia == "HP" ){ 

          var Icalculada = Multiplo*Potencia/(Math.sqrt(3)*Voltaje);
          var IFinal     = Math.round(1000*Icalculada)/1000;
        } 
     
        if ( UnidadesPotencia == "KW" || UnidadesPotencia == "W" || UnidadesPotencia == "HP"){ 
          var Icalculada = Multiplo*Potencia/(Math.sqrt(3)*Voltaje *FP);
          var IFinal     = Math.round(1000*Icalculada)/1000;
        } 

      }

      document.getElementById("Resultado").hidden=false;
      document.getElementById("Resultado").innerHTML = "<strong>" + IFinal + " Amp </strong>";


  }

  // Fin Calculos

  
         
});






Power = function (Unidad) {  
  if ( Unidad == "KVA" ){ return 1000;  } 
  if ( Unidad == "VA"  ){ return 1;     } 
  if ( Unidad == "KW"  ){ return 1000;  } 
  if ( Unidad == "W"   ){ return 1;     } 
  if ( Unidad == "HP"  ){ return 745.7; } 
};