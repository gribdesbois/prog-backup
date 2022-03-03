#include <iostream>

using namespace std;
int Fibo(int n);

int main()
{
    int n(0);

    cout << "Hello world!" << endl;
    cout << "n?\n";
    cin  >>  n ;

    cout << "\tFibonacci (" << n << ") = " << Fibo(n) << endl;

    return 0;
}

int Fibo(int n)

{
switch (n)
{
case 0: return 0;
case 1: return 1;
default: return (Fibo(n-1) + Fibo(n-2));
}

}
