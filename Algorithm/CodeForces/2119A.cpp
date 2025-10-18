#include <iostream>
using namespace std;

int main() {
    int t;
    cin >> t;
    int arr[t][4];
    int minCost[t];
    for(int i = 0; i < t; i++)
        for(int j = 0; j < 4; j++)
            cin >> arr[i][j];

    for (int i = 0; i < t; i++)
    {
        int a = arr[i][0], b = arr[i][1], x = arr[i][2], y = arr[i][3];

        if ((a < b) && (x <= y)) {
            minCost[i] = (b-a) * x;
        } else if ((a-b) > 1) {
            minCost[i] = -1;
        } else if ((b-a) == 1 ) {
            if (a % 2 == 0 && y < x)
                minCost[i] = y;
            else
                minCost[i] = x;
        } else if ((a-b) == 1) {
            if (a % 2 == 1)
                minCost[i] = y;
            else
                minCost[i] = -1;
        } else if ((a < b) && (y < x)) {
            if (a % 2 == 1 && (b-a) % 2 == 1)
                minCost[i] = (((b-a)/2) * y) + (((b-a)/2 + 1) * x);
            else if (a % 2 == 1 && (b-a) % 2 == 0)
                minCost[i] = ((b-a)/2 * x) + ((b-a)/2 * y);
            else if (a % 2 == 0 && (b-a) % 2 == 1)
                minCost[i] = (((b-a)/2) * x) + (((b-a)/2 + 1) * y);
            else if (a % 2 == 0 && (b-a) % 2 == 0)
                minCost[i] = ((b-a)/2 * x) + ((b-a)/2 * y);
        }
    }

    for (int i = 0; i < t; i++)
        cout << minCost[i] << endl;    

    return 0;
}

// 1 8 5214377 1229257
// x, y, x, y, x, y, x