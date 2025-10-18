#include <iostream>
#include <set>
using namespace std; 

// 10
// 1 2
// 5 6
// 4 2
// 1 1
// 2 1
// 3 3
// 5 1
// 5 47
// 752 18572
// 95152 2322


int main() {

    int t;
    cin >> t;
    int ans[t];
    int (*arr)[2] = new int[t][2];
    for (int i = 0; i < t; i++)
        cin >> arr[i][0] >> arr[i][1];

    for (int i = 0; i < t; i++) {
        if (arr[i][0] == arr[i][1])
            ans[i] = -1;
        else if (arr[i][0] < arr[i][1])
            ans[i] = 2;
        else if (
            arr[i][0] > arr[i][1] &&
            arr[i][0] - arr[i][1] == 1
        ) 
            ans[i] = -1;
        else if (
            arr[i][0] > arr[i][1] &&
            arr[i][1] == 1
        )
            ans[i] = -1;
        else 
            ans[i] = 3;
    }
    for (int k = 0; k < t; k++)
        cout << ans[k] << endl;

    return 0;
}