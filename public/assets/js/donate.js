$(document).ready(function() {
    console.log("Donation app loaded");

    // trigger modal
    $('.modal').modal();

    $("#donate_btn").on("click", function(event){
         event.preventDefault();

        var amount = $("#donate_amount").val().trim()
        var donationData = {
            donation: amount
        }

        $.post("/donate", donationData, (res)=>{
              //Grab the response from the server if it successfull creates new database then redirect user
            if (res) {
                window.location = (res);
            }
        })
    });
});