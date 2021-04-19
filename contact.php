<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="Laboratoire, Mady solution,
 nettoyage de billets, billet vert, billet imaculés,
  multiplication de billet, produit en poudre SSD, machine XOXO 2, sécuriser billet">

<title>Mady Solution - Contactez nous</title>

<!-- Stylesheets -->
<link href="css/style.css" rel="stylesheet">
<link href="css/responsive.css" rel="stylesheet">
<link rel="icon" href="images/favicon.ico" type="image/x-icon">

    <style type="text/css">
        .link i{
            font-size: 32px;
        }

        .link {
            text-align: center;
        }
    </style>
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
                                    <!--<li class="dropdown"><a href="#">Services</a>
                                        <ul>
                                            <li><a href="research.php">Touts les articles</a></li>
                                            <li><a href="books.php">Offre</a></li>
                                            <li><a href="articles.php">Adhésion</a></li>
                                            <li><a href="error.php">Produit et poudre SSD</a></li>
                                            <li><a href="error.php">Origine des billets maculés</a></li>
                                            <li><a href="error.php">Cliché sémi finis</a></li>
                                            <li><a href="error.php">1&1 s'engage</a></li>
                                        </ul>
                                    </li>-->
                                    <li><a href="team.php">Equipes</a></li>
                                    <li><a href="boutique.php">Boutique</a></li>
                                    <li><a href="mediatheque.php">Médiathèque</a></li>
                                    <li class="current"><a href="contact.php">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div><!-- header-bottom end -->


        <!--Sticky Header-->
        <div class="sticky-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12 column">
                        <figure class="logo-box"><a href="index.php"><img src="images/logo0.png" height="55" alt=""></a></figure>
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 menu-column">
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
                                        <!--<li class="dropdown"><a href="#">Services</a>
                                            <ul>
                                                <li><a href="research.php">Touts les articles</a></li>
                                                <li><a href="books.php">Offre</a></li>
                                                <li><a href="articles.php">Adhésion</a></li>
                                                <li><a href="error.php">Produit et poudre SSD</a></li>
                                                <li><a href="error.php">Origine des billets maculés</a></li>
                                                <li><a href="error.php">Cliché sémi finis</a></li>
                                                <li><a href="error.php">1&1 s'engage</a></li>
                                            </ul>
                                        </li>-->
                                        <li><a href="team.php">Equipes</a></li>
                                        <li><a href="boutique.php">Boutique</a></li>
                                        <li><a href="mediatheque.php">Médiathèque</a></li>
                                        <li class="current"><a href="contact.php">Contact</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- sticky-header end -->
    </header>
    <!-- End Main Header -->


    <!-- page-title -->
    <section class="page-title centred" style="background-image: url(images/background/nature-bg.jpg);">
        <div class="container">
            <div class="content-box">
                <div class="title">Contactez Nous</div>
                <ul class="bread-crumb">
                    <li><a href="index.php">Accueil</a></li>
                    <li>Contactez Nous</li>
                </ul>
            </div>
        </div>
    </section>
    <!-- page-title end -->


    <!-- contact-section -->
    <section class="contact-section">


        <?php if(isset($_POST['name'])) include "send-email/send-email.php"?>



        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12 col-sm-12 content-column">
                    <div class="inner-content">
                        <div class="contact-form-area">
                            <form id="contact-form" name="contact_form" class="default-form" action="" method="post">
                                <div class="form-group">
                                    <label>Nom complèt*</label>
                                    <input type="text" name="name" required>
                                </div>
                                <div class="form-group">
                                    <label>Email*</label>
                                    <input type="email" name="email" required>
                                </div>
                                <div class="form-group">
                                    <label>Téléphone</label>
                                    <input type="text" name="phone">
                                </div>
                                <div class="form-group">
                                    <label>Suject*</label>
                                    <input type="text" name="object">
                                </div>
                                <div class="form-group">
                                    <label>Votre message*</label>
                                    <textarea name="message" required></textarea>
                                </div>
                                <span class="text-danger">Les champs ayant le caractère (*) sont obligatoires</span>
                                <div class="contact-button">
                                    <button type="submit" class="theme-btn" id="btn-submit" data-loading-text="Veillez partienter.....">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 sidebar-column">
                    <div class="sidebar-content">
                        <div class="single-item">
                            <h4>Adresse</h4>
                            <div class="text">France, Montauban, 9, rue de l'Hôtel-de-Ville</div>
                        </div>
                        <div class="single-item">
                            <h4>information Contact</h4>
                            <div class="text">
                                <p>Téléphone:  +33 605.645.674 (whatsapp)</p>
                                <p>Email:  msslaboratoire@gmail.com</p>
                            </div>
                        </div>
                        <div class="link">
                            <a href="#" class="mr-2"><i class="fa fa-facebook-f rounded-circle"></i> </a>
                            <a href="#" class="mr-2"><i class="fa fa-twitter rounded-circle"></i> </a>
                            <a href="#" class="mr-2"><i class="fa fa-linkedin rounded-circle"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- contact-section end -->


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


<script>
    /*document.getElementById('btn-submit').addEventListener('click', function (e) {
        e.preventDefault();
        document.forms[0].submit();
    })*/
</script>

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
