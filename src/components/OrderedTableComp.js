import React from "react"


function OrderedTable() {
    //Here is where we store javascript functions
    const order = () =>{
        var selected = document.getElementById("order").value;
        
        switch(selected) {
            case "Unordered":
                alert("unooordered");
                break;
            case "AlphaDescending":
                alert("alpha descennnd");
                break;
            case "AlphaAscending":
                alert("alpha ascennnd");
                break;
            default:
                alert("default");
        } //end switch
    };
    //Gatsby turns the following "html" into react javascript.
    return (
    <div>
        <h1>Ordered Table</h1>
        <label htmlFor="order">Choose a sort: </label>

        <select id="order" onChange={order}> 
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