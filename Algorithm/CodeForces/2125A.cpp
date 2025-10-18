#include <iostream>
#include <set>
using namespace std; 

int main() {
    int qNum;
    cin >> qNum;
    int answer[qNum];
    int arrNum;
    for (int k = 0; k < qNum; k++) {
        set<int> targetArr;
        
        cin >> arrNum;
        int arr[arrNum];
        for (int i = 0; i < arrNum; i++)
            cin >> arr[i];
        
        for (int i = 0; i < arrNum; i++)
            targetArr.insert(arr[i]);
        answer[k] = targetArr.size() * 2 - 1;
        
    }   
    for (int i = 0; i < qNum; i++)
        cout << answer[i] << endl;
    return 0;
}