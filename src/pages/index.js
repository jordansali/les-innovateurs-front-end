/*Component names must start with a capital */
import React from "react"
import PropsComponent from "../components/PropsComponent"
import CalcComp from "../components/CalcComp"
import CheckBoxComp from "../components/CheckBoxComp"
import OrderedTableComp from "../components/OrderedTableComp"
import AlertComp from "../components/AlertComp"
import LinkComp from "../components/LinkComp"
import SliderComp from "../components/SliderComp"
/*Any React component defined in src/pages/*.js will automatically become a page.*/
/*Everything within 'export' must have one parent tag */
export default () => (
    <div> 
        <a id="page_top"></a>
        <h1>Testing branch!</h1>
        <div>Hello world!!! People...! This is a test site built using Gatsby. Test of change</div>
        <br />
        <br />
        <PropsComponent PText="Test of a Property"/>
        <br />
        <br />
        <CalcComp />
        <br />
        <br />
        <CheckBoxComp></CheckBoxComp>
        <br />
        <br />
        <OrderedTableComp></OrderedTableComp>
        <br />
        <br />
        <AlertComp></AlertComp>
        <br />
        <br />
        <LinkComp></LinkComp>
        <br />
        <br />
        <SliderComp></SliderComp>
    </div>
)
