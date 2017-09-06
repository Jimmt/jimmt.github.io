function staggerAnimation(elements, animation, timeBetween) {
	if(typeof timeBetween === "undefined"){
		timeBetween = 1 / 8;
	}
	var counter = 0;
    elements.forEach(function(e) {
    	e.style.animation = animation;
        e.style.animationDelay = (counter++) * timeBetween + "s";
    });
}