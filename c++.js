#include <iostream>
using namespace std;
int main(){
    int a,b,c,d,centena,dezena,unidade;

cout<<"digite o valor";
cin >> a;
centena = a%1000/100;
dezena = (a%100)/10;
unidade = (a%100)%10;


cout << centena <<' '<< dezena<< ' ' << unidade <<endl;
return 0;
}
