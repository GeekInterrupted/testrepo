$(document).ready(function() {
    console.log("LogIn app loaded");
    //Grab data from sign in form
    $("#sign_in_btn").on("click", function(event) {

        event.preventDefault();

        var userData = {
            emailOrUsername: $("#emailOrUsername_form").val().trim(),
            password: $("#password_form").val().trim(),
            name: $("#username_form").val().trim(),



        };
        console.log(userData);

        $.post("/login", {
            name: $("#username_form").val().trim(),
            email: userData.emailOrUsername,
            password: userData.password
        }, (res) => {
            location.reload(res);
        });

    });

    // Sign Out functionality
    $("#sign_out_btn").on("click", function(event) {
        event.preventDefault();
        $.get("/logout", (res) => {
            location.reload(res);
        })
    });

    //donation btn
    $("#donate_btn").on("click", function(event) {
        event.preventDefault();

        var amount = $("#donation_amount").val().trim()
        var donationData = {
            donation: amount
        }
        $.post("/donate", donationData, (res) => {
            location.reload(res);
        })
    })


});