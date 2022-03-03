#include <iostream>

using namespace std;

int demander_nombre(int inf=0, int sup=0);

int main()
{
    int n;
    n = demander_nombre();
    cout << "\n\tnombre demande\t"    << n << endl;
    return 0;
}

int demander_nombre(int inf, int sup)
{
    if  (sup< inf) {int x(sup); sup=inf ; inf= x;}

    int n;
        cout << "entrez les bornes inf et sup ";
        cin  >> inf;
        cin >> sup;
    do
    {
        cout << "Entrez un nombre svp" << endl;
        cin  >> n;
    }
    while ( n <= inf || n >= sup); // = ! ( n> inf && nn < sup)
        return n;

}
