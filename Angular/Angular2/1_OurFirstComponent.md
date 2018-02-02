## Intro

- start development follow `http://go.codeschool.com/angular2start
```html
<body> 
    <my-app> Loading App .. </my-app>
    <!-- this could be <racing-app> -->
</body>
```
- `SystemJS` is a js library that allows us to import other libraries


- `Component` function that allow us to create components
    - are the basic building blocks of angular 2 applications
    - A component controls a portion of the screen
    - is a decorator function

- `Decorator` add more behavior to our class from outside the class 
    - it mus be declared immediately before the class 

- `@Component` used to apply our component decorator to our class
    - `selector` the CSS selector for the HMTL element where we want the component to load
        - correspond to the custom tag we wrote
            ```html
            <my-app> Loading App .. </my-app>
            ```
    - `template` the content we want to load inside our selector. 

### Declaring root module

- modules are how we organize our app in angular.
- Every angular app must have a `root module`, which we will need to launch the app

```js 
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ AppComponent ],
})
```

- `declarations`: list of all component within the module
- must define a class becouse every decorator function decorate a class

### import some dependencie

- `BrowserModule` module needed for running Angular websites
-  `platformBrowserDynamic` angular library that will render the website
    - this will allow us to bootstrap, or launch, the app

```js
@NgModule({
    declarations: [AppComponent],
    imports: [ BrowserModule ], //load required dependencies to auch our app in the browser
    // indicate the compenent who loads first
    bootstrap: [ AppComponent ]

})
```
- Render app using AppModule

```js
platformBrowserDynamic()
    .bootstrapModule(AppModule);
```

- To print properties ` '<h1>{{title}}</h1>'`

- to print objects 
    ```js
    class AppComponent {
        title = 'Ultra Racing';
        carPart = {
            "id": 1,
            "name": "Super Tires",
            "description": "These tires are the very best",
            "inStock": 5
        }
    }
    ```
    - our template now use back ticks instead of '
    - using back tick allow us to have template string, wich allows uto be multiline
    ```js
    @Component({
        selector: 'my-app',
        template:` <h1>{{title}}</h1>
            <h2>{{carPart.name}}</h2>
            <p>{{carPart.description}}</p>
            <p>{{carPart.isStock}}</p>`
    })
    ```

## What we learn? 
- Angular is a framework for dynamic web applications
- We are coding Angular using TypeScript, a language that transpiles into JavaScript
- NgModules group Angular code into blocks of functionality
- Components are the basic building block of any Angular application
- We use a custom HTML tag (aka, selector) to show where we want our component to load inside our HTML
- Decorator are what turn our plain TypeScript classes into Components.