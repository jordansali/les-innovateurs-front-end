import React from "react"


function OrderedTable() {
    //Here is where we store javascript functions
    const order = () =>{

    };
    //Gatsby turns the following "html" into react javascript.
    return (
    <div>
        <h1>Ordered Table</h1>
        <label for="order">Choose a sort: </label>

        <select id="order">
            <option value="Unordered">Unordered</option>
            <option value="AlphaDescending">Alphabetical - Descending</option>
            <option value="AlphaAscending">Alphabetical - Ascending</option>
        </select>

        <table>
            <thead>
                <tr>Devs</tr>
            </thead>
            <tbody>
                <tr>Daniel</tr>
                <tr>Jordan</tr>
                <tr>Nic</tr>
                <tr>Vlad</tr>
                <tr>Selina</tr>
                <tr>Shanique</tr>
            </tbody>
        </table>

    </div>
    )
}

//Export the component
export default OrderedTable