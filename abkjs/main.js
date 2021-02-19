
//*apertura y cierre menu movil//
const movilbtn=document.querySelector(".movil-btn");
let menuabierto = false;
movilbtn.addEventListener("click",() => {
    if (!menuabierto){
        movilbtn.classList.add("open");
        menuabierto = true;
    } else{
        movilbtn.classList.remove("open");
        menuabierto = false;
    }
});

//*efecto desvanecido a lista menu movil//
const hamburguesa=document.querySelector(".movil-btn");
const phonelinks=document.querySelector(".phone__elemento");
const links=document.querySelectorAll(".phone__item");
hamburguesa.addEventListener("click", () => {
    phonelinks.classList.toggle("open2");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

//*animacion lottie libreria//
var animation = bodymovin.loadAnimation({
    container: document.getElementById('bodymo'), // Required
    path: 'abkjs/animacion.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "animacion-bodmv", // Name for future reference. Optional.
  })

//*scrollbar//
$(function() {

    $("body").overlayScrollbars({className:"os-theme-thin-dark",
    scrollbars:{clickScrolling:true,autoHide:"s",
    }})
    
    
});


//**Contador*/
$('.numero').each(function() {

    $(this).prop('counter', 0).animate({
  
      counter: $(this).text()
  
    }, {
  
      duration: 8000,
  
      easing: 'swing',
  
      step: function(now) {
  
        $(this).text(Math.ceil(now));
      }
    });
  });