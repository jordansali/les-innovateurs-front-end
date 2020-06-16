import React from "react"

function UserEntry() {

    
    //Gatsby turns the following "html" into react javascript.
    return (
        <div>
            <h1 id="header">Alert Component</h1>
            <button id="alertBtn" onClick={alertPress}>Alert!</button>
        </div>
    )
}

//Export the component
export default UserEntry