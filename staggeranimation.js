function staggerAnimation(elements, animation) {
	var counter = 0;
    elements.forEach(function(e) {
    	e.style.animation = animation;
        e.style.animationDelay = (counter++) / 8 + "s";
    });
}