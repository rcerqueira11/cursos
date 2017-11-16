let buffer = new SharedArrayBuffer(4);
let view = new Int32Array(buffer);
view[0] = 10;

let worker = new Worket("m4-4_worker.js");
worker.onmessage = (event) => console.log(event.data);
worker.postMessage({buffer: buffer});

let input = prompt("Enter a value");
view[0] = +input; //set the enter value in the array
Atomics.wake(view,0,1);