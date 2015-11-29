console.log("js linked");

$(function() {

    $('.video').mouseenter(function() {

        if (this.paused) this.play();

    }).mouseleave(function() {

        if (!this.paused) this.pause();

    });

});