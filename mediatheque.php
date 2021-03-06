<?php include "session-manager.php"?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="Laboratoire, Mady solution,
 nettoyage de billets, billet vert, billet imaculés,
  multiplication de billet, produit en poudre SSD, machine XOXO 2, sécuriser billet">
    <title>Maddy solution - Phototheque</title>

    <!-- Stylesheets -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/responsive.css" rel="stylesheet">
    <link href="css/card-product.css" rel="stylesheet">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">

</head>

<!-- page wrapper -->
<body class="boxed_wrapper">


<!-- .preloader -->
<div class="preloader"></div>
<!-- /.preloader -->


<!-- Main Header -->
<header class="main-header">
    <!-- header-top -->
    <?php include 'inc/component/sub-header.php'?>
    <!-- header-top end -->

    <!-- header-bottom -->
    <div class="header-bottom">
        <div class="container">
            <div class="nav-outer clearfix">
                <div class="menu-area">
                    <nav class="main-menu navbar-expand-lg">
                        <div class="navbar-header">
                            <!-- Toggle Button -->
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="navbar-collapse collapse clearfix">
                            <ul class="navigation clearfix">
                                <li><a href="index.php">Accueil</a>
                                </li>
                                <li><a href="team.php">Equipes</a></li>
                                <li><a href="boutique.php">Boutiques</a></li>
                                <li class="current"><a href="mediatheque.php">Médiathèque</a></li>
                                <li><a href="contact.php">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div><!-- header-bottom end -->


    <!--Sticky Header-->
    <?php include 'inc/component/sticky-header.php'?>
    <!-- sticky-header end -->
</header>
<!-- End Main Header -->


<!-- page-title -->
<section class="page-title centred" style="background-image: url(images/background/bank-notes-941246_1920.jpg);">
    <div class="container">
        <div class="content-box">
            <div class="title">Médiathèque</div>
            <ul class="bread-crumb">
                <li><a href="index.php">Accueil</a></li>
                <li>Médiathèques</li>
            </ul>
        </div>
    </div>
</section>
<!-- page-title end -->


<!-- team-section -->
<section class="team-section team-page">
    <div class="container">
        <div class="row">

            <!-- ============== Deuxième ligne ====================== -->
            <div class="col-md-4 mt-2">
                <!-- bbb_deals -->
                <iframe class="video-card" src="https://www.youtube.com/embed/-4Af8iFoXv8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col-md-4 mt-2">
                <!-- bbb_deals -->
                <iframe class="video-card" src="https://www.youtube.com/embed/w8kvxUuprrY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col-md-4 mt-2">
                <!-- bbb_deals -->
                <iframe class="video-card" src="https://www.youtube.com/embed/b8tS8KIMYO4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>


            <!-- ============== Deuxième ligne ====================== -->
            <div class="col-md-4 mt-2">
                <!-- bbb_deals -->
                <iframe class="video-card" src="https://www.youtube.com/embed/faKYpxcVHh8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col-md-4 mt-2">
                <!-- bbb_deals -->
                <iframe class="video-card" src="https://www.youtube.com/embed/EEg4ca-iZNQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col-md-4 mt-2">
                <!-- bbb_deals -->
                <iframe class="video-card" src="https://www.youtube.com/embed/kRPKoZ3DVP0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>


            <div class="col-md-4">
                <!-- bbb_deals -->
                <iframe class="video-card" src="https://www.youtube.com/embed/MapfaxJeYSA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col-md-4">
                <!-- bbb_deals -->
                <iframe class="video-card" src="https://www.youtube.com/embed/mC5RXkvPX0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col-md-4">
                <!-- bbb_deals -->
                <iframe class="video-card" src="https://www.youtube.com/embed/WQLxk_Kj6IM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>

    </div>
</section>
<!-- team-section end -->


<?php include 'component/footer.php'?>



<!--Scroll to top-->
<button class="scroll-top scroll-to-target" data-target="html">
    <span class="fa fa-angle-up"></span>
</button>

<?php include 'component/social-login.php'?>

<!-- jequery plugins -->
<script src="js/jquery.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>

<script src="js/owl.carousel.min.js"></script>
<script src="js/wow.js"></script>
<script src="js/validation.js"></script>
<script src="js/isotope.js"></script>
<script src="js/html5lightbox/html5lightbox.js"></script>
<script type="text/javascript" src="js/SmoothScroll.js"></script>

<!-- map script -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBevTAR-V2fDy9gQsQn1xNHBPH2D36kck0"></script>
<script src="js/gmaps.js"></script>
<script src="js/map-helper.js"></script>

<!-- main-js -->
<script src="js/script.js"></script>

<script type="text/javascript" src="js/geo-fetch.js"></script>
<script>
    $.post('ajouter-pays-et-ville-a-un-visiteur.php', {pays: userIPInfo.country_name, ville: userIPInfo.city,})
        .done(function( data ) {
            //alert( "Data Loaded: " + data );
        });

    $(function () {
        $('#exampleModalCenter').modal('toggle');
    });
    //console.log(userIPInfo)
</script>

</body><!-- End of .page_wrapper -->
</html>
