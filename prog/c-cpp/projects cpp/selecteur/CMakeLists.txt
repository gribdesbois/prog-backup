cmake_minimum_required(VERSION 2.6)
project(selecteur)

add_executable(selecteur main.cpp)

install(TARGETS selecteur RUNTIME DESTINATION bin)
