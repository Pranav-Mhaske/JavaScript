// A 5-level deep nested array structure
let complexArray = [
  'level 1', 
  ['level 2', 
    ['level 3', 
      ['level 4', 
        ['level 5 contents'] // Nested 5 levels deep
      ]
    ]
  ]
];

// Accessing the deepest element requires an index for every level
console.log(complexArray[1][1][1][1][0]); // Output: "level 5 contents"

// A more complex structure with mixed data types
let mixedArray = [
  'string at level 1',
  42,
  ['level 2', 
    { key: 'value' }, // Object at level 2
    ['level 3', 
      true, // Boolean at level 3
      ['level 4', 
        null, // Null at level 4
        ['level 5', 
          'deepest level with a string' // String at level 5
        ]
      ]
    ]
  ]
];

// Accessing the deepest element in the mixed array
console.log(mixedArray[2][2][2][1][0]); // Output: "deepest level with a string"    

//ANother example of a multidimensional array with different data types

let matrix = [[1, 2], [3, 4]];
let doubled = matrix.map(row => row.map(val => val * 2)); 
// Result: [[2, 4], [6, 8]]

let size = 3;
let cube = new Array(size).fill(null).map(() => 
  new Array(size).fill(null).map(() => new Array(size).fill(0))
);
// Accessing a 3D point
cube[1][1][1] = 99;
console.log(cube[1][1][1]); // Output: 99   


let employeeDatabase = [
  [101, "Alice", ["Project A", "Project B"], { status: "Active" }],
  [102, "Bob", ["Project C"], { status: "On Leave" }]
];

// Accessing Bob's first project
console.log(employeeDatabase[1][2][0]); // "Project C"


class SparseMatrix {
  constructor() { this.data = []; }
  
  set(row, col, val) {
    if (!this.data[row]) this.data[row] = [];
    this.data[row][col] = val;
  }
  
  get(row, col) {
    return this.data[row] ? this.data[row][col] : null;
  }
}

let sparse = new SparseMatrix();
sparse.set(10, 10, 5);
console.log(sparse.get(10, 10)); // Output: 5
console.log(sparse.get(0, 0)); // Output: null (not set)    
