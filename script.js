const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with class "price"
    const prices = document.querySelectorAll(".price");
    
    // Calculate total sum
    let total = 0;
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    // Check if the total row already exists, remove if it does
    const existingRow = document.getElementById("totalRow");
    if (existingRow) {
        existingRow.remove();
    }

    // Create new row for total price
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    newRow.id = "totalRow";

    // Create cell that spans across both columns
    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2");  // Make it span across both columns
    totalCell.style.textAlign = "center"; 
    totalCell.style.fontWeight = "bold";
    totalCell.textContent = `Total Price: Rs ${total}`;

    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

// Attach event listener to button
getSumBtn.addEventListener("click", getSum);
