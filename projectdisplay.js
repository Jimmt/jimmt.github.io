var buttons = document.getElementsByClassName("project_button");

var projects = [{
        "name": "Puck Slide",
        "ref": "puckslide",
        "description": "<b>A Jumpbutton Studio Game\n</b>Puck Slide is an addicting arcade game about sliding a hockey puck across snow and mud with precision. Integrated with Google Play Game Services for high scores and achievements.",
        "platforms": [{ "name": "google_play", "package": "com.jumpbuttonstudio.puckslide.android" }],
        "tools": ["Java", "libGDX", "Google Play Game Services"],
        "type": "mobile",
        "pics": 1
    },
    {
        "name": "Totem Stack",
        "ref": "totems",
        "description": "<b>A Jumpbutton Studio Game\n</b>Totem Stack is an arcade game about stacking randomly falling totems and build a stack higher and higher until you reach the skies. Diverse gameplay with powerups, random events, and a dynamic background, as well as integration with Google Play Game Services for achievements and high scores.",
        "platforms": [{ "name": "google_play", "package": "com.jbs.totemgame.android" }],
        "tools": ["Java", "libGDX", "Google Play Game Services"],
        "type": "mobile-vertical",
        "pics": 1
    },
    {
        "name": "Smite Training",
        "ref": "smite",
        "description": "<b>150,000+ downloads\n</b>Smite Training is a game about practicing the smiting skill from League of Legends in realistic scenarios. Features different smite damage on both dragon and baron, with multiplayer on the same phone supported. Integrated with Google Play Game Services for high scores.",
        "platforms": [{ "name": "google_play", "package": "com.jimmt.smitepractice.android" }, { "name": "github", "link": "https://github.com/Jimmt/Smite-Training" }],
        "tools": ["Java", "libGDX", "Google Play Game Services"],
        "type": "mobile",
        "pics": 1
    },
    {
        "name": "Hologram Clock",
        "ref": "hologram",
        "description": "<b>20,000+ downloads\n</b>Hologram Clock is an app that displays a holographic clockface for those with a four-sided plastic apparatus (easily made from tutorials online). Features many different vibrant particle effects with color options.",
        "platforms": [{ "name": "google_play", "package": "com.jimmt.HologramClock.android" }, { "name": "github", "link": "https://github.com/Jimmt/HologramClock" }],
        "tools": ["Java", "libGDX"],
        "type": "mobile",
        "pics": 2
    },
    {
        "name": "Infection: FBLA 2015",
        "ref": "fbla",
        "description": "<b>Made for FBLA Computer Game & Simulation 2015\n</b>Infection is a game designed to teach the user about computer security. The user pilots a spaceship and shoots enemies while navigating through mutliple levels with unique boss fights. Features different visual and functional upgrades in the game.",
        "platforms": [{ "name": "github", "link": "https://github.com/Jimmt/FBLA2015" }],
        "tools": ["Java", "libGDX"],
        "type": "desktop",
        "pics": 1
    },
    {
        "name": "Rainbow Hippie 2",
        "ref": "rh2",
        "description": "<b>A Jumpbutton Studio Game\n</b>Rainbow Hippie 2 is a game where the player shoots rainbows and dodges obstacles, fighting a variety of monsters along the way. There are a variety of levels to visit, like the skies, ocean, and underground as the player journeys through the game!",
        "platforms": [{ "name": "google_play", "package": "com.jbs.rh2.android" }],
        "tools": ["Java", "libGDX", "Google Play Game Services"],
        "type": "mobile",
        "pics": 1
    },
    {
        "name": "Positive Posture",
        "ref": "positive_posture",
        "description": "<b>Made during Dubhacks 2016\n</b>Made during a 24-hour hackathon, Positive Posture is a desktop application that monitors your webcam and sends you an alert if you have bad posture by analyzing your facial position.",
        "platforms": [{ "name": "github", "link": "https://github.com/Jimmt/PositivePosture" }],
        "tools": ["Java", "libGDX", "Microsoft Emotion API", "Webcam Capture API"],
        "type": "desktop",
        "pics": 1
    },
    {
        "name": "Key Demon",
        "ref": "key_demon",
        "description": "Key Demon is an online typing speed tester with choice of random words or generated random letters.",
        "platforms": [{ "name": "github", "link": "https://github.com/Jimmt/KeyDemon" }, { "name": "web", "link": "https://jimmt.github.io/KeyDemon" }],
        "tools": ["HTML", "CSS", "Javascript"],
        "type": "web",
        "pics": 1
    }
];

var toolLinks = [
    { "name": "Java", "link": "https://www.java.com/en/" },
    { "name": "libGDX", "link": "https://libgdx.badlogicgames.com/" },
    { "name": "Microsoft Emotion API", "link": "https://www.microsoft.com/cognitive-services/en-us/emotion-api" },
    { "name": "Webcam Capture API", "link": "http://webcam-capture.sarxos.pl" },
    { "name": "Google Play Game Services", "link": "https://developers.google.com/games/services/" },
];

function imageExists(url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
}

window.onbeforeunload = function(event) {
    for (var i = 0; i < projects.length; i++) {
        if (document.location.hash == "#" + projects[i].ref) {
            showProject(i);

        }
    }
};
window.onpopstate = function(event) {
    console.log(document.location.hash);
    if (document.location.hash == "") {
        document.location.reload();
    } else {
        for (var i = 0; i < projects.length; i++) {
            if (document.location.hash == "#" + projects[i].ref) {
                showProject(i);
            }
        }
    }
};
window.onhashchange = function(event) {
    for (var i = 0; i < projects.length; i++) {
        if (document.location.hash == "#" + projects[i].ref) {
            showProject(i);
        }
    }
};

var imagesCache = [];
var mockups = [];

var added = false;

var projectsContainer = document.getElementById("projects_container");


for (var i = 0; i < projects.length; i++) {
    var fullImage = new Image();
    fullImage.src = "images/projects/" + projects[i].ref + "_screen.png";
    // fullImage.id = "display_screen"; 
    fullImage.className = "project_screen";
    imagesCache.push(fullImage);

    var mockup = new Image();
    mockup.src = "images/projects/" + projects[i].ref + "_screen_mock.png";
    mockup.className = "mockup " + projects[i].type;
    mockups.push(mockup);

    projects[i].images = [];
    for (var j = 0; j < projects[i].pics; j++) {
        if (j == 0) {
            projects[i].images.push(mockup);
            continue;
        }
        var projectImage = new Image();
        projectImage.className = "screen";
        projectImage.opacity = 0.0;
        var url = "images/projects/" + projects[i].ref + "_screen" + (j == 0 ? "" : j) + ".png";
        var nmurl = "images/projects/" + projects[i].ref + "_screen" + (j == 0 ? "" : j) + "-nm.png";

        imageExists(url, function(exists) {
            if (exists) {
                projectImage.src = url;
            } else {
                projectImage.src = nmurl;
            }
        });
        projects[i].images.push(projectImage);
    }

}
for (var i = 0; i < projects.length; i++) {
    var image = new Image();
    image.className = "project_icon";
    image.src = "images/projects/" + projects[i].ref + "_icon.png";

    var projectButton = document.createElement("a");
    projectButton.href = "#" + projects[i].ref;
    projectButton.className = "project_button";

    var screen = imagesCache[i];
    screen.className = "screen_bg";
    projectButton.appendChild(screen);
    projectButton.onmouseenter = function() {
        this.childNodes[0].classList.add("hover");
    };
    projectButton.onmouseleave = function() {
        this.childNodes[0].classList.remove("hover");
    }
    projectsContainer.appendChild(projectButton);
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    projectButton.appendChild(overlay);

    var container = document.createElement("div");
    container.className = "projectButtonTextContainer";
    container.appendChild(image);

    var p = document.createElement("p");
    p.className = "projectButtonText";
    var text = document.createTextNode(projects[i].name);
    p.appendChild(text);
    container.appendChild(p);
    projectButton.appendChild(container);
}

var buttonSelectedColor = "var(--highlight-color)";

for (var i = 0; i < projects.length; i++) {
    (function() {
        buttons[i].addEventListener("click", wrapper.bind(null, i));
    })();


    // if(i == 0){
    // 	buttons[0].style.setProperty("background-color", buttonSelectedColor);
    // }
}

function wrapper(index) {
    showProject(index);
}

function showProject(index) {
    var project = projects[index];
    var page = document.getElementById("page");
    var storStyle = page.style;
    page.innerHTML = "";
    page.style = storStyle;

    createProjectDescription(page, projects[index]);

    var imageContainer = document.createElement("div");
    imageContainer.id = "image_container";
    page.appendChild(imageContainer);
    var mockup = projects[index].images[0];
    imageContainer.appendChild(mockup);

    for (var i = 0; i < projects[index].images.length; i++) {
        projects[index].images[i].style.opacity = '1.0';
    }

    if (projects[index].images.length > 1) {
        var previewContainer = document.createElement("div");
        previewContainer.id = "preview_container";
        imageContainer.appendChild(previewContainer);

        var currentIndex = 0;

        for (var i = 0; i < projects[index].images.length; i++) {
            var preview = new Image();
            preview.className = "screen_preview";
            if (i == 0) preview.classList.add("preview_selected");
            preview.src = projects[index].images[i].src;
            previewContainer.appendChild(preview);
            preview.onclick = (function(i, preview) {
                return function() {
                    imageContainer.removeChild(imageContainer.childNodes[0]);
                    imageContainer.insertBefore(projects[index].images[i], previewContainer);
                    currentIndex = i;
                    console.log(currentIndex);
                    document.querySelector(".preview_selected").classList.remove("preview_selected");
                    preview.classList.add("preview_selected");
                }
            })(i, preview);
        }
    }
}

function createProjectDescription(page, project){
	var rightSide = document.createElement("div");
    rightSide.id = "project_panel";
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

    for (var i = 0; i < project.platforms.length; i++) {
        if (project.platforms[i].name == "google_play") {
            var playLink = document.createElement("a");
            playLink.target = "_blank";
            playLink.className = "googleplay_button";
            playLink.href = "https://play.google.com/store/apps/details?id=" + project.platforms[i].package;
            var playImage = document.createElement("img");
            playImage.src = "https://developer.android.com/images/brand/en_app_rgb_wo_60.png";
            playImage.alt = "Android app on Google Play";
            playLink.appendChild(playImage);
            platformContainer.appendChild(playLink);
        } else if (project.platforms[i].name == "github") {
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
    for (var i = 0; i < project.tools.length; i++) {
        var linkToAdd = "";
        for (var j = 0; j < toolLinks.length; j++) {
            if (toolLinks[j].name == project.tools[i]) {
                linkToAdd = "<a href=" + toolLinks[j].link + " target='_blank' style='text-decoration:none'>";
                toolsText += linkToAdd;
                break;
            }
        }
        if (linkToAdd == "") {
            break;
        }
        toolsText += project.tools[i];

        if (linkToAdd != "") {
            toolsText += "</a>";
        }
        if (i != project.tools.length - 1) {
            toolsText += ", ";
        }
    }
    document.getElementById("toolsText").innerHTML = "Built With: " + toolsText;

    var descrip = document.getElementById("descriptionText");
    descrip.innerHTML = project.description;
}