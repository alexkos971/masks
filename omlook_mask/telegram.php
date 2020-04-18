<?php 

  $name = $_POST['user_name'];
  $phone = $_POST['user_phone'];
  $email = $_POST['user_email'];
  $message = $_POST['user_message'];
  $token = "874861978:AAEWhe7zqGDQpfv3cs9H0NK2MLTtgu8XG9Q",
  $chat_id = "-248955139";
  
  $arr = array(
    "Имя пользователя: " => $name,
    "Телефон: " => $phone,
    "E-mail: " => $email,
    "Сообщение: " => $message
  );

  foreach ($arr as $key => $value) {
      $txt .= "<b>" .$key. "</b> " .$value. "%0A";
  }

  $send = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}
    &parse_mode=html&text={$txt}", "r");

  if ($send) {
      echo '<h1 id="success">Спасибо !!!</h1>';
  }
  else {
      echo 'Ошибка...';
  }

?>