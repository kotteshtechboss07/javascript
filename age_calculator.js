// Function to calculate age
function calculateAge() {
    // Get the birthdate value from the user
    var birthdate = new Date(document.getElementById('birthdate').value);

    // Get the current date
    var currentDate = new Date();

    // Calculate the age
    var age = currentDate.getFullYear() - birthdate.getFullYear();

    // Check if the birthday has already occurred this year
    if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
        age--;
    }

    // Display the result
    alert('Your age is: ' + age + ' years');
}
