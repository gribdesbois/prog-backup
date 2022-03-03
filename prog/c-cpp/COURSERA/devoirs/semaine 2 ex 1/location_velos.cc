#include <iostream>
using namespace std;

int main()
{
  cout << "Donnez l'heure de début de la location (un entier) : ";
  int debut(25);
  cin >> debut;

  cout << "Donnez l'heure de fin de la location (un entier) : ";
  int fin(25);
  cin >> fin;

  /*****************************************************
   * Compléter le code à partir d'ici
   *****************************************************/

   if (debut >= 24 || fin >= 24)   //debut et fin etant tous 2 int n ont pas besoin d etres compares a 0
    cout << "Les heures doivent être comprises entre 0 et 24 !" << endl;
   else
    {
     if (debut == fin)
        cout << "Bizarre, vous n'avez pas loué votre vélo bien longtemps !" << endl;
        else
        {
            if (fin < debut)
            cout << "Bizarre, le début de la location est après la fin ..." << endl;
            else
            {
                int reduced_price_hour(0), full_price_hour(0);
                if (debut <= 7)
                    {
                        if (fin <= 7)
                        reduced_price_hour = fin - debut;
                else
                    {
                        reduced_price_hour = 7 - debut ;
                        if (fin >= 17)
                        {
                            full_price_hour +=10;
                        reduced_price_hour= fin - 17;
                        }
                        full_price_hour = fin -7;
                        }
                        }
    else
    {
        if (fin <= 17)
    {
        full_price_hour = fin - debut;
    }
    else
    {
      full_price_hour =  17 - debut;
      reduced_price_hour = fin - 17;
    }

    }

    if (reduced_price_hour == 0 || full_price_hour == 0)

    {


        cout << "Vous avez loué votre vélo pendant" << endl;

        cout <<  reduced_price_hour + full_price_hour << " heure(s) au tarif horaire de "
             <<  reduced_price_hour * 1 + full_price_hour *2 << " franc(s)" << endl;

        cout << "Le montant total à payer est de "
             << " franc(s)." << endl;
    }
    else
        {
        cout << "Vous avez loué votre vélo pendant" << endl;

        cout <<  reduced_price_hour  <<" heure(s) au tarif horaire de "
             <<  1 << " franc(s)" << endl;

        cout << "Vous avez loué votre vélo pendant" << endl;

        cout <<  full_price_hour  <<" heure(s) au tarif horaire de "
             <<  2 << " franc(s)" << endl;

        cout << "Le montant total à payer est de "
             << reduced_price_hour + 2* full_price_hour
             << " franc(s)." << endl;
        }



  /*******************************************
   * Ne rien modifier après cette ligne.
   *******************************************/

  return 0;
}
