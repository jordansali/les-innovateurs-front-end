import React from "react"


function CheckBox() {
    //Here is where we store javascript functions
    const check = () =>{

        // Get the checkbox
        var checkBox = document.getElementById("check1");

        // If the checkbox is checked, display the output text
        if (checkBox.checked == true){

        } else {

        }
    };
    //Gatsby turns the following "html" into react javascript.
    return (
    <div>
        <h1>Checkbox</h1>
        <input type="checkbox" id="check1" onclick={check} checked></input>
        <label for="check1"> Visible when checked!</label><br />
    </div>
    )
}

//Export the component
export default CheckBox