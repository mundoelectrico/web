
window.addEventListener("load",function(){

  document.getElementById("Alerta").hidden=true;
  document.getElementById("Resultado").hidden=true;
  document.getElementById("LabelFP").hidden=true;
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



UnidadPotencia.addEventListener("change",function(){

  var Potencia = document.getElementById("UnidadPotencia");
  let PotenciaSeleccionada = Potencia.options[Potencia.selectedIndex].value;

    if (PotenciaSeleccionada =="W" || PotenciaSeleccionada =="KW" || PotenciaSeleccionada =="HP"){
      document.getElementById("LabelFP").hidden=false;
    } else {
      document.getElementById("LabelFP").hidden=true; 
      document.getElementById("Alerta").hidden=true; 
    }


    var TipoCalculo = document.getElementById("TipoCorriente");
    let TipoCorriente = TipoCalculo.options[TipoCalculo.selectedIndex].value;

    if (TipoCorriente == "Continua"){
      document.getElementById("LabelFP").hidden=true;
    } 


});


TipoCorriente.addEventListener("change",function(){

  var Potencia = document.getElementById("UnidadPotencia");
  let UnidadesPotencia = Potencia.options[Potencia.selectedIndex].value;

  var TipoCalculo = document.getElementById("TipoCorriente");
  let TipoCorriente = TipoCalculo.options[TipoCalculo.selectedIndex].value;

  if (TipoCorriente !== "Continua") {
    if ( UnidadesPotencia == "KW" || UnidadesPotencia == "W" || UnidadesPotencia == "HP"){ 
      document.getElementById("LabelFP").hidden=false;
    } 
  } else {      document.getElementById("LabelFP").hidden=true;  }

});



BotonCalcular.addEventListener("click",function(){

  var TipoCalculo = document.getElementById("TipoCorriente");
  var Voltaje = document.getElementById("Voltaje").value;
  var Potencia = document.getElementById("Potencia").value;
  var UnidadesPotencia = document.getElementById("UnidadPotencia").value;
  var FP = document.getElementById("FactorPotencia").value;


  document.getElementById("Alerta").hidden=true;
  document.getElementById("Resultado").hidden=true;

  let TipoCorriente = TipoCalculo.options[TipoCalculo.selectedIndex].value;

  // Validacion Datos

  var Confirmacion = true;

  if (Potencia == 0 ){ 
    Confirmacion = false;
    document.getElementById("Alerta").hidden=false;
    document.getElementById("Alerta").innerHTML = "<strong><center> Debe introducir el valor de la Potencia!</center></strong>";
  }


  if (Voltaje == 0 ){ 
    Confirmacion = false;
    document.getElementById("Alerta").hidden=false;
    document.getElementById("Alerta").innerHTML = "<strong><center> Debe introducir el valor de Voltaje! </center></strong>";
  }


  if (UnidadesPotencia =="W" || UnidadesPotencia =="KW" || UnidadesPotencia == "HP" ){

    if (TipoCorriente == "Continua"){
    } else  {
      if (FP <= 0){
        Confirmacion = false;
        document.getElementById("Alerta").hidden=false;
        document.getElementById("Alerta").innerHTML = "<strong><center> Debe introducir un Valor de Factor de Potencia entre 0 y 1</center></strong>";
      } 
      if (FP > 1){
        Confirmacion = false;
        document.getElementById("Alerta").hidden=false;
        document.getElementById("Alerta").innerHTML = "<strong><center> Debe introducir un Valor de Factor de Potencia entre 0 y 1</center></strong>";
      }   
    }

    
    
  }

  // Fin Validacion Datos



  // Inicio Calculos


  if ( Confirmacion == true ){

    var Multiplo = Power(UnidadesPotencia);

      if (TipoCorriente == "Continua"){
        var Icalculada = Multiplo*Potencia/(Voltaje);
        var IFinal     = Math.round(100*Icalculada)/100;
      } 


      if (TipoCorriente == "AlternaMonofasica" ){

        if ( UnidadesPotencia == "KVA" || UnidadesPotencia == "VA" ){ 

          var Icalculada = Multiplo*Potencia/(Voltaje);
          var IFinal     = Math.round(100*Icalculada)/100;
        } 
     
         if ( UnidadesPotencia == "KW" || UnidadesPotencia == "W" || UnidadesPotencia == "HP"){ 
          var Icalculada = Multiplo*Potencia/(Voltaje *FP);
          var IFinal     = Math.round(100*Icalculada)/100;
        } 
    
      }
   

      if (TipoCorriente == "AlternaTrifasica"){

        if ( UnidadesPotencia == "KVA" || UnidadesPotencia == "VA" ){ 

          var Icalculada = Multiplo*Potencia/(Math.sqrt(3)*Voltaje);
          var IFinal     = Math.round(100*Icalculada)/100;
        } 
     
        if ( UnidadesPotencia == "KW" || UnidadesPotencia == "W" || UnidadesPotencia == "HP"){ 
          var Icalculada = Multiplo*Potencia/(Math.sqrt(3)*Voltaje *FP);
          var IFinal     = Math.round(100*Icalculada)/100;
        } 

      }

      document.getElementById("Resultado").hidden=false;
      document.getElementById("Resultado").innerHTML = "<center><strong>" + IFinal + " Amp </strong></center>";


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