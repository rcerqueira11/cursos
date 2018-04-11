## Structural Directives

- is how we add dynamic behavior to html
- there are threee different kinds of directives:
    - Componente: has a template
    - Structural: Alter layout by adding, removing, or replacing HTML elements
    - Attribute


### Example 
```js
<li *ngFor="let carPart of carParts">
    <h2>{{carPart.name}}</h2>
    <p>{{carPart.description}}</p>
    <p>{{carPart.isStock}} in stock </p>
</li>
```

- *ngFor is an structura directive
- carPart is a local variable
- carParts is the array to loop through

## What we learn? 

- A directive (withing Angular) is how we add dynamic behavior to HTML
- A component directive has a template
- A structural directive alters layout by adding, removing, or replacing html elemnets.


## Pipes and Methods 

- use it to format screen data
- takes in data as input and transforms it to a desired output.
- to search in pipes of angunlar go to `angular page - docs - api reference - pipe`
- json pipe greate for debuggin

### Modifiyin the template
```js

class AppComponent {
    title = 'Ultra Racing';
    carParts = [{
        "id": 1,
        "name": "Super Tires",
        "description": "These tires are the very best",
        "inStock": 5,
        "price": 4.99
    },{
        "id": 2,
        "name": "Hard Shock",
        "description": "Shock from wolfragmio",
        "inStock": 4,
        "price":9.99    
    } ];
    totalCarParts(){
        let sum = 0;
        for (let carPart of this.carParts){
            sum += carPart.inStock;
        }
        return sum;
    }
    //other way
    totalCarParts(){
        return this.carParts.reduce((prev,current) => prev + current.inStock,0)
    }

}
```

- inside a typscript class, we dont use the word function, just like we dont use `let` to declare the properties

## What we learn?
- We can use pipes to transform our template output.
- how to create and use methods in our components