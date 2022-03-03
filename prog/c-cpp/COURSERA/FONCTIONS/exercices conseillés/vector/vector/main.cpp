#include <iostream>
#include <vector>

using namespace std;
double scalaire( vector<double> u, vector <double> v);
int main()
{
    int n ;

    cout << "Hello world!" << endl;
    cout << "entrez la taille des vecteurs u et v\n";
    cin  >> n;
    vector<double> u(n), v(n);


    for (int i=0 ; i<n-1 ; i++)
    {
        cout   << "u " << i <<"?";
        cin    >>  u[i];

        cout   << "v " << i <<"?";
        cin    >>  v[i];
    }

    cout << " Produit scalaire de u par v \t\n" << scalaire(u,v);
    return 0;
}


double scalaire( vector<double> u, vector <double> v)
{
    double result(0);

    for (size_t i(0); i < u.size(); ++i)
    {
        result += u[i] * v[i];
    }

    return result;
}


