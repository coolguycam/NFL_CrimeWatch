// class holds api call methods
class AJAX {
    static searchPlayer(player, f) {
        $.ajax({
            url: "http://NflArrest.com/api/v1/player/search/?term=" + encodeURIComponent(player),
            method: "GET"
        }).then(f);    
    }

    static arrestDetails(player, f) {
        $.ajax({
            url: "http://NflArrest.com/api/v1/player/arrests/" + encodeURIComponent(player),
            method: "GET"
        }).then(f);
    }

    static topTeams(f) {
        $.ajax({
            url: "http://NflArrest.com/api/v1/team/?limit=10",
            method: "GET"
        }).then(f);
    }

    static topPlayers(f) {
        $.ajax({
            url:"http://NflArrest.com/api/v1/player?limit=10",
            method: "GET"
        }).then(f);
    }

    static searchNews(query, f) {
        $.ajax({
            url: "https://newsapi.org/v2/everything?" + $.param({
                q: query + " arrest nfl",
                apiKey: "003b6f29d903402b870e130d1757f4ef"
            }),
            method: "GET"
        }).then(f);
    }

    static searchGif(query, f) {
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?" + $.param({
                api_key: "aExZtytookBSVzlAfYuyRa519qcywPU3", 
                q : query, 
                limit: 10,
                offset: 0
            }),
            method: "GET"
        }).then(f);
    }

}

// function for search modal
function onSearchPlayerClick(event) {
    event.preventDefault();
    let term = $("#search").val();

    AJAX.searchPlayer(term, function(response) {
        $("#num").html(response.length);
        $("#search-table").html("");

        response.forEach(e => {
            let elem = $(`
                <tr>
                    <td><a href="details.html?name=${encodeURIComponent(e.Name)}">${e.Name}</a></td>
                    <td>${e.arrest_count}</td>
                </tr>
            `);

            $("#search-table").append(elem);
        });

        $("#search-modal").modal("open");
    })
}