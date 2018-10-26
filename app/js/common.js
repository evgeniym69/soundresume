//OwlCarousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    navText: [ "", "<img src='/img/icons/slider-arrow.svg'>" ],
    loop: true,
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


 var tab = document.getElementsByClassName("work-links__tab"),
     tabContent = document.getElementsByClassName("record-wrapper"),
     links = document.getElementsByClassName("work-links")[0];

     function hideTabContent(a){
       for(var i = a; i < tabContent.length; i++){
         tabContent[i].classList.remove('show');
         tabContent[i].classList.add('hide');
         tab[i].classList.remove('active-tab')
       }
     }

     hideTabContent(1);

     function showTabContent(b){
       if(tabContent[b].classList.contains("hide")){
         hideTabContent(0);
         tabContent[b].classList.remove('hide');
         tabContent[b].classList.add('show');
         tab[b].classList.add('active-tab');


       }
     }


     links.addEventListener('click', function(event) {
       var target = event.target;
       if (target.className =='work-links__tab') {
          for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
            showTabContent(i);
            break;
         }
       }
     };
   })





//Custom Select Box
