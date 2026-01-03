const path = require('node:path');
const { glob } = require('glob');
const { loadPyodide } = require("pyodide");

async function test_cpp() {
    const wheels = await glob('../cpp_extension-*.whl', { cwd: __dirname });
    if (wheels.length === 0) {
        throw new Error('No wheel found for cpp_extension');
    }
    const wheelPath = path.resolve(__dirname, wheels[0]);

    let pyodide = await loadPyodide();
    await pyodide.loadPackage(wheelPath);
    return pyodide.runPythonAsync(`
import cpp_extension
print(cpp_extension.sum_as_string(1, 2))
    `);
}

test_cpp();
