import React from "react"


function Calculator() {
    //Here is where we store javascript functions
    const calculate = () =>{
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var sum1 = num1+num2;

        document.getElementById("sum1").innerHTML = sum1;
    };
    //Gatsby turns the following "html" into react javascript.
    return (
        <div>
        <h1>Calculator</h1>

        <label htmlFor="num1">Number 1:</label>
        <input type="number" id="num1" name="num1"/><br/><br/>
        <label htmlFor="num2">Number 2:</label>
        <input type="number" id="num2" name="num2"/><br/><br/>

        <button onClick={calculate} id="btn1">Add</button><br/><br/>
        <label htmlFor="btn1" id="sum1">0.0</label>
    </div>
    )
}

//Export the component
export default Calculator