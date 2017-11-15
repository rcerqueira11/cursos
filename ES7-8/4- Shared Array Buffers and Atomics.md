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

- string: TextEncodes/TextDecoder
- stringview.js
- complex objects: FlatJS 

## Atomic