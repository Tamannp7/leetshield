export const DEMO_USERS = {
  tamanna_dev: {
    username: "tamanna_dev",
    profile: {
      realName: "Tamanna Priyedarshi",
      userAvatar: "https://assets.leetcode.com/users/default_avatar.png",
      ranking: 15432,
      reputation: 235,
    },
    submitStats: {
      acSubmissionNum: [
        { difficulty: "All", count: 182, submissions: 420 },
        { difficulty: "Easy", count: 95, submissions: 180 },
        { difficulty: "Medium", count: 72, submissions: 200 },
        { difficulty: "Hard", count: 15, submissions: 40 },
      ],
      totalSubmissionNum: [
        { difficulty: "All", count: 320, submissions: 780 },
        { difficulty: "Easy", count: 140, submissions: 300 },
        { difficulty: "Medium", count: 150, submissions: 410 },
        { difficulty: "Hard", count: 30, submissions: 70 },
      ],
    },
    recentAcSubmissionList: [
      { id: "1029384", title: "Two Sum", titleSlug: "two-sum", timestamp: "1687774200", lang: "cpp" },
      { id: "1029385", title: "Reverse Integer", titleSlug: "reverse-integer", timestamp: "1687654200", lang: "cpp" },
      { id: "1029386", title: "Merge Two Sorted Lists", titleSlug: "merge-two-sorted-lists", timestamp: "1687514200", lang: "cpp" },
      { id: "1029387", title: "Longest Substring Without Repeating Characters", titleSlug: "longest-substring-without-repeating-characters", timestamp: "1687354200", lang: "cpp" },
      { id: "1029388", title: "Palindromic Substring Count", titleSlug: "palindromic-substrings", timestamp: "1687154200", lang: "cpp" },
      { id: "1029389", title: "Plus One", titleSlug: "plus-one", timestamp: "1687054200", lang: "cpp" },
    ],
  },
  guest_coder: {
    username: "guest_coder",
    profile: {
      realName: "Elite Competitor",
      userAvatar: "https://assets.leetcode.com/users/default_avatar.png",
      ranking: 4210,
      reputation: 1540,
    },
    submitStats: {
      acSubmissionNum: [
        { difficulty: "All", count: 580, submissions: 1210 },
        { difficulty: "Easy", count: 180, submissions: 320 },
        { difficulty: "Medium", count: 310, submissions: 680 },
        { difficulty: "Hard", count: 90, submissions: 210 },
      ],
      totalSubmissionNum: [
        { difficulty: "All", count: 1120, submissions: 2600 },
        { difficulty: "Easy", count: 310, submissions: 700 },
        { difficulty: "Medium", count: 620, submissions: 1450 },
        { difficulty: "Hard", count: 190, submissions: 450 },
      ],
    },
    recentAcSubmissionList: [
      { id: "2029384", title: "Two Sum", titleSlug: "two-sum", timestamp: "1687774200", lang: "cpp" },
      { id: "2029385", title: "3Sum", titleSlug: "3sum", timestamp: "1687654200", lang: "cpp" },
      { id: "2029386", title: "Container With Most Water", titleSlug: "container-with-most-water", timestamp: "1687514200", lang: "cpp" },
    ],
  }
};

export const DEMO_QUESTIONS = {
  "two-sum": {
    questionId: "1",
    questionFrontendId: "1",
    title: "Two Sum",
    titleSlug: "two-sum",
    difficulty: "Easy",
    content: `Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.<br><br>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.<br><br>You can return the answer in any order.`,
    stats: '{"totalAccepted": "2.8M", "totalSubmission": "5.5M", "acRate": "50.9%"}',
  },
  "reverse-integer": {
    questionId: "7",
    questionFrontendId: "7",
    title: "Reverse Integer",
    titleSlug: "reverse-integer",
    difficulty: "Medium",
    content: `Given a signed 32-bit integer <code>x</code>, return <code>x</code> <em>with its digits reversed</em>. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>, then return <code>0</code>.`,
    stats: '{"totalAccepted": "1.3M", "totalSubmission": "4.6M", "acRate": "28.3%"}',
  },
  "merge-two-sorted-lists": {
    questionId: "21",
    questionFrontendId: "21",
    title: "Merge Two Sorted Lists",
    titleSlug: "merge-two-sorted-lists",
    difficulty: "Easy",
    content: `You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.<br><br>Merge the two lists into one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.<br><br>Return <em>the head of the merged linked list</em>.`,
    stats: '{"totalAccepted": "1.9M", "totalSubmission": "3.1M", "acRate": "61.3%"}',
  },
  "longest-substring-without-repeating-characters": {
    questionId: "3",
    questionFrontendId: "3",
    title: "Longest Substring Without Repeating Characters",
    titleSlug: "longest-substring-without-repeating-characters",
    difficulty: "Medium",
    content: `Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.`,
    stats: '{"totalAccepted": "4.2M", "totalSubmission": "12.3M", "acRate": "34.1%"}',
  },
  "happy-number": {
    questionId: "202",
    questionFrontendId: "202",
    title: "Happy Number",
    titleSlug: "happy-number",
    difficulty: "Easy",
    content: `Write an algorithm to determine if a number <code>n</code> is happy.<br><br>A <strong>happy number</strong> is a number defined by the following process:<br><ul><li>Starting with any positive integer, replace the number by the sum of the squares of its digits.</li><li>Repeat the process until the number equals 1 (where it will stay), or it <strong>loops endlessly in a cycle</strong> which does not include 1.</li><li>Those numbers for which this process <strong>ends in 1</strong> are happy.</li></ul>Return <code>true</code> <em>if</em> <code>n</code> <em>is a happy number, and</em> <code>false</code> <em>if not</em>.`,
    stats: '{"totalAccepted": "1.5M", "totalSubmission": "2.8M", "acRate": "54.6%"}',
  },
  "plus-one": {
    questionId: "66",
    questionFrontendId: "66",
    title: "Plus One",
    titleSlug: "plus-one",
    difficulty: "Easy",
    content: `You are given a <strong>large integer</strong> represented as an integer array <code>digits</code>, where each <code>digits[i]</code> is the <code>i<sup>th</sup></code> digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.<br><br>Increment the large integer by one and return <em>the resulting array of digits</em>.`,
    stats: '{"totalAccepted": "1.8M", "totalSubmission": "4.1M", "acRate": "44.3%"}',
  }
};

export const DEMO_CODE_TEMPLATES = {
  "two-sum-plagiarized": {
    name: "Two Sum: High Duplicacy (Obfuscated Copy)",
    description: "Compare an optimal HashMap solution with a version that has renamed variables, different comment structure, and rearranged helper flow. The logic is identical.",
    codeA: `// Solution A: Standard Clean solution using an unordered_map in C++
#include <vector>
#include <unordered_map>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        std::unordered_map<int, int> num_map;
        for (int i = 0; i < nums.size(); ++i) {
            int complement = target - nums[i];
            if (num_map.find(complement) != num_map.end()) {
                return {num_map[complement], i};
            }
            num_map[nums[i]] = i;
        }
        return {};
    }
};`,
    codeB: `/* Solution B: Obfuscated duplication of Solution A in C++
   We renamed variables, reformatted loops and used map instead of unordered_map */
#include <vector>
#include <map>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& arr, int goal) {
        std::map<int, int> lookup_dict;
        int idx = 0;
        while (idx < arr.size()) {
            int item = arr[idx];
            int missing_part = goal - item;
            if (lookup_dict.count(missing_part)) {
                int first_idx = lookup_dict[missing_part];
                return {first_idx, idx};
            }
            lookup_dict[item] = idx;
            idx++;
        }
        return {};
    }
};`
  },
  "two-sum-unique": {
    name: "Two Sum: Low Similarity (Unique Approaches)",
    description: "Compare the optimal O(N) unordered_map solution (Code A) with a brute-force O(N^2) solution (Code B). They solve the same question but have completely distinct algorithmic structures and names.",
    codeA: `#include <vector>
#include <unordered_map>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        std::unordered_map<int, int> hash_table;
        for (int i = 0; i < nums.size(); i++) {
            int diff = target - nums[i];
            if (hash_table.count(diff)) {
                return {hash_table[diff], i};
            }
            hash_table[nums[i]] = i;
        }
        return {};
    }
};`,
    codeB: `// Brute-force O(N^2) search solution in C++
#include <vector>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        for (int outer = 0; outer < nums.size(); outer++) {
            for (int inner = outer + 1; inner < nums.size(); inner++) {
                if (nums[outer] + nums[inner] == target) {
                    return {outer, inner};
                }
            }
        }
        return {};
    }
};`
  },
  "reverse-integer-plagiarized": {
    name: "Reverse Integer: Identical Structure (Direct Copy)",
    description: "Compare a C++ reverse-integer solution with a direct copy that only changes the variable names and layout. This shows direct, unoriginal copying.",
    codeA: `#include <climits>

class Solution {
public:
    int reverse(int x) {
        int reversed = 0;
        while (x != 0) {
            int pop = x % 10;
            x /= 10;
            if (reversed > INT_MAX/10 || (reversed == INT_MAX / 10 && pop > 7)) return 0;
            if (reversed < INT_MIN/10 || (reversed == INT_MIN / 10 && pop < -8)) return 0;
            reversed = reversed * 10 + pop;
        }
        return reversed;
    }
};`,
    codeB: `#include <climits>

class Solution {
public:
    int reverse(int num) {
        int rev_num = 0;
        while (num != 0) {
            int remainder = num % 10;
            num = num / 10;
            if (rev_num > 214748364 || (rev_num == 214748364 && remainder > 7)) return 0;
            if (rev_num < -214748364 || (rev_num == -214748364 && remainder < -8)) return 0;
            rev_num = rev_num * 10 + remainder;
        }
        return rev_num;
    }
};`
  },
  "happy-number-unique": {
    name: "Happy Number: Safe Unique Formulation",
    description: "Compare a standard Set-based detection approach (Code A) with a Floyd's Cycle Detection (Tortoise and Hare) approach (Code B). These are mathematically unique implementations of the same logic.",
    codeA: `#include <unordered_set>

class Solution {
public:
    int getNext(int n) {
        int sum = 0;
        while (n > 0) {
            int digit = n % 10;
            sum += digit * digit;
            n /= 10;
        }
        return sum;
    }

    bool isHappy(int n) {
        std::unordered_set<int> seen;
        while (n != 1 && !seen.count(n)) {
            seen.insert(n);
            n = getNext(n);
        }
        return n == 1;
    }
};`,
    codeB: `// Floyd's Cycle-Finding Algorithm (Tortoise & Hare) in C++ - 0% structural overlap with Set
class Solution {
public:
    int getNext(int n) {
        int totalSum = 0;
        while (n > 0) {
            int d = n % 10;
            totalSum += d * d;
            n /= 10;
        }
        return totalSum;
    }

    bool isHappy(int n) {
        int slowRunner = n;
        int fastRunner = getNext(n);
        while (fastRunner != 1 && slowRunner != fastRunner) {
            slowRunner = getNext(slowRunner);
            fastRunner = getNext(getNext(fastRunner));
        }
        return fastRunner == 1;
    }
};`
  },
  "plus-one": {
    name: "Plus One: C++ Iterative Progression",
    description: "Compare two accepted attempts for Plus One. Code A uses a simple reverse traversal with push_front/insert, while Code B uses standard element-wise reverse increment logic with insert(0). Check if they represent similar structures.",
    codeA: `#include <vector>

class Solution {
public:
    std::vector<int> plusOne(std::vector<int>& digits) {
        int n = digits.size();
        for (int i = n - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }
        digits.insert(digits.begin(), 1);
        return digits;
    }
};`,
    codeB: `#include <vector>

class Solution {
public:
    std::vector<int> plusOne(std::vector<int>& arr) {
        int length = arr.size();
        for (int idx = length - 1; idx >= 0; idx--) {
            if (arr[idx] == 9) {
                arr[idx] = 0;
            } else {
                arr[idx] += 1;
                return arr;
            }
        }
        arr.insert(arr.begin(), 1);
        return arr;
    }
};`
  }
};
