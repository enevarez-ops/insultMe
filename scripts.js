$(document).ready(function () {


    $(".card-header").toggleClass("hidden");
    $(".blockquote-footer").toggleClass("hidden");

  $("#insultGen").on("click", function () {
    const settings = {
      async: true,
      crossDomain: true,
      url:
        "https://cors-anywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json",
      method: "GET",
    };


    $.ajax(settings).done(function (response) {
      var firstSplit = response.split("''");

      var newResponse = firstSplit[0].split(":");

      var realResponse = newResponse[3].split('","');

      console.log(realResponse);

      $("#insultHere").empty();
      $("#insultHere").append(realResponse[0]);

      $(".card-header").toggleClass("hidden");
      $(".blockquote-footer").toggleClass("hidden");

    });
  });

  

});
