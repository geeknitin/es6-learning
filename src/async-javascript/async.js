window.onload = function() {

    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if(http.readyState === 4 && http.status === 200) {
            console.log(http.response);
        }
    }

    //async request
    http.open("GET", "data/tweets.json", true);

    //sync request
    http.open("GET", "data/tweets.json", false);

    http.send();

    console.log(http);

}
