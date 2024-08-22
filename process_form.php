<?php
header('Content-Type: application/json');
$errors = [];
$data = [];

if (empty($_POST['nombre'])) {
    $errors['nombre'] = 'El nombre es obligatorio.';
}

if (!filter_var($_POST['correo'], FILTER_VALIDATE_EMAIL)) {
    $errors['correo'] = 'Correo electrónico no válido.';
}

if (empty($_POST['genero'])) {
    $errors['genero'] = 'Selecciona un género.';
}

if (strlen($_POST['password']) < 6) {
    $errors['password'] = 'La contraseña debe tener al menos 6 caracteres.';
}

if (empty($_POST['comentario'])) {
    $errors['comentario'] = 'El comentario es obligatorio.';
}

if (empty($_POST['ciudad'])) {
    $errors['ciudad'] = 'Selecciona una ciudad.';
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    $data['success'] = true;
    $data['message'] = '¡Formulario enviado con éxito!';
}

echo json_encode($data);
?>
