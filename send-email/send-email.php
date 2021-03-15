<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

require_once 'inc/util_function.php';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$pre_fix_object = 'Mady laboratoire | ';
$object = isset($_POST['object'])?$pre_fix_object.$_POST['object']:$pre_fix_object.'Demande information';

$message= $_POST['message'];

$url = getCurrentUrl();


//$to = 'e.nyangono@seca-environnement.com';
$to = 'davidluiz.matjaba@gmail.com';

$body = "
<p>Nom : $name</p>
<p>Email : $email</p> 
<p>Telephone : $phone</p> 
<br/>
<p>$message</p>
<br/>
<p>Envoyé depuis : <a href='$url'>$url</a></p>";


$mail = new PHPMailer(true);

//set_time_limit(70);

try{
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();                                            //Send using SMTP
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged

    //$mail->Timeout= 60;
//    $mail->Username   = 'formulaire@seca-environnement.com';
//    $mail->Host       = 'ssl0.ovh.net';                     //Set the SMTP server to send through
//    $mail->Password   = 'Seca@2021';                               //SMTP password
//    $mail->Port       = 465;                                //Set the SMTP server to send through


    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'allsavedev2@gmail.com';
    $mail->Password   = 'wwhfdeclkyhozjnz';                               //SMTP password
    $mail->Port       = 587;

    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );


    //Recipients
    $mail->setFrom($email, 'Mailer');
    $mail->addAddress('msslaboratoire@gmail.com');
    $mail->addCC($to);//Add a recipient             //Name is optional
    $mail->addReplyTo($to, 'Information');


    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $object;
    $mail->Body    = $body;

    $mail->send();
    echo '<div class="alert alert-success text-center" role="alert">
      Votre mail a été envoyé avec succes
    </div>';

} catch (Exception $e) {
    echo '<div class="alert alert-danger text-center" role="alert">
        Une erreur est survenue lors de l\'envoie de l\'email. Veillez réessayer plus tard. 
    </div>';
}

/*$smtp = Mail::factory('smtp', array(
    'host' => 'ssl0.ovh.net',
    'port' => '587',
    'auth' => 'login',
    'username' => 'formulaire@seca-environnement.com',
    'password' => 'Seca@2021',
));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
    echo('<p>' . $mail->getMessage() . '</p>');
} else {
    echo('<p>Message successfully sent!</p>');
}*/
