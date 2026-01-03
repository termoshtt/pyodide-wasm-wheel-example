cmake_minimum_required(VERSION 3.15)
project(cpp_extension LANGUAGES CXX)

# Use FindPython instead of deprecated FindPythonLibs for cross-compilation support
set(PYBIND11_FINDPYTHON ON)
find_package(pybind11 CONFIG REQUIRED)

pybind11_add_module(cpp_extension src/main.cpp)

install(TARGETS cpp_extension DESTINATION .)
