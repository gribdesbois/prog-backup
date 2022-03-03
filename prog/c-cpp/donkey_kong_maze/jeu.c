/*
jeu.c
-----

Par mateo21, pour Le Site du Zér0 (www.siteduzero.com)

Rôle : fonctions du jeu.
*/

#include <stdlib.h>
#include <stdio.h>
#include <SDL/SDL.h>
#include <SDL/SDL_image.h>

#include "constantes.h"
#include "jeu.h"

void jouer(SDL_Surface* ecran)
{
    SDL_Surface *donkeyKong[4] = {NULL}; // 4 surfaces pour chacune des directions de mario
    SDL_Surface *mur = NULL, *depart = NULL, *banane = NULL, *donkeyKongActuel = NULL, *background = NULL;
    SDL_Rect position, positionJoueur, positionBackground;
    SDL_Event event;

    int continuer = 1, levelCleared = 0, i = 0, j = 0;
    int carte[NB_BLOCS_LARGEUR][NB_BLOCS_HAUTEUR] = {0};

    // Chargement des sprites (décors, personnage...)
    mur = IMG_Load("mur.png");
    depart = IMG_Load("accueil.png");
    background = IMG_Load("fond.jpg");
    banane = IMG_Load("banane.png");
    donkeyKong[BAS] = IMG_Load("dk_bas.png");
    donkeyKong[GAUCHE] = IMG_Load("dk_gauche.png");
    donkeyKong[HAUT] = IMG_Load("dk_haut.png");
    donkeyKong[DROITE] = IMG_Load("dk_droite.png");

    donkeyKongActuel = donkeyKong[BAS]; // Donkey sera dirigé vers le bas au départ

    // Chargement du niveau
    if (!chargerNiveau(carte))
        exit(EXIT_FAILURE); // On arrête le jeu si on n'a pas pu charger le niveau

    // Recherche de la position de Donkey kong au départ
    for (i = 0 ; i < NB_BLOCS_LARGEUR ; i++)
    {
        for (j = 0 ; j < NB_BLOCS_HAUTEUR ; j++)
        {
            if (carte[i][j] == DONKEY_KONG) // Si Donkey kong se trouve à cette position sur la carte
            {
                positionJoueur.x = i;
                positionJoueur.y = j;
                carte[i][j] = VIDE;
            }
        }
    }

    // Activation de la répétition des touches
    SDL_EnableKeyRepeat(100, 100);

    while (continuer)
    {
        SDL_WaitEvent(&event);
switch(event.type)
{
    case SDL_QUIT:
        continuer = 0;
        break;
    case SDL_KEYDOWN:
        switch(event.key.keysym.sym)
        {
            case SDLK_ESCAPE:
                continuer = 0;
                break;
            case SDLK_UP:
                donkeyKongActuel = donkeyKong[HAUT];
                deplacerJoueur(carte, &positionJoueur, HAUT);
                break;
            case SDLK_DOWN:
                donkeyKongActuel = donkeyKong[BAS];
                deplacerJoueur(carte, &positionJoueur, BAS);
                break;
            case SDLK_RIGHT:
                donkeyKongActuel = donkeyKong[DROITE];
                deplacerJoueur(carte, &positionJoueur, DROITE);
                break;
            case SDLK_LEFT:
                donkeyKongActuel = donkeyKong[GAUCHE];
                deplacerJoueur(carte, &positionJoueur, GAUCHE);
                break;
        }
        break;
}

        // Effacement de l'écran
        SDL_FillRect(ecran, NULL, SDL_MapRGB(ecran->format, 255, 255, 255));

        // Placement des objets à l'écran
        levelCleared = 0;
        //positionBackground.x = 0;
        //positionBackground.y = 0;
        //BACKGROUND
        //SDL_BlitSurface(background, NULL, ecran, &positionBackground);

        for (i = 0 ; i < NB_BLOCS_LARGEUR ; i++)
        {
            for (j = 0 ; j < NB_BLOCS_HAUTEUR ; j++)
            {
                position.x = i * TAILLE_BLOC;
                position.y = j * TAILLE_BLOC;

                switch(carte[i][j])
                {
                    case MUR:
                        SDL_BlitSurface(mur, NULL, ecran, &position);
                        break;
                    case DEPART:
                        SDL_BlitSurface(depart, NULL, ecran, &position);
                        break;
                  //  case DONKEY_KONG:
                    //    SDL_BlitSurface(caisseOK, NULL, ecran, &position);
                      //  break;
                    case BANANE:
                        SDL_BlitSurface(banane, NULL, ecran, &position);
                        levelCleared = 1;
                        break;
                }
            }
        }

        // Si on n'a trouvé aucun objectif sur la carte, c'est qu'on a gagné
      //  if (levelCleared == 0)
        //    continuer = 0;

        // On place le joueur à la bonne position
        position.x = positionJoueur.x * TAILLE_BLOC;
        position.y = positionJoueur.y * TAILLE_BLOC;
        SDL_BlitSurface(donkeyKongActuel, NULL, ecran, &position);
        if (carte[position.x / TAILLE_BLOC][position.y / TAILLE_BLOC] == BANANE) continuer = 0;



        SDL_Flip(ecran);
        
    }

    // Désactivation de la répétition des touches (remise à 0)
    SDL_EnableKeyRepeat(0, 0);

    // Libération des surfaces chargées
    SDL_FreeSurface(mur);
    SDL_FreeSurface(depart);
    SDL_FreeSurface(background);
    SDL_FreeSurface(banane);
    for (i = 0 ; i < 4 ; i++)
        SDL_FreeSurface(donkeyKong[i]);
}

void deplacerJoueur(int carte[][NB_BLOCS_HAUTEUR], SDL_Rect *pos, int direction)
{
    switch(direction)
    {
        case HAUT:
            if (pos->y - 1 < 0) // Si le joueur dépasse l'écran, on arrête
                break;
            if (carte[pos->x][pos->y - 1] == MUR) // S'il y a un mur, on arrête
                break;
            // Si on arrive là, c'est qu'on peut déplacer le joueur !
            pos->y--; // On peut enfin faire monter le joueur (oufff !)
            break;


        case BAS:
            if (pos->y + 1 >= NB_BLOCS_HAUTEUR)
                break;
            if (carte[pos->x][pos->y + 1] == MUR)
                break;
            pos->y++;
            break;


        case GAUCHE:
            if (pos->x - 1 < 0)
                break;
            if (carte[pos->x - 1][pos->y] == MUR)
                break;
            pos->x--;
            break;


        case DROITE:
            if (pos->x + 1 >= NB_BLOCS_LARGEUR)
                break;
            if (carte[pos->x + 1][pos->y] == MUR)
                break;
            pos->x++;
            break;
    }
}
