import tableFormatter from "@/utils/tableFormatter"
import codeFormatter from "@/utils/codeFormatter";

export default function ArraysInterviewPage() {
  const arrayUseCases = [
    { useCase: "Random Access", explanation: "Arrays support constant-time access using index (arr[i])." },
    { useCase: "Iteration", explanation: "Easy to loop through elements with for/while/forEach." },
    { useCase: "Sorting", explanation: "Most sorting algorithms (quick sort, merge sort) operate efficiently on arrays." },
    { useCase: "Two Pointers", explanation: "Useful for problems like subarray sums, pairs with a target, etc." },
    { useCase: "Sliding Window", explanation: "Efficient for fixed/variable length window problems like max sum subarray." }
  ];

  const jsExample = `// Find max sum subarray of size k
function maxSubarraySum(arr, k) {
  let maxSum = 0, windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];
  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}`;

  const pythonExample = `# Reverse an array in Python
def reverse_array(arr):
    return arr[::-1]

arr = [1, 2, 3, 4]
print(reverse_array(arr))  # Output: [4, 3, 2, 1]`;

  const javaExample = `// Linear search in array
public class Main {
  public static int find(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == target) return i;
    }
    return -1;
  }
}`;

  return (
    <div className="pages">
      <h1>Arrays in Interviews</h1>
      <p>Arrays are foundational data structures used in almost every coding interview. They offer predictable access times and are key in algorithms involving iteration, searching, and dynamic window techniques.</p>

      <h2>Common Use Cases</h2>
      {tableFormatter(arrayUseCases)}

      <h2>JavaScript Example</h2>
      {codeFormatter(jsExample, "javascript")}

      <h2>Python Example</h2>
      {codeFormatter(pythonExample, "python")}

      <h2>Java Example</h2>
      {codeFormatter(javaExample, "java")}

      <h2>Common Patterns</h2>
      <ul>
        <li><b>Two Pointers:</b> Use two indices to traverse and compare values efficiently.</li>
        <li><b>Sliding Window:</b> Maintain a window of elements and slide it across the array.</li>
        <li><b>Prefix Sums:</b> Precompute cumulative sums for range queries.</li>
        <li><b>Binary Search:</b> On sorted arrays for O(log n) search times.</li>
        <li><b>Greedy Choices:</b> Often paired with arrays in optimization problems.</li>
      </ul>

      <h2>Tips for Interviews</h2>
      <ol>
        <li>Understand time and space complexity: O(1) access, O(n) insert/delete (on average).</li>
        <li>Practice edge cases: empty arrays, duplicates, sorted vs unsorted input.</li>
        <li>Be fluent in array-related language syntax (e.g., slicing, appending, etc.).</li>
        <li>Visualize pointer movement and memory layout.</li>
      </ol>
    </div>
  );
}
