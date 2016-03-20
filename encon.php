<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="@yield('page_keywords')">
    <meta name="description" content="@yield('page_description')">
    <meta name="robots" content="index,follow">
    <meta name="viewport" content="width=device-width, maximum-scale=1 user-scalable=no">
    <!-- Styles -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:800,600,400|Josefin+Slab:600' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    
    <link rel="stylesheet" href="public/css/encon.min.css">


</head>
<body>
    
<div id="navWrapper">
        <nav class="navbar">
            <div class="container">
                <!-- Main Menu -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a href="#overview"><span>Overview</span></a></li>
                        <li><a href="#schedule"><span>Schedule</span></a></li>
                        <li><a href="#speakers"><span>Speakers</span></a></li>
                        <li><a href="#sponsors"><span>Sponsors</span></a></li>
                        <li><a href="#location"><span>Location</span></a></li>
                        <li><a href="#rsvp"><span>RSVP</span></a></li>
                    </ul>
                </div> <!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
    <section class="content-section" id="home">
        <div id="paralax-1" class="parallax-layer">&nbsp;</div>
        <div id="paralax-2" class="parallax-layer" data-enllax-ratio="0.5">&nbsp;</div>
        <div id="paralax-3" class="parallax-layer" data-enllax-ratio="0.5">&nbsp;</div>
        <div id="paralax-4" class="parallax-layer" data-enllax-ratio="0.4">&nbsp;</div>
        <div id="paralax-5" class="parallax-layer" data-enllax-ratio="0.4">&nbsp;</div>
        <div id="paralax-6" class="parallax-layer" data-enllax-ratio="0.3">&nbsp;</div>
        <div id="paralax-7" class="parallax-layer" data-enllax-ratio="0.3">&nbsp;</div>
        <div id="paralax-8" class="parallax-layer" data-enllax-ratio="0.2">&nbsp;</div>
        <div id="paralax-9" class="parallax-layer" data-enllax-ratio="0.1">&nbsp;</div>
    </section>

    <section class="content-section" id="signin">
        <h1 class="encon-hash">#Signin</h1>
    </section>

    <section class="content-section" id="setip">
        <h1 class="encon-hash">#Setup</h1>
    </section>


<!-- Scripts -->
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

<script src="public/js/encon.min.js"></script>

<script>
    jQuery(document).ready(function($) {
        
        // site application Instantiation
        var EnCon = new EnconSite();
        // parallax scrolling
        $(window).enllax();

        // sticky header nav detection
        $(window).scroll(function(el) {
            EnCon.stickyNav();
        });

    });
</script>
</body>
</html>