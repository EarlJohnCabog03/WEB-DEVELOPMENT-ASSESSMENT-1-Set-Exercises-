document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get the values from the form fields
    var costPerLiter = parseFloat(document.getElementById('costPerLiter').value);
    var litersPurchased = parseFloat(document.getElementById('litersPurchased').value);
    
    // Calculate the total cost
    var totalCost = costPerLiter * litersPurchased;
    
    // Display the total cost on the page
    document.getElementById('totalCost').textContent = "Total Cost: $" + totalCost.toFixed(2);
});
