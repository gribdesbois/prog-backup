#include <iostream>
#include <math>

using namespace std;

int main()
{
    long  n(1);
    double x (0);

    cout << "Hello world!\n ENTRE UN NOMBRE\n" << endl;
    cin >> n;

    x = sqrt( n );

    if ( n % 2 == 0){ cout << n <<"    est pair \n"; return 0}

    for (int i = 3 ; i <= x ; i +=2)
    {
        if ( n % i == 0) cout << i << "    est diviseur de  " << n << endl;
        return 0;
    }

    cout << " Je crois fortement que ce nombre est premier ";

    return 0;
}
