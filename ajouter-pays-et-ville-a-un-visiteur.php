<?php
include("panel/connectionbd.php");

if (isset($_POST)) {
    $pays = $_POST['pays'];
    $ville = $_POST['ville'];

    $id = $_COOKIE['info'];


    $query = "update visiteur set pays='$pays', ville='$ville' where session_id='$id'";

    $result = mysql_query($query);
    /*if(!$result)
        die('Requet invalid :'.mysql_error());*/
}
