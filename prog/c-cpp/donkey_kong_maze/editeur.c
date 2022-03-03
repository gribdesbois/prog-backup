/*
editeur.c
---------

Par mateo21, pour Le Site du Z�r0 (www.siteduzero.com)

R�le : gestion de l'�diteur de niveaux.
*/

#include <stdlib.h>
#include <stdio.h>
#include <SDL/SDL.h>
#include <SDL/SDL_image.h>

#include "constantes.h"
#include "editeur.h"
#include "fichiers.h"

void editeur(SDL_Surface* ecran)
{
    SDL_Surface *mur = NULL, *depart = NULL, *banane = NULL, *donkeyKong = NULL;
    SDL_Rect position;
    SDL_Event event;

    int continuer = 1, clicGaucheEnCours = 0, clicDroitEnCours = 0, bananaFlag = 0, startFlag = 0, donkeyFlag = 0;
    int objetActuel = MUR, i = 0, j = 0;
    int carte[NB_BLOCS_LARGEUR][NB_BLOCS_HAUTEUR] = {0};

    // Chargement des objets et du niveau
    mur = IMG_Load("mur.png");
    depart = IMG_Load("depart.png");
    banane = IMG_Load("banane.png");
    donkeyKong = IMG_Load("dk_bas.png");

    if (!chargerNiveau(carte))
        exit(EXIT_FAILURE);

    // Boucle infinie de l'�diteur
    while (continuer)
    {
        SDL_WaitEvent(&event);
        switch(event.type)
        {
            case SDL_QUIT:
                continuer = 0;
                break;
            case SDL_MOUSEBUTTONDOWN:
                if (event.button.button == SDL_BUTTON_LEFT)
                {
                    // On met l'objet actuellement choisi (mur, caisse...) � l'endroit du clic
                    carte[event.button.x / TAILLE_BLOC][event.button.y / TAILLE_BLOC] = objetActuel;
                    clicGaucheEnCours = 1; // On active un bool�en pour retenir qu'un bouton est enfonc�
                }
                else if (event.button.button == SDL_BUTTON_RIGHT) // Le clic droit sert � effacer
                {
                    carte[event.button.x / TAILLE_BLOC][event.button.y /TAILLE_BLOC] = VIDE;
                    clicDroitEnCours = 1;
                }
                break;
            case SDL_MOUSEBUTTONUP: // On d�sactive le bool�en qui disait qu'un bouton �tait enfonc�
                if (event.button.button == SDL_BUTTON_LEFT)
                    clicGaucheEnCours = 0;
                else if (event.button.button == SDL_BUTTON_RIGHT)
                    clicDroitEnCours = 0;
                break;
            case SDL_MOUSEMOTION:
                if (clicGaucheEnCours) // Si on d�place la souris et que le bouton gauche de la souris est enfonc�
                {
                    carte[event.motion.x / TAILLE_BLOC][event.motion.y / TAILLE_BLOC] = objetActuel;
                }
                else if (clicDroitEnCours) // Pareil pour le bouton droit de la souris
                {
                    carte[event.motion.x / TAILLE_BLOC][event.motion.y / TAILLE_BLOC] = VIDE;
                }
                break;
            case SDL_KEYDOWN:
                switch(event.key.keysym.sym)
                {
                    case SDLK_ESCAPE:
                        continuer = 0;
                        break;
                    case SDLK_s:
                        sauvegarderNiveau(carte);
                        break;
                    case SDLK_c:
                        chargerNiveau(carte);
                        break;
                    case SDLK_KP1:
                        objetActuel = MUR;
                        break;
                    case SDLK_KP2:
                        objetActuel = DEPART;
                        break;
                    case SDLK_KP3:
                        objetActuel = BANANE;
                        break;
                    case SDLK_KP4:
                        objetActuel = DONKEY_KONG;
                        break;
                }
                break;
        }

        // Effacement de l'�cran
        SDL_FillRect(ecran, NULL, SDL_MapRGB(ecran->format, 255, 255, 255));

        // Placement des objets � l'�cran
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
                        if (!startFlag){
                        SDL_BlitSurface(depart, NULL, ecran, &position);
                        startFlag = 1; }
                        break;
                    case BANANE:
                        if (!bananaFlag){
                        SDL_BlitSurface(banane, NULL, ecran, &position);
                        bananaFlag = 1; }
                        break;
                    case DONKEY_KONG:
                        SDL_BlitSurface(donkeyKong, NULL, ecran, &position);
                        break;
                }
            }
        }

        // Mise � jour de l'�cran
        SDL_Flip(ecran);
    }

    SDL_FreeSurface(mur);
    SDL_FreeSurface(depart);
    SDL_FreeSurface(banane);
    SDL_FreeSurface(donkeyKong);
}
