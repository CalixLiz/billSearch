console.log($)

//0. make a new global function so we can use different search parameters everytime 
//1. initiate a promise from within the new global 
//0. make an event listener for key down
//1. make a variable for key-down, 13 for the enter key

var searchUrl = 'https://congress.api.sunlightfoundation.com/bills/search?callback=?&apikey=123query='
var baseUrl = 'https://congress.api.sunlightfoundation.com/bills?apikey=345'






// call once upon loading page and every key-down


//getJSON is a method that takes a url as input and makes a request to the server at that location
//getJSON returns a promise that will resolve when the response to the request comes in
//promise.then()

//initiate request to API endpoint
//capture promise returned by $.getJSON
//write a function containing the code that depends on the API response
//give that function to the promise using promise.then(), so the promise can run it later


//make html string
var makeBillHTML = function(singleBillObj){
	var getHTML = ''
	
	getHTML += '<div class="bill">'           //we create the div  
	getHTML += '<h2 class="title">' + singleBillObj.official_title + '</h2>' //we call the title method in the singleBill object
	getHTML += '<p class="chamber"> Chamber: ' + singleBillObj.chamber + '</p>'
	getHTML += '<p class="sponsor"> Sponsor: ' + singleBillObj.sponsor.first_name + ' ' + singleBillObj.sponsor.last_name + '</p>' 
	getHTML += '<p class="status"> Status: ' + (singleBillObj.history.active  ? 'active' : 'dead') + '</p>'
	getHTML += '<p class="introDate"> Introduced on: ' + singleBillObj.introduced_on + '</p>'
	getHTML +=  '</div>'	
	return getHTML

	}

//get response cargo and does something with in upon the response being fulfilled
function handleBillsResponse(billsObj) { 
	var allBillsHTML = ''

	//by using document.querySelector we select that space 
	var containerNode = document.querySelector('.container')
	var billsArray = billsObj.results

    //we iterate into each object of the array
		for(var i = 0; i < billsArray.length; i++) {
			allBillsHTML += makeBillHTML(billsArray[i]) //allBillsHTML become the return value of the functionmakeBillHTML
			
		}

	containerNode.innerHTML = allBillsHTML // we display the title into the page
	hideGif()
}
//hides loading gif 
var hideGif = function() {
	var loadCat = document.querySelector('.catt')
	loadCat.style.display = 'none'
}


var getBills = function(url) {

	var billsPromise = $.getJSON(url)//sends the request
	hideGif()

	billsPromise.then(handleBillsResponse)

}


var inputSearch = document.querySelector('.searchBar')

	inputSearch.addEventListener('keydown', function(eventObj){
		
		if(eventObj.keyCode === 13) {
		
			var fullUrl = searchUrl + eventObj.target.value
			getBills(fullUrl)			
			eventObj.target.value = ''
		}
	})


var showHome = function(){
	var containerNode = document.querySelector('.container')
	containerNode.innerHTML = '<img src="http://i.imgur.com/u2gQ5yK.gif">'
}



var showBillSearch = function(){
   getBills(baseUrl)
}


var router = function(){
	if(location.hash === '#home') {
		showHome()
	}

	if(location.hash === '#billSearch'){
	  	showBillSearch()
	}

	
  //first thing must controller must do, read the hash
  //location.hash
  //location is the description of the URL ***** origin *** file protocol **** 
}



window.addEventListener('hashchange', router)


router()

























