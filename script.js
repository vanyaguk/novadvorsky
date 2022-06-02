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


  