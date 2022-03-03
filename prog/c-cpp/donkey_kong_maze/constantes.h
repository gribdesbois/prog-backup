/*
constantes.h
------------

Par mateo21, pour Le Site du Zér0 (www.siteduzero.com)

Rôle : définit des constantes communes à tout le programme (taille de la fenêtre...)
*/

#ifndef DEF_CONSTANTES
#define DEF_CONSTANTES

    #define TAILLE_BLOC      30    // Taille d'un bloc (carré) en pixels OG 34
    #define NB_BLOCS_LARGEUR    30	
    #define NB_BLOCS_HAUTEUR    30
    #define LARGEUR_FENETRE     TAILLE_BLOC * NB_BLOCS_LARGEUR
    #define HAUTEUR_FENETRE     TAILLE_BLOC * NB_BLOCS_HAUTEUR


    enum {HAUT, BAS, GAUCHE, DROITE};
    enum {VIDE, MUR, DEPART, BANANE, DONKEY_KONG};

#endif
