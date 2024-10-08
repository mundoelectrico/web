window.addEventListener("load",function(){
  
    document.getElementById("movil-menu").hidden = true;
  
}); 


hamburguesa.addEventListener("click",function(){

    var Visible = document.getElementById("movil-menu").hidden;
   
    console.log(Visible); 

    if (Visible == true){
      document.getElementById("movil-menu").hidden = false;
    } else {
      document.getElementById("movil-menu").hidden = true;
    }
  
  
  }); 
  