<?php
    //Destinatario
    $destinatario = 'gdanielmh35@gmail.com';
    //Campos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $celular = $_POST['celular'];
    $mensaje = $_POST['celular'];
    $fechaCita = $_POST['fecha-cita'];
    $horaCita = $_POST['hora-cita'];

    $header = "Enviado desde Sonrisas | PruebaWEB";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo <h4>Correo enviado con exito!<h4>;
?>