#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    double x(0);

    cout << "Soient les expressions suivantes :\n" << endl;
    cout << "Exp1= x/(1-exp(x)\n";
    cout << "Exp2 = x log(x) * exp (2/x-1)\n";
    cout << "Exp3 = (-x - sqrt(x^2-8x))/(2-x)\n";
    cout << "sqrt((sin(x)-x/20)*log(x^2 - 1/x ))\n";

    cout << "Entrez un reel x\n";
    cin >> x;

    if (1-exp(x)==0)
        {
            cout << "Exp1 indéfinie\n";
        }
        cout <<"\n exp1=\t"<< x/(1-exp(x));
        if ((x<=0)||x==1)
    {
        cout <<"exp2 indefinie\n";
    }
    cout << "exp2 =\t" << x*log(x)*exp(2/x-1);
        if (x==2 || (pow(x,2)-8*x <0))
    {
        cout << "\nexp3 indefinie";
    }
    cout << "\nexp3= \t" <<    (-x-sqrt(pow(x,2)-8*x))/(2-x);

    if (x==0 || (pow(x,2)-1/x)<=0 || ((sin(x)-x/20)*log(pow(x,2)-1/x))<0)
        cout << "\n exp4 indefinie\n";
    cout<< "expression 4\n" << sqrt((sin(x)-x/20)*log(pow(x,2)-1/x));
cout<<"oudsdad";
    return 0;
}º
