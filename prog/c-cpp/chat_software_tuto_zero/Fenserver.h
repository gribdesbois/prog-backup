#ifndef FENSERVER_H
#define FENSERVER_H

#include <QtWidgets>
#include <QtNetwork>

class FenServeur : public QWidget
{
    Q_OBJECT

public:
    FenServeur();
    void envoyerATous(const QString &message);

private slots:
    void nouvelleConnexion();
    void donneesRecues();
    void deconnexionClient();

private:
    QLabel *etatServeur;
    QPushButton *boutonQuitter;

    QTcpServer *serveur;
    QList <QTcpSocket *> clients;
    quint16 tailleMessage;


};




#endif // FENSERVER_H

