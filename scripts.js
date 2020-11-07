$(document).ready(function (){


$("#insultGen").on("click", function(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json",
        "method": "GET", 
        "data": "json"
        // "headers": {
            // "x-rapidapi-key": "1a7ba9b86amsh693356748f18cfbp1938bfjsncc3687788037",
            // "x-rapidapi-host": "lakerolmaker-insult-generator-v1.p.rapidapi.com"
        // }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        $("#insultHere").append(response.data[0].insult);


    })
    
})


});