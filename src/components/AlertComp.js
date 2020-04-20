import React from "react"


function AlertComponent() {
    //Here is where we store javascript functions
    function alertPress (){
        document.getElementById("header").style.color = "red";   
        alert("Button Pressed");
    };
    
    //Gatsby turns the following "html" into react javascript.
    return (
        <div>
            <h1 id="header">Alert Component</h1>
            <button id="alertBtn" onClick={alertPress}>Alert!</button>
        </div>
    )
}

//Export the component
export default AlertComponent