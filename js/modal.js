$(document).ready(function() {
    $(".hamburguer-bt").click(function() {
      $(this).toggleClass("on");
    });
  });
//---------------------------------------------------
  $(document).ready(function() {

    var cont_menu = 0;
      console.log(cont_menu)
  
    $("#menu").click(function() {
      if (cont_menu == 0) {
        // Efecto abrir
        $("#modal").fadeIn();
        cont_menu = 1;
      }else{
        // Cerrar menu
        $("#modal").fadeOut();
        cont_menu = 0;
      }
    });
  });
