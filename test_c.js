const path = require('node:path');
const { glob } = require('glob');
const { loadPyodide } = require("pyodide");

async function test_c() {
    const wheels = await glob('pyodide_wasm_wheel_example-*.whl');
    if (wheels.length === 0) {
        throw new Error('No wheel found for pyodide_wasm_wheel_example');
    }
    const wheelPath = path.join(__dirname, wheels[0]);

    let pyodide = await loadPyodide();
    await pyodide.loadPackage(wheelPath);
    return pyodide.runPythonAsync(`
import pyodide_wasm_wheel_example
print(pyodide_wasm_wheel_example.f())
    `);
}

test_c();
