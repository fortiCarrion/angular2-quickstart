/* 
    Define uma classe, faz o import do decoretor e decora a classe como um componente
 */
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl:'app.component.html',
    
})
export class AppComponent {}