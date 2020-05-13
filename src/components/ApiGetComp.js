import React from "react"


function ApiGet() {

    //To be sent via http Post
    var postParameters = {
        "categoryName_En" : "test3",
        "categoryName_Fr" : "test trois"
    };


    //Here is where we store javascript functions
    function HttpGet (){
        // Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest();

        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'https://jeopardygame.azurewebsites.net/api/Categories', true);
        console.log("Request Started");

        //Clear label
        document.getElementById("getResults").innerText = "";

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

        // Create a request variable and assign a new XMLHttpRequest object to it.
        request.open('POST', 'https://jeopardygame.azurewebsites.net/api/Categories', true);
        request.setRequestHeader("Content-type", "application/json");
        
        console.log("Request Started");

        document.getElementById("postResults").value = "";

        request.onreadystatechange = function () { //Call a function when the state changes.
            if (request.status == 201) {
                alert(request.responseText);
            }
        }

        // Send request
        request.send(JSON.stringify(postParameters));
        console.log("Request sent");
    };
    
    //Gatsby turns the following "html" into react javascript.
    return (
        <div>
            <h1 id="header">API Verbs</h1>
            <button id="getBtn" onClick={HttpGet}>Get</button>
            <label htmlFor="getBtn" id="getResults"></label>
            <br />

            <button id="postBtn" onClick={HttpPost}>Post</button>
            <label htmlFor="postBtn" id="postResults"></label>
        </div>
    )
}

//Export the component
export default ApiGet