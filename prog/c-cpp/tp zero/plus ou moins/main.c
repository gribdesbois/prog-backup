#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main( int argc, char** argv)
{
    int nombreMystere = 0, nombreEntre = 0 ;
    const int MAX = 100, MIN = 1;

// génération du nombre aléatoire

    srand(time(NULL));

    nombreMystere = (rand() % (MAX - MIN + 1)) + MIN;


    /* Boucle du programme: se repete tant que l utilisateur n a pas trouvé le nombre mystere*/

    do
    {
        //On demande le nombre
        printf("quel est le nombre ? ");
        scanf("%d", &nombreEntre);

        //on compare le nombre entre avec le nombre mystere

        if (nombreMystere > nombreEntre)
            printf("c est plus!\n\n");
        else if (nombreMystere < nombreEntre)
            printf("c est moins!\n\n\n\n\n");
        else
            printf("BRAVO, vous avez trouvé le nombre mystere!!!!\n\n\n\n");

    } while (nombreEntre != nombreMystere);

    return 0;
}
