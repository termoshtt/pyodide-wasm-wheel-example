#include <pybind11/pybind11.h>
#include <string>

namespace py = pybind11;

std::string sum_as_string(int a, int b) {
    return std::to_string(a + b);
}

PYBIND11_MODULE(cpp_extension, m) {
    m.doc() = "A Python module implemented in C++";
    m.def("sum_as_string", &sum_as_string, "Formats the sum of two numbers as string",
          py::arg("a"), py::arg("b"));
}
