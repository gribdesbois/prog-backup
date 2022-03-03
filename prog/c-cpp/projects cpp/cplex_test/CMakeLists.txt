cmake_minimum_required(VERSION 2.6)
project(cplex_test)

add_executable(cplex_test main.cpp)

install(TARGETS cplex_test RUNTIME DESTINATION bin)
