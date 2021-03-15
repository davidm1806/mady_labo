<?php
session_start();
if(empty($_SESSION['app_role']) || $_SESSION['app_role'] != 'admin')
    header('Location: ../');

include_once '../inc/connexion.php';
include_once '../inc/util_function.php';


$currentYear = date('Y');

if(isset($_GET['year']))
    $annee_selected = $_GET['year'];
else
    $annee_selected=$currentYear;

//build url
if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')
    $url = "https://";
else
    $url = "http://";
// Append the host(domain name, ip) to the URL.
$url.= $_SERVER['HTTP_HOST'];

$current_page = getCurrentUrl();

$mois_array = [
    0 => [0 => 'Jan', 1=> 0, 2=> '01'],
    1 => [0 => 'Fev', 1=> 0, 2=> '02'],
    2 => [0 => 'Mar', 1=> 0, 2=> '03'],
    3 => [0 => 'Avr', 1=> 0, 2=> '04'],
    4 => [0 => 'Mai', 1=> 0, 2=> '05'],
    5 => [0 => 'Jui', 1=> 0, 2=> '06'],
    6 => [0 => 'Jui', 1=> 0, 2=> '07'],
    7 => [0 => 'Aou', 1=> 0, 2=> '08'],
    8 => [0 => 'Sep', 1=> 0, 2=> '09'],
    9 => [0 => 'Oct', 1=> 0, 2=> '10'],
    10 => [0 => 'Nov', 1=> 0, 2=> '11'],
    11 => [0 => 'Dec', 1=> 0, 2=> '12'],

];

$annee_array = [
    0 => [0 => $currentYear, 1=> 0],
    1 => [0 => $currentYear+1, 1=> 0],
    2 => [0 => $currentYear+2, 1=> 0],
    3 => [0 => $currentYear+3, 1=> 0],
    4 => [0 => $currentYear+4, 1=> 0],

];


//lien pour avoir l'historique des vistes par mois
$href_mois = '?year='.$annee_selected;

//query
if (isset($_GET['mois']))
    $moisValue = $_GET['mois'];
else
    $moisValue = date('m');


if(isset($_GET['page']) && isset($_GET['size'])){
    $page = $_GET['page'];
    $size = $_GET['size'];
} else{
    $page=0;
    $size=30;
}


$query_mois = "select * from visiteur v left join visiteur_page vp on v.id = vp.visiteur_id where vp.annee='$annee_selected' and vp.mois='$moisValue' order by vp.id desc limit $page,$size";
$query_for_num_visit_of_mounth = "select count(v.id) as num_visit from visiteur v left join visiteur_page vp on v.id = vp.visiteur_id where vp.annee='$annee_selected' and vp.mois='$moisValue'";

$query_annee = "select * from visiteur v left join visiteur_page vp on v.id = vp.visiteur_id where vp.annee='$annee_selected' order by vp.id desc";
$query_all = "select * from visiteur_page";


$resul_all_visite= $conn->query($query_all);

$visite_by_mounth = $conn->query($query_annee);

$data = $visite_by_mounth->fetchAll();

foreach ($data as $visite) {
    //var_dump($visite);
    if($visite->mois=='01')
        $mois_array[0][1]+=$visite->nbre_vue;

    elseif($visite->mois=='02')
        $mois_array[1][1]+=$visite->nbre_vue;
    elseif($visite->mois=='03')
        $mois_array[2][1]+=$visite->nbre_vue;
    elseif($visite->mois=='04')
        $mois_array[3][1]+=$visite->nbre_vue;
    elseif($visite->mois=='05')
        $mois_array[4][1]+=$visite->nbre_vue;
    elseif($visite->mois=='06')
        $mois_array[5][1]+=$visite->nbre_vue;
    elseif($visite->mois=='07')
        $mois_array[6][1]+=$visite->nbre_vue;
    elseif($visite->mois=='08')
        $mois_array[7][1]+=$visite->nbre_vue;
    elseif($visite->mois=='09')
        $mois_array[8][1]+=$visite->nbre_vue;
    elseif($visite->mois=='10')
        $mois_array[9][1]+=$visite->nbre_vue;
    elseif($visite->mois=='11')
        $mois_array[10][1]+=$visite->nbre_vue;
    elseif($visite->mois=='12')
        $mois_array[11][1]+=$visite->nbre_vue;
}

$data = $resul_all_visite->fetchAll();



foreach ($data as $visite) {
    //var_dump($visite->nbre_vue);
    if($visite->annee==$currentYear)
        $annee_array[0][1]+=$visite->nbre_vue;

    elseif($visite->annee==$currentYear-1)
        $annee_array[1][1]+=$visite->nbre_vue;
    elseif($visite->annee==$currentYear-2)
        $annee_array[2][1]+=$visite->nbre_vue;
    elseif($visite->annee==$currentYear-3)
        $annee_array[3][1]+=$visite->nbre_vue;
    elseif($visite->annee==$currentYear-4)
        $annee_array[4][1]+=$visite->nbre_vue;
}




?>
<html lang="fr">
    <head>
        <title>Mady-solution pages visitées</title>
        <link rel="stylesheet" href="../css/bootstrap.css">
        <link href="http://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
        <!--Import Google Icon Font-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!--Import materialize.css-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css">

    </head>

    <body style="background-color: #efefef">
    <div class="container-fluid">

        <div class="container mt-4 text-center h3 py-2 bg-primary">
            <span>Historique des visites</span>
        </div>

        <div class="row text-muted mt-2">
            <?php foreach ($annee_array as $visite){?>
                <div class="col text-center pr-1 font-weight-bold">
                    <a href="<?php echo '?year='.$visite[0] ?>">
                        <div class="text-white  <?php if($annee_selected==$visite[0]) echo 'bg-success';
                        else echo 'bg-secondary' ?>">
                            <?php echo $visite[0]?><br/>
                            <?php echo $visite[1]?> <small>vues</small>
                        </div>
                    </a>
                </div>
            <?php }?>

        </div>

        <div class="row text-muted mt-2">

            <?php
            $m = date('m');
            foreach ($mois_array as $visite){?>
                <div class="col-1 text-center pr-1 font-weight-bold">
                    <a href="<?php echo $href_mois.'&mois='.$visite[2]?>">
                        <div class=" text-white <?php if(isset($_GET['mois']) && $_GET['mois']==$visite[2]) echo 'bg-success';
                        elseif ($m == $visite[2]) echo 'bg-info';
                        else echo 'bg-secondary' ?> ">
                            <?php echo $visite[0] ?><br/>
                            <?php echo $visite[1]?> <small>vues</small>
                        </div>
                    </a>
                </div>
            <?php }?>

        </div>

        <div class="w-100 border-bottom mt-2"></div>

        <br/>
    </div>


    <div class="container">
        <table class="table table-bordered table-sm table-striped" id="tabla">
            <thead>
            <tr>
                <th>Adresse Ip</th>
                <th>Pays</th>
                <th>Ville</th>
                <th>url</th>
                <th>Nbre vue</th>
                <th>Date</th>

            </tr>
            </thead>
            <tbody id="myTable">
            <?php
            $visite_by_day = $conn->query($query_mois);

            while ($visite = $visite_by_day->fetch()) {
                /* if (!empty(geoip_record_by_name('www.google.com'))) {
                     $record = geoip_record_by_name($visite['ip_adress']);
                     $pays = $record["country_name"];
                     $ville = $record['city'];
                 } else{
                     $pays = "";
                     $ville = "";
                 }*/
                ?>

                <tr>
                    <td><?php echo $visite->ip_adress?></td>
                    <td><?php  echo $visite->pays?></td>
                    <td><?php echo $visite->ville?></td>
                    <td><a href="<?php echo $visite->url?>" target="_blank"><?php echo $visite->url?></a></td>
                    <td><?php echo $visite->nbre_vue?></td>
                    <td><?php echo $visite->jour_num.'-'.$visite->mois.'-'.$visite->annee?></td>
                </tr>
            <?php }?>
            </tbody>
        </table>

        <div class="col-md-12 center text-center">
            <span class="left" id="total_reg"></span>
            <ul class="pagination pager justify-content-end" id="myPager"></ul>
        </div>
    </div>

    <script src="../js/jquery.js"></script>
    <script src="../js/pagination.js"></script>
    <script type="text/javascript">
        $(document).ready(function(){
            $('#myTable').pageMe({
                pagerSelector:'#myPager',
                activeColor: 'green',
                prevText:'Prev',
                nextText:'Next',
                showPrevNext:true,
                hidePageNumbers:false,
                perPage:15
            });

            // Write on keyup event of keyword input element


        });
    </script>
    <script type="text/javascript">

        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36251023-1']);
        _gaq.push(['_setDomainName', 'jqueryscript.net']);
        _gaq.push(['_trackPageview']);

        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

    </script>
    </body>
</html>


