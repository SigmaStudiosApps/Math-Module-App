function startModule() {
    const input = document.getElementById("commandInput").value.trim();
    const output = document.getElementById("output");

    try {
        // Handle Square Root Maths
        if (input.startsWith("√")) {
            const expression = input.slice(1); // Remove the √ symbol
            const result = eval(expression); // Evaluate the expression
            output.innerHTML = `Result: ${result}`;
        }
        // Handle Basic Maths
        else if (input.startsWith("$maths")) {
            if (input.includes("maths:+")) {
                const equation = input.split("q=")[1]; // Extract the equation
                const result = eval(equation); // Evaluate the equation
                output.innerHTML = `Result: ${result}`;
            } else if (input.includes("put -")) {
                const equation = input.split("q=")[1]; // Extract the equation
                const result = eval(`-(${equation})`); // Add a minus at the start
                output.innerHTML = `Result: ${result}`;
            } else {
                output.innerHTML = "Invalid maths command.";
            }
        }
        // Handle Unit Conversion
        else if (input.startsWith("$conversation")) {
            if (input.includes("pounds=") && input.includes("in kg")) {
                const pounds = parseFloat(input.split("=")[1].split(" ")[0]);
                const result = (pounds * 0.453592).toFixed(2); // Convert pounds to kg
                output.innerHTML = `${pounds} pounds is ${result} kg.`;
            } else if (input.includes("kg=") && input.includes("in pounds")) {
                const kg = parseFloat(input.split("=")[1].split(" ")[0]);
                const result = (kg / 0.453592).toFixed(2); // Convert kg to pounds
                output.innerHTML = `${kg} kg is ${result} pounds.`;
            } else {
                output.innerHTML = "Invalid conversion command.";
            }
        }
        // Invalid Command
        else if (input === "$start") {
            output.innerHTML = "Module started! Type your commands.";
        } else {
            output.innerHTML = "Invalid command. Please try again.";
        }
    } catch (error) {
        output.innerHTML = `Error: ${error.message}`;
    }
                                          }
