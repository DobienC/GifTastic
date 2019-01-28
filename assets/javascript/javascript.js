var buttonList = [];

// Giphy API Key = q5G3c9kFDg7fqIGz2723OIC3cyV4f2uf
// http://api.giphy.com/v1/gifs/search?q=cat&api_key=q5G3c9kFDg7fqIGz2723OIC3cyV4f2uf&limit=5


$("#add-gif").on("click", function(event){
    event.preventDefault();

    var gif = $("#gif-input").val().trim();

    buttonList.push(gif);
    console.log(buttonList);

    makeButton();
});

function makeButton(){
    $(".button-array").empty();

    for(var i = 0; i<buttonList.length;i++){
        var $button = $("<button>");

        $button.addClass("gif");

        $button.attr("data-name", buttonList[i]);

        $button.text(buttonList[i]);
        $(document).on("click", ".gif", getGif);

        $(".button-array").append($button);
    }
}

function getGif() {

    var gif = $(this).attr("data-name");

    // Giphy API Key = q5G3c9kFDg7fqIGz2723OIC3cyV4f2uf
    // http://api.giphy.com/v1/gifs/search?q=cat&api_key=q5G3c9kFDg7fqIGz2723OIC3cyV4f2uf&limit=5
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=q5G3c9kFDg7fqIGz2723OIC3cyV4f2uf&q=" + gif;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var results = response.data;
        $(".gifs").empty();
        for(var i = 0; i < 10; i++){
            console.log(i);
            var $gifDiv = $("<div>");
            var $gifImg = $("<img>");
            // $gifImg.attr("class","gif-click");
            
            $gifImg.attr("data-still",results[i].images.original_still.url);
            $gifImg.attr("data-animate",results[i].images.fixed_height.url);
            $gifImg.attr("src", results[i].images.fixed_height.url);
            // $gifImg.attr("id", "gif-img");
            $gifImg.addClass("gif-img");
            $gifImg.attr("data-state", "animate");
            $gifDiv.append($gifImg);
            $(".gifs").append($gifDiv);    
        }
        // console.log(results[0].url);
    });
}

$(".gif-img").on("click", function(){
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
      console.log("test");
});

