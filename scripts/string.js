
var searchURL = 'https://congress.api.sunlightfoundation.com/bills/search?callback=?&apikey=123&query='
var baseURL = 'https://congress.api.sunlightfoundation.com/bills?callback=?&apikey=123'

var makeBillHTML = function(singleBillObj) { 
	var getHTML = ''
	getHTML += '<div class="bill">'
	getHTML += '<h2 class="title">' + singleBillObj.official_title + '</h2>'
	getHTML += '<p class="chamber"> Chamber: ' + singleBillObj.chamber + '</p>'
	getHTML += '<p class="sponsor"> Sponsor: ' + singleBillObj.sponsor.first_name + ' ' + singleBillObj.sponsor.last_name + '</p>'
	getHTML += '<p class="status"> Status: ' + (singleBillObj.history.active ? 'active' : 'dead') + '</p>'
	getHTML += '<p class="introDate"> Introduced on: ' + singleBillObj.introduced_on + '</p>'
	getHTML += '</div>'

	return getHTML

}

function handleBillsResponse(billsObj) { 
	var allBillsHTML = ''
	var containerNode = document.querySelector('.container')

	for (var i = 0; i < billsObj.results.length; i++) {
		allBillsHTML += makeBillHTML(billsObj.results[i])
	}
	containerNode.innerHTML = allBillsHTML
	hideGif()
}

function hideGif() {
	var loadingIcon = document.querySelector('.loading_icon')
	loadingIcon.style.display = 'none'
}



function makeRequest(url) {
	var billsPromise = $.getJSON(url) 
	billsPromise.then(handleBillsResponse)
}

makeRequest(baseURL)

var inputSearch = document.querySelector('.searchBar')

inputSearch.addEventListener('keydown', function(eventObj) {
	if (eventObj.keyCode === 13) {
		var fullURL = searchURL + eventObj.target.value
		makeRequest(fullURL)
