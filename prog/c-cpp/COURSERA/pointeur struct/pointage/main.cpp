#include <iostream>
#include<memory>

using namespace std;

int main(int argc, char **argv) {
    std::cout << "Hello, world!" << std::endl;
    double valeur1(0), valeur2(12), valeur3(30);
    double* p(0);
    int i;
    {
    cout <<"tu tires ou tu pointes? 1/2/3";
    cin  >> i;
    } while ((i<=0)&&(i>3));

    switch(i)
    {
      case 1: p = & valeur1;break;
      case 2: p = & valeur2;break;
      case 3: p = & valeur3;break;
    }

    cout	<<	"vous avez choisi " <<	*p	<<	endl;


    return 0;
}
