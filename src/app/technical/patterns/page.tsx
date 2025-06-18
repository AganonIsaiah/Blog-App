import tableFormatter from "@/utils/tableFormatter";
import codeFormatter from "@/utils/codeFormatter";

export default function Patterns() {
  const patternTable = [
    { pattern: "Two Pointers", usage: "Finding pairs, removing duplicates, reversing arrays, merging sorted arrays" },
    { pattern: "Sliding Window", usage: "Finding max/min sum in subarrays, longest substring without repeats, dynamic range problems" },
    { pattern: "Prefix Sum", usage: "Efficient range queries, subarray sum problems, difference arrays" },
    { pattern: "Binary Search", usage: "Searching sorted arrays, lower/upper bounds, peak finding, optimization problems" },
    { pattern: "Greedy", usage: "Optimization problems like jump game, merging intervals, minimizing/removing steps" },
    { pattern: "In-Place Modification", usage: "Space-efficient array manipulation like rotation, removing elements, reversing sections" },
  ];

  const twoPointersCode = `// Reverse a string
public void reverseString(char[] s) {
  int left = 0, right = s.length - 1;
  while (left < right) {
    char temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
}`;

  const slidingWindowCode = `// Longest substring without repeating characters
public int lengthOfLongestSubstring(String s) {
  Set<Character> set = new HashSet<>();
  int left = 0, maxLength = 0;
  for (int right = 0; right < s.length(); right++) {
    while (set.contains(s.charAt(right))) {
      set.remove(s.charAt(left));
      left++;
    }
    set.add(s.charAt(right));
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}`;

  const prefixSumCode = `// Range sum query
class NumArray {
  private int[] prefix;

  public NumArray(int[] nums) {
    prefix = new int[nums.length + 1];
    for (int i = 0; i < nums.length; i++) {
      prefix[i + 1] = prefix[i] + nums[i];
    }
  }

  public int sumRange(int left, int right) {
    return prefix[right + 1] - prefix[left];
  }
}`;

  const binarySearchCode = `// Search in rotated sorted array
public int search(int[] nums, int target) {
  int left = 0, right = nums.length - 1;
  while (left <= right) {
    int mid = left + (right - left) / 2;
    if (nums[mid] == target) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}`;

  const greedyCode = `// Merge intervals
public int[][] merge(int[][] intervals) {
  Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
  List<int[]> result = new ArrayList<>();
  int[] current = intervals[0];
  result.add(current);

  for (int[] interval : intervals) {
    if (current[1] >= interval[0]) {
      current[1] = Math.max(current[1], interval[1]);
    } else {
      current = interval;
      result.add(current);
    }
  }
  return result.toArray(new int[result.size()][]);
}`;

  const inPlaceCode = `// Move zeroes to end
public void moveZeroes(int[] nums) {
  int lastNonZero = 0;
  for (int i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      int temp = nums[i];
      nums[i] = nums[lastNonZero];
      nums[lastNonZero] = temp;
      lastNonZero++;
    }
  }
}`;

  return (
    <div className="pages">
      <h1>Mastering LeetCode Array Patterns</h1>
      <p>
        Arrays are foundational in technical interviews. Recognizing patterns like Two Pointers or Sliding Window can dramatically simplify problem-solving and optimize performance.
      </p>

      <h2>Common Patterns</h2>
      {tableFormatter(patternTable)}

      <h2>Two Pointers</h2>
      <p>Use this when scanning from both ends or merging sorted arrays. Often avoids nested loops.</p>
      {codeFormatter(twoPointersCode, "java")}

      <h2>Sliding Window</h2>
      <p>Ideal for problems with contiguous subarrays or substrings. It helps reduce complexity to O(n).</p>
      {codeFormatter(slidingWindowCode, "java")}

      <h2>Prefix Sum</h2>
      <p>Great for cumulative values or when you need efficient range sums.</p>
      {codeFormatter(prefixSumCode, "java")}

      <h2>Binary Search</h2>
      <p>Go-to approach for problems with sorted input or where you can convert conditions into monotonic functions.</p>
      {codeFormatter(binarySearchCode, "java")}

      <h2>Greedy</h2>
      <p>Use when local choices lead to global optimum. Often seen in interval problems.</p>
      {codeFormatter(greedyCode, "java")}

      <h2>In-Place Modification</h2>
      <p>Used to optimize space usage. Avoids using extra arrays or data structures.</p>
      {codeFormatter(inPlaceCode, "java")}
    </div>
  );
}
