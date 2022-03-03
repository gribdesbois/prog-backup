#include <stdio.h>
#include <stdlib.h>

/* Je met le protottype en haut. Comme c est un tout petit programme je ne le met dans un .h
mais en temps normal (ie dans un vrai programme), j aurais placé le prototype dans un fichier .h bien entendu `*/

void decoupeMinutes (int* pointeurHeures , int* pointeurMinutes);

int main(int argc, char *argv[])
{
    int heures = 0, minutes = 90;

    /* On a une variable minute qui vaut 90.
    Apres l appel de la fonction, je veux que ma variable "heures" vaille 1 et que ma variable "minutes" vaille 30 */

    // On envoie l adresse de heure et minutes

    decoupeMinutes (&heures , &minutes);

    // Cette fois les valeurs ont été modifiées!

    printf ("%d heures et %d minutes", heures, minutes);

    return 0;

}


void decoupeMinutes ( int* pointeurHeures, int pointeurMinutes )

{
    /* Attention a ne pas oublier de mettre une etoile decant le nom des pointeurs! comme ça , vous pouvez modifier la
    valeur des variables, et non leur adresse! Vous ne voudriez pas diviser des adresses, m est ce pas?
    */
    *pointeurHeures = *pointeurMinutes / 60 ; // 90 / 60 = 1
    *pointeurMinutes = *pointeurMinutes % 60; // 90 % 60 = 30
}
