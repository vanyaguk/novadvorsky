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

  $(document).ready(function() {
    $(window).scroll(function() {
  
      if ($(window).scrollTop() < $("#div01").height()) {
        $(".price01").show();//true
        $(".price02").hide();
        $(".price03").hide();
        $(".price04").hide();

      } else if ($(window).scrollTop() < $("#div01").height() * 2) { 
        $(".price02").show();//true
        $(".price02").hide();
        
      } else if ($(window).scrollTop() < $("#div01").height() * 3) { 
        $(".price03").show();//true
        $(".price03").hide();
        
      } else if ($(window).scrollTop() < $("#div01").height() * 4) { 
        $(".price04").show();//true
        $(".price04").hide(); 
      }
    });
  });
  
  