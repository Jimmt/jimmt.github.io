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