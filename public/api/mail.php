<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "recipient@example.com";  // 送信先のメールアドレス
  $subject = "Test Mail";  // 件名
  $message = "This is a test mail.";  // メッセージ内容
  $headers = "From: sender@example.com";  // 送信元のメールアドレス

  if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['status' => 'success', 'message' => 'メールが送信されました']);
  } else {
    echo json_encode(['status' => 'error', 'message' => 'メール送信に失敗しました']);
  }
} else {
  echo json_encode(['status' => 'error', 'message' => '無効なリクエストです']);
}
