// C++ Code to find the largest node value in 
// the given N-ary tree using recursion
#include <bits/stdc++.h>
using namespace std;

class Node {
public:
    int data;
    vector<Node*> children;

    Node(int val) {
        data = val;
    }
};

// Recursive function to find the node 
// with the largest value
int findLargestNode(Node* root) {
    
    // Check if the tree is empty
    if (!root) return INT_MIN; 

    // Initialize with root node's value
    int maxVal = root->data;  

    // Recur for all children and
    // find the maximum value
    for (auto child : root->children) {
        maxVal = max(maxVal, findLargestNode(child));
    }

    return maxVal;
}

int main() {
    
    // Representation of given N-ary tree
    //         11
    //       /  |  \
    //     21   29  90
    //    /    /  \   \
    //   18   10  12  77
    Node* root = new Node(11);
    root->children.push_back(new Node(21));
    root->children.push_back(new Node(29));
    root->children.push_back(new Node(90));
    root->children[0]->children.push_back(new Node(18));
    root->children[1]->children.push_back(new Node(10));
    root->children[1]->children.push_back(new Node(12));
    root->children[2]->children.push_back(new Node(77));

    cout << findLargestNode(root) << endl;

    return 0;
}
