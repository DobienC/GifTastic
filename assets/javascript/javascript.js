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
        console.log(response);
    });
  }

