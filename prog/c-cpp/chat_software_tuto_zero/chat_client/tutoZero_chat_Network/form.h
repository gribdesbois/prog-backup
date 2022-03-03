#ifndef FORM_H
#define FORM_H

#include <QWidget>
#include <QtNetwork>
#include "ui_form.h"


class Form : public QWidget, private Ui::Form
{
    Q_OBJECT

public:
    explicit Form(QWidget *parent = 0);
    ~Form();

private slots:
        void on_boutonConnexion_clicked();
        void on_boutonEnvoyer_clicked();
        void on_message_returnPressed();
        void donneesRecues();
        void connecte();
        void deconnecte();
        void erreurSocket(QAbstractSocket::SocketError erreur);


private:
    Ui::Form *ui;
    QTcpSocket *socket; // Représente le serveur
    quint16 tailleMessage;
};

#endif // FORM_H
