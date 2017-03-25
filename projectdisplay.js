var buttons = document.getElementsByClassName("project_button");

var projects = [
{
	"name": "Puck Slide",
	"ref": "puckslide",
	"description": "Slide a hockey puck across snow and mud with precision in this addicting arcade game. Integrated with Google Play Game Services for high scores and achievements.",
	"platforms": [{"name": "google_play", "package" : "com.jumpbuttonstudio.puckslide.android"}],
	"tools": ["Java", "libGDX" ,"Google Play Game Services"],
},
{
	"name": "Totem Stack",
	"ref": "totems",
	"description": "Stack randomly falling totems and build your stack higher and higher until you reach the skies. Diverse gameplay with powerups, random events, and a dynamic background, as well as integration with Google Play Game Services for achievements and high scores.",
	"platforms": [{"name": "google_play", "package" : "com.jbs.totemgame.android"}],
	"tools": ["Java", "libGDX", "Google Play Game Services"],
},
{
	"name": "Smite Training",
	"ref": "smite",
	"description": "<b>80000+ downloads\n</b>Practice your smiting skill from League of Legends in realistic scenarios. Randomized smite damage on both dragon and baron, with multiplayer on the same phone supported. Integrated with Google Play Game Services for high scores.",
	"platforms": [{"name": "google_play", "package" : "com.jimmt.smitepractice.android"}, {"name": "github", "link" : "https://github.com/Jimmt/Smite-Training"}],
	"tools": ["Java", "libGDX", "Google Play Game Services"],
},
{
	"name": "Hologram Clock",
	"ref": "hologram",
	"description": "<b>15000+ downloads\n</b>A holographic clock for those with a four-sided plastic hologram apparatus (easily made from tutorials on youtube). Features many different vibrant particle effects with color options.",
	"platforms": [{"name": "google_play", "package" : "com.jimmt.HologramClock.android"}, {"name": "github", "link" : "https://github.com/Jimmt/HologramClock"}],
	"tools": ["Java", "libGDX"],
},
{
	"name": "Infection: FBLA 2015",
	"ref": "fbla",
	"description": "<b>Made for FBLA Computer Game & Simulation 2015\n</b>Pilot your spaceship and shoot your enemies as you navigate through mutliple levels and experience unique boss fights. Upgrade your ship, or change its visual appearance to customize your experience.",
	"platforms": [{"name": "github", "link" : "https://github.com/Jimmt/FBLA2015"}],
	"tools": ["Java", "libGDX"],
},
{
	"name": "Rainbow Hippie 2",
	"ref": "rh2",
	"description": "Experience the vibrant action of shooting rainbows and dodging obstacles, fighting a variety of monsters along the way. Visit the skies, ocean, and underground in your journey through the game!",
	"platforms": [{"name": "google_play", "package" : "com.jbs.rh2.android"}],
	"tools": ["Java", "libGDX", "Google Play Game Services"],
},
{
	"name": "Positive Posture",
	"ref": "positive_posture",
	"description": "<b>Made during Dubhacks 2016\n</b>Made during a 24-hour hackathon, Positive Posture is a desktop application that monitors your webcam and sends you an alert if you have bad posture by analyzing your facial position.",
	"platforms": [{"name": "github", "link" : "https://github.com/Jimmt/PositivePosture"}],
	"tools": ["Java", "libGDX", "Microsoft Emotion API", "Webcam Capture API"]
}
];

var toolLinks = [
	{"name":"Java", "link":"https://www.java.com/en/"},
	{"name":"libGDX", "link":"https://libgdx.badlogicgames.com/"},
	{"name":"Microsoft Emotion API", "link":"https://www.microsoft.com/cognitive-services/en-us/emotion-api"},
	{"name":"Webcam Capture API", "link":"http://webcam-capture.sarxos.pl"},
	{"name":"Google Play Game Services", "link":"https://developers.google.com/games/services/"},
];

window.onbeforeunload = function(event) {
	for(var i = 0; i < projects.length; i++){
		if(document.location.hash == "#" + projects[i].ref){
			showProject(i);

		}
	}
};
window.onpopstate = function(event)
{console.log(document.location.hash);
	if(document.location.hash == ""){
		document.location.reload();
	} else {
		for(var i = 0; i < projects.length; i++){
			if(document.location.hash == "#" + projects[i].ref){
				showProject(i);
			}
		}}
};
window.onhashchange = function(event)
{
	for(var i = 0; i < projects.length; i++){
		if(document.location.hash == "#" + projects[i].ref){
			showProject(i);
		}
	}
};

var imagesCache = [];

var added = false;

var projectsContainer = document.getElementById("projects_container");


for(var i = 0; i < projects.length; i++){
	var fullImage = new Image();
	fullImage.src = "images/projects/" + projects[i].ref + "_screen.png";
	fullImage.id = "display_screen";
	imagesCache.push(fullImage);
}
for(var i = 0; i < projects.length; i++){
	var image = new Image();
	image.className = "project_icon";
	image.src = "images/projects/" + projects[i].ref + "_icon.png";

	var projectButton = document.createElement("a");
	projectButton.href = "#" + projects[i].ref;
	projectButton.className = "project_button";
	projectButton.appendChild(image);
	projectsContainer.appendChild(projectButton);

	var p = document.createElement("p");
	p.className = "projectButtonText";
	var text = document.createTextNode(projects[i].name);
	p.appendChild(text);
	projectButton.appendChild(p);



	// if(i == 0){
	// 	var tr1 = table.insertRow();
	// 	var td2 = tr1.insertCell();
		
	// 	td2.setAttribute("colSpan", projects.length);
	// 	td2.id = "display";
	// 	updatePanel(0, projects[0], td2);
	// };
	
}

var buttonSelectedColor = "var(--highlight-color)";

for(var i = 0; i < projects.length; i++){
	(function(){
		buttons[i].addEventListener("click", wrapper.bind(null, i));
	})();


	// if(i == 0){
	// 	buttons[0].style.setProperty("background-color", buttonSelectedColor);
	// }
}

function wrapper(index){
	showProject(index);
}

function showProject(index){	
	var project = projects[index];
	var page = document.getElementById("page");
	var storStyle = page.style;
	page.innerHTML = "";
	page.style = storStyle;

	var imageContainer = document.createElement("div");
	imageContainer.id = "image_container";
	imageContainer.style = "display:inline-block; width: 50%; height: 100%; text-align: center; vertical-align: middle;";
	page.appendChild(imageContainer);
	imageContainer.appendChild(imagesCache[index]);

	var rightSide = document.createElement("div");
	rightSide.id = "project_panel_right";
	rightSide.style = "display:inline-block; width: 50%; height: 100%; overflow:auto; margin-top: 10px; vertical-align: middle;";
	page.appendChild(rightSide);

	var name = document.createElement("p");
	name.appendChild(document.createTextNode(project.name));
	name.className = "name_text";
	rightSide.appendChild(name);

	var descrip = document.createElement("p");
	descrip.id = "descriptionText";
	descrip.className = "projectPanelText";
	var descripText = document.createTextNode(projects.description);
	descrip.appendChild(descripText);
	rightSide.appendChild(descrip);

	var toolsP = document.createElement("p");
	toolsP.id = "toolsText";
	var toolsText = "";
	var toolsTextNode = document.createTextNode("Built With: " + toolsText);
	toolsP.appendChild(toolsTextNode);
	rightSide.appendChild(toolsP);

	var platformContainer = document.createElement("div");
	platformContainer.id = "platform_container";
	rightSide.appendChild(platformContainer);

	for(var i = 0; i < project.platforms.length; i++){
		if(project.platforms[i].name == "google_play"){
			var playLink = document.createElement("a");
			playLink.target = "_blank";
			playLink.className = "googleplay_button";
			playLink.href = "https://play.google.com/store/apps/details?id=" + project.platforms[i].package;
			var playImage = document.createElement("img");
			playImage.src = "https://developer.android.com/images/brand/en_app_rgb_wo_60.png";
			playImage.alt = "Android app on Google Play";
			playLink.appendChild(playImage);
			platformContainer.appendChild(playLink);
		} else if(project.platforms[i].name == "github"){
			var githubButton = document.createElement("a");
			githubButton.target = "_blank";
			githubButton.className = "github_button";
			githubButton.href = project.platforms[i].link;
			var githubImage = document.createElement("img");
			githubImage.src = "images/contact/github_black.png";
			githubImage.alt = "Github Repository";
			githubImage.className = "github_image";
			githubButton.appendChild(githubImage);
			platformContainer.appendChild(githubButton);
		}
	}

	var toolsText = "";
	for(var i = 0; i < project.tools.length; i++){
		var linkToAdd = "";
		for(var j = 0; j < toolLinks.length; j++){
			if(toolLinks[j].name == project.tools[i]){
				linkToAdd = "<a href=" + toolLinks[j].link + " target='_blank' style='text-decoration:none'>";
				toolsText += linkToAdd;
				break;
			}
		}
		toolsText += project.tools[i];

		if(linkToAdd != ""){
			toolsText += "</a>";
		}
		if(i != project.tools.length - 1){
			toolsText += ", ";
		}
	}
	document.getElementById("toolsText").innerHTML = "Built With: " + toolsText;

	var descrip = document.getElementById("descriptionText");
	descrip.innerHTML = project.description;
}

