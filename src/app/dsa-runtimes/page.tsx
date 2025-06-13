import tableFormatter from "@/utils/tableFormatter"

export default function DSARuntimes() {
    const h = ["Data Structure", "Definition", "Themes","get(i)", "set(i,x)", "add(i,x)", "remove(i)"];

    const lds = [
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

    return (
        <div className="overflow-x-auto ">
            <h1>Data Structure Runtimes</h1>
            <h2>Linear Data Structures</h2>
            {tableFormatter(lds)}
            <h2>Linked Lists</h2>
            <h2>Double-Ended Structures</h2>
            <h2>Hashed Structures</h2>
            <h2>Sorted Maps and Sets</h2>
            <h2>Priority-Based Structures</h2>
        </div>
    )
}