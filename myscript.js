
function encriptarTexto (){
    var textoDeCaja = document.getElementById("encriptar-desencriptar").value;

    if(textoDeCaja==""){
        alert("¡Ingresa un mensaje para encriptar!");
    }

    else{
        textoDeCaja = textoDeCaja.toLowerCase();
        var resultoEncriptacion = "";

        for (var i=0; i <= textoDeCaja.length; i++) { 
 
            if (textoDeCaja.charAt(i) == "a"){
                resultoEncriptacion += "ai";
            }
            else if (textoDeCaja.charAt(i) == "e"){
                resultoEncriptacion += "enter";
            }
            else if (textoDeCaja.charAt(i) == "i"){
                resultoEncriptacion += "imes";
            }
            else if (textoDeCaja.charAt(i) == "o"){
                resultoEncriptacion += "ober";
            }
            else if (textoDeCaja.charAt(i) == "u"){
                resultoEncriptacion += "ufat";
            }
            else{
                resultoEncriptacion += textoDeCaja.charAt(i); 
            }
            
        } 
        //document.getElementById("munieco").style.display = "none";
        //document.getElementById("ningun-Texto").style.display = "none";
        document.getElementById("munieco").style.visibility = "hidden";
        document.getElementById("ningun-Texto").style.visibility = "hidden";

        var mostrarMensaje = document.getElementById("textarea-mensaje")
        mostrarMensaje.value="";
        mostrarMensaje.value = resultoEncriptacion;
        
        //alert(resultoEncriptacion);
    }    

}

function desencriptarTexto (){
    //alert("click en boton desencriptar");
    var textoDeCaja= document.getElementById("encriptar-desencriptar").value;
    if(textoDeCaja==""){
        alert("Ingresa un mensaje para desencriptar");
    }
    else{
       var resultoDesencriptacion = "";
       for (var i=0; i <= textoDeCaja.length; i++) { 
 
            if (textoDeCaja.charAt(i) == "a"){
                resultoDesencriptacion += "a";
                i+=1;
            }
            else if (textoDeCaja.charAt(i) == "e"){
                resultoDesencriptacion += "e"
                i+=4;
            }
            else if (textoDeCaja.charAt(i) == "i"){
                resultoDesencriptacion += "i";
                i+=3;
            }
            else if (textoDeCaja.charAt(i) == "o"){
                resultoDesencriptacion += "o";
                i+=3;
            }
            else if (textoDeCaja.charAt(i) == "u"){
                resultoDesencriptacion += "u";
                i+=3;
            }
            else{
                resultoDesencriptacion += textoDeCaja.charAt(i); 
            }
        } 
        document.getElementById("munieco").style.display = "none";
        document.getElementById("ningun-Texto").style.display = "none";
        //document.getElementById("munieco").style.visibility = "hidden";
        //document.getElementById("ningun-Texto").style.visibility = "hidden";

        var mostrarMensaje = document.getElementById("textarea-mensaje");
        mostrarMensaje.value="";
        mostrarMensaje.value = resultoDesencriptacion;
       
    } 
    
} 

function copiartexto(){
    //alert("Copiado");
    var copiarTexto = document.getElementById("textarea-mensaje");
    copiarTexto.select();
    document.execCommand("copy");
}








