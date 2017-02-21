//var promise = #.getJSON('')

console.log($)

var url = 'https://congress.api.sunlightfoundation.com/bills?apikey=345'

var billsPromise = $.getJSON(url)//sends the request
//getJSON is a method that takes a url as input and makes a request to the server at that location
//getJSON returns a promise that will resolve when the response to the request comes in
//promise.then()

//initiate request to API endpoint
//capture promise returned by $.getJSON
//write a function containing the code that depends on the API response
//give that function to the promise using promise.then(), so the promise can run it later

var makeBillHTML = function(arrayObj){//takes in a single object of the array and converts the object into html format
	var getHTML = ''
	//getHTML += '<div class="bill">' + 
}

function handleBillsResponse(billsObj) {//takes object from API response and processes data at each iteration
	console.log(billsObj)
	var allBillsHTML = ''
	var billsArray = billsObj.results
	for(var i = 0; i < billsArray.length; i++) {
		allBillsHTML += makeBillHTML(billsArray[i])
	}
}

billsPromise.then(handleBillsResponse) // take this function and hang onto it(handleBillsResponse)