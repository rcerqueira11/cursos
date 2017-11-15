self.addEventListener('message', (event) => {
    let uInt8View = new Uint8Array(event.data.buffer);
    let barDataStart = event.data.barPosition * 5;
    uInt8View[barDataStart] *=60;

    self.postMessage(true);
})