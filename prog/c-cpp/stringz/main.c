#include <stdio.h>
#include <stdlib.h>
#include <string.h>  //ne pas oublier pour strchr()

void viderBuffer()
{
    int c = 0;
    while (c != '\n' && c != EOF)
    {
        c = getchar();
    }
}

int lire (char *chaine, int longueur)
{
    char *positionEntree = NULL;

    // On lit le texte saisi au clavier
    if (fgets(chaine, longueur, stdin) != NULL)   //pas d erreur
    {
        positionEntree = strchr(chaine, '\n'); //on recherche \n
        if (positionEntree != NULL)  //si on a trouvé le retour a la ligne
        {
            *positionEntree ='\0';
        }
        else
        {
            viderBuffer();
        }
        return 1; //  on renvoie 1 si la fonction s est deroulée sans erreur
    }
    else
    {
        viderBuffer();
        return 0; // si erreur
    }
}


int main(int argc, char *argv[])
{
    char nom[10];

    printf("quel est votre nom?\n");
    lire(nom,10);
    printf("Ah tupulamerde %s dis donc\n", nom);
    lire(nom,10);
    printf("Ah tupulamerde %s dis donc\n", nom);
    return 0;
}
