#include <iostream>
#include<memory>

int main(int argc, char **argv) {
    std::cout << "Hello, world!" << std::endl;
    double valeur1(0), valeur2(12), valeur3(30);
    unique_ptr double p(valeur1);
    int i;
    {
    cout <<"tu tires ou tu pointes? 1/2/3";
    cin  >> i;
    } while ((i<=0)&&(i>3));

    switch(i)
    {
      case 1: p = & valeur1;
      case 2: p = & valeur2;
      case 3: p = & valeur3;
    }

    cout	<<	"vous avez choisi " <<	*p	<<	endl;


    return 0;
}
