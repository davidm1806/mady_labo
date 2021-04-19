<?php include "session-manager.php"?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

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
                                    <li><a href="index.php">Accueil</a></li>
                                    <li><a href="team.php">Equipes</a></li>
                                    <li class="current"><a href="boutique.php">Boutique</a></li>
                                    <li><a href="mediatheque.php">Médiathèque</a></li>
                                    <li><a href="contact.php">Contact</a></li>
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
                        <figure class="logo-box"><a href="index.php"><img src="images/logo0.png" alt=""></a></figure>
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
                                        <li><a href="index.php">Accueil</a></li>
                                        <li><a href="team.php">Equipes</a></li>
                                        <li class="current"><a href="boutique.php">Boutiques</a></li>
                                        <li><a href="mediatheque.php">Médiathèque</a></li>
                                        <li><a href="contact.php">Contact</a></li>
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
    <section class="page-title centred" style="background-image: url(images/background/bank-notes-941246_1920.jpg);">
        <div class="container">
            <div class="content-box">
                <div class="title">Boutique</div>
                <ul class="bread-crumb">
                    <li><a href="index.php">Accueil</a></li>
                    <li>Boutique</li>
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
                    <div class="bbb_deals">
                        <div class="ribbon ribbon-top-right"><span><small class="cross">x </small>4</span></div>
                        <div class="bbb_deals_title">Nos offres du jour</div>
                        <div class="bbb_deals_slider_container">
                            <div class=" bbb_deals_item">
                                <div class="bbb_deals_image"><img src="images/product/img_6.png" class="img-card" alt=""></div>
                                <div class="bbb_deals_content">
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_category"><a href="#"></a>Nettoyeuse</div>
                                        <div class="bbb_deals_item_price_a ml-auto"><strike>60,000.00$</strike></div>
                                    </div>
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_name">Machine XOXO 2</div>
                                        <div class="bbb_deals_item_price ml-auto">45,999.00$</div>
                                    </div>
                                    <div class="available">
                                        <div class="available_line d-flex flex-row justify-content-start">
                                            <div class="available_title">Dispinible: <span>20</span></div>
                                            <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        </div>
                                        <div class="available_bar"><span style="width:17%"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mt-2">
                    <!-- bbb_deals -->
                    <div class="bbb_deals">
                        <div class="ribbon ribbon-top-right"><span><small class="cross">x </small>4</span></div>
                        <div class="bbb_deals_title">Nos offres du jour</div>
                        <div class="bbb_deals_slider_container">
                            <div class=" bbb_deals_item">
                                <div class="bbb_deals_image"><img src="images/product/img_7.png" class="img-card" alt=""></div>
                                <div class="bbb_deals_content">
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_category"><a href="#"></a>Coffre</div>
                                        <div class="bbb_deals_item_price_a ml-auto"><strike>2,000.00$</strike></div>
                                    </div>
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_name">Coffre stérilisé</div>
                                        <div class="bbb_deals_item_price ml-auto">1,800.00$</div>
                                    </div>
                                    <div class="available">
                                        <div class="available_line d-flex flex-row justify-content-start">
                                            <div class="available_title">Dispinible: <span>25</span></div>
                                            <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        </div>
                                        <div class="available_bar"><span style="width:17%"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mt-2">
                    <!-- bbb_deals -->
                    <div class="bbb_deals">
                        <div class="ribbon ribbon-top-right"><span><small class="cross">x </small>4</span></div>
                        <div class="bbb_deals_title">Nos offres du jour</div>
                        <div class="bbb_deals_slider_container">
                            <div class=" bbb_deals_item">
                                <div class="bbb_deals_image"><img src="images/product/img_8.png" class="img-card" alt=""></div>
                                <div class="bbb_deals_content">
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_category"><a href="#"></a>Solution</div>
                                        <div class="bbb_deals_item_price_a ml-auto"><strike>750.00$</strike></div>
                                    </div>
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_name">Ampoule Généra...</div>
                                        <div class="bbb_deals_item_price ml-auto">400.00$</div>
                                    </div>
                                    <div class="available">
                                        <div class="available_line d-flex flex-row justify-content-start">
                                            <div class="available_title">Dispinible: <span>320</span></div>
                                            <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        </div>
                                        <div class="available_bar"><span style="width:17%"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- ============== Deuxième ligne ====================== -->
                <div class="col-md-4 mt-2">
                    <!-- bbb_deals -->
                    <div class="bbb_deals">
                        <div class="ribbon ribbon-top-right"><span><small class="cross">x </small>4</span></div>
                        <div class="bbb_deals_title">Nos offres du jour</div>
                        <div class="bbb_deals_slider_container">
                            <div class=" bbb_deals_item">
                                <div class="bbb_deals_image"><img src="images/product/img_9.png" class="img-card" alt=""></div>
                                <div class="bbb_deals_content">
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_category"><a href="#"></a>Nettoyeuse</div>
                                        <div class="bbb_deals_item_price_a ml-auto"><strike>60,000.00$</strike></div>
                                    </div>
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_name">Machine XOXO 2</div>
                                        <div class="bbb_deals_item_price ml-auto">45,999.00$</div>
                                    </div>
                                    <div class="available">
                                        <div class="available_line d-flex flex-row justify-content-start">
                                            <div class="available_title">Dispinible: <span>20</span></div>
                                            <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        </div>
                                        <div class="available_bar"><span style="width:17%"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mt-2">
                    <!-- bbb_deals -->
                    <div class="bbb_deals">
                        <div class="ribbon ribbon-top-right"><span><small class="cross">x </small>4</span></div>
                        <div class="bbb_deals_title">Nos offres du jour</div>
                        <div class="bbb_deals_slider_container">
                            <div class=" bbb_deals_item">
                                <div class="bbb_deals_image"><img src="images/product/img_10.png" class="img-card" alt=""></div>
                                <div class="bbb_deals_content">
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_category"><a href="#"></a>Coffre</div>
                                        <div class="bbb_deals_item_price_a ml-auto"><strike>2,000.00$</strike></div>
                                    </div>
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_name">Coffre stérilisé</div>
                                        <div class="bbb_deals_item_price ml-auto">1,800.00$</div>
                                    </div>
                                    <div class="available">
                                        <div class="available_line d-flex flex-row justify-content-start">
                                            <div class="available_title">Dispinible: <span>25</span></div>
                                            <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        </div>
                                        <div class="available_bar"><span style="width:17%"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mt-2">
                    <!-- bbb_deals -->
                    <div class="bbb_deals">
                        <div class="ribbon ribbon-top-right"><span><small class="cross">x </small>4</span></div>
                        <div class="bbb_deals_title">Nos offres du jour</div>
                        <div class="bbb_deals_slider_container">
                            <div class=" bbb_deals_item">
                                <div class="bbb_deals_image"><img src="images/product/img_11.png" class="img-card" alt=""></div>
                                <div class="bbb_deals_content">
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_category"><a href="#"></a>Solution</div>
                                        <div class="bbb_deals_item_price_a ml-auto"><strike>750.00$</strike></div>
                                    </div>
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_name">Ampoule Généra...</div>
                                        <div class="bbb_deals_item_price ml-auto">400.00$</div>
                                    </div>
                                    <div class="available">
                                        <div class="available_line d-flex flex-row justify-content-start">
                                            <div class="available_title">Dispinible: <span>320</span></div>
                                            <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        </div>
                                        <div class="available_bar"><span style="width:17%"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-4">
                    <!-- bbb_deals -->
                    <div class="bbb_deals">
                        <div class="ribbon ribbon-top-right"><span><small class="cross">x </small>4</span></div>
                        <div class="bbb_deals_title">Nos offres du jour</div>
                        <div class="bbb_deals_slider_container">
                            <div class=" bbb_deals_item">
                                <div class="bbb_deals_image"><img src="images/product/img.png" class="img-card" alt=""></div>
                                <div class="bbb_deals_content">
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_category"><a href="#"></a>Solution S.S.D</div>
                                        <div class="bbb_deals_item_price_a ml-auto"><strike>6,000$</strike></div>
                                    </div>
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_name">S.S.D Automatic</div>
                                        <div class="bbb_deals_item_price ml-auto">4,000$</div>
                                    </div>
                                    <div class="available">
                                        <div class="available_line d-flex flex-row justify-content-start">
                                            <div class="available_title">Dispinible: <span>450</span></div>
                                            <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        </div>
                                        <div class="available_bar"><span style="width:17%"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <!-- bbb_deals -->
                    <div class="bbb_deals">
                        <div class="ribbon ribbon-top-right"><span><small class="cross">x </small>2</span></div>
                        <div class="bbb_deals_title">Offre du jour</div>
                        <div class="bbb_deals_slider_container">
                            <div class=" bbb_deals_item">
                                <div class="bbb_deals_image"><img src="images/product/img_1.png" class="img-card" alt=""></div>
                                <div class="bbb_deals_content">
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_category"><a href="#">S.S.D poudre</a></div>
                                        <div class="bbb_deals_item_price_a ml-auto"><strike>12,000$</strike></div>
                                    </div>
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_name">ssd,black dollar ...</div>
                                        <div class="bbb_deals_item_price ml-auto">8,000$</div>
                                    </div>
                                    <div class="available">
                                        <div class="available_line d-flex flex-row justify-content-start">
                                            <div class="available_title">Disponible: <span>320</span></div>
                                            <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        </div>
                                        <div class="available_bar"><span style="width:17%"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <!-- bbb_deals -->
                    <div class="bbb_deals">
                        <div class="ribbon ribbon-top-right"><span><small class="cross">x </small>3</span></div>
                        <div class="bbb_deals_title">Offre du jour</div>
                        <div class="bbb_deals_slider_container">
                            <div class=" bbb_deals_item">
                                <div class="bbb_deals_image"><img src="images/product/img_2.png" class="img-card" alt=""></div>
                                <div class="bbb_deals_content">
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_category"><a href="#">Poudre</a></div>
                                        <div class="bbb_deals_item_price_a ml-auto"><strike>18,000.00$</strike></div>
                                    </div>
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_name">Gamme - Poudre</div>
                                        <div class="bbb_deals_item_price ml-auto">14,000.00$</div>
                                    </div>
                                    <div class="available">
                                        <div class="available_line d-flex flex-row justify-content-start">
                                            <div class="available_title">Disponibilité: <span>563</span></div>
                                            <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        </div>
                                        <div class="available_bar"><span style="width:17%"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ============== Deuxième ligne ====================== -->
                <div class="col-md-4 mt-2">
                    <!-- bbb_deals -->
                    <div class="bbb_deals">
                        <div class="ribbon ribbon-top-right"><span><small class="cross">x </small>4</span></div>
                        <div class="bbb_deals_title">Nos offres du jour</div>
                        <div class="bbb_deals_slider_container">
                            <div class=" bbb_deals_item">
                                <div class="bbb_deals_image"><img src="images/product/img_3.png" class="img-card" alt=""></div>
                                <div class="bbb_deals_content">
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_category"><a href="#"></a>Nettoyeuse</div>
                                        <div class="bbb_deals_item_price_a ml-auto"><strike>60,000.00$</strike></div>
                                    </div>
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_name">Machine XOXO 2</div>
                                        <div class="bbb_deals_item_price ml-auto">45,999.00$</div>
                                    </div>
                                    <div class="available">
                                        <div class="available_line d-flex flex-row justify-content-start">
                                            <div class="available_title">Dispinible: <span>20</span></div>
                                            <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        </div>
                                        <div class="available_bar"><span style="width:17%"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mt-2">
                    <!-- bbb_deals -->
                    <div class="bbb_deals">
                        <div class="ribbon ribbon-top-right"><span><small class="cross">x </small>4</span></div>
                        <div class="bbb_deals_title">Nos offres du jour</div>
                        <div class="bbb_deals_slider_container">
                            <div class=" bbb_deals_item">
                                <div class="bbb_deals_image"><img src="images/product/img_4.png" class="img-card" alt=""></div>
                                <div class="bbb_deals_content">
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_category"><a href="#"></a>Coffre</div>
                                        <div class="bbb_deals_item_price_a ml-auto"><strike>2,000.00$</strike></div>
                                    </div>
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_name">Coffre stérilisé</div>
                                        <div class="bbb_deals_item_price ml-auto">1,800.00$</div>
                                    </div>
                                    <div class="available">
                                        <div class="available_line d-flex flex-row justify-content-start">
                                            <div class="available_title">Dispinible: <span>25</span></div>
                                            <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        </div>
                                        <div class="available_bar"><span style="width:17%"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mt-2">
                    <!-- bbb_deals -->
                    <div class="bbb_deals">
                        <div class="ribbon ribbon-top-right"><span><small class="cross">x </small>4</span></div>
                        <div class="bbb_deals_title">Nos offres du jour</div>
                        <div class="bbb_deals_slider_container">
                            <div class=" bbb_deals_item">
                                <div class="bbb_deals_image"><img src="images/product/img_5.png" class="img-card" alt=""></div>
                                <div class="bbb_deals_content">
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_category"><a href="#"></a>Solution</div>
                                        <div class="bbb_deals_item_price_a ml-auto"><strike>750.00$</strike></div>
                                    </div>
                                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div class="bbb_deals_item_name">Ampoule Généra...</div>
                                        <div class="bbb_deals_item_price ml-auto">400.00$</div>
                                    </div>
                                    <div class="available">
                                        <div class="available_line d-flex flex-row justify-content-start">
                                            <div class="available_title">Dispinible: <span>320</span></div>
                                            <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                        </div>
                                        <div class="available_bar"><span style="width:17%"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
