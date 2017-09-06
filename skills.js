window.onload = function() {
	"use strict";
    var counter = 0;

    document.querySelectorAll(".text_container div").forEach(function(e) {
        e.style.animation = "slideIn 1s cubic-bezier(.23,.63,.23,.99) " + (counter++) / 8 + "s 1 forwards";
    });
}