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

var makeBillHTML = function(singleBillObj){//takes in a single object of the array and converts the object into html format
	var getHTML = ''
	
	getHTML += '<div class="bill">'           //we create the div  
	getHTML +=  singleBillObj.official_title  //we call the title method in the singleBill object
	getHTML +=  '</div>'	
	return getHTML

	}


function handleBillsResponse(billsObj) { //takes object from API response and processes data at each iteration
	console.log(billsObj)
	var allBillsHTML = ''

	//by using document.querySelector we select that space 
	var containerNode = document.querySelector('.container')
	var billsArray = billsObj.results

    //we iterate into each object of the array
		for(var i = 0; i < billsArray.length; i++) {
			allBillsHTML += makeBillHTML(billsArray[i]) //allBillsHTML become the return value of the functionmakeBillHTML
			
		}

    console.log(allBillsHTML)

	containerNode.innerHTML = allBillsHTML // we display the title into the page
}

billsPromise.then(handleBillsResponse) // take this function and hang onto it(handleBillsResponse)




