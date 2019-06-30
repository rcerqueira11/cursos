## Critical render  path

1. html -> css -> js
2. then js makes any change to html or css dom tree
3. the browser combines the dom and css dom into a render tree
4. then figure out the layout
5. then paint all the pixels

DOM -> CSSDOM -> Render Tree -> Layout -> Paint
DOM -> CSSDOM -> (DOM CONTENT LOADED) -> Render Tree -> Layout -> Paint -> LOAD

