var buttons = document.getElementsByClassName("project_button");

var projects = [
{
	"name": "Puck Slide",
	"ref": "puckslide",
	"description": "Slide a hockey puck across snow and mud with precision in this addicting arcade game. Integrated with Google Play Game Services for high scores and achievements.",
	"platforms": ["google_play"],
	"tools": ["libgdx"],
	"width": 480,
	"height": 280,
},
{
	"name": "Totem Stack",
	"ref": "totems",
	"description": "Stack randomly falling totems and build your stack higher and higher until you reach the skies. Diverse gameplay with powerups, random events, and a dynamic background, as well as integration with Google Play Game Services for achievements and high scores.",
	"platforms": ["google_play"],
	"tools": ["libgdx"],
	"width": 200,
	"height": 320,
},
{
	"name": "Smite Training",
	"ref": "smite",
	"description": "<b>1000+ downloads\n</b> Practice your smiting skill from League of Legends in realistic scenarios. Randomized smite damage on both dragon and baron, with multiplayer on the same phone supported. Integrated with Google Play Game Services for high scores.",
	"platforms": ["google_play"],
	"tools": ["libgdx"],
	"width": 520,
	"height": 315,
},
{
	"name": "Hologram Clock",
	"ref": "hologram",
	"description": "A holographic clock for those with a four-sided plastic hologram apparatus (easily made from tutorials on youtube). Features many different vibrant particle effects with color options.",
	"platforms": ["google_play"],
	"tools": ["libgdx"],
	"width": 375,
	"height": 215,
},
{
	"name": "Infection: FBLA 2015",
	"ref": "fbla",
	"description": "<b>Made for FBLA Computer Game & Simulation 2015\n</b> Pilot your spaceship and shoot your enemies as you navigate through mutliple levels and experience unique boss fights. Upgrade your ship, or change its visual appearance to customize your experience.",
	"platforms": ["google_play"],
	"tools": ["libgdx"],
	"width": 550,
	"height": 300,
},
{
	"name": "Rainbow Hippie 2",
	"ref": "fbla",
	"description": "Experience the vibrant action of shooting rainbows and dodging obstacles, fighting dangeous monsters along the way. Visit the skies, ocean, and underground in your journey through the game!",
	"platforms": ["google_play"],
	"tools": ["libgdx"],
	"width": 550,
	"height": 300,
},
];
var added = false;

var table = document.getElementById("project_table");

var tr = table.insertRow();

for(var i = 0; i < projects.length; i++){

	var image = new Image();
	image.className = "project_icon";
	image.src = "images/projects/" + projects[i].ref + "_icon.png";

	var td1 = tr.insertCell();
	td1.className = "project_button";
	tr.appendChild(td1);
	td1.appendChild(image);

	var p = document.createElement("p");
	p.className = "projectButtonText";
	var text = document.createTextNode(projects[i].name);
	p.appendChild(text);
	td1.appendChild(p);

	if(i == 0){
		var tr1 = table.insertRow();
		var td2 = tr1.insertCell();
		
		td2.setAttribute("colSpan", projects.length);
		td2.id = "display";
		updatePanel(projects[0], td2);
	};
	
}

var color = "rgb(255, 140, 140)";

for(var i = 0; i < buttons.length; i++){
	var project = projects[i];
	var func = function(_project){
		buttons[i].addEventListener("click", function(){

			for(var j = 0; j < buttons.length; j++){
				buttons[j].style.backgroundColor = "rgb(240, 240, 240)";
			}
			// this.style = "border-color: red";
			this.style.backgroundColor = color;
			updatePanel(_project, null);
		});
	}
	func(project);
}

function updatePanel(project, td){

	if(td != null){
		var image = new Image();
		image.width = project.width;
		image.height = project.height;
		image.src = "images/projects/" + project.ref + "_screen.png";
		image.id = "display_screen";
		td.appendChild(image);

		var descrip = document.createElement("p");
		descrip.id = "descriptionText";
		descrip.className = "projectPanelText";
		var descripText = document.createTextNode(projects[i].description);
		descrip.appendChild(descripText);
		td.appendChild(descrip);
	}
	var img = document.getElementById("display_screen");
	img.src = "images/projects/" + project.ref + "_screen.png";
	img.width = project.width;
	img.height = project.height;
	var descrip = document.getElementById("descriptionText");
	descrip.innerHTML = project.description;

}