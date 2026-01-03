const path = require('node:path');
const { glob } = require('glob');
const { loadPyodide } = require("pyodide");

async function test_c() {
    const wheels = await glob('../c_extension-*.whl', { cwd: __dirname });
    if (wheels.length === 0) {
        throw new Error('No wheel found for c_extension');
    }
    const wheelPath = path.resolve(__dirname, wheels[0]);

    let pyodide = await loadPyodide();
    await pyodide.loadPackage(wheelPath);
    return pyodide.runPythonAsync(`
import c_extension
print(c_extension.f())
    `);
}

test_c();
