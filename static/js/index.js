window.HELP_IMPROVE_VIDEOJS = false;



function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  console.log('before');
  setTimeout(function(){
      console.log('after');
  },500);
  console.log('lalalalalla');
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom ) + "px " + (img.height * zoom ) + "px";
  bw = 3;
  console.log(glass, glass.offsetWidth , glass.offsetHeight);
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);

  function moveMagnifier(e) {
    var pos, x, y;
    console.log('inside moveMagnifier')
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    console.log("lalalalla" , e, x, y);
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    console.log("x,y,w,h: ",x,y,w,h)
    glass.style.left = (x - w) + "px";
    glass.style.top = (y ) + "px"; //(y -h) + "px";
    console.log("!!!!!  ",glass.style.left , glass.style.top );
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px"; // '-' for negtive
    console.log(glass, glass.style.backgroundPosition )
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}





var INTERP_BASEFFHQ = "./static/images/interpolate_ffhq/interpolation_"//"https:/xxx/interpolation/stacked";
var NUM_INTERP_FRAMES = 50;
// var INTERP_BASE = "https://homes.cs.washington.edu/~kpar/nerfies/interpolation/stacked";

var INTERP_BASEFFHQGEO = "./static/images/interpolate_ffhq_geo/"//"https:/xxx/interpolation/stacked";
var NUM_INTERP_FRAMES = 50;

var INTERP_BASEAFHQ = "./static/images/interpolate_afhq/interpolation_"//"https:/xxx/interpolation/stacked";
var NUM_INTERP_FRAMES = 50;

var INTERP_BASEAFHQGEO = "./static/images/interpolate_afhq_geo/"//"https:/xxx/interpolation/stacked";
var NUM_INTERP_FRAMES = 50;

var INTERP_BASESHHQ = "./static/images/interpolate_shhq/interpolation_"//"https:/xxx/interpolation/stacked";
var NUM_INTERP_FRAMES = 50;

var INTERP_BASESHHQGEO = "./static/images/interpolate_shhq_geo/"//"https:/xxx/interpolation/stacked";
var NUM_INTERP_FRAMES = 50;

var interp_images_ffhq = [];
var interp_images_ffhq_geo = [];
var interp_images_afhq = [];
var interp_images_afhq_geo = [];
var interp_images_shhq = [];
var interp_images_shhq_geo = [];

function preloadInterpolationImagesFFHQ() {
  for (var i = 1; i < NUM_INTERP_FRAMES; i++) {
      var path = INTERP_BASEFFHQ + String(i).padStart(3, '0') + '.png';
    // var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
      interp_images_ffhq[i] = new Image();
      interp_images_ffhq[i].src = path;
  }
}

function preloadInterpolationImagesFFHQ_GEO() {
  for (var i = 1; i < NUM_INTERP_FRAMES; i++) {
      var path = INTERP_BASEFFHQGEO + String(i).padStart(3, '0') + '.png';
    // var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
      interp_images_ffhq_geo[i] = new Image();
      interp_images_ffhq_geo[i].src = path;
  }
}

function preloadInterpolationImagesAFHQ() {
  for (var i = 1; i < NUM_INTERP_FRAMES; i++) {
      var path = INTERP_BASEAFHQ + String(i).padStart(3, '0') + '.png';
    // var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
      interp_images_afhq[i] = new Image();
      interp_images_afhq[i].src = path;
  }
}

function preloadInterpolationImagesAFHQ_GEO() {
  for (var i = 1; i < NUM_INTERP_FRAMES; i++) {
      var path = INTERP_BASEAFHQGEO + String(i).padStart(3, '0') + '.png';
    // var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
      interp_images_afhq_geo[i] = new Image();
      interp_images_afhq_geo[i].src = path;
  }
}

function preloadInterpolationImagesSHHQ() {
  for (var i = 1; i < NUM_INTERP_FRAMES; i++) {
      var path = INTERP_BASESHHQ + String(i).padStart(3, '0') + '.png';
    // var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
      interp_images_shhq[i] = new Image();
      interp_images_shhq[i].src = path;
  }
}

function preloadInterpolationImagesSHHQ_GEO() {
  for (var i = 1; i < NUM_INTERP_FRAMES; i++) {
      var path = INTERP_BASESHHQGEO + String(i).padStart(3, '0') + '.png';
    // var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
      interp_images_shhq_geo[i] = new Image();
      interp_images_shhq_geo[i].src = path;
  }
}

function setInterpolationImageFFHQ(i) {
  var image = interp_images_ffhq[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-FFHQ').empty().append(image);
}

function setInterpolationImageFFHQGEO(i) {
  var image = interp_images_ffhq_geo[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-FFHQ-GEO').empty().append(image);
}

function setInterpolationImageAFHQ(i) {
  var image = interp_images_afhq[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-AFHQ').empty().append(image);
}

function setInterpolationImageAFHQGEO(i) {
  var image = interp_images_afhq_geo[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-AFHQ-GEO').empty().append(image);
}

function setInterpolationImageSHHQ(i) {
  var image = interp_images_shhq[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-SHHQ').empty().append(image);
}
function setInterpolationImageSHHQGEO(i) {
  var image = interp_images_shhq_geo[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-SHHQ-GEO').empty().append(image);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 4,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    // For interpolations
    preloadInterpolationImagesFFHQ();
    preloadInterpolationImagesFFHQ_GEO();
    $('#interpolation-slider-FFHQ').on('input', function(event) {
      setInterpolationImageFFHQ(this.value);
      setInterpolationImageFFHQGEO(this.value);});
    setInterpolationImageFFHQ(25);
    setInterpolationImageFFHQGEO(25);
    $('#interpolation-slider-FFHQ').prop('max', NUM_INTERP_FRAMES - 1);

    preloadInterpolationImagesAFHQ();
    preloadInterpolationImagesAFHQ_GEO();
    $('#interpolation-slider-AFHQ').on('input', function(event) {
      setInterpolationImageAFHQ(this.value);
      setInterpolationImageAFHQGEO(this.value);});
    setInterpolationImageAFHQ(25);
    setInterpolationImageAFHQGEO(25);
    $('#interpolation-slider-AFHQ').prop('max', NUM_INTERP_FRAMES - 1);

    preloadInterpolationImagesSHHQ();
    preloadInterpolationImagesSHHQ_GEO();
    $('#interpolation-slider-SHHQ').on('input', function(event) {
      setInterpolationImageSHHQ(this.value);
      setInterpolationImageSHHQGEO(this.value);});
    setInterpolationImageSHHQ(25);
    setInterpolationImageSHHQGEO(25);
    $('#interpolation-slider-SHHQ').prop('max', NUM_INTERP_FRAMES - 1);
  
    bulmaSlider.attach();

})



// large slider
// let slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}