import { NgModule, Component } from '@angular/core'; //angular 2 library
// component function that allow us to create components
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CarPartsComponent } from './car-parts.component'
import { AppComponent } from './app.component'

@NgModule({
    declarations: [
        AppComponent,
        CarPartsComponent

    ],
    imports: [ BrowserModule ], //load required dependencies to auch our app in the browser
    // indicate the compenent who loads first
    bootstrap: [ AppComponent ]

})
class AppModule { 

}


platformBrowserDynamic()
    .bootstrapModule(AppModule);
