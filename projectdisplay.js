var buttons = document.getElementsByClassName("project_button");

var projects = [
{
	"name": "Puck Slide",
	"ref": "puckslide",
	"description": "",
	"platforms": ["google_play"],
	"tools": ["libgdx"],
},
{
	"name": "Totem Stack",
	"ref": "totems",
	"description": "",
	"platforms": ["google_play"],
	"tools": ["libgdx"],
},
{
	"name": "Smite Training",
	"ref": "smite",
	"description": "",
	"platforms": ["google_play"],
	"tools": ["libgdx"],
},
{
	"name": "Hologram Clock",
	"ref": "hologram",
	"description": "",
	"platforms": ["google_play"],
	"tools": ["libgdx"],
}
];
var added = false;

var table = document.getElementById("project_table");
for(var i = 0; i < projects.length; i++){
	var tr = table.insertRow();

	var image = new Image();
	image.className = "project_icon";
	image.src = "images/projects/" + projects[i].ref + "_icon.png";

	var td1 = tr.insertCell();
	td1.className = "project_button";
	tr.appendChild(td1);
	td1.appendChild(image);

	var p = document.createElement("p");
    var text = document.createTextNode(projects[i].name);
    p.appendChild(text);
    td1.appendChild(p);

	if(i == 0){
		var td2 = tr.insertCell();
		td2.setAttribute("rowSpan", 4);
		td2.id = "display";
		var image = new Image();
		image.src = "images/projects/" + projects[i].ref + "_screen.png";
		image.id = "display_screen";
		td2.appendChild(image);
	}
}


for(var i = 0; i < buttons.length; i++){
	var ref = projects[i].ref;
	var func = function(_ref){
		buttons[i].addEventListener("click", function(){
			var img = document.getElementById("display_screen");
			img.src = "images/projects/" + _ref + "_screen.png";
		});
	}
	func(ref);
}