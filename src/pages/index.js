/*Component names must start with a capital */
import React from "react"
import TestComponent from "../components/testComponent"
import CalcComp from "../components/CalcComp"
import CheckBoxComp from "../components/CheckBoxComp"
/*Any React component defined in src/pages/*.js will automatically become a page.*/
/*Everything within 'export' must have one parent tag */
export default () => (
    <div> 
        <h1>Testing branch!</h1>
        <div>Hello world!!! People...! This is a test site built using Gatsby. Test of change</div>
        <br />
        <br />
        <TestComponent ButtonText="Test of a Property"/>
        <br />
        <br />
        <CalcComp />
        <br />
        <br />
        <CheckBoxComp></CheckBoxComp>
    </div>
)
