<?php require_once '../inc/connexion.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mady Solution - panel</title>

    <link rel="stylesheet" href="../css/login.css">
    <link rel="stylesheet" href="../css/bootstrap.css">
</head>
<body>

<div class="login-page">

    <div class="form">
        <?php echo 'bonjour';
        if(isset($_POST['password'])){
            include_once '../inc/authentication.php';
        }?>
        <!--<form class="register-form" method="post" action="">
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
            <p class="message">Already registered? <a href="#">Sign In</a></p>
        </form>-->
        <form class="login-form" method="post" action="">
            <input type="text" placeholder="username" name="username" id="username"/>
            <input type="password" placeholder="password" name="password" id="password"/>
            <button type="button" id="button-save">login</button>
        </form>
    </div>

    <script src="../js/login.js"></script>
    <script src="../js/jquery.js"></script>

    <script>
        $('#button-save').click(function (event) {
            event.preventDefault();
            let username = $('#username').val();
            let password = $('#password').val();

            if (username && username != '' && password != '' && password) {

                document.querySelector('.login-form').submit();
                /*let formData = new FormData();
                formData.append('username', username);
                formData.append('password', password);
                $.ajax({
                    type: "POST",
                    url: '../inc/authentication.php',
                    data: {'username':username, 'password':password},
                    success: function () {
                        window.location.href = "fiche-historique-des-visites.php";
                    },
                    error: function (){
                        console.log('echec authenttification');
                    },
                    dataType: 'text'
                });*/
            }


        })
    </script>
</div>
</body>
</html>
