import React from "react"


function ApiGet() {
    //Here is where we store javascript functions
    function HttpGet (){
        // Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest();

        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'https://jeopardygame.azurewebsites.net/api/Categories', true);
        console.log("Request Started");

        request.onload = function() {
            console.log("Request loaded");
            // Begin accessing JSON data here
            var data = JSON.parse(this.response)

            data.forEach(category => {
                // Log each movie's title
                console.log(category.categoryName_En);
                document.getElementById("getResults").innerText += category.categoryName_En + " ";
            });
        }

        // Send request
        request.send();
        console.log("Request sent");
    };

    function HttpPost (){
        // Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest();

        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'https://localhost:44355/api/Categories', true);
        console.log("Request Started");

        request.onload = function() {
            console.log("Request loaded");
            // Begin accessing JSON data here
            var data = JSON.parse(this.response)

            data.forEach(category => {
                // Log each movie's title
                console.log(category.id);
                document.getElementById("getResults").innerText += category.id + " ";
            });
        }

        // Send request
        request.send();
        console.log("Request sent");
    };
    
    //Gatsby turns the following "html" into react javascript.
    return (
        <div>
            <h1 id="header">API Verbs</h1>
            <button id="getBtn" onClick={HttpGet}>Get</button>
            <label htmlFor="getBtn" id="getResults"></label>

            <button id="postBtn" onClick={HttpPost}>Post</button>
            <label htmlFor="postBtn" id="postResults"></label>
        </div>
    )
}

//Export the component
export default ApiGet