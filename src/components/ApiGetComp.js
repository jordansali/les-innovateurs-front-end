import React from "react"


function ApiGet() {

    //Here is where we store javascript functions
    function HttpGet(){
        // Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest();
        var url;
        var categoryId = null;

        if (document.getElementById("getId").value.length !== 0){
            categoryId = document.getElementById("getId").value;
        }

        document.getElementById("getId").value = null; //clear value after consuming

        console.log(categoryId);

        if(categoryId !== null ){
            url = `https://frenchjeopardyapi.azurewebsites.net/api/Categories/${categoryId}`;
        } else {
            url = 'https://frenchjeopardyapi.azurewebsites.net/api/Categories';
        }

        console.log(url);

        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', url, true);
        console.log("Request Started");

        //Clear label
        document.getElementById("getResults").innerText = "";

        request.onload = function() {
            console.log("Request loaded");
            // Begin accessing JSON data here
            var data = JSON.parse(this.response)

            if (categoryId === null){
                data.forEach(category => {
                    // Log each movie's title
                    console.log(category.categoryNameEn);
                    document.getElementById("getResults").innerText += category.categoryNameEn + "  ";
                });
            } else {
                console.log(data.categoryNameEn);
                document.getElementById("getResults").innerText += data.categoryNameEn + " ";
            }
            
        }

        // Send request
        request.send();
        console.log("Request sent");
    };

    function HttpPost (){
        //To be sent via http Post
        var postParameters = {
            "categoryNameEn" : document.getElementById("catEn").value,
            "categoryNameFr" : document.getElementById("catFr").value
        };
        
        // Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest();

        // Create a request variable and assign a new XMLHttpRequest object to it.
        request.open('POST', 'https://frenchjeopardyapi.azurewebsites.net/api/Categories', true);
        request.setRequestHeader("Content-type", "application/json");
        
        console.log("Request Started");

        document.getElementById("postResults").innerText = "";

        request.onreadystatechange = function () { //Call a function when the state changes.
            if (request.status == 201) {
                document.getElementById("postResults").innerText = request.status + " " + request.statusText;
            } else {
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
        var url = `https://frenchjeopardyapi.azurewebsites.net/api/Categories/${categoryId}`

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
            if (request.status == 200) {
                document.getElementById("deleteResults").innerText = request.status + " " + request.statusText;
            } else {
                document.getElementById("putResults").innerText = request.status + " " + request.statusText;;
            }
        }

        // Send request
        request.send();
        console.log("Request sent");

    };

    function HttpPut(){
        //To be sent via http Post
        var putParameters = {
            "id" : document.getElementById("putId").value,
            "categoryName_En" : document.getElementById("putCatEn").value,
            "categoryName_Fr" : document.getElementById("putCatFr").value
        };
        
        // Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest();

        // Create a request variable and assign a new XMLHttpRequest object to it.
        request.open('PUT', `https://frenchjeopardyapi.azurewebsites.net/api/Categories/${putParameters.id}`, true);
        request.setRequestHeader("Content-type", "application/json");
        
        console.log("Request Started");

        document.getElementById("putResults").innerText = "";

        request.onreadystatechange = function () { //Call a function when the state changes.
            if (request.status == 204) {
                document.getElementById("putResults").innerText = request.status + " Updated.";
            } else {
                document.getElementById("putResults").innerText = request.status + " " + request.statusText;;
            }
        }

        // Send request
        request.send(JSON.stringify(putParameters));
        console.log("Request sent");
    };
    //Gatsby turns the following "html" into react javascript.
    return (
        <div>
            <h1 id="header">API Verbs</h1>

            <h3>GET</h3>
            <label htmlFor="getId">Category ID (optional):</label>
            <input id="getId" name="getId"/><br/>
            <button id="getBtn" onClick={HttpGet}>Get</button>
            <label htmlFor="getBtn" id="getResults"></label>
            <br /><br />

            <h3>POST</h3>
            <label htmlFor="catEn">Category EN:</label> <br />
            <input id="catEn" name="catEn"/><br/>
            <label htmlFor="catFr">Category FR:</label> <br />
            <input id="catFr" name="catFr"/><br/>
            <button id="postBtn" onClick={HttpPost}>Post</button>
            <label htmlFor="postBtn" id="postResults"></label>
            <br /><br />

            <h3>PUT</h3>
            <label htmlFor="putId">Category ID:</label> <br />
            <input id="putId" name="putId"/><br/>
            <label htmlFor="putCatEn">Category EN:</label> <br />
            <input id="putCatEn" name="putCatEn"/><br/>
            <label htmlFor="putCatFr">Category FR:</label> <br />
            <input id="putCatFr" name="putCatFr"/><br/>
            <button id="putBtn" onClick={HttpPut}>Update</button>
            <label htmlFor="putBtn" id="putResults"></label>
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