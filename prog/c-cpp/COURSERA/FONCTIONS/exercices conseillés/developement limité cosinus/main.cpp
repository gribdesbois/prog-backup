#include <iostream>
#include <math.h>
#define PI 3.141592
using namespace std;

double factorielle (int n);
double somme_partielle( double x, int N);

int main()
{
    int n(0);
    double x(0);
    cout << "quel rang pour le developement limite!" << endl;
    cin >> n;
    do
    {
    cout << "entrez x (%*2*pi)"<< endl;
    cin >> x;}  while (!(0<=x && x<= 2*PI));


    cout << "dev limité de cos (x) au rang " << n  <<"  est  \n"
        << somme_partielle(x, n);
    return 0;
}
double factorielle(int n)
{
    double result(1);
    if (n==0) return 1;
    else
    {
        if (n==1) return 1;
        {
            for (int i=1; i<=n; i++)
            {
                result *= i;
            }
        }
        return result;

    }
}


double somme_partielle(double x, int N)
{
do
{
 return
  (( pow(-1,N)*pow(x, (2*N)))/factorielle(2*N) + somme_partielle(x, N-1) );
} while (N > 0);
return 1;
}
