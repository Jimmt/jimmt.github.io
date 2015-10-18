function readTextFile(file)
{
	var rawFile = new XMLHttpRequest();
	var string;
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var allText = rawFile.responseText;
				document.getElementById("header").innerHTML = allText;
			}
		}
	}
	rawFile.send(null);
}
readTextFile("header.html");

var buttons = document.getElementsByClassName("headerButton");
for(var i = 0; i < buttons.length; i++){
	if(window.location.href == buttons[i].href){
		buttons[i].style = "border-bottom: 2px red solid;";
	}
}