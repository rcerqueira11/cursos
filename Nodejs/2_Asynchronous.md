## CallStack and EventLoop  

### Call Stack

- keeps track of program execution 
    - functions
    - statements that are fired

- you can add somthing to the top or remove something from the top

- first run the main function

- once the statement is done is removed

- when the programs return, it takes out the main function from the callstack and the program has finish

- when you call a functions it gets added at the top of the call stack 
- when you return from a function it gets remove from the call stack 
- return from a function goes to the callstack

- setTimeout is added to the node APIs, taked out from the callstack a start counting in the node Apis

- when it finish in the node APIs, it will sen the callback to the callback queue

### Event loop

- check if the callstack is empty and the can move thing from the callback queue

- add the callback to the callstack and start proccesing it