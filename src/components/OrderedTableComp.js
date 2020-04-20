import React from "react"


function OrderedTable() {
    // Array for table
    let devList = [
        {dev: "Daniel"},
        {dev: "Vlad"}, 
        {dev: "Jordan"}, 
        {dev: "Nic"}, 
        {dev: "Selina"}, 
        {dev: "Shanique"}
    ];

    //Here is where we store javascript functions

    function generateTable() {
        var divTable = document.getElementById("divTable");
        var table = document.getElementById("table");

        if (table == null) {
            table = document.createElement("TABLE");
            table.setAttribute("id", "table");
            divTable.appendChild(table); 
        }
        
        clearTable("table"); //Clear table before generating
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
                generateTable();
                break;
            case "AlphaDescending":
                sortTable(true);
                break;
            case "AlphaAscending":
                sortTable(false);
                break;
            default:
                alert("default");
        } //end switch
    };

    function sortTable(descending) { 
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

                if (descending === true){
                    // Check if 2 rows need to be switched 
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) //sort descending
                    { 

                        // If yes, mark Switch as needed and break loop 
                        Switch = true; 
                        break; 
                    } 
                } else {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) //sort ascending
                    { 

                        Switch = true; 
                        break; 
                    } 
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
        <p>Please click the button to create the table first. Need to learn about gatsby lifecycle before I can  have the table generate onLoad.</p>
        <button id="tabelbtn" onClick={generateTable}>Create Table</button>
        <br />
        <br />
        <label htmlFor="order">Choose a sort: </label>

        <select id="order" onChange={order}> 
            <option value="Unordered">Unordered</option>
            <option value="AlphaDescending">Alphabetical - Descending</option>
            <option value="AlphaAscending">Alphabetical - Ascending</option>
        </select>   
        
        <div id="divTable">

        </div>

    </div>
    )
}

//Export the component
export default OrderedTable