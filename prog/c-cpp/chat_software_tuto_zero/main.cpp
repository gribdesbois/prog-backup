#include <QApplication>
#include "Fenserver.h"

int main (int argc, char* argv[])
{

    QApplication app(argc, argv);

    FenServeur fenetre;
    fenetre.show();

            return app.exec();
}

