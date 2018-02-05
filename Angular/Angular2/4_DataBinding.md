## Property Class and Binding

### Lets add some design

- raw html and css from designer

#### Splitting up the css
- Styles get put in a new css folder ant the car-parts.component.css for styles specific to that component

#### Splitting up the HTML
- html in `index.html`,`app.component.ts` and `car-parts.component.html`

### The way data can flow

#### Javascript to Html

- Like we hace been doing with the properties foro our components

#### Html to Javascript 

- Like mouse click, hover, or key press

#### Both ways

- Like a texxt box, that should stay in sync

> JavaScript because TypeScript turns into JavaScript

### Adding images to our model

1. add image property to our model

    ```js
    export class CarPart {
        id: number;
        name: string;
        description: string;
        inStock: number;
        price: number;
        image: string;
    }
    ```

2. add our mock file 

3. Use it by
    - `<img src={{carPart.image}}>`
    - property binding `[src] = "carPart.image"`

#### Property Binding

```js
[src] = "carPart.image"
```

- the square brackets tell angular to set this dom element property to our component property `and if the component property changes, update this.`

```html
<div [hidden]="!user.isAdmin">secret</div>
<button [disabled]="isDisabled">Purchase</button>
<img [alt]="image.description"> 
```

### Adding a Feature Property and Data

```js
export class CarPart{
    ...
    image: string;
    feature: boolean;
}
```

- we add it in the mock 
- next we need to conditionally add a class if this property is true

### Using a class Propery Binding

```html
<li class="card" *ngFor="..." [class.featured]="carPart.featured">
```

- element and class are properly scope as well

> `<div [class]="property">` this will override all classes.

> `<div [class.name]="property">` this will only add/remove the specific class

- class name with - works fine `class-name`

### What We Learn?

- Property binding allows us to bind component properties to any DOM element properties.

- Any update to the ocmponent property value will update the DOM property, but no vice versa --- thats why its "one-way binding"

- Class binding allows us to specify a CSS class to add to a DOM element if a component property is true