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

    $(".abrir").hide(); /*oculta el boton cuando se carga la página*/

    /*funcionamiento de la caja de inicio arriba del menú*/

    $(".close").click(function(){
        $(".inicio").hide(500); 
        $(".abrir").show();      
    })

    $(".abrir").click(function(){
        $(".inicio").show(500); 
        $(".abrir").hide();     
    })



    /*funcionamiento del color del menú*/

    var roll = false;
    var scroll;

    $(".navbar").scroll(function(){
        scroll = $window.scrollTop();

        if(scroll > 150){
            if(!roll){
                $(".navbar").css({"background-color":"$background_color_e"});
                roll = true; 
            }
        }else{
            if(roll){
                $(".navbar").css({"background-color":"$background_color_d"});
                roll = false;
            }
        }
    }) 
})