function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }
    const userBMI = bmi_calc(weight, height);
    let resultMessage;

    if (userBMI <= 18.0) {
        resultMessage = `Your BMI is ${userBMI}. You are underweight. 😒😒😢`;
    } else if (userBMI <= 25.0) {
        resultMessage = `Your BMI is ${userBMI}. You are in a healthy weight. 🥳👌`;
    } else if (userBMI <= 35.0) {
        resultMessage = `Your BMI is ${userBMI}. You are overweight. 😧😨`;
    } else {
        resultMessage = `Your BMI is ${userBMI}. You are in obesity range. 😱`;
    }
}
function bmi_calc(weight, height) {
    return weight / height ** 2;
}