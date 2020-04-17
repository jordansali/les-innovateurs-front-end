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
            <tr>
                <th>Devs</th>
            </tr>
            <tr>
                <td>Daniel</td>
            </tr>
            <tr>
                <td>Jordan</td>
            </tr>
            <tr>
                <td>Nic</td>
            </tr>
            <tr>
                <td>Vlad</td>
            </tr>
            <tr>
                <td>Selina</td>
            </tr>
            <tr>
                <td>Shanique</td>
            </tr>
        </table>

    </div>
    )
}

//Export the component
export default OrderedTable