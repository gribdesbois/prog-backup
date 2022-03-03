#include <iostream>

using namespace std;
struct cplex
{
    double real, img;

};

cplex addition (cplex a, cplex b);
cplex soustraction(cplex a, cplex b);
cplex multiplication ( cplex a, cplex b);
cplex division( cplex a, cplex b);
void affiche(cplex a);

int main()
{
    cout << "Hello world!" << endl;
    cplex a={0,0};
    cplex b={0,0};
    affiche(a);
    cout    <<"Entrez 2 complexes a et b\na = ?";
    cin     >> a.real;
    cout    <<" + i* ?";
    cin     >> a.img;
    cout    << "\nb = ?";
    cin     >>b.real;
    cout    <<" + i* ?";
    cin     >> b.img;

     affiche(a);cout  <<"+"; affiche(b);cout <<" = "; affiche(addition(a,b)); cout << endl;
     affiche(a);  cout <<"-"; affiche(b);cout <<" = "; affiche(soustraction(a,b)); cout << endl;
     affiche(a);  cout <<"*"; affiche(b);cout <<" = "; affiche(multiplication(a,b)); cout << endl;
     if (b.real==0 && b.img==0)
     {cout<<"ERROR DIVIDE BY O";}else{ affiche(a);cout  <<"/"; affiche(b);cout <<" = "; affiche(division(a,b));}
}


cplex addition (cplex a, cplex b)
{
a.real+= b.real;
a.img += b.img;
return a;

}

cplex soustraction(cplex a, cplex b)
{
    a.real-= b.real;
a.img -= b.img;
return a;

}
cplex multiplication ( cplex a, cplex b)
{
cplex z;
z.real=a.real * b.real - a.img * b.img;
z.img= a.real*b.img + a.img*b.real;
        return z;
}
cplex division( cplex a, cplex b)
{
cplex z;
z.real=(a.real*b.real+a.img+b.img)/(a.real*a.real +b.img*b.img);
z.img=(a.img*b.real -a.real*b.img)/(a.real*a.real +b.img*b.img);
    return z;
}

void affiche(cplex a)
{
    cout << a.real<<" + i*" <<  a.img<<" ";
}
