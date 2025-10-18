#include <iostream>
using namespace std;

int main() {
    int t;
    cin >> t;
    int ans[t];
    for (int k = 0; k < t; k++)
    {
        int arrL;
        cin >> arrL;
        int arr[arrL];
        int cost = 0;
        for (int i = 0; i < arrL; i++)
            cin >> arr[i];
        if (arr[0] >= arr[1])
            cost = arr[0] + arr[1];
        else if (arr[0] < arr[1]) {
            cost = arr[0] * 2;
        }
        ans[k] = cost;
    }
    for (int i = 0; i < t; i++)
        cout << ans[i] << endl;
    return 0;
}