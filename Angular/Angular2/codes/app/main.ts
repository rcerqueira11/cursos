import { NgModule, Component } from '@angular/core'; //angular 2 library
// component function that allow us to create components
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'my-app',
    template:` <h1>{{title}}</h1>
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
        return 10;
    }
}

@NgModule({
    declarations: [AppComponent],
    imports: [ BrowserModule ], //load required dependencies to auch our app in the browser
    // indicate the compenent who loads first
    bootstrap: [ AppComponent ]

})
class AppModule { 

}


platformBrowserDynamic()
    .bootstrapModule(AppModule);
