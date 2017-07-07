$(document).ready(function() {

    $('input.autocomplete').autocomplete({
        data: {
            "Bell": null,
            "Bexar": null,
            "Bowie": null,
            "Brazoria": null,
            "Brewster": null,
            "Cameron": null,
            "Collin": null,
            "Dallas": null,
            "Denton": null,
            "Ector": null,
            "ElPaso": null,
            "Ellis": null,
            "Fayette": null,
            "Galveston": null,
            "Gregg": null,
            "Harris": null,
            "Harrison": null,
            "Hidalgo": null,
            "Hood": null,
            "Hunt": null,
            "Jefferson": null,
            "Johnson": null,
            "Kaufman": null,
            "Kleberg": null,
            "Maverick": null,
            "McLennan": null,
            "Montgomery": null,
            "Navarro": null,
            "Nueces": null,
            "Orange": null,
            "Parker": null,
            "Polk": null,
            "Potter": null,
            "Randall": null,
            "Rockwall": null,
            "Smith": null,
            "Tarrant": null,
            "Travis": null,
            "Victoria": null,
            "Webb": null,

        },
        onAutocomplete: function(val) {
            // Callback function when value is autcompleted.
        },
        minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    });
});