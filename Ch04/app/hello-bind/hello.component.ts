import { Component } from '@angular/core';

@Component({
    selector: 'my-component',
    template: `
       <input [(ngModel)]="name" #ctrl="ngModel" required>

    <p>Value: {{ name }}</p>
    <p>Valid: {{ ctrl.valid }}</p>

    <button (click)="setValue()">Set value</button>

    `,
    styles: [`input,textarea{margin-top:20px;display:bloxk;}`]
})
export class MyComponent {
    title: string = 'Hello Component!'    
    
    setValue() { this.title = 'Nancy'; }
}