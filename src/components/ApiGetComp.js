import React from "react"


function ApiGet() {

    //Here is where we store javascript functions
    function HttpGet(){
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
            //To be sent via http Post
        var postParameters = {
            "categoryName_En" : document.getElementById("catEn").value,
            "categoryName_Fr" : document.getElementById("catFr").value
        };
        
        // Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest();

        // Create a request variable and assign a new XMLHttpRequest object to it.
        request.open('POST', 'https://jeopardygame.azurewebsites.net/api/Categories', true);
        request.setRequestHeader("Content-type", "application/json");
        
        console.log("Request Started");

        document.getElementById("postResults").innerText = "";

        request.onreadystatechange = function () { //Call a function when the state changes.
            if (request.status == 201) {
                document.getElementById("postResults").innerText = request.status + " " + request.statusText;
            }
        }

        // Send request
        request.send(JSON.stringify(postParameters));
        console.log("Request sent");
    };
    
    function HttpDelete(){
        // Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest();

        var categoryId = document.getElementById("catId").value
        var url = `https://jeopardygame.azurewebsites.net/api/Categories/${categoryId}`

        console.log("CatID: " + categoryId);
        console.log("url: " + url);

        //dont run if no numeric value is given
        if (isNaN(categoryId)){
            alert("Please provide a numeric value.");
            return; 
        }

        // Create a request variable and assign a new XMLHttpRequest object to it.
        request.open('DELETE', url, true);

        console.log("Request Started");

        document.getElementById("deleteResults").innerText = "";

        request.onreadystatechange = function () { //Call a function when the state changes.
            //if (request.status == 200) {
                document.getElementById("deleteResults").innerText = request.status + " " + request.statusText;
            //}
        }

        // Send request
        request.send();
        console.log("Request sent");

    };

    function HttpPut(){

    };
    //Gatsby turns the following "html" into react javascript.
    return (
        <div>
            <h1 id="header">API Verbs</h1>

            <h3>GET all</h3>
            <button id="getBtn" onClick={HttpGet}>Get</button>
            <label htmlFor="getBtn" id="getResults"></label>
            <br /><br />

            <h3>GET by ID</h3>
            <button id="getIdBtn" onClick={HttpGetId}>Get</button>
            <label htmlFor="getIdBtn" id="getIdResults"></label>
            <br /><br />

            <h3>POST</h3>
            <label htmlFor="catEn">Category EN:</label> <br />
            <input id="catEn" name="catEn"/><br/>
            <label htmlFor="catFr">Category FR:</label> <br />
            <input id="catFr" name="catFr"/><br/>
            <button id="postBtn" onClick={HttpPost}>Post</button>
            <label htmlFor="postBtn" id="postResults"></label>
            <br /><br />

            <h3>DELETE</h3>
            <label htmlFor="catId">Category ID to delete:</label> 
            <input type="number" id="catId" name="catId"/><br/>
            <button id="postBtn" onClick={HttpDelete}>Delete</button>
            <label htmlFor="deleteBtn" id="deleteResults"></label>
            <br /><br />


        </div>
    )
}

//Export the component
export default ApiGet