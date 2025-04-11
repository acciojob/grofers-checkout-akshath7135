const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all price elements
    const prices = document.querySelectorAll('.price');
    let total = 0;

    // Loop through the prices and sum them
    prices.forEach(price => {
        total += parseFloat(price.textContent); // Convert text to float and add to total
    });

    // Check if a total row already exists and remove it
    const existingTotalRow = document.querySelector('.total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for the total
    const totalRow = document.createElement('tr');
    totalRow.classList.add('total-row'); // Add a class for easy identification
    const totalCell = document.createElement('td');
    totalCell.colSpan = 1; // Span across one column for the item cell
    totalCell.textContent = "Total Price"; // Label for the total
    const totalPriceCell = document.createElement('td');
    totalPriceCell.textContent = total; // Display the total price

    // Append cells to the total row
    totalRow.appendChild(totalCell);
    totalRow.appendChild(totalPriceCell);

    // Append the total row to the table
    document.querySelector('table').appendChild(totalRow);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);