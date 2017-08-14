function loadProfiles(userNames){
	if (userNames.length > 3){
		var loadingMessage = "This might take a while...";
		_displaySpinner(loadingMessage);
	} else {
		var flashMessage = "Loading Profiles";
		_displayFlash(flashMessage);
	}
	//... fetch names and build sidebar

	console.log(flashMessage); -> undefined
}