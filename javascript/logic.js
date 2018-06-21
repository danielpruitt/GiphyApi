var topics = ["The Incredibles","The Revenant","Star Wars","Indiana Jones","Pacific Rim","Blade Runner 2049","Beauty and the Beast","Infinity War","The Kingsman","Forgetting Sarah Marshall",];
console.log(topics);

//ajax
function displayGif(){
    var searchedMovie = $(this).attr("data-name");
    console.log(searchedMovie)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchedMovie +"&api_key=luw3u3zmYLsaHCqc9RU0lS8ePO5wmiAI";

    $.ajax({
        url:queryURL,
        method:"GET"
    })
        .then(function(response){
            var results = response.data;
            for (var j=0; j < results.length; j++) {
                var gifDiv = $("<div class='item'>");
                var rating = results[j].rating
                var p = $("<p>").text("Rating: " + rating);
                var movieImage=$("<img>");
                movieImage.attr("data-still",results[j].images.fixed_height_still.url);
                movieImage.attr("data-animate",results[j].images.fixed_height.url);
                movieImage.attr( "src", results[j].images.fixed_height_still.url);
                movieImage.attr("data-state","still")
                movieImage.attr("class","play")
               
                // movieImage.attr("src", results[j].images.fixed_height.url)
                gifDiv.prepend(p);
                gifDiv.prepend(movieImage)
                
                $('.play').on("click", function(){
                    var state = $(movieImage).attr("data-state");
                    if(state === "still"){
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                })

                $("#gifZone").prepend(gifDiv)
                
            };
        });
    };

    //click to animate
    // $('img').on("click", function(){
    //     var state = $(this).attr("data-state");
    //     if(state === "still"){
    //         $(this).attr("src", results[j].images.fixed_height_still.url);
    //         $(this).attr("data-state", "animate");
    //     } else {
    //         $(this).attr("src", results[j].images.fixed_height.url);
    //         $(this).attr("data-state", "still");
    //     }
    // })

// buttons!
function makeButtons(){
    $("#buttonsView").empty();

    for (var i = 0; i < topics.length; i++){
        var a = $("<button>");
        a.addClass("movie");
        a.attr("data-name",topics[i]);
        a.text(topics[i]);
        $("#buttonsView").append(a);
        console.log("a= " + a)
    };

};

// push input from search bar to array
$("#addMovie").on("click", function (event){
    event.preventDefault();

    var movie =$("#movieInput").val().trim();
    topics.push(movie);
    console.log("movie: " + movie);

    makeButtons();
});
$(document).on("click",".movie", displayGif)

makeButtons();
