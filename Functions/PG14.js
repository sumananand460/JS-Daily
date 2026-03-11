// Q - Create a multiplication table using nested loops
function multiplicationTable(size) {
    // Create header
    let header = "    "; // Start with some padding for the top-left corner
    for (let i = 1; i <= size; i++) {  
        header += i.toString().padStart(4, " "); 
    }
    console.log(header);
    console.log("-".repeat(header.length));
    
    // Create table rows
    for (let i = 1; i <= size; i++) {
        let row = i.toString().padStart(2, " ") + " |";
        for (let j = 1; j <= size; j++) {
            row += (i * j).toString().padStart(4, " ");
        }
        console.log(row);
    }
}