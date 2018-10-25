//OwlCarousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    navText: [ "", "<img src='/img/icons/slider-arrow.svg'>" ],
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    mouseDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//jQuery Mask Plugin for Phone field

$(document).ready(function(){
$('.phone-form__input').mask('+38(000)-000-00-00');
});


//Duration range slider

var slider = document.getElementById("myRange");
var output = document.getElementById("result");
var val = document.getElementById("myRangeValue");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function(ev) {
 var amount = Math.round(this.value * 100);
 var minutes = this.value;
 var width = slider.offsetWidth;

 val.innerHTML = minutes + " мин";
 var val_width = val.offsetWidth;
 var shift = -1 * val_width/2 + 8;

 var pos = (width * (this.value/10.9)) + shift;

 val.style.left = pos+'px';
    output.innerHTML = amount + " грн";
}


//JS for tabs



//Custom Select Box
