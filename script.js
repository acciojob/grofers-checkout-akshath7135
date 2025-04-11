// Create the button to get the total price
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

// Create a div to display the total price (matching Cypress test)
const totalDiv = document.createElement("div");
totalDiv.id = "ans";
totalDiv.style.fontWeight = "bold";
totalDiv.style.textAlign = "center";
totalDiv.style.marginTop = "10px";
document.body.appendChild(totalDiv);

// Make prices editable
document.querySelectorAll(".price").forEach((price) => {
    price.setAttribute("contenteditable", "true");
    price.style.border = "1px solid gray"; // Visual indication that it's editable
    price.style.padding = "5px";
});

// Function to calculate and display the total price
const getSum = () => {
    const prices = document.querySelectorAll(".price");

    let total = 0;
    prices.forEach(price => {
        let value = parseFloat(price.textContent.trim());
        if (!isNaN(value)) {
            total += value;
        }
    });

    // Display the total inside #ans div
    totalDiv.textContent = `Total Price: Rs ${total}`;
};

// Attach event listener to the button
getSumBtn.addEventListener("click", getSum);
