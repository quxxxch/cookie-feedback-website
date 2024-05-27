document.addEventListener('DOMContentLoaded', function () {
    //  Add an event listener for the form submission
    document.getElementById('feedbackForm').addEventListener('submit', function (event) {
        event.preventDefault(); 

        // Extract form data
        var name = document.getElementById('inputName').value;
        var feedback = document.getElementById('cfeedback').value;
        var rating = document.getElementById('rating').value;

        // Determine which table to insert the feedback using switch
        var tableId;
        switch (rating) {
            case 'Excellent':
            case 'Good':
                tableId = 'positiveTable';
                break;
            case 'Poor':
            case 'Disappointing':
                tableId = 'negativeTable';
                break;
            default:
                return; 
        }

        // Get the table
        var table = document.getElementById(tableId);

        // Insert a new row into the table
        var newRow = table.insertRow(-1);

        // Insert cells into the row
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        // Fill cells with data
        cell1.innerHTML = name;
        cell2.innerHTML = feedback;
        cell3.innerHTML = rating;

    });
});