
#include <QApplication>
#include <QPushButton>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QPushButton bouton("salut salit dfapsu9dfu asdaf+o was");
    bouton.setToolTip("Pimp mon tombou");
    QFont maPolice("Helvetica [Cronyx]");
    bouton.setFont(maPolice);
    bouton.setCursor(Qt::PointingHandCursor);
    bouton.setIcon(QIcon("smile.png"));
    bouton.show();
    return app.exec();
}
