#ifndef MAFENETRE_H
#define MAFENETRE_H

#include <QtGui>
#include <QtWidgets>
//#include<QPushButton>
//#include<QLCDNumber>
//#include<QSlider>


class MaFenetre : public QWidget
{
public:
    MaFenetre();

private:
    QLCDNumber *m_lcd;
    QSlider *m_slider;
};


#endif // MAFENETRE_H

