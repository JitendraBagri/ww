<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $message = $_POST['message'];

  // Store the message in a file or database, or perform any other desired action.
  // For demonstration purposes, we'll simply append the message to a text file.
  $file = 'messages.txt';
  $current = file_get_contents($file);
  $current .= $message . "\n";
  file_put_contents($file, $current);
}
?>
