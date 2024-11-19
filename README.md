# Math & Conversion Module

This is a simple Math and Conversion module that allows users to perform various mathematical operations and unit conversions directly from the input field. Users can enter commands such as arithmetic expressions, square roots, and unit conversions, and get the result instantly.

## Features:
- **Basic Math Operations**: Addition, subtraction, multiplication, division
- **Square Root**: Evaluate square root of a number
- **Unit Conversion**: Convert pounds to kilograms and vice versa
- **Chemical Formula**: it can also solve Chemical Formula example `$chemical=H20`
- **Sine Cosine Logarithms and Others**: Solve Sin, Cos, Log Maths 
- **Advanced Math Operations**: Supports operations like `$maths:+`, `$maths:put -`

## Commands:

- **Basic Math**: 
    - `x + y`, `x - y`, `x * y`, `x / y`
- **Square Root**: 
    - `√25` (example for calculating square root)
- **Unit Conversion**:
    - Convert pounds to kilograms: `$conversation pounds=10 in kg`
    - Convert kilograms to pounds: `$conversation kg=10 in pounds`

- **Sin, Cos, Log**:
 - Solve Sin, Cos Log Maths
 - Example (only Sin):
 - `$advanced q=sin30` 
 
- **Advanced Math Operations (`$maths`)**:
    - Add numbers: `$maths: + x y`
    - Subtract numbers: `$maths: put - x y`
    - Example:
      - `$maths:+ 5 3` → `Result: 8`
      - `$maths:put - 5 3` → `Result: -8`

## Usage:

To use this module in your project, simply include the following CDN URL in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/CalestialAshley35/Math-Module@main/module.js"></script>
```

Then, you can use the module by calling the `startModule()` function with a button click or another event. Here’s an example HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Module</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Math & Conversion Module</h1>
        </div>
        <div class="module">
            <input id="commandInput" type="text" placeholder="Type your command (e.g., $start)" />
            <button onclick="startModule()">Run</button>
        </div>
        <div class="output" id="output"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/gh/CalestialAshley35/Math-Module@main/module.js"></script>
</body>
</html>
```

## Styles:

You can also include a custom CSS file to style the module:

```css
body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(120deg, #3498db, #8e44ad);
    color: #fff;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    padding: 20px 30px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
    max-width: 500px;
    text-align: center;
    width: 100%;
}

.header h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #f1c40f;
}

.module {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.module input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    outline: none;
    background: #fff;
    color: #333;
}

.module button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background: #e67e22;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s ease;
}

.module button:hover {
    background: #d35400;
}

.output {
    text-align: left;
    font-size: 18px;
    line-height: 1.5;
    margin-top: 10px;
}
```

## How It Works:

1. **Basic Math**: The user can input standard arithmetic expressions like `x + y`, and the module will compute and display the result.
2. **Square Root**: The user can input expressions like `√25`, and the module will return the square root.
3. **Unit Conversion**: The user can input commands to convert units like `pounds to kilograms` and vice versa.
4. **Advanced Math Operations** (`$maths`):
    - **Addition**: `$maths:+ x y`
    - **Subtraction**: `$maths: put - x y`
    - **Example**: `$maths:+ 5 3` → `Result: 8`

## Example Commands:

- To start the module:  
  `$start`
  
- For basic math:  
  `5 + 3` → `Result: 8`
  
- For square roots:  
  `√25` → `Result: 5`
  # Math & Conversion Module

This is a simple Math and Conversion module that allows users to perform various mathematical operations and unit conversions directly from the input field. Users can enter commands such as arithmetic expressions, square roots, and unit conversions, and get the result instantly.

## Features:
- **Basic Math Operations**: Addition, subtraction, multiplication, division
- **Square Root**: Evaluate square root of a number
- **Unit Conversion**: Convert pounds to kilograms and vice versa
- **Chemical Formula**: it can also solve Chemical Formula example `$chemical=H20`
- **Sine Cosine Logarithms and Others**: Solve Sin, Cos, Log Maths 
- **Advanced Math Operations**: Supports operations like `$maths:+`, `$maths:put -`

## Commands:

- **Basic Math**: 
    - `x + y`, `x - y`, `x * y`, `x / y`
- **Square Root**: 
    - `√25` (example for calculating square root)
- **Unit Conversion**:
    - Convert pounds to kilograms: `$conversation pounds=10 in kg`
    - Convert kilograms to pounds: `$conversation kg=10 in pounds`

- **Sin, Cos, Log**:
 - Solve Sin, Cos Log Maths
 - Example (only Sin):
 - `$advanced q=sin30` 
 
- **Advanced Math Operations (`$maths`)**:
    - Add numbers: `$maths: + x y`
    - Subtract numbers: `$maths: put - x y`
    - Example:
      - `$maths:+ 5 3` → `Result: 8`
      - `$maths:put - 5 3` → `Result: -8`

## Usage:

To use this module in your project, simply include the following CDN URL in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/CalestialAshley35/Math-Module@main/module.js"></script>
```

Then, you can use the module by calling the `startModule()` function with a button click or another event. Here’s an example HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Module</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Math & Conversion Module</h1>
        </div>
        <div class="module">
            <input id="commandInput" type="text" placeholder="Type your command (e.g., $start)" />
            <button onclick="startModule()">Run</button>
        </div>
        <div class="output" id="output"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/gh/CalestialAshley35/Math-Module@main/module.js"></script>
</body>
</html>
```

## Styles:

You can also include a custom CSS file to style the module:

```css
body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(120deg, #3498db, #8e44ad);
    color: #fff;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    padding: 20px 30px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
    max-width: 500px;
    text-align: center;
    width: 100%;
}

.header h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #f1c40f;
}

.module {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.module input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    outline: none;
    background: #fff;
    color: #333;
}

.module button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background: #e67e22;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s ease;
}

.module button:hover {
    background: #d35400;
}

.output {
    text-align: left;
    font-size: 18px;
    line-height: 1.5;
    margin-top: 10px;
}
```

## How It Works:

1. **Basic Math**: The user can input standard arithmetic expressions like `x + y`, and the module will compute and display the result.
2. **Square Root**: The user can input expressions like `√25`, and the module will return the square root.
3. **Unit Conversion**: The user can input commands to convert units like `pounds to kilograms` and vice versa.
4. **Advanced Math Operations** (`$maths`):
    - **Addition**: `$maths:+ x y`
    - **Subtraction**: `$maths: put - x y`
    - **Example**: `$maths:+ 5 3` → `Result: 8`

## Example Commands:

- To start the module:  
  `$start`
  
- For basic math:  
  `5 + 3` → `Result: 8`
  
- For square roots:  
  `√25` → `Result: 5`
  
- To convert pounds to kilograms:  
  `$conversation pounds=10 in kg` → `10 pounds is 4.54 kg.`
  
- To convert kilograms to pounds:  
  `$conversation kg=10 in pounds` → `10 kg is 22.05 pounds.`
  
- For advanced math (addition and subtraction):
  - `$maths:+ 5 3` → `Result: 8`
  - `$maths:put - 5 3` → `Result: -8`

## Contributing:

Feel free to fork the repository, submit issues, and open pull requests.

## License:

This project is open source and available under the [MIT License](LICENSE).

- To convert pounds to kilograms:  
  `$conversation pounds=10 in kg` → `10 pounds is 4.54 kg.`
  
- To convert kilograms to pounds:  
  `$conversation kg=10 in pounds` → `10 kg is 22.05 pounds.`
  
- For advanced math (addition and subtraction):
  - `$maths:+ 5 3` → `Result: 8`
  - `$maths:put - 5 3` → `Result: -8`

## Contributing:

Feel free to fork the repository, submit issues, and open pull requests.

## License:

This project is open source and available under the [MIT License](LICENSE).
