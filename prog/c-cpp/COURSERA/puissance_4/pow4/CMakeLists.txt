cmake_minimum_required(VERSION 2.6)
project(pow4)

add_executable(pow4 main.cpp)

install(TARGETS pow4 RUNTIME DESTINATION bin)
