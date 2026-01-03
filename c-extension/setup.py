from setuptools import Extension, setup

setup(
    ext_modules=[
        Extension(
            name="c_extension",
            sources=["lib.c"],
        ),
    ]
)
