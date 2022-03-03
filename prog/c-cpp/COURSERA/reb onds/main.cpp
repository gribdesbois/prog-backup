#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    const double  g = 9.81;
    double H(1), eps(0), v(0) , v1(0), H1(0), h_fin(0);    //hauteur initiale et coefficient de rebond
    int nbr(0);            // nombre de rebonds

    cout << "veuillez entrer la hauteur initiale\n";
    cin >> H;


    cout << "coefficient de rebond?\n";
    cin >> eps;

    cout << " hauteur finale desiree?\n";
    cin >> h_fin;


    while (H<=0 || (eps < 0 || eps >= 1) || h_fin <=0 or h_fin >= H)
    {
        cout << "valeurs entrees incorrectes";
        return 1;
    }

    do
    {
        ++nbr;
        v = sqrt ( 2*g*H );
        v1 = eps * v;
        H1 = (v1*v1)/(2*g);
        H = H1;
    }   while (H > h_fin);

     cout << "\n\t la balle rebondit " << nbr << " \tfois avant que la hauteur de rebond ( " << H
          << " ) soit inferieure a " << h_fin << endl;


cout << "jkdwpdijw";


    return 0;
}


