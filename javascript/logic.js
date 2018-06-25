var topics = ["The Incredibles","The Revenant","Star Wars","Indiana Jones","Harry Potter","Thor","Beauty and the Beast","Infinity War","The Kingsman","Forgetting Sarah Marshall",];
console.log(topics);

//ajax
function displayGif(){
    var searchedMovie = $(this).attr("data-name");
    console.log(searchedMovie)
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=luw3u3zmYLsaHCqc9RU0lS8ePO5wmiAI&q="+ searchedMovie +"&limit=10&offset=0&rating=G&lang=en"
    
    $.ajax({
        url:queryURL,
        method:"GET"
    })
    
        .then(function(response){
            
            var results = response.data;
            for (var j=0; j < results.length; j++) {
                
                var gifDiv = $("<div class='item'>");
                var rating = results[j].rating;
                var bit = results[j].bitly_gif_url;
                var p = $("<p>").text("Rating: " + rating);
                var link = $("<a>").text(bit);
                link.attr("href", results[j].embed_url);
                link.text("Get GIF here!");
                link.attr("target", "blank");
                var movieImage=$("<img>");
                movieImage.attr("data-still",results[j].images.fixed_width_still.url);
                movieImage.attr("data-animate",results[j].images.fixed_width.url);
                movieImage.attr( "src", results[j].images.fixed_width_still.url);
                movieImage.attr("data-state","still");
                movieImage.addClass("play",);
                movieImage.addClass("card blue-grey darken-4 col s8 m8 l12 center-align ");
                gifDiv.prepend(link);
                gifDiv.prepend(p);
                gifDiv.prepend(movieImage);
                
                $("#gifZone").prepend(gifDiv);
                
            };

            $('.play').on("click", function(){
                console.log("test")
                var state = $(this).attr("data-state");
                if(state === "still"){
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            })
            var omdb = "https://www.omdbapi.com/?t=" + searchedMovie + "&apikey=93a934dc";
            
                $.ajax({
                url: omdb,
                method: 'GET'
                })
                .then(function(response){
                    $("#gifTitle").empty()
                    var result = response;
                    var gifDiv = $("<div class='item'>")
                    var title = response.Title;
                    console.log(title)
                    var year = response.Year;
                    console.log(year)
                    var plot = response.Plot;
                    console.log(plot)
                    var t = $("<p>").text(title);
                    var y = $("<p>").text(year);
                    var pl = $("<p>").text(plot);
                    console.log(year + title + plot)
                    gifDiv.prepend(y);
                    gifDiv.prepend(pl);
                    gifDiv.prepend(t);
                    console.log(gifDiv)
                    $("#gifTitle").prepend(gifDiv);


                })

        });

    };

// buttons!
function makeButtons(){
    $("#buttonsView").empty();
    for (var i = 0; i < topics.length; i++){
        var a = $("<button>");
        a.addClass("movie");
        a.addClass("btn btn-small blue-grey darken-4 z-depth-3")
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
    $("#movieInput").val(" ")
    


    makeButtons();
});
$(document).on("click",".movie", displayGif)

makeButtons();
