$(document).ready(function(){
    $('#carousel').carousel({
      interval: 4000, //sirve para regular la velocidad del slider.   
    });

    // Funcionamiento del indicator
    $(".box").click(function(){
        $("#carousel").carousel(0);
    });
    $(".box1").click(function(){
        $("#carousel").carousel(1);
    });     

  // Funcionamiento de los Controles
    $(".left").click(function(){
        $("#carousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#carousel").carousel("next");
    });

    $(window).scroll(function(){
        scroll = $window.scrollTop();

        if(scroll > 100){
            $("#navbar").css({"background-color":"white", "color":"black"});
        }else{
            $("#navbar").css({"background-color":"transparent", "color":"white"});
        }
    }) 
})