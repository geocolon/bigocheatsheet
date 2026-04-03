/* ═══════════════════════════════════════════
   Big O Cheatsheet — data.js
   All data structure and sorting algorithm data
═══════════════════════════════════════════ */

const dataStructures = [
  { name:"Array",              cat:"linear", avgAccess:"Θ(1)",      avgSearch:"Θ(n)",      avgInsert:"Θ(n)",      avgDelete:"Θ(n)",      wAccess:"O(1)",      wSearch:"O(n)",      wInsert:"O(n)",      wDelete:"O(n)",      space:"O(n)" },
  { name:"Stack",              cat:"linear", avgAccess:"Θ(n)",      avgSearch:"Θ(n)",      avgInsert:"Θ(1)",      avgDelete:"Θ(1)",      wAccess:"O(n)",      wSearch:"O(n)",      wInsert:"O(1)",      wDelete:"O(1)",      space:"O(n)" },
  { name:"Queue",              cat:"linear", avgAccess:"Θ(n)",      avgSearch:"Θ(n)",      avgInsert:"Θ(1)",      avgDelete:"Θ(1)",      wAccess:"O(n)",      wSearch:"O(n)",      wInsert:"O(1)",      wDelete:"O(1)",      space:"O(n)" },
  { name:"Singly-Linked List", cat:"linear", avgAccess:"Θ(n)",      avgSearch:"Θ(n)",      avgInsert:"Θ(1)",      avgDelete:"Θ(1)",      wAccess:"O(n)",      wSearch:"O(n)",      wInsert:"O(1)",      wDelete:"O(1)",      space:"O(n)" },
  { name:"Doubly-Linked List", cat:"linear", avgAccess:"Θ(n)",      avgSearch:"Θ(n)",      avgInsert:"Θ(1)",      avgDelete:"Θ(1)",      wAccess:"O(n)",      wSearch:"O(n)",      wInsert:"O(1)",      wDelete:"O(1)",      space:"O(n)" },
  { name:"Skip List",          cat:"linear", avgAccess:"Θ(log n)",  avgSearch:"Θ(log n)",  avgInsert:"Θ(log n)",  avgDelete:"Θ(log n)",  wAccess:"O(n)",      wSearch:"O(n)",      wInsert:"O(n)",      wDelete:"O(n)",      space:"O(n log n)" },
  { name:"Hash Table",         cat:"hash",   avgAccess:"N/A",       avgSearch:"Θ(1)",      avgInsert:"Θ(1)",      avgDelete:"Θ(1)",      wAccess:"N/A",       wSearch:"O(n)",      wInsert:"O(n)",      wDelete:"O(n)",      space:"O(n)" },
  { name:"BST",                cat:"tree",   avgAccess:"Θ(log n)",  avgSearch:"Θ(log n)",  avgInsert:"Θ(log n)",  avgDelete:"Θ(log n)",  wAccess:"O(n)",      wSearch:"O(n)",      wInsert:"O(n)",      wDelete:"O(n)",      space:"O(n)" },
  { name:"Cartesian Tree",     cat:"tree",   avgAccess:"N/A",       avgSearch:"Θ(log n)",  avgInsert:"Θ(log n)",  avgDelete:"Θ(log n)",  wAccess:"N/A",       wSearch:"O(n)",      wInsert:"O(n)",      wDelete:"O(n)",      space:"O(n)" },
  { name:"B-Tree",             cat:"tree",   avgAccess:"Θ(log n)",  avgSearch:"Θ(log n)",  avgInsert:"Θ(log n)",  avgDelete:"Θ(log n)",  wAccess:"O(log n)",  wSearch:"O(log n)",  wInsert:"O(log n)",  wDelete:"O(log n)",  space:"O(n)" },
  { name:"Red-Black Tree",     cat:"tree",   avgAccess:"Θ(log n)",  avgSearch:"Θ(log n)",  avgInsert:"Θ(log n)",  avgDelete:"Θ(log n)",  wAccess:"O(log n)",  wSearch:"O(log n)",  wInsert:"O(log n)",  wDelete:"O(log n)",  space:"O(n)" },
  { name:"Splay Tree",         cat:"tree",   avgAccess:"N/A",       avgSearch:"Θ(log n)",  avgInsert:"Θ(log n)",  avgDelete:"Θ(log n)",  wAccess:"N/A",       wSearch:"O(log n)",  wInsert:"O(log n)",  wDelete:"O(log n)",  space:"O(n)" },
  { name:"AVL Tree",           cat:"tree",   avgAccess:"Θ(log n)",  avgSearch:"Θ(log n)",  avgInsert:"Θ(log n)",  avgDelete:"Θ(log n)",  wAccess:"O(log n)",  wSearch:"O(log n)",  wInsert:"O(log n)",  wDelete:"O(log n)",  space:"O(n)" },
  { name:"KD Tree",            cat:"tree",   avgAccess:"Θ(log n)",  avgSearch:"Θ(log n)",  avgInsert:"Θ(log n)",  avgDelete:"Θ(log n)",  wAccess:"O(n)",      wSearch:"O(n)",      wInsert:"O(n)",      wDelete:"O(n)",      space:"O(n)" },
];

const sortingAlgorithms = [
  { name:"Quicksort",       cat:"comparison",     best:"Ω(n log n)",  avg:"Θ(n log n)",  worst:"O(n²)",            space:"O(log n)" },
  { name:"Mergesort",       cat:"comparison",     best:"Ω(n log n)",  avg:"Θ(n log n)",  worst:"O(n log n)",       space:"O(n)" },
  { name:"Timsort",         cat:"comparison",     best:"Ω(n)",        avg:"Θ(n log n)",  worst:"O(n log n)",       space:"O(n)" },
  { name:"Heapsort",        cat:"comparison",     best:"Ω(n log n)",  avg:"Θ(n log n)",  worst:"O(n log n)",       space:"O(1)" },
  { name:"Bubble Sort",     cat:"comparison",     best:"Ω(n)",        avg:"Θ(n²)",       worst:"O(n²)",            space:"O(1)" },
  { name:"Insertion Sort",  cat:"comparison",     best:"Ω(n)",        avg:"Θ(n²)",       worst:"O(n²)",            space:"O(1)" },
  { name:"Selection Sort",  cat:"comparison",     best:"Ω(n²)",       avg:"Θ(n²)",       worst:"O(n²)",            space:"O(1)" },
  { name:"Tree Sort",       cat:"comparison",     best:"Ω(n log n)",  avg:"Θ(n log n)",  worst:"O(n²)",            space:"O(n)" },
  { name:"Shell Sort",      cat:"comparison",     best:"Ω(n log n)",  avg:"Θ(n(log n)²)",worst:"O(n(log n)²)",     space:"O(1)" },
  { name:"Bucket Sort",     cat:"non-comparison", best:"Ω(n+k)",      avg:"Θ(n+k)",      worst:"O(n²)",            space:"O(n)" },
  { name:"Radix Sort",      cat:"non-comparison", best:"Ω(nk)",       avg:"Θ(nk)",       worst:"O(nk)",            space:"O(n+k)" },
  { name:"Counting Sort",   cat:"non-comparison", best:"Ω(n+k)",      avg:"Θ(n+k)",      worst:"O(n+k)",           space:"O(k)" },
  { name:"Cubesort",        cat:"comparison",     best:"Ω(n)",        avg:"Θ(n log n)",  worst:"O(n log n)",       space:"O(n)" },
];

/* Complexity functions for the D3 chart */
const complexities = [
  { label: "O(1)",       fn: () => 1,                    color: "#22c55e" },
  { label: "O(log n)",   fn: n => Math.log2(n),          color: "#06b6d4" },
  { label: "O(n)",       fn: n => n,                     color: "#3b82f6" },
  { label: "O(n log n)", fn: n => n * Math.log2(n),      color: "#eab308" },
  { label: "O(n²)",      fn: n => n * n,                 color: "#f97316" },
  { label: "O(2ⁿ)",     fn: n => Math.pow(2, n),        color: "#ef4444" },
];
