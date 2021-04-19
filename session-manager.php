<?php
include_once 'inc/util_function.php';

//$servername = 'localhost';
//$username = 'admin';
//$password = 'ren@rd-5554';
//$db_name = 'mady_bd';

$servername = 'localhost';
$username = 'etsman2285_mady';
$password = 'Mady12345678';
$db_name = 'etsman2285_mady_labo';

$pdo=null;
//On essaie de se connecter
try{
    $conn = new PDO("mysql:host=$servername;dbname=$db_name", $username, $password, [
        //On définit le mode d'erreur de PDO sur Exception
        PDO::ATTR_ERRMODE=> PDO::ERRMODE_EXCEPTION,
        //ON definit le forma de retour des données
        PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_OBJ
    ]);

    //echo 'Connexion réussie';
}
    /*On capture les exceptions si une exception est lancée et on affiche
     *les informations relatives à celle-ci*/
catch(PDOException $e){
    echo "Erreur : " . $e->getMessage();
}

/* enregistrement des données du serveur */
$ip_adress = $_SERVER['REMOTE_ADDR'];

$pays ='';
$ville = '';

$visiteur_id='';

$url = getCurrentUrl();

$jr_num = date('d');
$jr_varchar = date('N');
$mois = date('m');
$annee= date('Y');

$time = time()+60*60*12;
$dejaVu = false;

if (empty($_COOKIE['page-info'])) {
    setcookie('page-info',urlencode($url), $time);
    $dejaVu = false;
} elseif (isset($_COOKIE['page-info']) && strpos(urldecode($_COOKIE['page-info']), $url) === false) {
    setcookie('page-info', urlencode(urldecode($_COOKIE['page-info']).$url), $time);
    $dejaVu = false;
} else {
    $dejaVu = true;
}

if (empty($_COOKIE['info'])) {
    $session_id = generateRandomString();
    setcookie('info',$session_id, $time);

    visiteur_page_save($ip_adress, $pays, $ville, $session_id, '::0',$url, 0);

} elseif (!empty($_COOKIE['info']) && $dejaVu===false) {
    $session_id = $_COOKIE['info'];
    $query = $conn->query("select id from visiteur where session_id='$session_id'");
    $visiteur_id = $query->fetch();

    $id = $visiteur_id->id;
    $conn->exec("insert into visiteur_page values ('0','0','$url','$id','1', '0','$jr_num', '$jr_varchar','$mois','$annee')");

} else {
    $session_id = $_COOKIE['info'];
    $query = $conn->query("select id from visiteur where session_id='$session_id'");
    $visiteur_id = $query->fetch();


    $id = $visiteur_id->id;
    $conn->query("update visiteur_page set nbre_vue= (nbre_vue +1) where visiteur_id='$id' and url='$url'");
}



function visiteur_page_save($ip_adress, $pays, $vile,$session_id,$ip_adress_proxy,
                            $url, $nbr_vue)
{
    //$servername = 'localhost';
//$username = 'admin';
//$password = 'ren@rd-5554';
//$db_name = 'mady_bd';

    $servername = 'localhost';
    $username = 'etsman2285_mady';
    $password = 'Mady12345678';
    $db_name = 'etsman2285_mady_labo';

    $conn = new PDO("mysql:host=$servername;dbname=$db_name", $username, $password, [
        //On définit le mode d'erreur de PDO sur Exception
        PDO::ATTR_ERRMODE=> PDO::ERRMODE_EXCEPTION,
        //ON definit le forma de retour des données
        PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_OBJ
    ]);


    $jr_num = date('d');
    $jr_varchar = date('N');
    $mois = date('m');
    $annee= date('y');
    $conn->exec("insert into visiteur(ip_adress, pays, ville, session_id, ip_adress_proxy) values ('$ip_adress', '$pays', '$vile', '$session_id', '$ip_adress_proxy')");

    $query= $conn->query("select id from visiteur order by id desc limit 1");
    $visiteur_id = $query->fetch();

    $id = $visiteur_id->id;


    $GLOBALS['visiteur_id']=$id;
    return $conn->exec("insert into visiteur_page values ('0','0','$url','$id','$nbr_vue', '0','$jr_num', '$jr_varchar','$mois','$annee')");
}




$showModal= false;
if(empty($_COOKIE['cook_police'])){
    $showModal = true;
    setcookie('cook_police', 'true', 0);
}
