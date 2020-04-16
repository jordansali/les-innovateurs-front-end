import React from "react"


function Calculator() {
    const calculate = () =>{
        var number = document.getElementById("num1").value
        document.getElementById("btn1").innerHTML = "number: " + number;
    };
    return (
        <div>
        <h1>Calculator</h1>

        <label htmlFor="num1">Number 1:</label>
        <input type="number" id="num1" name="num1"/><br/><br/>
        <label htmlFor="num2">Number 2:</label>
        <input type="number" id="num2" name="num2"/><br/><br/>

        <button onClick={calculate} id="btn1">CLick me</button>
    </div>
    )
}

export default Calculator