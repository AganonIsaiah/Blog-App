import tableFormatter from "@/utils/tableFormatter";

export default function DSARuntimes() {
    const h = ["Data Structure", "Definition", "Themes", "get(i)", "set(i,x)", "add(i,x)", "remove(i)"];

    const linearStructures = [
        {
            [h[0]]: "ArrayList",
            [h[1]]: "ArrayList<type> list",
            [h[2]]: "Array-based, resize & copy, good access, bad modification, amortization, shifting bad",
            [h[3]]: "O(1)",
            [h[4]]: "O(1)",
            [h[5]]: "O(n–i), O(1)A (end)",
            [h[6]]: "O(n–i)A"
        },
        {
            [h[0]]: "Stack",
            [h[1]]: "Stack<type> stack",
            [h[2]]: "Array-based, LIFO, resize & copy, amortization",
            [h[3]]: "peek(): O(1)",
            [h[4]]: "✘",
            [h[5]]: "push(x): O(1)A",
            [h[6]]: "pop(): O(1)A"
        },
        {
            [h[0]]: "Queue",
            [h[1]]: "Queue<type> queue",
            [h[2]]: "Array-based, FIFO, resize & copy, modular arithmetic",
            [h[3]]: "peek(): O(1)",
            [h[4]]: "✘",
            [h[5]]: "add(x): O(1)A",
            [h[6]]: "remove(): O(1)A"
        },
        {
            [h[0]]: "ArrayDeque",
            [h[1]]: "ArrayDeque<type> ad",
            [h[2]]: "Array-based, fast access at ends, amortization, shifting bad in middle",
            [h[3]]: "getFirst()/getLast(): O(1)",
            [h[4]]: "✘",
            [h[5]]: "addFirst/addLast: O(1)A, add(i,x): O(min{i,n–i})A",
            [h[6]]: "removeFirst/removeLast: O(1)A, remove(i): O(min{i,n–i})A"
        }
    ];

    const linkedLists = [
        {
            [h[0]]: "SLList",
            [h[1]]: "Singly-linked list",
            [h[2]]: "Pointers go one direction, no amortization, workhorse getNode(i)",
            [h[3]]: "O(i)",
            [h[4]]: "O(i)",
            [h[5]]: "O(i)",
            [h[6]]: "O(i)"
        },
        {
            [h[0]]: "DLList",
            [h[1]]: "LinkedList<type> list",
            [h[2]]: "Doubly-linked list, getNode(i), no amortization",
            [h[3]]: "O(min{i, n–i})",
            [h[4]]: "O(min{i, n–i})",
            [h[5]]: "O(min{i, n–i}), O(1) for addFirst/addLast",
            [h[6]]: "O(min{i, n–i}), O(1) for removeFirst/removeLast"
        }
    ];

    const skipStructures = [
        {
            [h[0]]: "Skiplist List",
            [h[1]]: "SLL of meganodes or sequence of SLLs",
            [h[2]]: "Randomized structure, workhorse: getPredNode(i)",
            [h[3]]: "O(log n)E",
            [h[4]]: "O(log n)E",
            [h[5]]: "O(log n)E",
            [h[6]]: "O(log n)E"
        },
        {
            [h[0]]: "Skiplist Set",
            [h[1]]: "SLL of meganodes or sequence of SLLs",
            [h[2]]: "Randomized structure, workhorse: getPredNode(i)",
            [h[3]]: "O(log n)A",
            [h[4]]: "O(log n)A",
            [h[5]]: "O(log n)A",
            [h[6]]: "O(log n)A"
        }
    ];

    const hashedStructures = [
        {
            [h[0]]: "HashMap",
            [h[1]]: "HashMap<key,value> map",
            [h[2]]: "Key-value access with hashing, collision handling matters",
            [h[3]]: "get(k): O(1)A",
            [h[4]]: "✘",
            [h[5]]: "put(k,v): O(1)A",
            [h[6]]: "remove(k): O(1)A"
        },
        {
            [h[0]]: "HashSet",
            [h[1]]: "HashSet<type> set",
            [h[2]]: "Set with unique values, fast membership tests using hashing",
            [h[3]]: "contains(x): O(1)A",
            [h[4]]: "✘",
            [h[5]]: "add(x): O(1)A",
            [h[6]]: "remove(x): O(1)A"
        }
    ];

    const sortedStructures = [
        {
            [h[0]]: "TreeMap",
            [h[1]]: "TreeMap<key,value> map",
            [h[2]]: "Red-Black tree, key-value sorted map",
            [h[3]]: "get(k): O(log n)",
            [h[4]]: "✘",
            [h[5]]: "put(k,v): O(log n)",
            [h[6]]: "remove(k), remove(k,v): O(log n)"
        },
        {
            [h[0]]: "TreeSet",
            [h[1]]: "TreeSet<type> set",
            [h[2]]: "Red-Black tree, sorted set",
            [h[3]]: "pollFirst()/pollLast(): O(log n)",
            [h[4]]: "✘",
            [h[5]]: "add(x): O(log n)",
            [h[6]]: "remove(x): O(log n)"
        }
    ];

    const priorityStructure = [
        {
            [h[0]]: "PriorityQueue",
            [h[1]]: "PriorityQueue<type> pq",
            [h[2]]: "Heap-based queue, priority over order",
            [h[3]]: "peek(): O(1), contains(x): O(n)",
            [h[4]]: "✘",
            [h[5]]: "add(x): O(log n)",
            [h[6]]: "remove(): O(log n)"
        }
    ];

    return (
        <div className="overflow-x-auto space-y-8">
            <h1 className="text-2xl font-bold mb-4">Data Structure Runtimes</h1>

            <div>
                <h2 className="text-xl font-semibold">Linear Data Structures</h2>
                {tableFormatter(linearStructures)}
            </div>

            <div>
                <h2 className="text-xl font-semibold">Linked Lists</h2>
                {tableFormatter(linkedLists)}
            </div>

            <div>
                <h2 className="text-xl font-semibold">Skiplist Structures</h2>
                {tableFormatter(skipStructures)}
            </div>

            <div>
                <h2 className="text-xl font-semibold">Hashed Structures</h2>
                {tableFormatter(hashedStructures)}
            </div>

            <div>
                <h2 className="text-xl font-semibold">Sorted Maps and Sets</h2>
                {tableFormatter(sortedStructures)}
            </div>

            <div>
                <h2 className="text-xl font-semibold">Priority-Based Structures</h2>
                {tableFormatter(priorityStructure)}
            </div>
        </div>
    );
}
