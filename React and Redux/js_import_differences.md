## This is a default import:
```js
// B.js
import A from './A'
```

It only works if A has the default export:
```js
// A.js
export default 42
```

In this case it doesn’t matter what name you assign to it when importing:
```js
// B.js
import A from './A'
import MyA from './A'
import Something from './A'
```
Because it will always resolve to whatever is the default export of A.

## This is a named import called A:

```js
import { A } from './A'
```
It only works if A contains a named export called A:

```js
export const A = 42
```
In this case the name matters because you’re importing a specific thing by its export name:

```js
// B.js
import { A } from './A'
import { myA } from './A' // Doesn't work!
import { Something } from './A' // Doesn't work!
```
To make these work, you would add a corresponding named export to A:

```js
// A.js
export const A = 42
export const myA = 43
export const Something = 44
```
A module can only have one default export, but as many named exports as you'd like (zero, one, two, or many). You can import them all together:

```js
// B.js
import A, { myA, Something } from './A'
```
Here, we import the default export as A, and named exports called myA and Something, respectively.

```js
// A.js
export default 42
export const myA = 43
export const Something = 44
```
We can also assign them all different names when importing:

```js
// B.js
import X, { myA as myX, Something as XSomething } from './A'
```