

window.addEventListener("load",function(){

  document.getElementById("CalibreMCM").disabled = true;
  document.getElementById("MostrarTuberiaSelec").hidden = true;
  document.getElementById("ContenedorTuberia").hidden=false;
  document.getElementById("LeyendaCanalizacion").hidden=true;
  document.getElementById("AlertaTuberia").hidden=true
  document.getElementById("ColumnaDatos").hidden = false; 
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

  

OtraLista.addEventListener("click",function(){

    var CambiarLista = document.getElementById("OtraLista").checked;
  
      if (CambiarLista == true){
  
        document.getElementById("CalibreMCM").disabled = false;
        document.getElementById("Calibre").disabled = true;
        
      } else {
  
        document.getElementById("CalibreMCM").disabled = true;
        document.getElementById("Calibre").disabled = false;

      }
  
      
  }); 


// Inicio Calcular


  CalcularCanalizacion.addEventListener("click",function(){

    var ListadoAWG = document.getElementById("Calibre").disabled;     
    var AWG = document.getElementById("Calibre");
    var MCM = document.getElementById("CalibreMCM");
    var Ncond = document.getElementById("Nconductores").value;
    var SeccionConductor;
    var i;
    var Conductor;

    var Tuberia = document.getElementById("TipoTuberia");
    let TuberiaSeleccionada = Tuberia.options[Tuberia.selectedIndex].value;

    var Confirmacion = true;
    

    if (Ncond == 0) {
      document.getElementById("AlertaTuberia").hidden=false;
      document.getElementById("MostrarTuberiaSelec").hidden = true;
      document.getElementById("GraficaTubo").hidden = true;
      document.getElementById("LeyendaCanalizacion").hidden = true;
      Confirmacion = false;
    } 



    if (Confirmacion == true) {

      if (ListadoAWG == false){
  
        let AWGSeleccionado = AWG.options[AWG.selectedIndex].value;
        SeccionConductor = AreaConductores(AWGSeleccionado);
        console.log(SeccionConductor);
        Conductor = AWGSeleccionado + " AWG";
      } else {
  
        let MCMSeleccionado = MCM.options[MCM.selectedIndex].value;
        SeccionConductor = AreaConductores(MCMSeleccionado);
        console.log(SeccionConductor);
        Conductor = MCMSeleccionado + " MCM";
      };
  
  
      var AreaMaxima;
      var TablaAreaTubosSeleccionada = Array.of(12);
      TablaAreaTubosSeleccionada = AreaTuberias(TuberiaSeleccionada);
      //console.log(TablaAreaTubosSeleccionada);
  
      if (Ncond == 1) { AreaMaxima =53 };
      if (Ncond == 2) { AreaMaxima =31 };
      if (Ncond  > 2) { AreaMaxima =40 };
  
      const CalculoSeccionOcupada  = Array.of(12);
  
      for (i=0; i<=11; i++) { 
  
        if (TablaAreaTubosSeleccionada[i] !=  0) {
    
          CalculoSeccionOcupada[i] = 100*Ncond*SeccionConductor /TablaAreaTubosSeleccionada[i];
   
          if (CalculoSeccionOcupada[i] < AreaMaxima) {
             var IndiceElegido = i;
             AreaMaxima = 0;       
          } 
   
          } else { CalculoSeccionOcupada[i] = 0;}
    
      };
  
      var TuboElegido = DiametroComercialTuberias(IndiceElegido) ;
      var FactorTuboElegido = Math.round(100*CalculoSeccionOcupada[IndiceElegido])/100;

      document.getElementById("ColumnaDatos").hidden = true; 
      document.getElementById("CalibreConductor"       ).innerHTML = "<strong>"    + Conductor               +"</strong>";
      document.getElementById("CantidadConductoresTubo").innerHTML = "<strong>"    + Ncond                   +"</strong>";
      document.getElementById("TipoTubo"               ).innerHTML = "<strong>"    + TuberiaSeleccionada     +"</strong>";
      document.getElementById("CalibreRecomendado"     ).innerHTML = "<strong> Ø"  + TuboElegido             +"</strong>";
      document.getElementById("FactorOcupacion"        ).innerHTML = "<strong>"    + FactorTuboElegido       +"</strong>";
      document.getElementById("MostrarTuberiaSelec").hidden = false;
      document.getElementById("LeyendaCanalizacion").hidden=false;
      document.getElementById("AlertaTuberia").hidden=true;
      document.getElementById("GraficaTubo").hidden = false;

      GraficarResultados(CalculoSeccionOcupada);
      console.log(Ncond);
      

  
    } 
       
  

  }); 

  // Fin Calcular





  // Inicio Funciones


 AreaConductores = function (CalibreCable) {

    var Area;
   
       if (CalibreCable == "#14") { Area =8.97;};
       if (CalibreCable == "#12") { Area =11.7;};
       if (CalibreCable == "#10") { Area =15.7;};
       if (CalibreCable == "#8")  { Area =28.2;};
       if (CalibreCable == "#6")  { Area =46.8;};
       if (CalibreCable == "#4")  { Area =62.8;};
       if (CalibreCable == "#2")  { Area =86;};
       if (CalibreCable == "#1")  { Area =123;};
       if (CalibreCable == "#1/0"){ Area =143;};
       if (CalibreCable == "#2/0"){ Area =169;};
       if (CalibreCable == "#3/0"){ Area =201;};
       if (CalibreCable == "#4/0"){ Area =240;};
       if (CalibreCable == "250") { Area =297;};
       if (CalibreCable == "300") { Area =341;};
       if (CalibreCable == "350") { Area =384;};
       if (CalibreCable == "400") { Area =427;};
       if (CalibreCable == "500") { Area =510;};
       if (CalibreCable == "600") { Area =628;};
    
    return Area;
  
  };



  AreaTuberias = function (TipoTuberia) {

    const Area = Array.of(12);

    if (TipoTuberia == "EMT"){

      Area[0] =196;   //1/2"
      Area[1] =343;   //3/4"
      Area[2] =556;   //1"
      Area[3] =968;   //1 1/4"
      Area[4] =1314;  //1 1/2"
      Area[5] =2165;  //2"
      Area[6] =3783;  //2 1/2"
      Area[7] =5701;  //3"
      Area[8] =7451;  //3 1/2"
      Area[9] =9521;  //4"
      Area[10] =0;    //5"
      Area[11] =0;    //6"
        
    }

  
    if (TipoTuberia == "IMC"){

        Area[0] =222;   //1/2"
        Area[1] =377;   //3/4"
        Area[2] =620;   //1"
        Area[3] =1064;  //1 1/4"
        Area[4] =1432;  //1 1/2"
        Area[5] =2341;  //2"
        Area[6] =3308;  //2 1/2"
        Area[7] =5115;  //3"
        Area[8] =6822;  //3 1/2"
        Area[9] =8725;  //4"
        Area[10]=0;     //5"
        Area[11]=0;     //6"
      }    

      if (TipoTuberia == "RMC"){

        Area[0] =204;   //1/2"
        Area[1] =353;   //3/4"
        Area[2] =573;   //1"
        Area[3] =984;   //1 1/4"
        Area[4] =1333;  //1 1/2"
        Area[5] =2198;  //2"
        Area[6] =3137;  //2 1/2"
        Area[7] =4840;  //3"
        Area[8] =6461;  //3 1/2"
        Area[9] =8316;  //4"
        Area[10]=13050; //5"
        Area[11]=18821; //6"

      }

      
      if (TipoTuberia == "FMC"){

        Area[0] =204;   //1/2"
        Area[1] =343;   //3/4"
        Area[2] =527;   //1"
        Area[3] =824;   //1 1/4"
        Area[4] =1201;  //1 1/2"
        Area[5] =2107;  //2"
        Area[6] =3167;  //2 1/2"
        Area[7] =4560;  //3"
        Area[8] =6207;  //3 1/2"
        Area[9] =8107;  //4"
        Area[10]=0;     //5"
        Area[11]=0;     //6"
          
      }


      if (TipoTuberia == "PVC"){

        Area[0] =184;   //1/2"
        Area[1] =327;   //3/4"
        Area[2] =535;   //1"
        Area[3] =935;   //1 1/4"
        Area[4] =1282;  //1 1/2"
        Area[5] =2124;  //2"
        Area[6] =3029;  //2 1/2"
        Area[7] =4693;  //3"
        Area[8] =6277;  //3 1/2"
        Area[9] =8091;  //4"
        Area[10]=12748; //5"
        Area[11]=18433; //6"
          
      }

        
    return Area;
  
  };


  DiametroComercialTuberias = function (i) {

    var Diametro;

      if (i == 0 ){ Diametro = "1/2"; };
      if (i == 1 ){ Diametro = "3/4"; };
      if (i == 2 ){ Diametro = "1"; };
      if (i == 3 ){ Diametro = "1 1/4"; };
      if (i == 4 ){ Diametro = "1 1/2"; };
      if (i == 5 ){ Diametro = "2"; };
      if (i == 6 ){ Diametro = "2 1/2"; };
      if (i == 7 ){ Diametro = "3"; };
      if (i == 8 ){ Diametro = "3 1/2"; };
      if (i == 9 ){ Diametro = "4"; };
      if (i == 10){ Diametro = "5"; };
      if (i == 11){ Diametro = "6"; };
      
      return Diametro;
  
  };

 
  GraficarResultados = function (FOCalculado) {

    const ctx = document.getElementById("GraficaTubo");
      
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Ø1/2", "Ø3/4", "Ø1", "Ø1 1/4", "Ø1 1/2", "Ø2", "Ø2 1/2", "Ø3", "Ø3 1/2", "Ø4", "Ø5", "Ø6"], //Calibres de los conductores
        datasets: [{
          label: 'Factor de Ocupación % ',
          data: [FOCalculado[0], FOCalculado[1] ,FOCalculado[2] , FOCalculado[3], FOCalculado[4], FOCalculado[5], FOCalculado[6], FOCalculado[7], FOCalculado[8], FOCalculado[9], FOCalculado[10], FOCalculado[11]], // Valor de la Caida de voltaje
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


   
  // Fin Funciones