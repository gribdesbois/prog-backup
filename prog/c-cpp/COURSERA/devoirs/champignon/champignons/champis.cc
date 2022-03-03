#include <iostream>

using namespace std;


int main()
    {

    int convexe(0), foret(0), anneau(0), lamelles(0);

    cout << "Auto indentation not working\n";

    cout << "Pensez à un champignon : amanite tue-mouches, pied bleu, girolle," << endl
         << "cèpe de Bordeaux, coprin chevelu ou agaric jaunissant." << endl << endl;


    cout << "Est-ce que votre champignon a un chapeau convexe (1 : oui, 0 : non) ? ";
    cin  >> convexe;



    if (convexe == 1)                                                                       // Soient j,t,b,c,g,p pour designer respectivement
            {                                                                               //agaric Jaunissant
            cout << "Est-ce que votre champignon vit en forêt (1 : oui, 0 : non) ? ";       //amanite Tue mouche
            cin  >> foret;                                                                  //cepe de Bordeau
            if (foret == 0)                                                                 //coprin Chevelu
                    {                                                                       //Girolle
                    cout << "==> Le champignon auquel vous pensez est ";                    //Pieb bleu
                    cout << "l'agaric jaunissant";                                          //                j , t,  p sont convexes  donc   convexe && !foret ==> J
                    return 0;
                    }
            else
                    {
                    cout << "Est-ce que votre champignon a un anneau (1 : oui, 0 : non) ? ";  //sinon   convexe && foret && anneau    ==> T   EN 3 QUESTIONS
                    cin  >> anneau;                                                           //          jtp      tbgp      jtc

                    if (anneau ==1)
                            {
                            cout << "==> Le champignon auquel vous pensez est ";
                            cout << "l'amanite tue-mouches";
                            return 0;
                            }
                    else
                            {
                            cout << "==> Le champignon auquel vous pensez est ";            //           convexe && foret && !anneau ==> p
                            cout << "le pied bleu";
                            return 0;                                                         //            jtp     tbgp     (non j,non t, non c)
                            }
                    }
            }
    else
            {                                                                               //on entre dans le cas des nons convexes qui sont b, c , g
            cout << "Est-ce que votre champignon a un anneau (1 : oui, 0 : non) ? ";
            cin >> anneau;                                                                  //2 eme question
            if (anneau ==1)
                    {                                                                         //    c est le seul a avoir un anneau (jtc)
                    cout << "==> Le champignon auquel vous pensez est ";
                    cout << "le coprin chevelu";
                    return 0;
                    }
            else
                    {
                    cout << "Est-ce que votre champignon a des lamelles (1 : oui, 0 : non) ? ";// 3 eme question  il reste b et g a departager
                    cin  >> lamelles;                                                          // b est le seul a avoir des tubes (lamelles ==0)

                    if (lamelles == 0)
                            {
                            cout << "==> Le champignon auquel vous pensez est ";               //surement possible d optimiser le code
                            cout << "le cèpe de Bordeaux";
                            return 0;
                            }
                    else
                            {
                            cout << "==> Le champignon auquel vous pensez est ";
                            cout << "la girolle";
                            }


                    }
            }


    }


