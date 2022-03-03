#ifndef FenPrincipale_H
#define FenPrincipale_H
#include <QtGui>
#include <QtWidgets>
#include <QtWebKitWidgets>


class FenPrincipale : public QMainWindow
{
    Q_OBJECT

public:
    FenPrincipale();
    ~FenPrincipale();



private:

    void creerActions();
            void creerMenus();
            void creerBarresOutils();
            void creerBarreEtat();
            QWidget *creerOngletPageWeb(QString url = "");
            QWebView *pageActuelle();

private slots:
            void precedente();
            void suivante();
            void accueil();
            void stop();
            void actualiser();

            void aPropos();
            void nouvelOnglet();
            void fermerOnglet();
            void chargerPage();
            void changementOnglet(int index);

            void changementTitre(const QString & titreComplet);
            void changementUrl(const QUrl & url);
            void chargementDebut();
            void chargementEnCours(int pourcentage);
            void chargementTermine(bool ok);

private:
    QTabWidget *onglets;

    QAction *actionNouvelOnglet;
    QAction *actionFermerOnglet;
    QAction *actionQuitter;
    QAction *actionAPropos;
    QAction *actionAProposQt;
    QAction *actionPrecedente;
    QAction *actionSuivante;
    QAction *actionStop;
    QAction *actionActualiser;
    QAction *actionAccueil;
    QAction *actionGo;
    QLineEdit *champAdresse;
    QProgressBar *progression;

};

#endif // FenPrincipale_H
