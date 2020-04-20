import React from "react"
import { Link } from 'gatsby';


function LinkComponent() {
    //Here is where we store javascript functions
    function alertPress (){
        document.getElementById("header").style.color = "red";   
        alert("Button Pressed");
    };
    
    //Gatsby turns the following "html" into react javascript.
    return (
        <div>
            <h1 id="header">Link Component</h1>
            <Link to={`/about/`} >About Page</Link> 
            < br />
            <a href={`/about/`} target="_blank" >About page new tab</a>
            <br />
            <a href="#page_top">Click here to return to top.</a>
        </div>
    )
}

//Export the component
export default LinkComponent