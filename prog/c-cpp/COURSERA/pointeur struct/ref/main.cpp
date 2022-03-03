#include <iostream>

using namespace std;


struct Maison
{
    string adresse;

};

struct Personne
{
    string nom;
    Maison& domicile;
};

void affiche(const Personne& p)
{
    cout << p.nom << "\t"<< p.domicile.adresse<<endl;
}

int main()
{
    Maison chezoim({"DANS TON CUL"}), chezoit({"AU FOND A GAUCHE"});
    Personne pierre({"pierre", chezoim}), paul({"paul", chezoim}), jack({"jack", chezoit}), pierpoljack({"pierpoljak", chezoit}) ;//, mickey, minnie, et_tous_leurs_amis, dont_pluto_l_ami_de_mickey;

    affiche(pierre);
    affiche(paul);
    affiche(jack);
    affiche(pierpoljack);
    return 0;
}
