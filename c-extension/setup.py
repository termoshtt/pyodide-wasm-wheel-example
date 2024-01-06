from setuptools import Extension, setup

setup(
    ext_modules=[
        Extension(
            name="pyodide_wasm_wheel_example",
            sources=["lib.c"],
        ),
    ]
)
