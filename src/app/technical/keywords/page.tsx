import tableFormatter from "@/utils/tableFormatter";

export default function Keywords() {
    const h = ["Keywords", "Patterns", "Recommended Strategy"];

    const traversal = [
        {
            [h[0]]: `"find path", "visit all nodes", "shortest path", "steps"`,
            [h[1]]: "Graph/Matrix Traversal",
            [h[2]]: "BFS (unweighted), DFS (explore all), Dijkstra (weighted)"
        },
        {
            [h[0]]: `"clone", "copy", "reach all", "connected components"`,
            [h[1]]: "Graph traversal",
            [h[2]]: "DFS or BFS"
        }
    ];

    const search = [
        {
            [h[0]]: `"sorted", "minimum", "first/last index", "search"`,
            [h[1]]: "Divide & Conquer",
            [h[2]]: "Binary Search"
        },
        {
            [h[0]]: `"guess value", "maximize/minimize value", "value range"`,
            [h[1]]: "Search on Answer",
            [h[2]]: "Binary Search over range"
        }
    ];

    const dp = [
        {
            [h[0]]: `"max profit", "longest", "ways", "count", "min steps"`,
            [h[1]]: "Optimal Substructure",
            [h[2]]: "Dynamic Programming (1D/2D)"
        },
        {
            [h[0]]: `"subsequence", "substring", "edit distance", "LCS", "LIS"`,
            [h[1]]: "DP on Strings",
            [h[2]]: "DP with memoization or tabulation"
        }
    ];

    const backtracking = [
        {
            [h[0]]: `"all combinations", "permutations", "subsets", "paths"`,
            [h[1]]: "Decision Tree Exploration",
            [h[2]]: "Backtracking or DFS with pruning"
        },
        {
            [h[0]]: `"place queens", "sudoku", "n-queens", "constraints"`,
            [h[1]]: "Backtracking with constraints",
            [h[2]]: "Backtracking + isValid checks"
        }
    ];

    const greedy = [
        {
            [h[0]]: `"minimum intervals", "merge", "non-overlapping", "earliest"`,
            [h[1]]: "Greedy Choice",
            [h[2]]: "Sort + Greedy"
        },
        {
            [h[0]]: `"maximize score", "lowest cost", "priority"`,
            [h[1]]: "Selection Strategy",
            [h[2]]: "Heap (Priority Queue)"
        }
    ];

    const sliding = [
        {
            [h[0]]: `"max/min subarray", "window size", "longest substring"`,
            [h[1]]: "Contiguous range",
            [h[2]]: "Sliding Window (fixed or dynamic)"
        },
        {
            [h[0]]: `"frequency of chars", "at most k", "at least k"`,
            [h[1]]: "Dynamic Sliding Window",
            [h[2]]: "HashMap + two pointers"
        }
    ];

    const mathBit = [
        {
            [h[0]]: `"xor", "odd occurrences", "bitwise"`,
            [h[1]]: "Binary manipulation",
            [h[2]]: "Bitmasking"
        },
        {
            [h[0]]: `"mod", "rotate", "circular", "clockwise"`,
            [h[1]]: "Math tricks",
            [h[2]]: "Modular Arithmetic"
        }
    ];

    const unionFind = [
        {
            [h[0]]: `"connected components", "grouping", "friend circles"`,
            [h[1]]: "Disjoint Sets",
            [h[2]]: "Union Find (DSU)"
        },
        {
            [h[0]]: `"detect cycle in graph", "redundant connection"`,
            [h[1]]: "Graph Cycle Detection",
            [h[2]]: "Union Find or DFS"
        }
    ];

    return (
        <div className="pages">
            <h1 className="text-2xl font-bold mb-4">Keywords for Identifying Strategies</h1>

            <div>
                <h2 className="text-xl font-semibold">Graph & Tree Traversal</h2>
                {tableFormatter(traversal)}
            </div>

            <div>
                <h2 className="text-xl font-semibold">Search-Based</h2>
                {tableFormatter(search)}
            </div>

            <div>
                <h2 className="text-xl font-semibold">Dynamic Programming</h2>
                {tableFormatter(dp)}
            </div>

            <div>
                <h2 className="text-xl font-semibold">Backtracking</h2>
                {tableFormatter(backtracking)}
            </div>

            <div>
                <h2 className="text-xl font-semibold">Greedy & Heaps</h2>
                {tableFormatter(greedy)}
            </div>

            <div>
                <h2 className="text-xl font-semibold">Sliding Window</h2>
                {tableFormatter(sliding)}
            </div>

            <div>
                <h2 className="text-xl font-semibold">Math & Bitmasking</h2>
                {tableFormatter(mathBit)}
            </div>

            <div>
                <h2 className="text-xl font-semibold">Union-Find</h2>
                {tableFormatter(unionFind)}
            </div>
        </div>
    );
}
