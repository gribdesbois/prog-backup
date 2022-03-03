#include <iostream>
#include <vector>

using namespace std;
enum   Couleur { vide , rouge, jaune };

typedef vector<vector<Couleur, 7>, 6> Grille;
int main()
{
  Grille grille;
  initialise(grille);
  grillle[2][3]= jaune;
  grillle[2][4]= rouge;
  affiche(grille);
  return 0;
}


void initialise(Grille& grille)
{
  for(auto &ligne : grille)
  {
    for(auto &kase : ligne)
    {
      kase = vide
    }
  }
}

void affiche(const Grille& grille) // ' ' ==> case vide          'O' ==> rouge         'X' jaune0
{
  for (auto ligne : grille)
  {
    for(auto kase : ligne)
    {
      if(kase == vide)
      {
	cout    << ' ';
      }
      else if (kase == rouge)
      {
	cout    << 'O';
      }
      else
	cout    << 'X';
      
    }
    cout << endl;
  }
}