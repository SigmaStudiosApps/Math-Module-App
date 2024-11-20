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
        // Handle Chemical Formula Parsing
        else if (input.startsWith("$chemical")) {
            const formula = input.split("=")[1].trim(); // Extract formula after the '=' sign
            const result = calculateMolarMass(formula); // Calculate molar mass
            output.innerHTML = `Molar mass of ${formula} is ${result} g/mol.`;
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

// Function to calculate molar mass of a chemical formula
function calculateMolarMass(formula) {
    const molarMasses = {
        H: 1.008,
        He: 4.0026,
        Li: 6.94,
        Be: 9.0122,
        B: 10.81,
        C: 12.011,
        N: 14.007,
        O: 15.999,
        F: 18.998,
        Ne: 20.180,
        Na: 22.990,
        Mg: 24.305,
        Al: 26.982,
        Si: 28.085,
        P: 30.974,
        S: 32.07,
        Cl: 35.45,
        K: 39.098,
        Ar: 39.948,
        Ca: 40.078,
        Fe: 55.845,
        Cu: 63.546,
        Zn: 65.38,
        Ag: 107.8682,
        I: 126.9044,
        Au: 196.9665
    };

    let mass = 0;
    const regex = /([A-Z][a-z]*)(\d*)/g; // Match elements and their counts
    let match;

    while ((match = regex.exec(formula)) !== null) {
        const element = match[1]; // Element symbol
        const quantity = match[2] ? parseInt(match[2], 10) : 1; // Quantity of the element

        if (molarMasses[element]) {
            mass += molarMasses[element] * quantity; // Add to total mass
        } else {
            return `Unknown element: ${element}`; // If an unknown element is found
        }
    }

    return mass.toFixed(2);
                                        }
