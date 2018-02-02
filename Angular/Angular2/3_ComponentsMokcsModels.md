## Splitting Things Into Pieces

### Main.ts separated

1. `main.ts`: where we'll bootstrap our app, loading our first component.
2. `app.component.ts`: this component contains our page header.
3. `car-parts.component.ts`: this contains our list of car parts

- after this we will have two separated components

### Access to a class from another file

1. We export the class we want to import.
    ```js
    export class AppComponent {
        title = 'Ultra Racing';
        ...
    }
    ```

2. Inside main.ts we import app comomnent
    ```js
    import { AppComponent } from './app.component';

    ```
### Splitting out our car parts component

```js
import { Component } from '@angular/core';

@Component({
    selector: 'car-parts',
    template: `
        <p>There are {{totalCarParts()}} total parts in stock</p>
        <ul>
            <li *ngFor="let carPart of carParts">
                <h2>{{carPart.name | uppercase}}</h2>
                <p>{{carPart.description}}</p> 
                <p >{{carPart.price | currency:'EUR':true}}</p >
                <p *ngIf="carPart.inStock > 0">{{carPart.isStock}}</p>
                <p *ngIf="carPart.inStock === 0">Out of Stock</p>
            </li>
        </ul>  
    `
})

export class CarPartsComponent {
    carParts = [{
        "id": 1,
        "name": "Super Tires",
        "description": "These tires are the very best",
        "inStock": 5,
        "price": 4.99
    }, {
        "id": 2,
        "name": "Hard Shock",
        "description": "Shock from wolfragmio",
        "inStock": 4,
        "price": 9.99
    }];
    totalCarParts() {
        let sum = 0;
        for (let carPart of this.carParts) {
            sum += carPart.inStock;
        }
        return sum;
    }
}
```

#### to use it in the main

1. import it 
    ```js
    import { CarPartsComponent } from './car-parts.component'; 
    ```
2. Add the component to the module declaration
    ```js
    import { AppComponent } from './app.component'

    @NgModule({
        declarations: [
            AppComponent,
            CarPartsComponent
        ],
    ```

3. Specify the component with the new selector in `app.component.ts`

    ```js
    import { Component } from '@angular/core';

    @Component({
        selector: 'my-app',
        template: ` <h1>{{title}}</h1>
            <car-parts></car-parts>
        `
    })

    export class AppComponent {
        title = 'Ultra Racing';
    } 
    ```

- we create our first reusable component `car-parts.component.ts` 

### What we learn?

- Our main.ts is where we import our first component and bootstrap it.
- In order to import a class, we must give it the export keyword
- We use the directives metadata to list the directives our component uses.
- Components are the building blocks of our application

## Component HTML and CSS

### Who do we tie css to our compont?

- Adding Styles Array Metadata
    ```js
    @Component({
        selector: 'car-parts',
        template: `
            <p>There are {{totalCarParts()}} total parts in stock</p>
            <ul>
                <li *ngFor="let carPart of carParts">
                    <h2>{{carPart.name | uppercase}}</h2>
                    <p class="description">{{carPart.description}}</p> 
                    <p class="price">{{carPart.price | currency:'EUR':true}}</p >
                    <p *ngIf="carPart.inStock > 0">{{carPart.isStock}}</p>
                    <p *ngIf="carPart.inStock === 0">Out of Stock</p>
                </li>
            </ul>  
        `,
        styles: [`
            .description {
                color: #444;
                font-size: small;
            }
            .price { 
                font-weight: bold;
            }
        `]
    })
    ```
- the css is scoped to the component
    - kinda like properties are scoped, the css is scoped too!
- there is a custom attribut `_ngcontent-dcy-2`
- `if we hace a description class in one component and a description class in other component the would no clash each other becouse the will be scope`

### Spliting things Into More pieces

1. create `car-parts.component.html` and `car-parts.component.css`

2. once we create new files we need to referenc them in the component metadata

    ```js
    @Component({
        selector: 'car-parts',
        templateUrl: 'app/car-parts.component.html',
        styles: ['app/car-parts.component.css']
    })
    ```

### What we learn?

- We can include CSS just like we include our HTML template.
- CSS automatically gets scoped to our component
- HTML and CSS can get split out into ther own files

## Mocks and Models

- Typescript give us the ability to be more object oriented with our data, so lets create a model.

- basically a class in javascript
- we are declaring the properties, this is Typescript
- allow our compile to check our code and ensure we're getting and setting thins properly

```js
//car-part.ts
export class CarPart {
    id: number;
    name: string;
    description: string;
    inStock: number;
    price: number;
}
```

### how to use it

1. import the module in car-parts.component.ts
    ```js
    import { CarPart } from './car-part';
    ```

2. Tells Typescript to treat this like an array of CarParts
    ```js
    export class CarPartsComponent {
        carParts: CarPart [] = [{..}]
    ```

### Using our Mock data

1. create a mocks.ts file and move the fake data

2. import our CarPart

3. create a const to the CARPARTS

4. final mocks.file  
    ```js
    import { CarPart } from './car-part';

    export const CARPARTS: CarPart[] = [{
        "id": 1,
        "name": "Super Tires",
        "description": "These tires are the very best",
        "inStock": 5,
        "price": 4.99
        }, {
        "id": 2,
        "name": "Hard Shock",
        "description": "Shock from wolfragmio",
        "inStock": 4,
        "price": 9.99
    }];
    ``` 
5. import the CARPARTS cons in the car-parts.component.ts
    ```js
    //car-parts.component.ts
    import { CARPARTS } from './mocks';
    ```

6. initialize the carParts with the ngOInit method
    - `ngOInit`: is invoked after the component is constructed and is the best place to initialize property values
    ```js
    export class CarPartsComponent {
        carParts: CarPart [];
        ngOnInit(){
            this.carParts = CARPARTS;
        }
        ...
    }
    ```
### Our component Architecture

- `index.html`: includes `<my-app>` and loads main.ts
- app/
    - `main.ts`: import and bootstraps our first component
    - `app.component.ts`: loads the header and our subcomponents
    - `car-part.ts`: The data model
    - `mocks.ts`: the fake data 
    - `car-part.component.ts`: import CarPart, CARPARTS, our templateUrl and styleUrl
    - `car-parts.component.css` 
    - `car-parts.component.html`


### What we learn?

- in TypeScript, we can use classes to model our data
- TypeScript helps us specify class property types that help our compiler ensure we're writing good code
- its a good practice to keep your mock data separate from you model and your components, in its own file.