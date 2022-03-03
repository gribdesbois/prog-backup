#include "Fenserver.h"

FenServeur::FenServeur()
{
    //creation et disposition des widgets de la fenetre
    etatServeur = new QLabel;
    boutonQuitter = new QPushButton("Quitter");
    connect( boutonQuitter, SIGNAL(clicked()), qApp, SLOT(quit()));

    QVBoxLayout * layout = new QVBoxLayout;
    layout->addWidget(etatServeur);
    layout->addWidget(boutonQuitter);
    setLayout(layout);

    setWindowTitle("ZeroChat - Serveur");

    //gestion du seveur

    serveur = new QTcpServer(this);
    if (!serveur->listen(QHostAddress::Any, 50885))
        //demarrage du serveur sur toutes les ip dispo on 50585
    {
        //si le serveur n a pas été démarré correctement
        etatServeur->setText("SERVER OFF . Id<br/>"+ serveur->errorString());

    }

    else
    {
       //Si le serveur a été démarré correctement
        etatServeur->setText("SERVER ON   :   PORT " + QString::number(serveur->serverPort()) + "</strong>.<br/>Des Clients peuvent maintenant se connecter");

        connect(serveur, SIGNAL(newConnection()), this, SLOT(nouvelleConnexion()));
    }

    tailleMessage = 0;

}

void FenServeur::nouvelleConnexion()
{
    envoyerATous("<em>Un nouveau client vient de se connecter</em>");

    QTcpSocket *nouveauClient = serveur->nextPendingConnection();
    clients << nouveauClient;

    connect(nouveauClient, SIGNAL(readyRead()), this, SLOT(donneesRecues()));
    connect(nouveauClient, SIGNAL(disconnected()), this, SLOT(deconnexionClient()));
}

void FenServeur::donneesRecues()
{
    // 1 : on reçoit un paquet (ou un sous-paquet) d'un des clients

    // On détermine quel client envoie le message (recherche du QTcpSocket du client)
    QTcpSocket *socket = qobject_cast<QTcpSocket *>(sender());
    if (socket == 0) // Si par hasard on n'a pas trouvé le client à l'origine du signal, on arrête la méthode
        return;

    // Si tout va bien, on continue : on récupère le message
    QDataStream in(socket);

    if (tailleMessage == 0) // Si on ne connaît pas encore la taille du message, on essaie de la récupérer
    {
        if (socket->bytesAvailable() < (int)sizeof(quint16)) // On n'a pas reçu la taille du message en entier
             return;

        in >> tailleMessage; // Si on a reçu la taille du message en entier, on la récupère
    }

    // Si on connaît la taille du message, on vérifie si on a reçu le message en entier
    if (socket->bytesAvailable() < tailleMessage) // Si on n'a pas encore tout reçu, on arrête la méthode
        return;


    // Si ces lignes s'exécutent, c'est qu'on a reçu tout le message : on peut le récupérer !
    QString message;
    in >> message;


    // 2 : on renvoie le message à tous les clients
    envoyerATous(message);

    // 3 : remise de la taille du message à 0 pour permettre la réception des futurs messages
    tailleMessage = 0;
}




void FenServeur::deconnexionClient()
{
     envoyerATous("<em>Un client vient de se déconnecter</em>");

        // On détermine quel client se déconnecte
        QTcpSocket *socket = qobject_cast<QTcpSocket *>(sender());
     if (socket == 0) //Si par hasard on n a pas trouvé le client a l origine du signal, on arrete la methode
        return;

    clients.removeOne(socket);
    socket->deleteLater();
}

void FenServeur::envoyerATous(const QString &message)
{
    //préparation du paquet

    QByteArray paquet;
    QDataStream out(&paquet, QIODevice::WriteOnly);

    out << (quint16) 0; //on ecrit 0 au debut du paquet pour reserver la place pour ecrire la taille

    out << message; // on ajoute le message a la suite
    out.device()->seek(0); //on se replace au debut du paquet
    out << (quint16) (paquet.size() - sizeof(quint16)); // on ecrase le zero qu on avait reservé par la longueur du message


    //envoi du paquet préparé a tous les clients connectés au serveur

    for (int i =0; i < clients.size(); i++)
    {
        clients[i]->write(paquet);
    }
}
