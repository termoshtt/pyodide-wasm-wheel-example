cmake_minimum_required(VERSION 3.15)
project(cpp_extension LANGUAGES CXX)

find_package(pybind11 CONFIG REQUIRED)

pybind11_add_module(cpp_extension src/main.cpp)

install(TARGETS cpp_extension DESTINATION .)
