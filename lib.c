#define PY_SSIZE_T_CLEAN
#include <Python.h>

static PyObject *
f(PyObject *self, PyObject *args)
{
    return PyLong_FromLong(3);
}

static PyMethodDef methods[] = {
    {"f", f, METH_VARARGS, NULL},
    {NULL, NULL, 0, NULL} /* Sentinel */
};

static struct PyModuleDef mod = {
    PyModuleDef_HEAD_INIT,
    "pyodide_wasm_wheel_example",
    NULL,
    -1,
    methods};

PyMODINIT_FUNC
PyInit_pyodide_wasm_wheel_example(void)
{
    return PyModule_Create(&mod);
}
