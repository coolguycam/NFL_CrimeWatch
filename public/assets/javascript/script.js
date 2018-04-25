$(document).ready(function () {
    // initialize search modal
    $(".modal").modal();
    $("#form1").submit(onSearchPlayerClick);

    // create rows for top teams
    AJAX.topTeams(function (response) {
        response.forEach(function(e, i) {
            let row = $(`
                <tr>
                    <td>#${i+1}</td>
                    <td>${e.Team_preffered_name}</td>
                    <td style="text-align:center">${e.arrest_count}</td>
                </tr>
            `);
            $("#top-teams > tbody").append(row);
        })
    })

    // create rows for top players
    AJAX.topPlayers(function (response) {
        response.forEach(function(e, i) {
            let row = $(`
                <tr>
                    <td>#${i+1}</td>
                    <td>${e.Name}</td>
                    <td>${e.Team_city} ${e.Team_name}</td>
                    <td style="text-align:center">${e.arrest_count}</td>
                </tr>
            `);

            // clicking row links to player page
            row.click(function(){
                window.location.href = "details.html?name="+encodeURIComponent(e.Name);
            })
            
            $("#top-players > tbody").append(row);
        });
    });

});
