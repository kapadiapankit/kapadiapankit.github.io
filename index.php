<?php
include "constants.php";
include "functions.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	
	<meta name="theme-color" content="#2D3142" />

	<title><?php echo SITE_NAME; ?></title>
	<link rel="icon" href="assets/images/favicon.ico" type="image/x-icon" />

	<link rel="stylesheet" type="text/css" href="assets/stylesheets/font-awesome.min.css" />
	<link rel="stylesheet/less" type="text/css" href="assets/stylesheets/style.less" />
	<!-- https://coolors.co/2d3142-bfc0c0-ffffff-ef8354-4f5d75 -->
	<!-- new suggestions -->
	<!-- https://coolors.co/f79f79-adc698-f7d08a-fffcf7-e3f09b -->
	<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	
	ga('create', 'UA-106385923-1', 'auto');
	ga('send', 'pageview');
	</script>
</head>
<body>
	<header>
		<div class="container">
			<div class="col-12">
				<a href="./" class="pull-left logo-color">
					<div class="logo-wrap pull-left relative">
						<img src="assets/images/dp.png" class="logo-dp" alt="Pankit Kapadia Display Picture" />
						<div class="name-initials absolute p">P</div>
						<div class="name-initials absolute k">K</div>
					</div>
					<div class="logo-text pull-left">
						<div class="logo-name"><span>P</span>ankit <span>K</span>apadia</div>
						<div class="logo-designation">UI/Front-end Developer</div>
					</div>
				</a>
			</div>
		</div>
	</header>
	<section id="home">
		<div class="relative">
			<a href="https://www.linkedin.com/in/kapadiapankit/" class="absolute connect-temp" target="_blank">
				Connect with me on <i class="fa fa-linkedin" aria-hidden="true"></i>
			</a>
			<!-- <div class="absolute text-center scroll-down">
				<a href="">Connect with me on <i class="fa fa-linkedin" aria-hidden="true"></i></a>
			</div> -->
			<div class="vertical-center absolute">
				<div class="container">
					<div class="col-11 section-title-padding">
						<div class="section-title">Intro</div>
						<h1 class="welcome-text typeIt">
							I'm <span>Pankit Kapadia.</span> A creative <span>UI/Front-end Developer</span> with <?php echo getDateDifference(new DateTime("2012-02-22"), new DateTime("now")); ?> of industry experience, specialised in developing responsive web applications.
						</h1>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<script type="text/javascript" src="assets/javascripts/jquery.1.12.min.js"></script>
	<script type="text/javascript" src="assets/javascripts/app.js"></script>
	<script type="text/javascript" src="assets/javascripts/less.min.js"></script>
	
</body>
</html>