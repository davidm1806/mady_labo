<?php
include_once 'connexion.php';
$username = $_POST['username'];
$password=$_POST['password'];

if (isset($conn)) {
    $query = $conn->prepare("select * from utilisateur where username= :username");
    $query->execute([
        'username' => $username
    ]);

    $utilisateur = $query->fetch();

    //var_dump($utilisateur);


    if(isset($utilisateur->password) && $utilisateur->password == $password){
        session_start();
        $_SESSION['username'] = $utilisateur->username;
        $_SESSION['app_role'] = $utilisateur->app_role;

        header('Location: fiche-historique-des-visites.php');
    } else {
        echo "<div class='alert alert-danger w-100'> Connexion refuser</div>";
    }

}



