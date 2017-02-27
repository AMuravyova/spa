/**
 * Created by amurav on 21.02.2017.
 */
(function( $ ) {

    $.fn.changeSlider = function( options ) {

        var settings = $.extend({
            min: "#price-min",
            max: "#price-max"
        }, options);

        return this.slider({
            min: "200",
            max: "800"
        });
    }

}( jQuery ));