const path = require('node:path');
const { loadPyodide } = require("pyodide");

async function test_c() {
    let pyodide = await loadPyodide();
    await pyodide.loadPackage(
        path.join(
            __dirname,
            '/pyodide_wasm_wheel_example-0.0.0-cp311-cp311-emscripten_3_1_45_wasm32.whl'
        )
    );
    return pyodide.runPythonAsync(`
import pyodide_wasm_wheel_example
print(pyodide_wasm_wheel_example.f())
    `);
}

test_c();
