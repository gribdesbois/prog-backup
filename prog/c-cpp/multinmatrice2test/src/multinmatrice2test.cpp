//============================================================================
// Name        : multinmatrice2test.cpp
// Author      : grib
// Version     :
// Copyright   : GO FUND YOURSELF
// Description : Hello World in C++, Ansi-style
//============================================================================
#include <iostream>
#include <vector.h>



using namespace std;

vector<vector<double>> lire_matrice();

vector<vector<double>> multiplication(const vector<vector<double>> & Mat1, const vector<vector<double>> & Mat2 );

void affiche_matrice(const vector<vector<double>> &M);

int main()
{
    vector<vector<double>>M1(lire_matrice()), M2(lire_matrice());
    if (M1[0].size()!=M2.size())
    {
        cout<<"erreur multiplication impossible"<<endl;
    }
    else
    {
    cout<<  "resultat:\n";
    affiche_matrice(multiplication(M1,M2));
    }
    return 0;
}
vector<vector<double>> lire_matrice()
{
    int l(0), c(0);


    do
    {
        cout    <<  "Nombre de lignes\n";
        cin     >> l;
    }
    while (l <= 0);
    do
    {
        cout    <<  "Nombre de colonnes";
        cin >> c;
    }
    while (c <=0);

    vector<vector<double>> M(l, vector<double>(c));

    for (int i(0); i<l; i++)
    {
        for(int j(0); j<c ; j++)
        {
            cout    <<  "M("<<i+1<<","<<j+1<<")=?";
            cin     >>  M[i][j];
        }
    }
    return M;
}

vector<vector<double>> multiplication(const vector<vector<double>> & Mat1, const vector<vector<double>> & Mat2 )
{
    vector<vector<double>> result(Mat1.size(), vector<double>(Mat2.size()));

    for (size_t i=0; i< Mat1.size(); i++)
    {
        for(size_t j=0; j< Mat2[0].size(); j++)
        {
            for(size_t k =0; k< Mat2.size(); k++)
            result[i][j]+= Mat1[i][k]*Mat2[k][j];
        }

    }

    return result;
}

void affiche_matrice(const vector<vector<double>>& M)
{

    for (auto  x: M)
    {
        for (auto element: x)
        {
            cout << element<<" ";
        }
        cout <<endl;
    }
}

