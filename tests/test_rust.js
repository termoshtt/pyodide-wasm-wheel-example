const path = require('node:path');
const { glob } = require('glob');
const { loadPyodide } = require("pyodide");

async function test_rust() {
    const wheels = await glob('../rust_extension-*.whl', { cwd: __dirname });
    if (wheels.length === 0) {
        throw new Error('No wheel found for rust_extension');
    }
    const wheelPath = path.resolve(__dirname, wheels[0]);

    let pyodide = await loadPyodide();
    await pyodide.loadPackage(wheelPath);
    return pyodide.runPythonAsync(`
import rust_extension
print(rust_extension.sum_as_string(1, 2))
    `);
}

test_rust();
