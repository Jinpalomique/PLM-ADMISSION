<!DOCTYPE html>
<html>
<head>
<title> PLMGO </title>
<meta name="viewport" content="width=device-width, initial-scale=1">


<style>

/* Sidebar left */
#mySidenavleft a {
  position: absolute;
  left: -100px;
  transition: 0.4s;
  padding: 30px;
  width: 100px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  border-radius: 0 10px 10px 0;
}

#mySidenavleft a:hover {
  left: 0;
  color: yellow;
}

#about {
  top: 110px;
  background-color: #b22222;
}

#blog {
  top: 220px;
  background-color: #b22222;
}

#contact {
  top: 350px;
  background-color: #b22222;
}

/* sidebar right */




/* Slideshow container */
.slideshow-container {
  max-width: 950px;
  position: relative;
  margin: auto;
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}


</style>

</head>

<body style="background-color:tomato;" >

<!-- header -->
<center>
	<img src="img/PLM.png" style="width:4%">
</center>

<!-- slideshow -->

<div class="slideshow-container">

<div class="mySlides fade">
	<img src="img/admission.png" style="width:100%">
</div>

<div class="mySlides fade">
	<img src="img/media.png" style="width:100%">
</div>

<div class="mySlides fade">
	<img src="img/welcome.png" style="width:100%">
</div>

<div class="mySlides fade">
	<img src="img/program1.png" style="width:100%">
</div>

<div class="mySlides fade">
	<img src="img/program2.png" style="width:100%">
</div>

<div class="mySlides fade">
	<img src="img/program3.png" style="width:100%">
</div>

</div>

<br>

<div style="text-align:center">
	<span class="dot"></span> 
	<span class="dot"></span> 
	<span class="dot"></span> 
	<span class="dot"></span>
	<span class="dot"></span> 
	<span class="dot"></span> 
</div>

<br> <br>

<!-- left sidebar --> 

<div id="mySidenavleft" class="sidenavleft">
	<a href="#" id="about">PLMGO <!-- <p font-size: "16px"> User-Manual </p> --> </a>
	<a href="#" id="blog">Application Form</a>
	<a href="#" id="contact">Application Login</a>
</div>

<br> <br>

<!-- right sidebar -->


</body>

<script>

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

</script>

</html>