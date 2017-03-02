/**
 * Created by amurav on 27.02.2017.
 */
$(document).ready(function() {


    $(".menu__button").click(function () {

        $(".menu__tabs__toggle ul").css("visibility","visible").slideToggle("slow");
        //$(this).next().slideToggle("slow");
        //$(".menu__tabs__toggle").slideToggle();
    });

});

