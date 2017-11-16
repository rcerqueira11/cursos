self.addEventListener('message', (event) => {
    let int32View = new Int32Array(event.data.buffer);
    Atomics.wait(int32View,0,10);
    self.postMessage(int32View[0]);
});