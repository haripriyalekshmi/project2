// class Stack {
//     constructor() {
//       this.stack = [];
//     }
  
//     push(element) {
//       this.stack.push(element);
//     }
  
//     pop() {
//       return this.stack.pop();  
//     }
  
//     peek() {
//       return this.stack[this.stack.length - 1];  
//     }
  
//     isEmpty() {
//       return this.stack.length === 0;  
//     }
//   }
  
//   let myStack = new Stack();
//   myStack.push(10);
//   myStack.push(20);
//   myStack.push(30);
//   console.log(myStack.pop());  
//   console.log(myStack.peek());  
  
  
//   class Queue {
//     constructor() {
//       this.queue = [];
//     }
  
//     enqueue(element) {
//       this.queue.push(element);  
//     }
  
//     dequeue() {
//       return this.queue.shift();  
//     }
  
//     isEmpty() {
//       return this.queue.length === 0;  
//     }
//    peek() {
//           if (this.isEmpty()) {
//               return "No elements in Queue"; 
//           }
//           return this.items[0]; 
//       }
  
//   }
  
//   let myQueue = new Queue();
//   myQueue.enqueue(10);
//   myQueue.enqueue(20);
//   myQueue.enqueue(30);
//   console.log(myQueue.dequeue());  
//   console.log(myQueue.peek());  
  

//   const nums = [1, 2, 3, 4, 5];
// nums.splice(2, 1, 10, 20);
// console.log(nums);

const obj = {
    value: 10,
    getValue: function() {
      return this.value;
    }
  };
  
  const getValue = obj.getValue;
  console.log(getValue());
  