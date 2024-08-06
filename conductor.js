// Función para alternar la visibilidad del menú hamburguesa

function toggleMenu() {
  var mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = (mobileMenu.style.display === 'block') ? 'none' : 'block';
}



document.addEventListener('DOMContentLoaded', () => {
  const openPopup = document.getElementById('openPopup');
  const closePopup = document.getElementById('closePopup');
  const popup = document.getElementById('popup');

  openPopup.addEventListener('click', () => {
      popup.style.display = 'flex'; // Mostrar el popup
  });

  closePopup.addEventListener('click', () => {
      popup.style.display = 'none'; // Ocultar el popup
  });

  // Opcional: cerrar el popup si el usuario hace clic fuera del contenido
  window.addEventListener('click', (event) => {
      if (event.target === popup) {
          popup.style.display = 'none';
      }
  });
});


// Carga Contenedor Resultados

window.addEventListener("load",function(){

  document.getElementById("LabelFactorPotencia").hidden=true;
  document.getElementById("FpVA").hidden=true;
  document.getElementById("LabelFP").hidden=true;

  document.getElementById("LabelLongitud").hidden=true;
  document.getElementById("Longitud").hidden=true;
  document.getElementById("UnidadLongitud").hidden=true;

  document.getElementById("LabelMaterialCanalizacion").hidden=true;
  document.getElementById("MaterialCanalizacion").hidden=true;

  document.getElementById("CaidaVoltaje").hidden=true;
  document.getElementById("Porcentaje").hidden=true;
  
  document.getElementById("MostrarResultadosC").hidden=true;
  document.getElementById("MostrarResultadosV").hidden=true;
  document.getElementById("Contenedor").hidden=false;
  document.getElementById("Alerta").hidden=true;
  document.getElementById("ColumnaDatos").hidden=false;
  document.getElementById("Publicidad1").hidden=false;
  document.getElementById("Publicidad2").hidden=false;

  document.getElementById("FactorAgrupamiento").innerHTML = "<strong> (100%)  </strong>";
  document.getElementById("FactorTemperartura").innerHTML = "<strong>(" + 100*1.08 +"%)</strong>";

  document.getElementById("Enlace1"  ).style.color   = "darkgoldenrod";
  document.getElementById("Enlace2"  ).style.color   = "darkgoldenrod";
  document.getElementById("Enlace3"  ).style.color   = "darkgoldenrod";
  document.getElementById("Enlace4"  ).style.color   = "darkgoldenrod";
  document.getElementById("Enlace5"  ).style.color   = "darkgoldenrod";
  document.getElementById("openPopup").style.color   = "darkgoldenrod";
   

}); 


ConductoresActivos.addEventListener("change",function(){

  var Nactivos = document.getElementById("ConductoresActivos").value;

    if (Nactivos =="1-3"){
      document.getElementById("FactorAgrupamiento").innerHTML = "<strong> (100%)  </strong>";
    }
    if (Nactivos =="4-6"){
      document.getElementById("FactorAgrupamiento").innerHTML = "<strong> (80%)  </strong>";
    }
    if (Nactivos =="7-9"){
      document.getElementById("FactorAgrupamiento").innerHTML = "<strong> (70%)  </strong>";
    }
    if (Nactivos =="10-20"){
      document.getElementById("FactorAgrupamiento").innerHTML = "<strong> (50%)  </strong>";
    }
    if (Nactivos =="21-30"){
      document.getElementById("FactorAgrupamiento").innerHTML = "<strong> (45%)  </strong>";
    }
    if (Nactivos =="31-40"){
      document.getElementById("FactorAgrupamiento").innerHTML = "<strong> (40%)  </strong>";
    }
    if (Nactivos =="41-mas"){
      document.getElementById("FactorAgrupamiento").innerHTML = "<strong> (35%)  </strong>";
    }

    
}); 



Aislamiento.addEventListener("change",function(){

  var TipoAislamiento = document.getElementById("Aislamiento").value;
  var TempAmbiente = document.getElementById("Temperatura").value;
  var Material = document.getElementById("Material").value;

  var Temp = 100*Math.round(1000*FTemp(TempAmbiente,TipoAislamiento,Material))/1000;

  document.getElementById("FactorTemperartura").innerHTML = "<strong>(" + Temp +"%)</strong>";   

}); 


Material.addEventListener("change",function(){

  var TempAmbiente = document.getElementById("Temperatura").value;
  var Material = document.getElementById("Material").value;
  var Aislamiento = document.getElementById("Aislamiento").value;

  var Temp = 100*Math.round(1000*FTemp(TempAmbiente,Aislamiento, Material))/1000;

  document.getElementById("FactorTemperartura").innerHTML = "<strong>(" + Temp +"%)</strong>";   


}); 


ListaTemperatura.addEventListener("change",function(){

  var TipoAislamiento = document.getElementById("Aislamiento").value;
  var TempAmbiente = document.getElementById("Temperatura").value;
  var Material = document.getElementById("Material").value;
  
  var Temp = 100*Math.round(1000*FTemp(TempAmbiente,TipoAislamiento, Material))/1000;

  document.getElementById("FactorTemperartura").innerHTML = "<strong>(" + Temp +"%)</strong>";   


}); 


Distancia.addEventListener("click",function(){

  var AceptarDistancia = document.getElementById("Distancia").checked;

    if (AceptarDistancia == true){

      document.getElementById("LabelLongitud").hidden=false;
      document.getElementById("Longitud").hidden=false;
      document.getElementById("UnidadLongitud").hidden=false;
    
      document.getElementById("LabelMaterialCanalizacion").hidden=false;
      document.getElementById("MaterialCanalizacion").hidden=false;

      document.getElementById("CaidaVoltaje").hidden=false;
      document.getElementById("Porcentaje").hidden=false;
    
      
    } else {

      document.getElementById("LabelLongitud").hidden=true;
      document.getElementById("Longitud").hidden=true;
      document.getElementById("UnidadLongitud").hidden=true;
    
      document.getElementById("LabelMaterialCanalizacion").hidden=true;
      document.getElementById("MaterialCanalizacion").hidden=true;
        
      document.getElementById("CaidaVoltaje").hidden=true;
      document.getElementById("Porcentaje").hidden=true;
    }

    
}); 

TipoCorriente.addEventListener("change",function(){

  var TipoCalculo = document.getElementById("TipoCorriente");
  let TipoCalculoCorriente = TipoCalculo.options[TipoCalculo.selectedIndex].value;

    if (TipoCalculoCorriente =="Continua"){
      document.getElementById("LabelFactorPotencia").hidden=true;
      document.getElementById("FpVA").hidden=true;
      document.getElementById("LabelFP").hidden=true;
    
    } else {
      document.getElementById("LabelFactorPotencia").hidden=false;
      document.getElementById("FpVA").hidden=false;
      document.getElementById("LabelFP").hidden=false;
    
    }

    
}); 


LabelFP.addEventListener("change",function(){

  var TipoFactorP = document.getElementById("LabelFP");
  let TipoCalculoFactorP = TipoFactorP.options[TipoFactorP.selectedIndex].value;

    if (TipoCalculoFactorP =="VA"){
      document.getElementById("Potencia").hidden=true;
      document.getElementById("PotenciaLabel").hidden=true;
      document.getElementById("WattsLabel").hidden=true;
      document.getElementById("LabelFactorPotencia").innerHTML = "<strong>VoltAmpere (VA)  fp = 0.9 </strong>";
   
    } else {
      document.getElementById("Potencia").hidden=false;
      document.getElementById("PotenciaLabel").hidden=false;
      document.getElementById("WattsLabel").hidden=false;
      document.getElementById("LabelFactorPotencia").innerHTML = "<strong>Factor Potencia </strong>"; 
    }

    
}); 


// Calcular

BotonCalcular.addEventListener("click",function(){

  var TipoCalculo = document.getElementById("TipoCorriente");
  var Voltaje = document.getElementById("Voltaje").value;
  var Potencia = document.getElementById("Potencia").value;
  var TipoMaterial = document.getElementById("Material").value;
  var TipoAislamiento = document.getElementById("Aislamiento").value;
  var ConductoresFase = document.getElementById("ConductoresPorFase").value;
  var LongitudConductor = document.getElementById("Longitud").value;
  var UnidadLongitudCond = document.getElementById("UnidadLongitud").value;
  var MaterialCanalizacionCond = document.getElementById("MaterialCanalizacion").value;  
  var CaidaVoltajeMax = document.getElementById("Porcentaje").value;  
  var OpcionDistancia = document.getElementById("Distancia").checked;  
  var CondActivos = document.getElementById("ConductoresActivos").value;
  var TempAmbiente = document.getElementById("Temperatura").value;

  
  var FA = FAgrup(CondActivos);
  var FT = FTemp(TempAmbiente,TipoAislamiento,TipoMaterial);
  

  let Confirmacion = true;
  
  document.getElementById("Alerta").hidden=true;

  let TipoCalculoCorriente = TipoCalculo.options[TipoCalculo.selectedIndex].value;

  if (Voltaje == 0) {
    Confirmacion = false;
    document.getElementById("Alerta").hidden=false;
    document.getElementById("Alerta").innerHTML = "<strong><center> Debe introducir el valor de Voltaje! </center></strong>";
  } 

  if (Confirmacion == true){
    if (ConductoresFase <= 0){
      Confirmacion = false;
      document.getElementById("Alerta").hidden=false;
      document.getElementById("Alerta").innerHTML = "<strong><center> El numero de Conductores por fase debe ser mayor de 0! </center> </strong>";
    } 
  }

  if (Potencia == 0 ){ 
    Confirmacion = false;
    document.getElementById("Alerta").hidden=false;
    document.getElementById("Alerta").innerHTML = "<strong><center> Debe introducir el valor de la Potencia! </center> </strong>";
  }

  if (Voltaje > 1000 ){ 
    Confirmacion = false;
    document.getElementById("Alerta").hidden=false;
    document.getElementById("Alerta").innerHTML = "<strong><center> Debe introducir un valor de Voltaje menor a 1000 Voltios! </center> </strong>";
  }

    //Validacion Datos Caida Tension
    if (OpcionDistancia ==  true){

      if ( LongitudConductor ==  0){
        Confirmacion = false;
        OpcionDistancia ==  false;
        document.getElementById("Alerta").hidden=false;
        document.getElementById("Alerta").innerHTML =     "<strong><center> Debe ingresar un valor de Longitud! </center> </strong>";
      }
  
      if ( CaidaVoltajeMax ==  0){
        Confirmacion = false;
        OpcionDistancia ==  false;
        document.getElementById("Alerta").hidden=false;
        document.getElementById("Alerta").innerHTML =     "<strong><center> Debe ingresar un %Caída de Voltaje! </center> </strong>";
      }
    
    }  

    var FPVA = document.getElementById("LabelFP").value;
    var FP = document.getElementById("FpVA").value;


    if (  TipoCalculoCorriente != "Continua" ){ 

      if (FPVA == "Fp" ){ 
        if (FP <= 0){
          Confirmacion = false;
          document.getElementById("Alerta").hidden=false;
          document.getElementById("Alerta").innerHTML = "<strong><center> Debe introducir un Valor de Factor de Potencia entre 0 y 1 </center>  </strong>";
        } 
        if (FP > 1){
          Confirmacion = false;
          document.getElementById("Alerta").hidden=false;
          document.getElementById("Alerta").innerHTML = "<strong><center> Debe introducir un Valor de Factor de Potencia entre 0 y 1  </center> </strong>";
        }   
      }

      if (FPVA == "VA" ){ 
        if (FP <= 0){
          Confirmacion = false;
          document.getElementById("Alerta").hidden=false;
          document.getElementById("Alerta").innerHTML = "<strong><center> Debe introducir un Valor de Potencia VA mayor a cero ! </center>  </strong>";
        } 
      }

    }   

   
    //Fin Validacion Datos Caida Tension


  if (Confirmacion == true){
    if (TipoCalculoCorriente == "Continua"){
      var Icalculada = Potencia/(ConductoresFase*Voltaje);
    } 
  }
  
  if (TipoCalculoCorriente == "AlternaMonofasica" || TipoCalculoCorriente == "AlternaBifasica" ){

    if (FPVA == "Fp"){ 
       if (Confirmacion == true){ 
        var FactorP = document.getElementById("FpVA").value;
        var Icalculada = Potencia/(ConductoresFase*Voltaje *FactorP);
      }
    } 

    if (FPVA == "VA"){ 
      if (Confirmacion == true){
        var FactorP = 0.9;
        var Power = document.getElementById("FpVA").value;
        var Icalculada = Power/(ConductoresFase*Voltaje);
      }
    } 


  }
  

  if (TipoCalculoCorriente == "AlternaTrifasica" ){

    if (FPVA == "Fp"){ 
      
      if (Confirmacion == true){ 
        var FactorP = document.getElementById("FpVA").value;
        var Icalculada = Potencia/(ConductoresFase*Math.sqrt(3)*Voltaje *FactorP);
      }
    } 

    if (FPVA == "VA"){
      
      if (Confirmacion == true){
        var FactorP = 0.9;
        var Power = document.getElementById("FpVA").value;
        var Icalculada = Power/(ConductoresFase*Math.sqrt(3)*Voltaje);
      }
    } 

  }   


  if (Confirmacion == true){
 
    var Tabla = MaterialAislamiento(TipoMaterial, TipoAislamiento);
    var Calibre = Tabla[0];
    var CorrienteTabla = Tabla[1];

    var i;
    var Contador = 0; 

    if (FT == 0){
      document.getElementById("Alerta").hidden=false;
      document.getElementById("Alerta").innerHTML = "<strong> Para este rango de Temperatura y Tipo de Aislamiento no esta definido ningun factor de temperatura, pruebe con otros valores! </strong>";
    } else {


      var IcalFinal = Math.round(100*Icalculada)/100;
      
      for (i=0;i<=25;i++) { 
  
        Contador = Contador + 1;

        var IZCorregida = Math.round(1000*FT*FA*CorrienteTabla[i])/1000;
  
        if (IcalFinal <  IZCorregida){
  
             document.getElementById("ResultadoCorriente").innerHTML =      "<strong>" + IcalFinal            +" Amp</strong>";
             document.getElementById("ResultadoCalibreC").innerHTML =       "<strong>" + Calibre[i]           +"</strong>";
             document.getElementById("AislamientoSeleccionado").innerHTML = "<strong>"+ TipoAislamiento       +"</strong>";
             document.getElementById("ConductoresporfaseC").innerHTML =     "<strong>"    + ConductoresFase   +"</strong>";
             document.getElementById("ResultadoCapacidad").innerHTML =      "<strong>" + IZCorregida*ConductoresFase+" Amp</strong>";
             document.getElementById("MostrarResultadosC").hidden=false;
  
             i = 25;
        }
   	   
      }
  
      if ( Contador == 26) {
        if ( Confirmacion == true) {
        
        document.getElementById("Alerta").hidden=false;
        document.getElementById("Alerta").innerHTML = "<strong> Valor de Corriente de Carga Calculado es muy elevado para la cantidad de conductores por fase y capacidad en Amperios normalizados por conductor , intente aumentando la cantidad de Conductores por fase! </strong>";
  
        }
      }
  
     
      
      if (OpcionDistancia ==  true){
  
        Contador = 0;
  
        var Resultado = CalculoCaidaTension(TipoCalculoCorriente,Icalculada,Voltaje,LongitudConductor,FactorP,TipoMaterial,MaterialCanalizacionCond,UnidadLongitudCond,ConductoresFase);
  
        for (i=0;i<=25;i++) { 
  
          Contador = Contador + 1;

          var IZCorregida = Math.round(1000*FT*FA*CorrienteTabla[i])/1000;

          console.log(IZCorregida);
   
          if ( Resultado[i] !=  0){
            if ( CaidaVoltajeMax >  Resultado[i]){
  
              if ( IZCorregida>  IcalFinal){
    
                var caida = Resultado[i];
                var caidaRedondeada = Math.round(1000*Resultado[i])/1000;
                

            
                document.getElementById("ResultadoCalibreVoltaje").innerHTML = "<strong>"    + Calibre[i]        +" </strong>";
                document.getElementById("ResultadoCaidaVoltaje").innerHTML =   "<strong> % " + caidaRedondeada   +"</strong>";
                document.getElementById("ResultadoCapacidadV").innerHTML =     "<strong>"    + IZCorregida*ConductoresFase +" Amp</strong>";
                document.getElementById("AislamientoSeleccionado1").innerHTML ="<strong>"    + TipoAislamiento   +"</strong>";
                document.getElementById("ConductoresporfaseV").innerHTML =     "<strong>"    + ConductoresFase   +"</strong>";
                document.getElementById("MostrarResultadosV").hidden=false;
                document.getElementById("ColumnaDatos").hidden=true;
                document.getElementById("Publicidad1").hidden=true;
                document.getElementById("Publicidad2").hidden=true;
  
                GraficarResultados(Resultado,Calibre, caida); 
                i = 25;
              }
            } 
          } 
        }
  
        if ( Contador == 26) {
          if ( Confirmacion == true) {
          
          document.getElementById("Alerta").hidden=false;
          document.getElementById("Alerta").innerHTML = "<strong> Con los datos ingresados no se logra el % de Caída especificado, intente aumentando la cantidad de Conductores por fase! </strong>";
              
  
          }
        }
  
      } 
    }
    
  }  

 
 });

// Fin Boton Calcular



// Funciones JS

ValidarFP = function (IdFactorPotencia) {

  var FactorP = document.getElementById(IdFactorPotencia).value; 
  var N = false;
  
  if (FactorP <= 0){

    document.getElementById(IdFactorPotencia).value=0;
    N = true;
    return confirm("El valor del FP debe ser mayor de 0");
  } 
  
  if (FactorP > 1){
  
    document.getElementById(IdFactorPotencia).value=0;
    N = true;
    return confirm("El valor del FP debe ser menor o igual a 1");
  }   
  
  if (N == false){
    return false;
  }   

};


ValidarVA = function (IdFactorPotencia) {

  var FactorP = document.getElementById(IdFactorPotencia).value; 
  var N = false;
  
  if (FactorP <= 0){

    document.getElementById(IdFactorPotencia).value=0;
    N = true;
    return confirm("El valor de VA debe ser mayor de 0");
  } 
 
  if (N == false){
    return false;
  }   

};



MaterialAislamiento = function (Material, Aislamiento) {

  const Corriente = Array.of(26);
  const Calibre = Array.of(26);
  const Resultado = Array.of(2);


  Calibre[0] = "#18 AWG";
  Calibre[1] = "#16 AWG";
  Calibre[2] = "#14 AWG";
  Calibre[3] = "#12 AWG";
  Calibre[4] = "#10 AWG";
  Calibre[5] = "#8 AWG";
  Calibre[6] = "#6 AWG";
  Calibre[7] = "#4 AWG";
  Calibre[8] = "#3 AWG";
  Calibre[9] = "#2 AWG";
  Calibre[10] = "#1 AWG";
  Calibre[11] = "#1/0 AWG";
  Calibre[12] = "#2/0 AWG";
  Calibre[13] = "#3/0 AWG";
  Calibre[14] = "#4/0 AWG";
  Calibre[15] = "250 MCM";
  Calibre[16] = "300 MCM";
  Calibre[17] = "350 MCM";
  Calibre[18] = "400 MCM";
  Calibre[19] = "500 MCM";
  Calibre[20] = "600 MCM";
  Calibre[21] = "700 MCM";
  Calibre[22] = "750 MCM";
  Calibre[23] = "800 MCM";
  Calibre[24] = "900 MCM";
  Calibre[25] = "1000 MCM";

  if (Material =="Cobre"){

    if (Aislamiento =="TW"){
      
      Corriente[0] =0; 
      Corriente[1] =0;
      Corriente[2] =15; 
      Corriente[3] =20; 
      Corriente[4] =30; 
      Corriente[5] =40; 
      Corriente[6] =55; 
      Corriente[7] =70; 
      Corriente[8] = 85;
      Corriente[9] = 95;
      Corriente[10] = 110;
      Corriente[11] =125;
      Corriente[12] = 145;
      Corriente[13] = 165;
      Corriente[14] = 195;
      Corriente[15] = 215;
      Corriente[16] = 240;
      Corriente[17] = 260;
      Corriente[18] = 280;
      Corriente[19] = 320;
      Corriente[20] =350;
      Corriente[21] =385;
      Corriente[22] =400;
      Corriente[23] =410;
      Corriente[24] =435;
      Corriente[25] =455;
         
      const Resultado = [Calibre,Corriente];
      return Resultado;     
    } 

    if (Aislamiento =="THW"){
      
      Corriente[0] =0; 
      Corriente[1] =0;
      Corriente[2] =20; 
      Corriente[3] =25; 
      Corriente[4] =35; 
      Corriente[5] =50; 
      Corriente[6] =65; 
      Corriente[7] =85; 
      Corriente[8] =100;
      Corriente[9] =115;
      Corriente[10] =130;
      Corriente[11] =150;
      Corriente[12] =175;
      Corriente[13] =200;
      Corriente[14] =230;
      Corriente[15] =255;
      Corriente[16] =285;
      Corriente[17] =310;
      Corriente[18] =335;
      Corriente[19] =380;
      Corriente[20] =420;
      Corriente[21] =460;
      Corriente[22] =475;
      Corriente[23] =490;
      Corriente[24] =520;
      Corriente[25] =545;
         
      const Resultado = [Calibre,Corriente];
      return Resultado;     
    } 

    if (Aislamiento =="THHW"){
      
      Corriente[0] =14; 
      Corriente[1] =18;
      Corriente[2] =25; 
      Corriente[3] =30; 
      Corriente[4] =40; 
      Corriente[5] =55; 
      Corriente[6] =75; 
      Corriente[7] =95; 
      Corriente[8] =115;
      Corriente[9] =130;
      Corriente[10] =145;
      Corriente[11] =170;
      Corriente[12] =195;
      Corriente[13] =225;
      Corriente[14] =260;
      Corriente[15] =290;
      Corriente[16] =320;
      Corriente[17] =350;
      Corriente[18] =380;
      Corriente[19] =430;
      Corriente[20] =475;
      Corriente[21] =520;
      Corriente[22] =535;
      Corriente[23] =555;
      Corriente[24] =585;
      Corriente[25] =615;
         
      const Resultado = [Calibre,Corriente];
      return Resultado;     
    } 

  } 


  if (Material =="Aluminio"){

    if (Aislamiento =="TW"){
      
      Corriente[0] =0; 
      Corriente[1] =0;
      Corriente[2] =0; 
      Corriente[3] =15; 
      Corriente[4] =25; 
      Corriente[5] =35; 
      Corriente[6] =40; 
      Corriente[7] =55; 
      Corriente[8] = 65;
      Corriente[9] = 75;
      Corriente[10] =85;
      Corriente[11] =100;
      Corriente[12] = 115;
      Corriente[13] = 130;
      Corriente[14] = 150;
      Corriente[15] = 170;
      Corriente[16] = 195;
      Corriente[17] = 210;
      Corriente[18] = 225;
      Corriente[19] = 260;
      Corriente[20] =285;
      Corriente[21] =315;
      Corriente[22] =320;
      Corriente[23] =330;
      Corriente[24] =355;
      Corriente[25] =375;
         
      const Resultado = [Calibre,Corriente];
      return Resultado;     
    } 

    if (Aislamiento =="THW"){
      
      Corriente[0] =0; 
      Corriente[1] =0;
      Corriente[2] =0; 
      Corriente[3] =20; 
      Corriente[4] =30; 
      Corriente[5] =40; 
      Corriente[6] =50; 
      Corriente[7] =65; 
      Corriente[8] =75;
      Corriente[9] =90;
      Corriente[10] =100;
      Corriente[11] =120;
      Corriente[12] =135;
      Corriente[13] =155;
      Corriente[14] =180;
      Corriente[15] =205;
      Corriente[16] =230;
      Corriente[17] =250;
      Corriente[18] =270;
      Corriente[19] =310;
      Corriente[20] =340;
      Corriente[21] =375;
      Corriente[22] =385;
      Corriente[23] =395;
      Corriente[24] =425;
      Corriente[25] =445;
         
      const Resultado = [Calibre,Corriente];
      return Resultado;     
    } 

    if (Aislamiento =="THHW"){
      
      Corriente[0] =0; 
      Corriente[1] =0;
      Corriente[2] =0; 
      Corriente[3] =25; 
      Corriente[4] =35; 
      Corriente[5] =45; 
      Corriente[6] =55; 
      Corriente[7] =75; 
      Corriente[8] =85;
      Corriente[9] =100;
      Corriente[10] =115;
      Corriente[11] =135;
      Corriente[12] =150;
      Corriente[13] =175;
      Corriente[14] =205;
      Corriente[15] =230;
      Corriente[16] =260;
      Corriente[17] =280;
      Corriente[18] =305;
      Corriente[19] =350;
      Corriente[20] =385;
      Corriente[21] =425;
      Corriente[22] =435;
      Corriente[23] =445;
      Corriente[24] =480;
      Corriente[25] =500;
         
      const Resultado = [Calibre,Corriente];
      return Resultado;     
    } 

  }   


};


XLDucto = function (Tipotubo) {

  const XL = Array.of(26);
 
  if (Tipotubo == "PVC" || Tipotubo == "Aluminio" ){

    XL[0] =0;      //18
    XL[1] =0;      //16
    XL[2] =0.190;  //14
    XL[3] =0.177;  //12
    XL[4] =0.164;  //10
    XL[5] =0.171;  //8
    XL[6] =0.167;  //6
    XL[7] =0.157;  //4
    XL[8] =0;      //3
    XL[9] =0.148;  //2
    XL[10] =0;     //1
    XL[11] =0.144; //1/0
    XL[12] =0.141; //2/0
    XL[13] =0.138; //3/0
    XL[14] =0.135; //4/0
    XL[15] =0.135; //250
    XL[16] =0.135; //300
    XL[17] =0.131; //350
    XL[18] =0.131; //400
    XL[19] =0.128; //500
    XL[20] =0.128; //600
    XL[21] =0;     //700
    XL[22] =0.125; //750  
    XL[23] =0;     //800
    XL[24] =0;     //900
    XL[25] =0.121; //1000

  }

  if (Tipotubo == "Acero" ){

    XL[0] =0;      //18
    XL[1] =0;      //16
    XL[2] =0.240;  //14
    XL[3] =0.223;  //12
    XL[4] =0.207;  //10
    XL[5] =0.213;  //8
    XL[6] =0.210;  //6
    XL[7] =0.197;  //4
    XL[8] =0;      //3
    XL[9] =0.187;  //2
    XL[10] =0;     //1
    XL[11] =0.180; //1/0
    XL[12] =0.177; //2/0
    XL[13] =0.171; //3/0
    XL[14] =0.167; //4/0
    XL[15] =0.171; //250
    XL[16] =0.167; //300
    XL[17] =0.164; //350
    XL[18] =0.161; //400
    XL[19] =0.157; //500
    XL[20] =0.157; //600
    XL[21] =0;     //700
    XL[22] =0.157; //750  
    XL[23] =0;     //800
    XL[24] =0;     //900
    XL[25] =0.151; //1000

  }

  return XL;

};

RDucto = function (TipodeMaterial, Tipotubo) {

  const R = Array.of(26);
 
  if (TipodeMaterial == "Cobre"){
    
    if (Tipotubo == "PVC"){

     R[0] =0;      //18
     R[1] =0;      //16
     R[2] =10.2;   //14
     R[3] =6.6;    //12
     R[4] =3.9;    //10
     R[5] =2.56;   //8
     R[6] =1.61;   //6
     R[7] =1.02;   //4
     R[8] =0;      //3
     R[9] =0.62;   //2
     R[10] =0;     //1
     R[11] =0.39;  //1/0
     R[12] =0.33;  //2/0
     R[13] =0.253; //3/0
     R[14] =0.203; //4/0
     R[15] =0.171; //250
     R[16] =0.144; //300
     R[17] =0.125; //350
     R[18] =0.108; //400
     R[19] =0.089; //500
     R[20] =0.075; //600
     R[21] =0;     //700
     R[22] =0.062; //750  
     R[23] =0;     //800
     R[24] =0;     //900
     R[25] =0.049; //1000

    }

    if (Tipotubo == "Aluminio"){

      R[0] =0;      //18
      R[1] =0;      //16
      R[2] =10.2;   //14
      R[3] =6.6;    //12
      R[4] =3.9;    //10
      R[5] =2.56;   //8
      R[6] =1.61;   //6
      R[7] =1.02;   //4
      R[8] =0;      //3
      R[9] =0.66;   //2
      R[10] =0;     //1
      R[11] =0.43;  //1/0
      R[12] =0.33;  //2/0
      R[13] =0.269; //3/0
      R[14] =0.22;  //4/0
      R[15] =0.187; //250
      R[16] =0.161; //300
      R[17] =0.141; //350
      R[18] =0.125; //400
      R[19] =0.105; //500
      R[20] =0.092; //600
      R[21] =0;     //700
      R[22] =0.079; //750  
      R[23] =0;     //800
      R[24] =0;     //900
      R[25] =0.062; //1000
 
     }

     if (Tipotubo == "Acero"){

      R[0] =0;      //18
      R[1] =0;      //16
      R[2] =10.2;   //14
      R[3] =6.6;    //12
      R[4] =3.9;    //10
      R[5] =2.56;   //8
      R[6] =1.61;   //6
      R[7] =1.02;   //4
      R[8] =0;      //3
      R[9] =0.66;   //2
      R[10] =0;     //1
      R[11] =0.39;  //1/0
      R[12] =0.33;  //2/0
      R[13] =0.259; //3/0
      R[14] =0.207; //4/0
      R[15] =0.177; //250
      R[16] =0.148; //300
      R[17] =0.128; //350
      R[18] =0.115; //400
      R[19] =0.095; //500
      R[20] =0.082; //600
      R[21] =0;     //700
      R[22] =0.069; //750  
      R[23] =0;     //800
      R[24] =0;     //900
      R[25] =0.059; //1000
     }

  }
  
  if (TipodeMaterial == "Aluminio"){

    if (Tipotubo == "PVC"){

      R[0] =0;      //18
      R[1] =0;      //16
      R[2] =0;      //14
      R[3] =0;      //12
      R[4] =0;      //10
      R[5] =0;      //8
      R[6] =2.66;   //6
      R[7] =1.67;   //4
      R[8] =0;      //3
      R[9] =1.05;   //2
      R[10] =0;     //1
      R[11] =0.66;  //1/0
      R[12] =0.52;  //2/0
      R[13] =0.43;  //3/0
      R[14] =0.33;  //4/0
      R[15] =0.279; //250
      R[16] =0.233; //300
      R[17] =0.200; //350
      R[18] =0.177; //400
      R[19] =0.141; //500
      R[20] =0.118; //600
      R[21] =0;     //700
      R[22] =0.095; //750  
      R[23] =0;     //800
      R[24] =0;     //900
      R[25] =0.075; //1000
 
     }


    if (Tipotubo == "Aluminio"){

      R[0] =0;      //18
      R[1] =0;      //16
      R[2] =0;      //14
      R[3] =0;      //12
      R[4] =0;      //10
      R[5] =0;      //8
      R[6] =2.66;   //6
      R[7] =1.67;   //4
      R[8] =0;      //3
      R[9] =1.05;   //2
      R[10] =0;     //1
      R[11] =0.69;  //1/0
      R[12] =0.52;  //2/0
      R[13] =0.43;  //3/0
      R[14] =0.36;  //4/0
      R[15] =0.295; //250
      R[16] =0.249; //300
      R[17] =0.217; //350
      R[18] =0.194; //400
      R[19] =0.157; //500
      R[20] =0.135; //600
      R[21] =0;     //700
      R[22] =0.112; //750  
      R[23] =0;     //800
      R[24] =0;     //900
      R[25] =0.089; //1000
 
     }

     if (Tipotubo == "Acero"){

      R[0] =0;      //18
      R[1] =0;      //16
      R[2] =0;      //14
      R[3] =0;      //12
      R[4] =0;      //10
      R[5] =0;      //8
      R[6] =2.66;   //6
      R[7] =1.67;   //4
      R[8] =0;      //3
      R[9] =1.05;   //2
      R[10] =0;     //1
      R[11] =0.66;  //1/0
      R[12] =0.52;  //2/0
      R[13] =0.43;  //3/0
      R[14] =0.33;  //4/0
      R[15] =0.282; //250
      R[16] =0.236; //300
      R[17] =0.207; //350
      R[18] =0.180; //400
      R[19] =0.148; //500
      R[20] =0.125; //600
      R[21] =0;     //700
      R[22] =0.102; //750  
      R[23] =0;     //800
      R[24] =0;     //900
      R[25] =0.082; //1000

     }

  }


  return R;

};


CalculoCaidaTension = function (Circuito,Icalc,V,L,fp,TipodeMaterial,Tipotubo,UnidadMedidaLongitud,NCond) {

  var cos = fp;
  var sen = Math.sqrt(1 - Math.pow(cos, 2));
  var Distancia;
  var i;
  var Resistencia = Array.of(26);
  var Inductancia = Array.of(26);
  var CaidaTension = Array.of(26);
  var Z = Array.of(26);

  if ( UnidadMedidaLongitud =="Metros"){ Distancia = L/1000;}
  else { Distancia = 0.3048*L/(1000);} 

  Resistencia = RDucto(TipodeMaterial, Tipotubo);
  Inductancia = XLDucto(Tipotubo);


  for (i=0;i<=25;i++) { 

    if (Circuito =="Continua"){
    
      Z[i] = Resistencia[i];  
      CaidaTension[i] = NCond*(2*Z[i]*Distancia*Icalc*100)/V; 
    
    }
  
    if (Circuito =="AlternaMonofasica"){
      
      Z[i] = Resistencia[i]*cos + Inductancia[i]*sen;  
      CaidaTension[i] = (2*Z[i]*Distancia*Icalc*100)/(V);    
    }

    if (Circuito =="AlternaBifasica"){
     
      Z[i] = Resistencia[i]*cos + Inductancia[i]*sen;  
      CaidaTension[i] = (2*Z[i]*Distancia*Icalc*100)/(V);     

    }

    if (Circuito =="AlternaTrifasica"){
  
      Z[i] = Resistencia[i]*cos + Inductancia[i]*sen;  
      CaidaTension[i] = (Math.sqrt(3)*Z[i]*Distancia*Icalc*100)/(V);    


      
    }

  }
  
  return CaidaTension;

  
};

FTemp = function (Temperatura, Aislamiento, Material) {  

  if (Material =="Cobre"){

    if (Aislamiento =="TW"){
      if (Temperatura =="21-25"){return 1.08; } 
      if (Temperatura =="26-30"){return 1.00; } 
      if (Temperatura =="31-35"){return 0.91; } 
      if (Temperatura =="36-40"){return 0.82; } 
      if (Temperatura =="41-45"){return 0.71; } 
      if (Temperatura =="46-50"){return 0.58; } 
      if (Temperatura =="51-55"){return 0.41; } 
      if (Temperatura =="56-60"){return    0; } 
      if (Temperatura =="61-70"){return    0; }
      if (Temperatura =="71-80"){return    0; }
  
    } 
  
    if (Aislamiento =="THW"){
      if (Temperatura =="21-25"){return 1.05; } 
      if (Temperatura =="26-30"){return 1.00; } 
      if (Temperatura =="31-35"){return 0.94; } 
      if (Temperatura =="36-40"){return 0.88; } 
      if (Temperatura =="41-45"){return 0.82; } 
      if (Temperatura =="46-50"){return 0.75; } 
      if (Temperatura =="51-55"){return 0.67; } 
      if (Temperatura =="56-60"){return 0.58; } 
      if (Temperatura =="61-65"){return 0.33; } 
      if (Temperatura =="66-70"){return    0; } 
  
    } 

    if (Aislamiento =="THHW"){
      if (Temperatura =="21-25"){return 1.04; } 
      if (Temperatura =="26-30"){return 1.00; } 
      if (Temperatura =="31-35"){return 0.96; } 
      if (Temperatura =="36-40"){return 0.91; } 
      if (Temperatura =="41-45"){return 0.87; } 
      if (Temperatura =="46-50"){return 0.82; } 
      if (Temperatura =="51-55"){return 0.76; } 
      if (Temperatura =="56-60"){return 0.71; } 
      if (Temperatura =="61-65"){return 0.56; } 
      if (Temperatura =="66-70"){return 0.41; } 

    } 

  }


  if (Material =="Aluminio"){

    if (Aislamiento =="TW"){
      if (Temperatura =="21-25"){return 1.08; } 
      if (Temperatura =="26-30"){return 1.00; } 
      if (Temperatura =="31-35"){return 0.91; } 
      if (Temperatura =="36-40"){return 0.82; } 
      if (Temperatura =="41-45"){return 0.71; } 
      if (Temperatura =="46-50"){return 0.58; } 
      if (Temperatura =="51-55"){return 0.41; } 
      if (Temperatura =="56-60"){return    0; } 
      if (Temperatura =="61-70"){return    0; } 
      if (Temperatura =="71-80"){return    0; } 
  
    } 
  
    if (Aislamiento =="THW"){
      if (Temperatura =="21-25"){return 1.05; } 
      if (Temperatura =="26-30"){return 1.00; } 
      if (Temperatura =="31-35"){return 0.94; } 
      if (Temperatura =="36-40"){return 0.88; } 
      if (Temperatura =="41-45"){return 0.82; } 
      if (Temperatura =="46-50"){return 0.75; } 
      if (Temperatura =="51-55"){return 0.67; } 
      if (Temperatura =="56-60"){return 0.58; } 
      if (Temperatura =="61-65"){return 0.33; } 
      if (Temperatura =="66-70"){return    0; } 
  
    } 

    if (Aislamiento =="THHW"){
      if (Temperatura =="21-25"){return 1.04; } 
      if (Temperatura =="26-30"){return 1.00; } 
      if (Temperatura =="31-35"){return 0.98; } 
      if (Temperatura =="36-40"){return 0.91; } 
      if (Temperatura =="41-45"){return 0.87; } 
      if (Temperatura =="46-50"){return 0.82; } 
      if (Temperatura =="51-55"){return 0.78; } 
      if (Temperatura =="56-60"){return 0.71; } 
      if (Temperatura =="61-65"){return 0.58; } 
      if (Temperatura =="66-70"){return 0.41; } 

    } 

  }


};

FAgrup = function (Conductores) {  

if (Conductores =="1-3"   ) { return 1.00;} 
if (Conductores =="4-6"   ) { return 0.80;} 
if (Conductores =="7-9"   ) { return 0.70;} 
if (Conductores =="10-20" ) { return 0.50;} 
if (Conductores =="21-30" ) { return 0.45;} 
if (Conductores =="31-40" ) { return 0.40;} 
if (Conductores =="41-mas") { return 0.35;} 

};

// Fin Funciones JS



//Grafica Caida de Tension


GraficarResultados = function (CaidaTension,Calibre,caida) {

  const ctx = document.getElementById('Grafica');

  var N,i,J,K,Indice;
  
  N = 0;
  K = 0;

  for (K = 0; K<=25; K++) {  if (CaidaTension[K] ==  0) { N = N + 1; } };

  var CalibreNew = Array.of(25-N);
  var CaidaTensionNew = Array.of(25-N);

  K = 0;

   for (J = 0; J<=25; J++) { 
      
      if (CaidaTension[J] !=  0) {
       
        CalibreNew[K]      = Calibre[J];
        CaidaTensionNew[K] = CaidaTension[J];
        K = K + 1;
      }   

  };

  i = 0;

  for (i = 0; i<=25-N; i++) { if (CaidaTensionNew[i] ==  caida) { Indice = i; }   };

  console.log(N);
  console.log(Calibre);
  console.log(CaidaTension);
  console.log(CalibreNew);
  console.log(CaidaTensionNew);
  

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [CalibreNew[Indice-2], CalibreNew[Indice-1] ,CalibreNew[Indice] , CalibreNew[Indice+1], CalibreNew[Indice+2]], //Calibres de los conductores
      datasets: [{
        label: 'Caida de Tension % ',
        data: [CaidaTensionNew[Indice-2], CaidaTensionNew[Indice-1] ,CaidaTensionNew[Indice] , CaidaTensionNew[Indice+1], CaidaTensionNew[Indice+2]], // Valor de la Caida de voltaje
        fill: false,
        borderColor: 'rgb(255, 0, 0)',
        tension: 0.1
        
        
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
 
  

  
};


//Fin Grafica Caida de Tension



 
