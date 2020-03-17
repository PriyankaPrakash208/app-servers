import { Component } from '@angular/core';

@Component({
    selector:'app-success',
    template:`
    <h3 class="green">Sucessfull!</h3>
    <app-warning></app-warning>
    `,
    styles:[`.green{
        padding:10px;
        color:green;
        border:1px solid green;
    }`]
})
export class successComponent{
 
}