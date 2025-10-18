#include <iostream>
using namespace std;

int main() {
     int count = 0;

     int row1[8];
     int row2[8];
     
     for (int i = 0; i < 8; i++)
          cin >> row1[i];
     for (int i = 0; i < 8; i++)
          cin >> row2[i];
     
     for (int i = 0; i < 8; i++)
          if (row1[i] == 1 && row2[i] == 1)
               count++;

     cout << count << endl;

     return 0;
} 