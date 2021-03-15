<?php
include("inc/connexion.php");

if (isset($_POST)) {
    $pays = $_POST['pays'];
    $ville = $_POST['ville'];

    $id = $_COOKIE['info'];


    $query = "update visiteur set pays='$pays', ville='$ville' where session_id='$id'";

    $conn->exec($query);
    /*if(!$result)
        die('Requet invalid :'.mysql_error());*/
}
