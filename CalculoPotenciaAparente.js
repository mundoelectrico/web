
window.addEventListener("load",function(){

  document.getElementById("Alerta").hidden=true;
  document.getElementById("Resultado").hidden=true;
  document.getElementById("Opcion1").checked = true;
  document.getElementById("Opcion2").disabled = true;
  document.getElementById("Opcion3").disabled = true;

}); 


UnidadPotencia.addEventListener("change",function(){

  var Potencia = document.getElementById("UnidadPotencia").value;

    if (Potencia =="VA"){
      document.getElementById("TipoPotencia").innerHTML = "<strong> VA                        </strong>";
      document.getElementById("Label1"      ).innerHTML = "<strong> P(Watts) y Q(Var)          </strong>";
      document.getElementById("Label2"      ).innerHTML = "<strong> P(Watts) y Factor Potencia </strong>";
      document.getElementById("Label3"      ).innerHTML = "<strong> Q(Var) y Factor Potencia   </strong>";

      document.getElementById("Valor11"     ).innerHTML = "<strong> P       </strong>";
      document.getElementById("Valor12"     ).innerHTML = "<strong> Watts   </strong>";

      document.getElementById("Valor21"     ).innerHTML = "<strong> Q       </strong>";
      document.getElementById("Valor22"     ).innerHTML = "<strong> Var     </strong>";

 
    }

    if (Potencia =="Watts"){
      document.getElementById("TipoPotencia").innerHTML = "<strong> Watts                   </strong>";
      document.getElementById("Label1"     ).innerHTML = "<strong> S(VA) y Q(Var)           </strong>";
      document.getElementById("Label2"     ).innerHTML = "<strong> S(VA) y Factor Potencia  </strong>";
      document.getElementById("Label3"     ).innerHTML = "<strong> Q(Var) y Factor Potencia </strong>";

      document.getElementById("Valor11"     ).innerHTML = "<strong> S       </strong>";
      document.getElementById("Valor12"     ).innerHTML = "<strong> VA      </strong>";

      document.getElementById("Valor21"     ).innerHTML = "<strong> Q       </strong>";
      document.getElementById("Valor22"     ).innerHTML = "<strong> Var     </strong>";


    }   

    if (Potencia =="Var"){
      document.getElementById("TipoPotencia").innerHTML = "<strong> Var                       </strong>";
      document.getElementById("Label1"     ).innerHTML = "<strong> S(VA) y P(Watts)           </strong>";
      document.getElementById("Label2"     ).innerHTML = "<strong> S(VA) y Factor Potencia    </strong>";
      document.getElementById("Label3"     ).innerHTML = "<strong> P(Watts) y Factor Potencia </strong>";

      document.getElementById("Valor11"     ).innerHTML = "<strong> S       </strong>";
      document.getElementById("Valor12"     ).innerHTML = "<strong> VA      </strong>";

      document.getElementById("Valor21"     ).innerHTML = "<strong> P       </strong>";
      document.getElementById("Valor22"     ).innerHTML = "<strong> Watts   </strong>";


    }       

    document.getElementById("Opcion1").checked = true;
    document.getElementById("Opcion1").disabled = false;
    document.getElementById("Opcion2").disabled = true;
    document.getElementById("Opcion3").disabled = true;
    document.getElementById("Opcion2").checked = false;
    document.getElementById("Opcion3").checked = false;

}); 


Opcion1.addEventListener("click",function(){

  var Opcion = document.getElementById("Opcion1").checked;
  var Potencia = document.getElementById("UnidadPotencia").value;

    if (Opcion == false){

      document.getElementById("Opcion2").disabled = false;
      document.getElementById("Opcion3").disabled = false;

    
    } else {

      document.getElementById("Opcion2").disabled = true;
      document.getElementById("Opcion3").disabled = true;

      document.getElementById("Opcion2").checked = false;
      document.getElementById("Opcion3").checked = false;

    }


    if (Potencia == "VA"){
  
      document.getElementById("Valor11"     ).innerHTML = "<strong> P       </strong>";
      document.getElementById("Valor12"     ).innerHTML = "<strong> Watts   </strong>";

      document.getElementById("Valor21"     ).innerHTML = "<strong> Q       </strong>";
      document.getElementById("Valor22"     ).innerHTML = "<strong> Var     </strong>";
    
    }

    if (Potencia == "Watts"){

      document.getElementById("Valor11"     ).innerHTML = "<strong> S       </strong>";
      document.getElementById("Valor12"     ).innerHTML = "<strong> VA      </strong>";

      document.getElementById("Valor21"     ).innerHTML = "<strong> Q       </strong>";
      document.getElementById("Valor22"     ).innerHTML = "<strong> Var     </strong>";
    
    }

    if (Potencia == "Var"){
      
      document.getElementById("Valor11"     ).innerHTML = "<strong> S       </strong>";
      document.getElementById("Valor12"     ).innerHTML = "<strong> VA      </strong>";

      document.getElementById("Valor21"     ).innerHTML = "<strong> P       </strong>";
      document.getElementById("Valor22"     ).innerHTML = "<strong> Watts   </strong>";
    
    }

    
}); 


Opcion2.addEventListener("click",function(){

  var Opcion = document.getElementById("Opcion2").checked;
  var Potencia = document.getElementById("UnidadPotencia").value;

    if (Opcion == false){

      document.getElementById("Opcion1").disabled = false;
      document.getElementById("Opcion3").disabled = false;

      
    } else {

      document.getElementById("Opcion1").disabled = true;
      document.getElementById("Opcion3").disabled = true;

      document.getElementById("Opcion1").checked = false;
      document.getElementById("Opcion3").checked = false;


    }


    if (Potencia == "VA"){
  
      document.getElementById("Valor11"     ).innerHTML = "<strong> P       </strong>";
      document.getElementById("Valor12"     ).innerHTML = "<strong> Watts   </strong>";

      document.getElementById("Valor21"     ).innerHTML = "<strong> FP       </strong>";
      document.getElementById("Valor22"     ).innerHTML = "<strong>          </strong>";
    
    }

    if (Potencia == "Watts"){

      document.getElementById("Valor11"     ).innerHTML = "<strong> S       </strong>";
      document.getElementById("Valor12"     ).innerHTML = "<strong> VA      </strong>";

      document.getElementById("Valor21"     ).innerHTML = "<strong> FP       </strong>";
      document.getElementById("Valor22"     ).innerHTML = "<strong>          </strong>";
    
    }

    if (Potencia == "Var"){
      
      document.getElementById("Valor11"     ).innerHTML = "<strong> S       </strong>";
      document.getElementById("Valor12"     ).innerHTML = "<strong> VA      </strong>";

      document.getElementById("Valor21"     ).innerHTML = "<strong> FP       </strong>";
      document.getElementById("Valor22"     ).innerHTML = "<strong>          </strong>";
    
    }

    
}); 


Opcion3.addEventListener("click",function(){

  var Opcion = document.getElementById("Opcion3").checked;
  var Potencia = document.getElementById("UnidadPotencia").value;

    if (Opcion == false){

      document.getElementById("Opcion1").disabled = false;
      document.getElementById("Opcion2").disabled = false;
      
    } else {

      document.getElementById("Opcion1").disabled = true;
      document.getElementById("Opcion2").disabled = true;

      document.getElementById("Opcion1").checked = false;
      document.getElementById("Opcion2").checked = false;

             
    }

    if (Potencia == "VA"){
  
      document.getElementById("Valor11"     ).innerHTML = "<strong> Q        </strong>";
      document.getElementById("Valor12"     ).innerHTML = "<strong> Var      </strong>";

      document.getElementById("Valor21"     ).innerHTML = "<strong> FP       </strong>";
      document.getElementById("Valor22"     ).innerHTML = "<strong>          </strong>";
    
    }

    if (Potencia == "Watts"){

      document.getElementById("Valor11"     ).innerHTML = "<strong> Q        </strong>";
      document.getElementById("Valor12"     ).innerHTML = "<strong> Var      </strong>";

      document.getElementById("Valor21"     ).innerHTML = "<strong> FP       </strong>";
      document.getElementById("Valor22"     ).innerHTML = "<strong>          </strong>";
    
    }

    if (Potencia == "Var"){
      
      document.getElementById("Valor11"     ).innerHTML = "<strong> P        </strong>";
      document.getElementById("Valor12"     ).innerHTML = "<strong> Watts    </strong>";

      document.getElementById("Valor21"     ).innerHTML = "<strong> FP       </strong>";
      document.getElementById("Valor22"     ).innerHTML = "<strong>          </strong>";
    
    }

    
}); 



BotonCalcular.addEventListener("click",function(){

  var Opcion1 = document.getElementById("Opcion1").checked;
  var Opcion2 = document.getElementById("Opcion2").checked;
  var Opcion3 = document.getElementById("Opcion3").checked;
  var Potencia = document.getElementById("UnidadPotencia").value;
  var Input1 = document.getElementById("PrimerInput").value;
  var Input2 = document.getElementById("SegundoInput").value;
 
  var Confirmacion = true;
  document.getElementById("Alerta").hidden=true;
  document.getElementById("Resultado").hidden=true;


  //Validacion Datos

  if (Input1 == 0 ){ 
    Confirmacion = false;
    document.getElementById("Alerta").hidden=false;
    document.getElementById("Alerta").innerHTML = "<strong> Debe introducir Valores en ambos Campos! </strong>";
  }

  if (Input2 == 0 ){ 
    Confirmacion = false;
    document.getElementById("Alerta").hidden=false;
    document.getElementById("Alerta").innerHTML = "<strong> Debe introducir Valores en ambos Campos! </strong>";
  }

  if (Opcion2 == true || Opcion3 == true){
    if (Input2 <= 0){
      Confirmacion = false;
      document.getElementById("Alerta").hidden=false;
      document.getElementById("Alerta").innerHTML = "<strong> Debe introducir un Valor de Factor de Potencia entre 0 y 1  </strong>";
    } 
    if (Input2 > 1){
      Confirmacion = false;
      document.getElementById("Alerta").hidden=false;
      document.getElementById("Alerta").innerHTML = "<strong> Debe introducir un Valor de Factor de Potencia entre 0 y 1  </strong>";
    }  
  }

  //Fin Validacion Datos




  if (Confirmacion == true){

    if (Potencia == "VA"){

      if (Opcion1 == true){
        var Pactiva = Input1;
        var Qactiva = Input2;     
        var S = Math.sqrt(Math.pow(Pactiva, 2) + Math.pow(Qactiva, 2));
        var FP = Pactiva/S;
        var Sfinal  = Math.round(100*S)/100;
        var FPfinal = Math.round(100*FP)/100;
        document.getElementById("Resultado").hidden=false;       
        document.getElementById("Resultado").innerHTML = "<strong> S = "+Sfinal+" VA <br> FP = "+FPfinal+"</strong>";
      }

      if (Opcion2 == true){
        var Pactiva = Input1;
        var FP      = Input2;     
        var S = Pactiva/FP;
        var Q = Math.sqrt(Math.pow(S, 2) - Math.pow(Pactiva, 2));
        var Sfinal  = Math.round(100*S)/100;
        var Qfinal  = Math.round(100*Q)/100;       
        document.getElementById("Resultado").hidden=false;       
        document.getElementById("Resultado").innerHTML = "<strong> S = "+Sfinal+" VA <br> Q = "+Qfinal+" Var</strong>";
      }

      if (Opcion3 == true){
        var Qactiva = Input1;
        var FP      = Input2;     
        var S = Qactiva/(Math.sqrt(1 - Math.pow(FP, 2)));
        var P = Math.sqrt(Math.pow(S, 2) - Math.pow(Qactiva, 2)); 
        var Sfinal  = Math.round(100*S)/100;
        var Pfinal  = Math.round(100*P)/100;       
        document.getElementById("Resultado").hidden=false;       
        document.getElementById("Resultado").innerHTML = "<strong> S = "+Sfinal+" VA <br> P = "+Pfinal+" Watts</strong>";
      }
 
    }


    if (Potencia == "Watts"){

      if (Opcion1 == true){
        var S = Input1;
        var Qactiva = Input2;     
        var P = Math.sqrt(Math.pow(S, 2) - Math.pow(Qactiva, 2)); 
        var FP = P/S;
        var Pfinal  = Math.round(100*P)/100;
        var FPfinal  = Math.round(100*FP)/100;     
        document.getElementById("Resultado").hidden=false;       
        document.getElementById("Resultado").innerHTML = "<strong> P = "+Pfinal+" Watts <br> FP = "+FPfinal+" </strong>"; 
      }

      if (Opcion2 == true){
        var S   = Input1;
        var FP  = Input2;     
        var P = S*FP;   
        var Q = Math.sqrt(Math.pow(S, 2) - Math.pow(P, 2));  
        var Pfinal  = Math.round(100*P)/100;
        var Qfinal  = Math.round(100*Q)/100;    
        document.getElementById("Resultado").hidden=false;       
        document.getElementById("Resultado").innerHTML = "<strong> P = "+Pfinal+" Watts <br> Q = "+Qfinal+" Var </strong>";          
 
      }

      if (Opcion3 == true){
        var Qactiva = Input1;
        var FP      = Input2; 
        var P = Qactiva*FP/(Math.sqrt(1 - Math.pow(FP, 2)));
        var S = P/FP;
        var Pfinal  = Math.round(100*P)/100;
        var Sfinal  = Math.round(100*S)/100;    
        document.getElementById("Resultado").hidden=false;       
        document.getElementById("Resultado").innerHTML = "<strong> P = "+Pfinal+" Watts <br> S = "+Sfinal+" VA </strong>";                
 
      }
 
    }    


    if (Potencia == "Var"){

      if (Opcion1 == true){
        var S = Input1;
        var Pactiva = Input2;    
        var Q = Math.sqrt(Math.pow(S, 2) - Math.pow(Pactiva, 2));  
        var FP = Pactiva/S;
        var Qfinal  = Math.round(100*Q)/100;
        var FPfinal  = Math.round(100*FP)/100;    
        document.getElementById("Resultado").hidden=false;       
        document.getElementById("Resultado").innerHTML = "<strong> Q = "+Qfinal+" Var <br> FP = "+FPfinal+"  </strong>";             
 
      }

      if (Opcion2 == true){
        var S  = Input1;
        var FP = Input2;     
        var P = S*FP;
        var Q = Math.sqrt(Math.pow(S, 2) - Math.pow(P, 2));
        var Pfinal  = Math.round(100*P)/100;
        var Qfinal  = Math.round(100*Q)/100;    
        document.getElementById("Resultado").hidden=false;       
        document.getElementById("Resultado").innerHTML = "<strong> Q = "+Qfinal+" Var <br> P = "+Pfinal+" Watts </strong>";  
      }

      if (Opcion3 == true){
        var Pactiva = Input1;
        var FP      = Input2;     
        var S = Pactiva/FP;
        var Q = Math.sqrt(Math.pow(S, 2) - Math.pow(Pactiva, 2));        
        var Sfinal  = Math.round(100*S)/100;
        var Qfinal  = Math.round(100*Q)/100;    
        document.getElementById("Resultado").hidden=false;       
        document.getElementById("Resultado").innerHTML = "<strong> Q = "+Qfinal+" Var <br> S = "+Sfinal+" VA </strong>";  

      }
 
    }  

  }
    
}); 