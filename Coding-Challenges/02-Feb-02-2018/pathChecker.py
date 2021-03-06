# Daugherty Coding Challenge 02, Friday February 02, 2018
# Challenge #2: Is there a path? Find it...
#
#    0---1       5---6---7
#    |   |       |   |   |
#    3---2---4   8---9---10
#
#     You can intuitively see that there is a path from 0 to 4, but not 0 to 5.
#     Can you write a function that takes two numbers and an array of linked
#     pairs and return whether or not there exists a path between two nodes?


def doesPathExist(startAt, endAt, graph, visited):
    # Set variables
    path = False
    cVisited = visited
    # Check to see if we're done
    if(endAt in graph[startAt]):
        return True, cVisited
    # Check if we have been here
    if(startAt not in cVisited):
        cVisited.append(startAt)
    # Check branch nodes for each current branch
    for node in graph[startAt]:
        if(node not in cVisited):
            path, cVisited = doesPathExist(node, endAt, graph, cVisited)
    return path, cVisited


def main():
    # Set up linkedPair list
    linkedPairs = [[1, 3], [0, 2], [1, 3, 4], [0, 2], [2], [6, 8],
                   [5, 7, 9], [6, 10], [5, 9], [6, 8, 10], [7, 9]]
    visitedNodes = []

    print("\nPath Checker\n")
    print("0---1       5---6---7")
    print("|   |       |   |   |")
    print("3---2---4   8---9---10\n")

    # Run All Path Checks
    for x in range(0, 11):
        for y in range(x+1, 11):
            print("From", x, "To", y, "Path Exists:",
                  doesPathExist(x, y, linkedPairs, visitedNodes)[0])
            visitedNodes.clear()


if __name__ == '__main__':
    main()
