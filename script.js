function mostrar() {
    document.getElementById("fondo").style.display = "none";
    document.getElementById("Encriptado").style.display = "block";
  }
  
  function ocultar() {
    document.getElementById("Encriptado").style.display = "none";
    document.getElementById("fondo").style.display = "block";
  }
  
  function encriptar() {
    var entrada = document.getElementById("campito").value;
    var secreto = entrada.replaceAll("e", "enter");
    secreto = secreto.replaceAll("i", "imes");
    secreto = secreto.replaceAll("a", "ai");
    secreto = secreto.replaceAll("o", "ober");
    secreto = secreto.replaceAll("u", "ufat");
    document.getElementById("Encriptador").value = secreto;
    mostrar();
  }
  
  function desEncriptar() {
    var codificado = document.getElementById("campito").value;
    var mensaje = codificado.replaceAll("ufat", "u");
    mensaje = mensaje.replaceAll("ober", "o");
    mensaje = mensaje.replaceAll("ai", "a");
    mensaje = mensaje.replaceAll("imes", "i");
    mensaje = mensaje.replaceAll("enter", "e");
    document.getElementById("Encriptador").value = mensaje;
    mostrar();
  }
  
  function copiarEncriptado() {
    var portapapeles = document.getElementById("Encriptador").value;
    document.getElementById("campito").value = portapapeles;
    ocultar();
  }
  