$("#search-btn").on("click", function(event) {
    event.preventDefault();

    var searchItem = $("#search-input").val().trim();
    console.log("search input " + searchItem);
    $("#search-input").val("");

});