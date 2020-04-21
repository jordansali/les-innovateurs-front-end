import React from "react"
import styled from "styled-components"

const Header = styled.h1`
    color: red;
    transition: all 1s ease-in-out;
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    -ms-transition: all 1s ease-in-out;
    

    :hover {
        color: blue;
        transform: translate(3em,0);
        -webkit-transform: translate(3em,0);
        -moz-transform: translate(3em,0);
        -o-transform: translate(3em,0);
        -ms-transform: translate(3em,0);
    }
`
//Need to learn more about hooks and the gatsby lifecycle
/*function sliderVal(sliderValue) {
    let sliderLabel = document.getElementById("sliderLabel")
    sliderLabel.innerHTML = sliderValue;

}
function handleChange(event){
    this.setState({value: event.target.value});
}*/

function SliderComponent() {
    //Here is where we store javascript functions
    
    
    //Gatsby turns the following "html" into react javascript.
    return (
        <div>
            <Header id="header">Slider Component</Header>
            <input type="range" id="slider" min="0" max="100" defaultValue="50"></input>
            <label id="sliderLabel" htmlFor="slider"></label>
        </div>
    )
}

//Export the component
export default SliderComponent