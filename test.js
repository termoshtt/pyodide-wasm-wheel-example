const fs = require('node:fs');
const path = require('node:path');

const { loadPyodide } = require("pyodide");

async function test_rust() {
    let pyodide = await loadPyodide();
    await pyodide.loadPackage(
        path.join(
            __dirname,
            '/rust_extension-0.1.0-cp311-cp311-emscripten_3_1_45_wasm32.whl'
        )
    );
    return pyodide.runPythonAsync(`
import rust_extension
rust_extension.sum_as_string(1, 2)
    `);
}

test_rust();
