
<?php 

//Primero llamamos a los campos

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

//datos de el correo del

$destinario = "santiagogui1909@gmail.com";
$asunto = "Correo desde nuestra web";

$Carta = "De: $nombre \n";
$Carta .= "Correo: $correo \n";
$Carta .= "Telefono: $telefono \n";
$Carta .= "Mensaje: $mensaje \n";

//envio del mensaje del

mail($destinario,$asunto,$Carta);
header('location: mensajeEnvio.html');

?>