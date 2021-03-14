<?
$userId = $_POST['userId'];
$userPassword = $_POST['userPassword'];
$email = $_POST['email'];



$txt .= $userId;
$txt .= $userPassword;
$txt .= $email;


echo $txt;
?>
