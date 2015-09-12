function textInformation(stackInput){
	var stackInputArray = stackInput.value.split(/\r\n|\r|\n/);
	var stackTraceArray = new Array();
	var errorMessage;

	jQuery.each(stackInputArray,function(){
		var trimText = this.replace(/^\s+/g, "");
		stackTraceArray.push(trimText);
		//console.log("trimText is " + trimText);
	});

	errorMessage = stackTraceArray.shift().replace(/\s+/g, "").replace(/^\w+:/g, "");
	console.log("errorMessage is " + errorMessage);
	console.log(stackTraceArray);
}
