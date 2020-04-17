import React from "react"


function OrderedTable() {
    //Here is where we store javascript functions
    function order(){
        var selected = document.getElementById("order").value;
        
        switch(selected) {
            case "Unordered":
                alert("unooordered");
                break;
            case "AlphaDescending":
                sortTable();
                break;
            case "AlphaAscending":
                alert("alpha ascennnd");
                break;
            default:
                alert("default");
        } //end switch
    };

    function sortTable() { 
        var table, i, x, y; 
        table = document.getElementById("table"); 
        var switching = true; 

        // Run loop until no switching is needed 
        while (switching) { 
            switching = false; 
            var rows = table.rows; 

            // Loop to go through all rows 
            for (i = 1; i < (rows.length - 1); i++) { 
                var Switch = false; 

                // Fetch 2 elements that need to be compared 
                x = rows[i].getElementsByTagName("TD")[0]; 
                y = rows[i + 1].getElementsByTagName("TD")[0]; 

                // Check if 2 rows need to be switched 
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
                    { 

                    // If yes, mark Switch as needed and break loop 
                    Switch = true; 
                    break; 
                } 
            } 
            if (Switch) { 
                // Function to switch rows and mark switch as completed 
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
                switching = true; 
            } 
        } 
    }
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

        <table id="table">
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