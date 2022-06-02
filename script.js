const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};

document.addEventListener('mousemove', showImgContent);

function menushown() {
    document.getElementById("menu").style.width = "20%";
    document.getElementById("menuInner").style.opacity = "1";
    document.getElementById("container").style.paddingLeft = "20%";
  }
  function menushown2() {
    document.getElementById("menu").style.width = "100%";
    document.getElementById("menuInner").style.opacity = "1";
  }
  
  function menuhide() {
    document.getElementById("menu").style.width = "0%";
    document.getElementById("menuInner").style.opacity = "0";
    document.getElementById("container").style.maxWidth = "100%";
    document.getElementById("container").style.paddingLeft = "0%";
  }

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  
$('form').submit(function(e){
  e.preventDefault();
  $.ajax({
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSdA8vhbKOez5PW_0NxCfswJjEl5mPWjHcV-Vf8yuvgmSYa_vg/formResponse',
      type: 'post',
      data:$('form').serialize(),
      complete: function(){
        $('#formbut').hide();
        $('#formdone').show();
              return false;
      }
  });
  return false;
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});