import React from "react"


function OrderedTable() {
    // Array for table
    let devList = [
        {dev: "Daniel"},
        {Devs: "Jordan"}, 
        {dev: "Nic"}, 
        {dev: "Selina"}, 
        {dev: "Vlad"}, 
        {dev: "Shanique"}
    ];

    let mountains = [
        { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
        { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
        { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
        { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
        { name: "Monte Amiata", height: 1738, place: "Siena" }
      ];

    //Here is where we store javascript functions

    function generateTable() {
        var table = document.getElementById("table2");
        clearTable("table2"); //Clear table before generating
        let data = Object.keys(devList[0]);

        let thead = table.createTHead();
        let row = thead.insertRow();

        //Generate table head
        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }

        //Generate table body
        for (let element of devList) {
            let row = table.insertRow();
            for (let key in element) {
              let cell = row.insertCell();
              let text = document.createTextNode(element[key]);
              cell.appendChild(text);
            }
          }
    }

    function clearTable(table){
        var e = document.getElementById(table); 
        
        //e.firstElementChild can be used. 
        var child = e.lastElementChild;  
        while (child) { 
            e.removeChild(child); 
            child = e.lastElementChild; 
        } 
    }

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
    };
    //Calling function upon start of component
    

    
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
        <button onClick={generateTable}>Sort</button>

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

        <table id="table2">

        </table>

    </div>
    )
}

//Export the component
export default OrderedTable