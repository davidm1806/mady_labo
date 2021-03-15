<?php
$servername = 'localhost';
$username = 'admin';
$password = 'ren@rd-5554';
$conn = null;

//On essaie de se connecter
try{
    $conn = new PDO("mysql:host=$servername;dbname=mady_bd", $username, $password, [
        //On définit le mode d'erreur de PDO sur Exception
        PDO::ATTR_ERRMODE=> PDO::ERRMODE_EXCEPTION,
        //ON definit le forma de retour des données
        PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_OBJ
    ]);

    echo 'Connexion réussie';
}

    /*On capture les exceptions si une exception est lancée et on affiche
     *les informations relatives à celle-ci*/
catch(PDOException $e){
    echo "Erreur : " . $e->getMessage();
}

