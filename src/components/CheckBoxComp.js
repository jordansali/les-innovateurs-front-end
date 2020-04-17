import React from "react"


function CheckBox() {
    //Here is where we store javascript functions
    const check = () =>{
        // Get the checkbox
        var checkBox = document.getElementById("check1");

        // If the checkbox is checked, display the output text
        if (checkBox.checked === true){
            document.getElementById("checklabel").style.visibility = "visible";
        } else {
            document.getElementById("checklabel").style.visibility = "hidden";
        }
    };
    //Gatsby turns the following "html" into react javascript.
    return (
    <div>
        <h1>Checkbox</h1>
        <input type="checkbox" id="check1" onChange={check} defaultChecked></input>
        <label htmlFor="check1" id="checklabel"> Visible when checked!</label><br />
    </div>
    )
}

//Export the component
export default CheckBox