//pull the form data out of local storage
var outputElem = document.getElementById("output"),
	key,
	output = "";

for (key in localStorage) 
{

	//this "hasOwnProperty" thing is just a Javascript idiom
	//necessary to ensure we don't pull in properties from
	//the prototype chain
	if (localStorage.hasOwnProperty(key)) 
	{

		//special handling for fileContents, just to make it look nice (put it in a scrollable, resizable text box)
		if (key === "fileContents") {
			output += key + ":<br><textarea>" + localStorage[key] + "</textarea><br><br>";
		} else {
			output += key + ": " + localStorage[key] + "<br><br>";
		}
	}
}

outputElem.innerHTML = output;

//this is obviously just a demo;
//you would actually grab the inputs out of localStorage and feed them into your code here
