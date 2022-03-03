#include <iostream>
#include <iomanip> // pour setprecision()
#include <cmath>   // pour exp()
using namespace std;

int main()
{
  // réduire le format d'affichage
  cout << setprecision(4);

  constexpr double population_initiale(7.0); // population initiale, en milliard d'humains
  constexpr int    annee_depart(2011);       // année initiale
  double taux(1.2);                          // taux de croissance, en %

  int annee(annee_depart);                // année de calcul
  double population(population_initiale); // population mondiale pour l'année 'annee'

  cout << "====---- PARTIE 1 ----====" << endl;
  cout << "Population en " << annee << " : " << population
       << endl;

  /*****************************************************
   * Compléter le code à partir d'ici
   *****************************************************/

    // ===== PARTIE 1 =====
    do
    {
        cout << "Quelle année (> "<<annee_depart
        << ") ? ";
        cin  >> annee;
    }
    while (annee <= annee_depart);

    int nb = annee - annee_depart;
    taux /= 100;
    population =  population_initiale * exp(nb*taux);


    cout << "Population en " << annee << " : " << population
    << endl;

    // ===== PARTIE 2 =====
    cout << endl << "====---- PARTIE 2 ----====" << endl;

    double target_pop(population_initiale);


    do
    {
        cout << "Combien de milliards (> " << population_initiale << ") ? ";
        cin  >> target_pop;
    }
    while (target_pop <= population_initiale);


    cout << "Population voulue : " << target_pop
    << endl;
    int cpt(0);
    do
    {
        cpt++;
        population =  population_initiale * exp(cpt*taux);
        cout << "Population en " << annee_depart + cpt <<" : " << population << endl;
    }
    while (population < target_pop);


    // ===== PARTIE 3 =====
    cout << endl << "====---- PARTIE 3 ----====" << endl;


    cpt=0;
    population = population_initiale;
    annee = 0;
    double popdouble = population_initiale;
    do
    {
        cpt++;


        if (population < 2*popdouble)

        {
            population =  popdouble * exp(cpt*taux);
            cout << "Population en " << annee_depart + cpt + annee <<" : " << population << " ; taux de croissance : "<<taux*100 <<" % "<<endl;
        }
        else
        {
            popdouble = population ;
            taux = taux / 2;
            annee += cpt;
            population =  popdouble * exp(1*taux);
            cpt =0;
            cout << "Population en " << annee_depart + annee  <<" : " << population << " ; taux de croissance : "<<taux*100 <<" % "<<endl;

        }

    }
    while (population < target_pop);



  /*******************************************
   * Ne rien modifier après cette ligne.
   *******************************************/

  return 0;
}
