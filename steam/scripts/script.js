/*
function getStatus(id) {
    $.getJSON("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=F58D55ED27474749144E6BDC94E2F353&steamids=" + id,   {
              success: function(result) {
                  console.log(result);
                return result.response.players[0].profilestate;},
                    error: function() {
                        var error = "could not grab info";
                        return error;
                    }
    });
}

$(document).ready(function() {

    var julian = getStatus(76561198057072625);
    console.log(julian);
});





$(document).ready(function(){    
     $("#ludicrousaStatus").load("http://steamcommunity.com/id/LudicrousA", function () {
    $link = $("#ludicrousaStatus").contents().find(".profile_in_game_header:first").text();
         $("#ludicrousaStatus").text(status);
     });
});
*/