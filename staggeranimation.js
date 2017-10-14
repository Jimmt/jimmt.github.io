function staggerAnimation(elements, animation, timeBetween) {
	if(typeof timeBetween === "undefined"){
		timeBetween = 1 / 8;
	}
	var counter = 0;
    for(var i = 0; i < elements.length; i++){
    	var e = elements[i];
    	e.style.animation = animation;
        e.style.animationDelay = (counter++) * timeBetween + "s";
    };
}