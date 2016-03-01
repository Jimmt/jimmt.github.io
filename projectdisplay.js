var buttons = document.getElementsByClassName("project_button");

var projects = [
{
	"name": "Puck Slide",
	"ref": "puckslide",
	"description": "Slide a hockey puck across snow and mud with precision in this addicting arcade game. Integrated with Google Play Game Services for high scores and achievements.",
	"platforms": [{"name": "google_play", "package" : "com.jumpbuttonstudio.puckslide.android"}],
	"tools": ["libGDX"],
	"width": 480,
	"height": 280,
},
{
	"name": "Totem Stack",
	"ref": "totems",
	"description": "Stack randomly falling totems and build your stack higher and higher until you reach the skies. Diverse gameplay with powerups, random events, and a dynamic background, as well as integration with Google Play Game Services for achievements and high scores.",
	"platforms": [{"name": "google_play", "package" : "com.jbs.totemgame.android"}],
	"tools": ["libGDX"],
	"width": 200,
	"height": 320,
},
{
	"name": "Smite Training",
	"ref": "smite",
	"description": "<b>4500+ downloads\n</b> Practice your smiting skill from League of Legends in realistic scenarios. Randomized smite damage on both dragon and baron, with multiplayer on the same phone supported. Integrated with Google Play Game Services for high scores.",
	"platforms": [{"name": "google_play", "package" : "com.jimmt.smitepractice.android"}],
	"tools": ["libGDX"],
	"width": 520,
	"height": 315,
},
{
	"name": "Hologram Clock",
	"ref": "hologram",
	"description": "<b>6000+ downloads\n</b> A holographic clock for those with a four-sided plastic hologram apparatus (easily made from tutorials on youtube). Features many different vibrant particle effects with color options.",
	"platforms": [{"name": "google_play", "package" : "com.jimmt.HologramClock.android"}],
	"tools": ["libGDX"],
	"width": 375,
	"height": 215,
},
{
	"name": "Infection: FBLA 2015",
	"ref": "fbla",
	"description": "<b>Made for FBLA Computer Game & Simulation 2015\n</b> Pilot your spaceship and shoot your enemies as you navigate through mutliple levels and experience unique boss fights. Upgrade your ship, or change its visual appearance to customize your experience.",
	"platforms": [],
	"tools": ["libGDX"],
	"width": 550,
	"height": 300,
},
{
	"name": "Rainbow Hippie 2",
	"ref": "rh2",
	"description": "Experience the vibrant action of shooting rainbows and dodging obstacles, fighting dangeous monsters along the way. Visit the skies, ocean, and underground in your journey through the game!",
	"platforms": [{"name": "google_play", "package" : "com.jbs.rh2.android"}],
	"tools": ["libGDX"],
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

var color = "rgb(215, 50, 50)";

for(var i = 0; i < buttons.length; i++){
	var project = projects[i];
	var func = function(_project){
		buttons[i].addEventListener("click", function(){

			for(var j = 0; j < buttons.length; j++){
				buttons[j].style.backgroundColor = "rgb(30, 30, 30)";
			}
			// this.style = "border-color: red";
			this.style.backgroundColor = color;
			updatePanel(_project, null);
		});
	}
	func(project);

	if(i == 0){
		buttons[0].style.backgroundColor = color;
	}
}

function updatePanel(project, td){

	if(td != null){
		var imageContainer = document.createElement("div");
		imageContainer.id = "image_container";
		imageContainer.style = "display:inline-block; width: 50%; height: 100%; text-align: center; vertical-align: middle;";
		td.appendChild(imageContainer);

		var image = new Image();
		image.width = project.width;
		image.height = project.height;
		image.src = "images/projects/" + project.ref + "_screen.png";
		image.id = "display_screen";
		imageContainer.appendChild(image);

		var rightSide = document.createElement("div");
		rightSide.id = "project_panel_right";
		rightSide.style = "display:inline-block; width: 50%; height: 100%; overflow:auto; margin-top: 10px; vertical-align: middle;";
		td.appendChild(rightSide);

		var platformContainer = document.createElement("div");
		platformContainer.id = "platform_container";
		rightSide.appendChild(platformContainer);

		var toolsP = document.createElement("p");
		toolsP.id = "toolsText";
		var toolsText = "";
		var toolsTextNode = document.createTextNode("Built With: " + toolsText);
		toolsP.appendChild(toolsTextNode);
		rightSide.appendChild(toolsP);

		var descrip = document.createElement("p");
		descrip.id = "descriptionText";
		descrip.className = "projectPanelText";
		var descripText = document.createTextNode(projects.description);
		descrip.appendChild(descripText);
		rightSide.appendChild(descrip);
	}
	var img = document.getElementById("display_screen");
	img.src = "images/projects/" + project.ref + "_screen.png";
	img.width = project.width;
	img.height = project.height;

	var display = document.getElementById("platform_container");
	var platformLinks = display.getElementsByClassName("platformLink");
	for(var i = 0; i < platformLinks.length; i++){
		display.removeChild(platformLinks[i]);
	}
	for(var i = 0; i < project.platforms.length; i++){
		if(project.platforms[i].name == "google_play"){
			var playLink = document.createElement("a");
			playLink.target = "_blank";
			playLink.className = "platformLink";
			playLink.href = "https://play.google.com/store/apps/details?id=" + project.platforms[i].package;
			var playImage = document.createElement("img");
			playImage.src = "https://developer.android.com/images/brand/en_app_rgb_wo_60.png";
			playImage.alt = "Android app on Google Play";
			playLink.appendChild(playImage);
			display.appendChild(playLink);
		}
	}

	var toolsText = "";
	for(var i = 0; i < project.tools.length; i++){
		toolsText += project.tools[i];
	}
	document.getElementById("toolsText").innerHTML = "Built With: " + toolsText;

	var descrip = document.getElementById("descriptionText");
	descrip.innerHTML = project.description;


}