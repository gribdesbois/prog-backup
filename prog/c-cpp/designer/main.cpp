#include <QApplication>
#include "dialog.cpp"

int main(int argc, char *argv[])
{


    QApplication app(argc, argv);
            Dialog mefenetre;
    mefenetre.show();

    return app.exec();
}
