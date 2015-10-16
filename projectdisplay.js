var buttons = document.getElementsByClassName("project_button");

var names = ["puckslide", "totems", "smite", "hologram"];
var added = false;

for(var i = 0; i < buttons.length; i++){
	var name = names[i];
	console.log(i);
	var func = function(_name){
		buttons[i].addEventListener("click", function(){
			var img = document.getElementById("display_screen");
			img.src = "images/projects/" + _name + "_screen.png";
		});
	}
	func(name);
}