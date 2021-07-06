<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];
$subject = $_POST['subject'];

// Рассылка
if (isset($_POST['email']) && !isset($_POST['message']) ) {
  // Формирование самого письма
  $title = "Новый подписчик портала Universal";
  $body = "
  <h2>Подписка на рассылку</h2>
  <b>Электронная почта:</b> $email
  ";
  $location = 'Location: newsletter.php';
} else {
  // Комментарий
  if (!isset($_POST['email'])) {
    // Формирование самого письма
    $title = "Новый комментарий на портале Universal";
    $body = "
    <h2>Статья: $subject</h2>
    <b>Сообщение:</b><br>$message
    ";
  } else {
    // Форма
    $title = "Новое сообщение с портала Universal";
    $body = "
    <h2>Тема сообщения: $subject</h2>
    <b>Сообщение:</b><br>$message<br><br>
    <b>Почта для обратной связи:</b> $email
    ";
    
  }
}

if (isset($_POST['message']) && isset($_POST['subject'])) {
  // Формирование самого письма
  if (isset($_POST['email'])) {
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя пользователя:</b> $name<br>
    <b>Телефон:</b> $phone<br>
    <b>Электронная почта:</b> $email<br><br>
    <b>Сообщение:</b><br>$message
    ";
  } else {
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя пользователя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
  }
  $location = 'Location: thankyou.php';
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'lavrov.sibertools@gmail.com'; // Логин на почте
    $mail->Password   = 'GLOweb13Start'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('lavrov.sibertools@gmail.com', 'Кирилл Лавров'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('lkv@myttk.ru');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header($location);