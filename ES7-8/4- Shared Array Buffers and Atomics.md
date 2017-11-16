@@TOC@@

## Web Workers

- Bring task parallelism to JavaScript
- Desingnate to browsers
- Starte by main thread
- Each worker has its own global environment
- Nothing is shared between main thread and worker thread
- Can do all kinds of tasks as long as it doesn't involve the DOM

## Using a web Worker

```javascript
let worker = new Worker("someTask.js");
//the someTask.js code is executed inmediatly
worker.postMessage(workOnThisData); // to send the worker some message
worker.onMessage = (event) => {
    //process data posted back by worker in event.data 
}
```

## Inside the web Worker

```javascript
self.addEventListener('message', (event) => {
    //get event.data == posted data by main thread

    //process data
    
    self.postMessage(processedData);
});
```

## Sharing Data

- Structured cloning: 
    - postMessage: clone the object and copy the content of the original object to the new object, only then the new object is send to the worker.
    - the object reference and his data is not shared

- Transferables
    - not all object types can be cloned 
    - this objects can be transfered, passed to the worker as is 
    - the main thread loose its references to the object 
    - supported by the second parameter of post message, wich is an array of transfered objects

- SharedArrayBuffer
    - to let multiple workers to work in the same dataset at the same time

## ArrayBuffer and Typed Arrays

- Binary array
- Used to/for:
    - new APIs in JavaScript
    - reduce memory footprint
    - optimize data transfer
    - create image edito in javascript

### Array buffer

```javascript
let buffer = new ArrayBuffer(4);
```
- represents 4 bytes of memory
    - [byte][byte][byte][byte]

### TypeArray

- You cant acces the underying bytes of an ArrayBuffer directly
- You can use a typed array as a view for the ArrayBuffer

```javascript
let view = new Int16Array(buffer);
view[0]=1000; // set the first 2bytes to 1000
```

- int16 stards for an integer with a size of 16bits, which is 2bytes 

## SharedArrayBuffer 

- enable the sharing of binary data across threads
- web workers can work on the underlying binary data simultaneously
    - usefull when data has to be pulled in form a server, to be number crunched for example.

```javascript

let barBuffer = new SharedArrayBuffer(5 * 3); //5bytes x number of bars
let uInt8View = new Uint8Array(barBuffer);

let calculateBar = (barPosition) => {
    return new Promise((resolve) => {
        let worker = new Worker('m4-3_worker.js');
        worker.postMessage({ barPosition: barPosition, buffer: barBuffer })
        worker.onmessage = () => {
            resolve();
        };
    });
}

let promises = [];

promises.push(calculateBar(0));
promises.push(calculateBar(1));
promises.push(calculateBar(2));


Promise.all(promises).then(()=> {
    draw(uInt8View[0], uInt8View[1], [uInt8View[2], uInt8View[3], uInt8View[4]]);
    draw(uInt8View[5], uInt8View[6], [uInt8View[7], uInt8View[8], uInt8View[9]]);
    draw(uInt8View[10], uInt8View[11], [uInt8View[12], uInt8View[13], uInt8View[14]]);
});
```



### worker.js

```javascript
self.addEventListener('message', (event) => {
    let uInt8View = new Uint8Array(event.data.buffer);
    let barDataStart = event.data.barPosition * 5;
    uInt8View[barDataStart] *=60;

    self.postMessage(true);
})
```

### Sharing data other than integer

- TextEncodes/TextDecoder for strings
- stringview.js for strings
- FlatJS for complex objects


### Waiting Until Data Becomes Available

```javascript
    //to optimize but this way ruins parallelism
    const waitValue = uInt8View[6];
    //just this could it be
    while (waitValue === 0);
    //start processing
```

## Atomics

- Safe Access to a SharedArrayBuffer
- Wait and continue mechanism
- Atomic operations add, substract are posible
- Possible by Global variable Atomics
- Suppprt of atomics go hand in hand with the support of SharedArrayBuffer

### Load

- With load you can GET a value
```javascript
// Atomics.load(typeArray,Index): returns value of the index
while (Atomics.load(uInt8View,6)===0);
//start processing
```

### Store  

- With store you can SET a value

```javascript
    Atomics.store(uInt8View,6,1);
    //Atomics.store(typeArray,Index,newValue);
```

### Wake

- By default all threads that are waiting on this index wake up
- You can specify the maximun of threads that will awake

```javascript
    //Atomics.wake(TypeArray,Index,MaxNumOfThreadsToAwake)
    Atomics.wake(view,0,1)
```
### Example

- The wait function can only be called in the worker, the main thread can't wait
- Writing and Waiting onlu works on Int32Arrays  

```javascript
//<m4-4_worker.js>
self.addEventListener('message', (event) => {
    let int32View = new Int32Array(event.data.buffer);
    Atomics.wait(int32View,0,10);
    // pass the value i spect to be there 
    // the thread will only wait if the value 10 is present in index 0  
    // if not the thread will just continue 
    self.postMessage(int32View[0]);
});
```

### Atomic Operations
- Adding
- Substracting
- Multiplying 
- 

```javascript
    Atomics.add(uInt8View,6,1);
    //adding 1 to the uInt8View[6]
```

## Sumamry

- Web workers enable parallelism and are isolated form other threads (nothing can be shared between threads)
- An ArrayBuffer isntance represent a piece of memory: binary data  
- Typed arrays are needed to access data in an ArrayBuffer
- The SharedArrayBuffer is an ArrayBuffer for which the underlying data can be shared across threads
- The Atomics global variable provides a collection of tools to work with the SharedArrayBuffer that contains the usefull wait and awake funcion