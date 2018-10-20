//Variables
// This variable will be pre-programmed with our authentication key (the one we received when we registered)
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

//Variables to hold the result from user's input.
var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

//queryUrl creater variable
var queryUrlBase =  "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

//Array to hold various article info.
var articleCounter = 0;

//Functions





